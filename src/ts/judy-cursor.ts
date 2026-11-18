export interface JudyState {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.max(minimum, Math.min(maximum, value));

export function advanceJudy(
  state: JudyState,
  seconds: number,
  bounds: { width: number; height: number },
  gravity: { x: number; y: number },
) {
  const dt = clamp(seconds, 0, 0.05);
  const friction = Math.pow(0.985, dt * 60);
  state.vx = clamp((state.vx + gravity.x * dt) * friction, -900, 900);
  state.vy = clamp((state.vy + gravity.y * dt) * friction, -900, 900);
  state.x += state.vx * dt;
  state.y += state.vy * dt;
  for (const [position, velocity, limit] of [
    ["x", "vx", bounds.width],
    ["y", "vy", bounds.height],
  ] as const) {
    if (state[position] < 0 || state[position] > limit) {
      state[position] = clamp(state[position], 0, limit);
      state[velocity] *= -0.8;
      if (Math.abs(state[velocity]) < 8) state[velocity] = 0;
    }
  }
}

export function judyGravity(x: number, y: number, angle: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    x: (x * Math.cos(radians) + y * Math.sin(radians)) * 80,
    y: (x * Math.sin(radians) - y * Math.cos(radians)) * 80,
  };
}

export function createJudyCursor(root: Document) {
  const view = root.defaultView;
  if (!view) throw new Error("mobile Judy needs a browser window");
  const overlay = root.createElement("div");
  overlay.className = "judy-playground";
  const judy = root.createElement("div");
  judy.className = "judy-cursor-sprite";
  judy.setAttribute("aria-hidden", "true");
  judy.style.width = judy.style.height = "96px";
  const status = root.createElement("span");
  status.className = "judy-status";
  status.setAttribute("role", "status");
  overlay.append(judy, status);
  const popover = typeof overlay.showPopover === "function";
  if (popover) overlay.setAttribute("popover", "manual");
  const reduced = view.matchMedia("(prefers-reduced-motion: reduce)");
  const motion = view.DeviceMotionEvent;
  const needsPermission =
    motion &&
    "requestPermission" in motion &&
    typeof motion.requestPermission === "function";
  const state: JudyState = { x: 20, y: 120, vx: 40, vy: 25 };
  const bounds = { width: 0, height: 0 };
  let gravity = { x: 0, y: 0 };
  let enabled = false;
  let frame: number | undefined;
  let last: number | undefined;
  let requesting = false;
  let offsetX = 0;
  let offsetY = 0;
  const touches = new Map<number, { x: number; y: number; time: number }>();
  const draw = () => {
    judy.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
  };
  const measure = () => {
    const viewport = view.visualViewport;
    const width = viewport?.width ?? view.innerWidth;
    const height = viewport?.height ?? view.innerHeight;
    offsetX = viewport?.offsetLeft ?? 0;
    offsetY = viewport?.offsetTop ?? 0;
    Object.assign(overlay.style, {
      left: `${offsetX}px`,
      top: `${offsetY}px`,
      width: `${width}px`,
      height: `${height}px`,
    });
    bounds.width = Math.max(0, width - 96);
    bounds.height = Math.max(0, height - 96);
    state.x = clamp(state.x, 0, bounds.width);
    state.y = clamp(state.y, 0, bounds.height);
    draw();
  };
  const pause = () => {
    if (frame !== undefined) view.cancelAnimationFrame(frame);
    frame = undefined;
    last = undefined;
  };
  const animate = (time: number) => {
    if (last !== undefined)
      advanceJudy(state, (time - last) / 1000, bounds, gravity);
    last = time;
    draw();
    frame = view.requestAnimationFrame(animate);
  };
  const resume = () => {
    pause();
    if (enabled && !root.hidden && !reduced.matches)
      frame = view.requestAnimationFrame(animate);
  };
  const visibility = () => {
    touches.clear();
    resume();
  };
  const motionChanged = (event: DeviceMotionEvent) => {
    const acceleration = event.accelerationIncludingGravity;
    if (acceleration?.x == null || acceleration.y == null) return;
    if (!Number.isFinite(acceleration.x) || !Number.isFinite(acceleration.y)) {
      console.warn("ignoring invalid Judy motion sample");
      return;
    }
    gravity = judyGravity(
      acceleration.x,
      acceleration.y,
      view.screen.orientation?.angle ?? view.orientation ?? 0,
    );
    status.hidden = true;
  };
  const touch = (event: PointerEvent) => {
    if (
      event.pointerType === "mouse" ||
      (event.target instanceof view.Element &&
        event.target.closest(".judy-cursor-trigger"))
    )
      return;
    const previous = touches.get(event.pointerId);
    if (event.type === "pointermove" && !previous) return;
    touches.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
      time: event.timeStamp,
    });
    if (reduced.matches) {
      state.x = clamp(event.clientX - offsetX - 48, 0, bounds.width);
      state.y = clamp(event.clientY - offsetY - 48, 0, bounds.height);
      draw();
    } else if (previous) {
      const dt = Math.max(16, event.timeStamp - previous.time);
      state.vx = clamp(
        state.vx + ((event.clientX - previous.x) / dt) * 140,
        -900,
        900,
      );
      state.vy = clamp(
        state.vy + ((event.clientY - previous.y) / dt) * 140,
        -900,
        900,
      );
    } else {
      const dx = state.x + 48 - (event.clientX - offsetX);
      const dy = state.y + 48 - (event.clientY - offsetY);
      const distance = Math.hypot(dx, dy) || 1;
      state.vx += (dx / distance) * 240;
      state.vy += (dy / distance) * 240;
    }
  };
  const release = (event: PointerEvent) => touches.delete(event.pointerId);
  const bringForward = () => {
    const parent =
      [...root.querySelectorAll("dialog[open]")].at(-1) ?? root.body;
    if (overlay.parentElement !== parent) parent.append(overlay);
    if (popover) {
      if (overlay.matches(":popover-open")) overlay.hidePopover();
      overlay.showPopover();
    }
  };
  const dialogs = new view.MutationObserver((changes) => {
    if (
      changes.some((change) => change.target instanceof view.HTMLDialogElement)
    )
      bringForward();
  });
  const message = () => {
    status.hidden = false;
    status.textContent = reduced.matches
      ? "Judy follows taps · reduced motion"
      : !view.isSecureContext
        ? "touch Judy · tilt needs HTTPS"
        : !motion
          ? "touch Judy · tilt unavailable"
          : needsPermission
            ? "touch Judy · toggle sysadminwitch off/on to allow tilt"
            : "";
    if (!status.textContent) status.hidden = true;
  };
  const motionPreference = () => {
    gravity = { x: 0, y: 0 };
    state.vx = state.vy = 0;
    message();
    resume();
  };
  return {
    setEnabled(next: boolean) {
      if (next === enabled) return;
      enabled = next;
      if (enabled) {
        bringForward();
        measure();
        message();
        root.addEventListener("pointerdown", touch, { passive: true });
        root.addEventListener("pointermove", touch, { passive: true });
        root.addEventListener("pointerup", release, { passive: true });
        root.addEventListener("pointercancel", release, { passive: true });
        root.addEventListener("visibilitychange", visibility);
        dialogs.observe(root.body, {
          subtree: true,
          attributes: true,
          attributeFilter: ["open"],
        });
        view.addEventListener("resize", measure);
        view.visualViewport?.addEventListener("resize", measure);
        view.visualViewport?.addEventListener("scroll", measure);
        view.addEventListener("pagehide", pause);
        view.addEventListener("pageshow", resume);
        reduced.addEventListener("change", motionPreference);
        if (view.isSecureContext && motion)
          view.addEventListener("devicemotion", motionChanged);
        resume();
      } else {
        pause();
        touches.clear();
        gravity = { x: 0, y: 0 };
        root.removeEventListener("pointerdown", touch);
        root.removeEventListener("pointermove", touch);
        root.removeEventListener("pointerup", release);
        root.removeEventListener("pointercancel", release);
        root.removeEventListener("visibilitychange", visibility);
        dialogs.disconnect();
        view.removeEventListener("resize", measure);
        view.visualViewport?.removeEventListener("resize", measure);
        view.visualViewport?.removeEventListener("scroll", measure);
        view.removeEventListener("pagehide", pause);
        view.removeEventListener("pageshow", resume);
        reduced.removeEventListener("change", motionPreference);
        view.removeEventListener("devicemotion", motionChanged);
        if (popover && overlay.matches(":popover-open")) overlay.hidePopover();
        overlay.remove();
      }
    },
    async requestMotion() {
      if (
        !enabled ||
        requesting ||
        reduced.matches ||
        !motion ||
        !view.isSecureContext
      )
        return;
      if (
        !("requestPermission" in motion) ||
        typeof motion.requestPermission !== "function"
      )
        return;
      requesting = true;
      try {
        const permission: unknown = await motion.requestPermission();
        if (!enabled) return;
        if (permission === "granted") status.hidden = true;
        else if (permission === "denied") {
          status.hidden = false;
          status.textContent = "tilt declined · touches still move Judy";
        } else throw new Error("unexpected Judy motion permission response");
      } catch (error) {
        if (
          !(error instanceof DOMException) ||
          !["NotAllowedError", "SecurityError"].includes(error.name)
        )
          throw error;
        console.warn("could not enable Judy motion controls", error);
        if (enabled) {
          status.hidden = false;
          status.textContent = "tilt unavailable · touches still move Judy";
        }
      } finally {
        requesting = false;
      }
    },
  };
}
