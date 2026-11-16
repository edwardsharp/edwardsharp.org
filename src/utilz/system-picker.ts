import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execute = promisify(execFile);
const script = `
function run(argv) {
  const options = JSON.parse(argv[0]);
  const app = Application.currentApplication();
  app.includeStandardAdditions = true;
  const config = { withPrompt: options.title, defaultLocation: Path(options.directory) };
  let paths;
  if (options.mode === "folder") paths = [app.chooseFolder(config)];
  else if (options.mode === "save") paths = [app.chooseFileName(Object.assign(config, { defaultName: options.name }))];
  else {
    if (options.images) config.ofType = ["public.image"];
    config.multipleSelectionsAllowed = options.mode === "files";
    const selected = app.chooseFile(config);
    paths = options.mode === "files" ? selected : [selected];
  }
  return JSON.stringify(paths.map(path => path.toString()));
}`;

export async function systemPicker(
  mode: "file" | "files" | "folder" | "save",
  title: string,
  directory: string,
  name = "",
  images = false,
): Promise<string[] | null> {
  if (process.platform !== "darwin")
    throw new Error(
      "system pickers currently require macOS; use text paths on this platform",
    );
  let output: string;
  try {
    const result = await execute("osascript", [
      "-l",
      "JavaScript",
      "-e",
      script,
      JSON.stringify({ mode, title, directory, name, images }),
    ]);
    output = result.stdout;
  } catch (error) {
    if (
      error instanceof Error &&
      "stderr" in error &&
      typeof error.stderr === "string" &&
      /\(-128\)/.test(error.stderr)
    )
      return null;
    throw error;
  }
  const paths: unknown = JSON.parse(output);
  if (
    !Array.isArray(paths) ||
    !paths.length ||
    !paths.every(
      (path: unknown) => typeof path === "string" && path.startsWith("/"),
    )
  )
    throw new Error("system picker returned invalid file paths");
  return paths;
}
