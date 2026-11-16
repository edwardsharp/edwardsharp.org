import { spawn } from "node:child_process";
import { readdir, stat } from "node:fs/promises";
import { homedir } from "node:os";
import { basename, dirname, extname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { confirm, input, search, select } from "@inquirer/prompts";
import {
  createPrompt,
  isDownKey,
  isEnterKey,
  isTabKey,
  isUpKey,
  useKeypress,
  usePagination,
  usePrefix,
  useRef,
  useState,
} from "@inquirer/core";
import { locationKey, tagKey } from "../ts/feed-filters.ts";
import {
  createPost,
  DateInputError,
  expandPath,
  parsePostDate,
  readPostCatalog,
  type NewPost,
  type PostDate,
} from "./create-post.ts";
import { imageExtensions, titleSlug } from "./import-images.ts";
import { systemPicker } from "./system-picker.ts";

class PathInputError extends Error {}
type PathMode = "file" | "folder" | "package" | "save" | "new-folder";

async function checkPath(filename: string, mode: PathMode): Promise<void> {
  let info;
  try {
    info = await stat(filename);
  } catch (error) {
    if (!(error instanceof Error && "code" in error)) throw error;
    if (error.code !== "ENOENT")
      throw new PathInputError(`cannot access ${filename}: ${error.message}`);
    if (mode !== "save" && mode !== "new-folder")
      throw new PathInputError(`path does not exist: ${filename}`);
    try {
      if (!(await stat(dirname(filename))).isDirectory())
        throw new PathInputError(
          `parent is not a folder: ${dirname(filename)}`,
        );
    } catch (parentError) {
      if (parentError instanceof PathInputError) throw parentError;
      if (parentError instanceof Error && "code" in parentError)
        throw new PathInputError(
          `cannot access parent folder: ${dirname(filename)} (${parentError.message})`,
        );
      throw parentError;
    }
    return;
  }
  if (mode === "save")
    throw new PathInputError(
      `choose a new file; refusing to overwrite ${filename}`,
    );
  if (mode === "file" && !info.isFile())
    throw new PathInputError("choose a file");
  if (["folder", "package", "new-folder"].includes(mode) && !info.isDirectory())
    throw new PathInputError("choose a folder");
  if (mode === "new-folder" && (await readdir(filename)).length)
    throw new PathInputError("choose a new or empty output folder");
}

async function requestPath(
  root: string,
  message: string,
  mode: PathMode,
  optional = false,
): Promise<string | undefined> {
  for (;;) {
    const method = await select({
      message,
      choices: [
        {
          name: "system picker",
          value: "picker",
          disabled:
            process.platform !== "darwin"
              ? "macOS only; use a text path"
              : false,
        },
        { name: "type/paste a path", value: "text" },
        ...(optional ? [{ name: "skip", value: "skip" }] : []),
      ],
    });
    if (method === "skip") return undefined;
    let filename: string;
    if (method === "text") {
      const text = await input({
        message: `${message} path`,
        validate: async (value) => {
          if (!value.trim()) return "enter a path";
          try {
            await checkPath(expandPath(value, root), mode);
            return true;
          } catch (error) {
            if (error instanceof PathInputError) return error.message;
            throw error;
          }
        },
      });
      filename = expandPath(text, root);
    } else {
      const picker =
        mode === "save"
          ? "save"
          : mode === "folder" || mode === "new-folder"
            ? "folder"
            : "file";
      const paths = await systemPicker(
        picker,
        message,
        homedir(),
        mode === "save" ? "report.json" : "",
      );
      if (!paths) {
        console.log("picker cancelled");
        continue;
      }
      const chosen = paths[0];
      if (!chosen) throw new Error("picker returned no path");
      filename = chosen;
      if (mode === "new-folder") {
        const name = await input({
          message: "new folder name (blank uses the selected empty folder)",
          validate: (value) =>
            !value ||
            (value !== "." && value !== ".." && basename(value) === value) ||
            "enter a folder name, not a path",
        });
        if (name) filename = join(filename, name);
      }
    }
    try {
      await checkPath(filename, mode);
      return filename;
    } catch (error) {
      if (!(error instanceof PathInputError)) throw error;
      console.error(error.message);
    }
  }
}

async function requiredPath(
  root: string,
  message: string,
  mode: PathMode,
): Promise<string> {
  const filename = await requestPath(root, message, mode);
  if (!filename) throw new Error(`missing ${message}`);
  return filename;
}

async function suggestion(
  message: string,
  known: string[],
  key: (value: string) => string,
  optional: boolean,
  defaultValue?: string,
): Promise<string> {
  return search({
    message,
    ...(defaultValue ? { default: defaultValue } : {}),
    pageSize: 12,
    source(term) {
      const query = term?.trim() ?? "";
      const identity = key(query);
      const matches = known.filter(
        (value) =>
          !query ||
          value.toLowerCase().includes(query.toLowerCase()) ||
          (identity && key(value).includes(identity)),
      );
      return [
        ...(optional && !query ? [{ name: "done / skip", value: "" }] : []),
        ...matches.map((value) => ({ name: value, value })),
        ...(query && identity && !known.some((value) => key(value) === identity)
          ? [{ name: `use "${query}" (new)`, value: query }]
          : []),
        ...(optional && query ? [{ name: "skip / done", value: "" }] : []),
      ];
    },
    validate: (value) => optional || !!key(value) || "choose or enter a value",
  });
}

function tagChoices(known: string[], text: string) {
  const query = text.trim();
  const identity = tagKey(query);
  const exact = known.find((tag) => tagKey(tag) === identity);
  const done = { name: "done", value: "" };
  return [
    ...(query
      ? [{ name: exact ?? `add "${query}" (new)`, value: exact ?? query }]
      : [done]),
    ...known
      .filter(
        (tag) => (!query || tagKey(tag).includes(identity)) && tag !== exact,
      )
      .map((tag) => ({ name: tag, value: tag })),
    ...(query ? [done] : []),
  ];
}

const tagPrompt = createPrompt<string[], { known: string[] }>(
  (config, done) => {
    const current = useRef<{
      query: string;
      active: number;
      tags: string[];
      error: string;
    }>({ query: "", active: 0, tags: [], error: "" });
    const [view, setView] = useState(current.current);
    const [finished, setFinished] = useState(false);
    const prefix = usePrefix({
      status: finished ? "done" : "idle",
    });
    const choices = tagChoices(config.known, view.query);
    useKeypress((key, rl) => {
      const latest = current.current;
      const options = tagChoices(config.known, latest.query);
      const selected = options[latest.active];
      if (isEnterKey(key) && selected) {
        if (!selected.value) {
          setFinished(true);
          done(latest.tags);
          return;
        }
        const identity = tagKey(selected.value);
        if (!identity) {
          current.current = { ...latest, error: "enter a usable tag" };
          rl.write(latest.query);
        } else {
          const duplicate = latest.tags.some((tag) => tagKey(tag) === identity);
          current.current = {
            query: "",
            active: 0,
            tags: duplicate ? latest.tags : [...latest.tags, selected.value],
            error: duplicate ? "tag already selected" : "",
          };
          rl.clearLine(0);
        }
      } else if (isUpKey(key) || isDownKey(key)) {
        current.current = {
          ...latest,
          active: Math.max(
            0,
            Math.min(
              options.length - 1,
              latest.active + (isUpKey(key) ? -1 : 1),
            ),
          ),
        };
        rl.clearLine(0);
        rl.write(latest.query);
      } else if (isTabKey(key) && selected?.value) {
        rl.clearLine(0);
        rl.write(selected.value);
        current.current = {
          ...latest,
          query: selected.value,
          active: 0,
          error: "",
        };
      } else {
        current.current = { ...latest, query: rl.line, active: 0, error: "" };
      }
      setView(current.current);
    });
    const page = usePagination({
      items: choices,
      active: view.active,
      pageSize: 12,
      renderItem: ({ item, isActive }) =>
        `${isActive ? ">" : " "} ${item.name}`,
    });
    const message = `tags (${view.tags.join(", ") || "none"}; select done to finish)`;
    if (finished) return `${prefix} ${message}`;
    return [
      `${prefix} ${message} ${view.query}`,
      [view.error, page, "enter: add/select; tab: complete; up/down: navigate"]
        .filter(Boolean)
        .join("\n"),
    ];
  },
);

export async function requestTags(
  known: string[],
  context?: Parameters<typeof tagPrompt>[1],
): Promise<string[]> {
  return tagPrompt({ known }, context);
}

async function requestDate(timezone: string): Promise<PostDate> {
  let previous = "";
  const reference = new Date();
  for (;;) {
    const text = await input({
      message: `date (flexible; offset-free times use ${timezone})`,
      default: previous || "today",
      validate: (value) => {
        try {
          parsePostDate(value, reference, timezone);
          return true;
        } catch (error) {
          if (error instanceof DateInputError) return error.message;
          throw error;
        }
      },
    });
    previous = text;
    const date = parsePostDate(text, reference, timezone);
    console.log(
      `date: ${JSON.stringify(date.date)}\ndate_precision: ${JSON.stringify(date.precision)}`,
    );
    for (const note of date.notes) console.log(`note: ${note}`);
    if (date.precision === "second" || date.precision === "minute") {
      console.log(
        new Intl.DateTimeFormat("en", {
          dateStyle: "full",
          timeStyle: date.precision === "minute" ? "short" : "long",
          timeZone: timezone,
        }).format(new Date(date.date)),
      );
    }
    if (await confirm({ message: "use this date?", default: false }))
      return date;
  }
}

async function requestImages(root: string): Promise<NewPost["images"]> {
  const images: NewPost["images"] = [];
  for (;;) {
    const method = await select({
      message: `images (${images.length} selected; first is the preview)`,
      choices: [
        {
          name: "system picker (select one or more)",
          value: "picker",
          disabled: process.platform !== "darwin" ? "macOS only" : false,
        },
        { name: "type/paste an image path", value: "text" },
        { name: "done", value: "done" },
      ],
    });
    if (method === "done") return images;
    let files: string[];
    if (method === "picker") {
      const chosen = await systemPicker(
        "files",
        "choose images",
        homedir(),
        "",
        true,
      );
      if (!chosen) {
        console.log("picker cancelled");
        continue;
      }
      files = chosen;
    } else {
      files = [expandPath(await input({ message: "image path" }), root)];
    }
    for (const filename of files) {
      if (!imageExtensions.has(extname(filename).toLowerCase())) {
        console.error(`image not added: unsupported image ${filename}`);
        continue;
      }
      try {
        await checkPath(filename, "file");
      } catch (error) {
        if (!(error instanceof PathInputError)) throw error;
        console.error(`image not added: ${error.message}`);
        continue;
      }
      const alt = await input({
        message: `alt text: ${basename(filename)} (blank for decorative)`,
      });
      images.push({ filename, alt });
    }
  }
}

export async function newPost(root: string): Promise<string | undefined> {
  const catalog = await readPostCatalog(root);
  const kind = await suggestion(
    "kind (type to search or add)",
    catalog.kinds,
    (value) => value.trim().toLowerCase(),
    false,
    "entry",
  );
  const date = await requestDate(catalog.timezone);
  const title = await input({
    message: "name / title",
    validate: (value) => {
      try {
        titleSlug(value);
        return true;
      } catch (error) {
        if (error instanceof Error) return error.message;
        throw error;
      }
    },
  });
  const tags = await requestTags(catalog.tags);
  const location = await suggestion(
    "location_name (optional; search/add or skip)",
    catalog.locations,
    locationKey,
    true,
  );
  const images = await requestImages(root);
  const post: NewPost = {
    title,
    kind,
    date,
    tags,
    images,
    ...(location ? { location_name: location } : {}),
  };
  console.log(
    JSON.stringify(
      {
        title,
        kind,
        date: date.date,
        date_precision: date.precision,
        tags,
        location_name: location || undefined,
        images: images.map(({ filename, alt }) => ({ filename, alt })),
        preview: images[0]?.filename,
      },
      null,
      2,
    ),
  );
  if (
    !(await confirm({
      message: "write this post and copy/strip its images?",
      default: false,
    }))
  ) {
    console.log("not written");
    return undefined;
  }
  const filename = await createPost(root, post);
  console.log(`created ${filename}`);
  return filename;
}

async function folderSets(directory: string): Promise<string[]> {
  const children = (await readdir(directory, { withFileTypes: true })).filter(
    (entry) => entry.isDirectory() && !entry.name.startsWith("."),
  );
  const chosen: string[] = [];
  for (;;) {
    const name = await select({
      message: "explicit photoset folders (optional)",
      choices: [
        { name: "done", value: "" },
        ...children
          .filter((entry) => !chosen.includes(entry.name))
          .map((entry) => ({ name: entry.name, value: entry.name })),
      ],
    });
    if (!name) return chosen;
    chosen.push(name);
  }
}

export async function utilityArguments(
  action: string,
  root: string,
): Promise<string[]> {
  const args: string[] = [];
  switch (action) {
    case "import:social":
      args.push(
        await requiredPath(root, "social capture JSON", "file"),
        await requiredPath(root, "new report file", "save"),
      );
      break;
    case "import:images":
    case "import:photos": {
      const directory = await requiredPath(
        root,
        "image export folder",
        "folder",
      );
      args.push(directory);
      for (const name of await folderSets(directory))
        args.push("--photoset", name);
      if (action === "import:photos") {
        const library = await requestPath(
          root,
          "Photos library (optional; default is last-opened library)",
          "package",
          true,
        );
        if (library) args.push("--library", library);
      } else {
        args.push(
          "--date-source",
          await select({
            message: "image dates",
            choices: [
              { name: "EXIF capture dates", value: "exif" },
              { name: "filename / creation dates", value: "created" },
            ],
          }),
        );
        if (await confirm({ message: "include videos?", default: false }))
          args.push("--videos");
        if (
          await confirm({
            message: "publish raw GPS coordinates? (public front matter)",
            default: false,
          })
        )
          args.push("--location");
      }
      if (await confirm({ message: "dry run?", default: true }))
        args.push("--dry-run");
      break;
    }
    case "export:notes": {
      let output = await requiredPath(
        root,
        "new/empty private output folder",
        "new-folder",
      );
      while (
        output === resolve(root) ||
        output.startsWith(`${resolve(root)}${sep}`)
      ) {
        console.error("Notes exports must be outside this repository");
        output = await requiredPath(
          root,
          "private output folder outside this repository",
          "new-folder",
        );
      }
      args.push(output);
      const since = await input({
        message: "since date (optional: YYYY, YYYY-MM, YYYY-MM-DD)",
        validate: (value) => {
          if (!value) return true;
          if (!/^\d{4}(?:-\d{2}(?:-\d{2})?)?$/.test(value))
            return "use YYYY, YYYY-MM, or YYYY-MM-DD";
          try {
            parsePostDate(value, new Date(), "UTC");
            return true;
          } catch (error) {
            if (error instanceof DateInputError) return error.message;
            throw error;
          }
        },
      });
      if (since) {
        args.push(
          "--since",
          since,
          "--since-field",
          await select({
            message: "filter using",
            choices: [
              { name: "creation date", value: "created" },
              { name: "modified date", value: "modified" },
            ],
          }),
        );
      }
      if (
        await confirm({
          message: "read Notes tags? (requires Full Disk Access)",
          default: false,
        })
      )
        args.push("--tags");
      if (
        await confirm({
          message: "reuse an existing raw Notes export?",
          default: false,
        })
      ) {
        args.push(
          "--from-export",
          await requiredPath(
            root,
            "raw export folder containing manifest.json",
            "folder",
          ),
        );
        args.push(
          "--notes-db",
          await requiredPath(root, "matching NoteStore.sqlite", "file"),
        );
      } else {
        const exporter = await requestPath(
          root,
          "custom notes-exporter script (optional)",
          "file",
          true,
        );
        if (exporter) args.push("--exporter", exporter);
        const database = await requestPath(
          root,
          "custom NoteStore.sqlite (optional)",
          "file",
          true,
        );
        if (database) args.push("--notes-db", database);
      }
      break;
    }
    case "convert:webp":
    case "update:dates":
      if (await confirm({ message: "dry run?", default: true }))
        args.push("--dry-run");
      break;
    default:
      throw new Error(`unknown utility: ${action}`);
  }
  return args;
}

async function runUtility(root: string, action: string): Promise<void> {
  const args = await utilityArguments(action, root);
  console.log(
    ["npm", "run", action, "--", ...args]
      .map((value) => JSON.stringify(value))
      .join(" "),
  );
  if (!(await confirm({ message: "run this utility?", default: false }))) {
    console.log("not run");
    return;
  }
  await new Promise<void>((done, reject) => {
    const child = spawn("npm", ["run", action, "--", ...args], {
      cwd: root,
      stdio: "inherit",
    });
    child.once("error", reject);
    child.once("exit", (code, signal) => {
      if (code === 0) done();
      else
        reject(
          new Error(
            `${action} stopped with ${signal ? `signal ${signal}` : `exit code ${code}`}`,
          ),
        );
    });
  });
}

export async function runTui(root: string, postOnly = false): Promise<void> {
  if (postOnly) {
    await newPost(root);
    return;
  }
  for (;;) {
    const action = await select({
      message: "utilz",
      choices: [
        { name: "new post", value: "post" },
        { name: "import Photos exports", value: "import:photos" },
        { name: "import images / videos", value: "import:images" },
        { name: "export Apple Notes", value: "export:notes" },
        { name: "import normalized social records", value: "import:social" },
        { name: "convert media images to webp", value: "convert:webp" },
        { name: "repair changed post dates", value: "update:dates" },
        { name: "exit", value: "exit" },
      ],
    });
    if (action === "exit") return;
    if (action === "post") await newPost(root);
    else await runUtility(root, action);
  }
}

if (import.meta.main) {
  try {
    const args = process.argv.slice(2);
    if (args.length === 1 && args[0] === "--help") {
      console.log(
        "make: interactive utilz menu\nmake post: new post\nsystem pickers on macOS, or type paths; nothing is written without confirmation",
      );
    } else {
      if (args.length > 1 || (args.length === 1 && args[0] !== "post"))
        throw new Error("usage: npm run utilz -- [post]");
      await runTui(
        fileURLToPath(new URL("../../", import.meta.url)),
        args[0] === "post",
      );
    }
  } catch (error) {
    if (error instanceof Error && error.name === "ExitPromptError") {
      console.error("cancelled");
      process.exitCode = 130;
    } else {
      console.error(
        `utilz failed: ${error instanceof Error ? error.message : String(error)}`,
      );
      process.exitCode = 1;
    }
  }
}
