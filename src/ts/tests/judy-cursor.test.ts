import assert from "node:assert/strict";
import test from "node:test";
import { parseHTML } from "linkedom";
import { advanceJudy, createJudyCursor, judyGravity } from "../judy-cursor.ts";

test("Judy carries momentum with friction and screen-oriented gravity", () => {
  const state = { x: 100, y: 100, vx: 240, vy: 0 };
  advanceJudy(state, 1 / 60, { width: 300, height: 500 }, { x: 0, y: 600 });
  assert.ok(state.x > 100 && state.x < 105);
  assert.ok(state.vx > 0 && state.vx < 240);
  assert.ok(state.y > 100 && state.vy > 0);
  const portrait = judyGravity(1, -2, 0);
  const landscape = judyGravity(1, -2, 90);
  assert.equal(portrait.x, 80);
  assert.equal(portrait.y, 160);
  assert.ok(Math.abs(landscape.x + 160) < 0.001);
  assert.ok(Math.abs(landscape.y - 80) < 0.001);
});

test("Judy crosses browser-bar bounds without requesting permission on restore or touch", async (t) => {
  const { document, window } = parseHTML("<html><body></body></html>");
  let permission = "granted";
  let reduced = false;
  const request = t.mock.fn(async () => permission);
  const properties: Record<string, unknown> = {
    matchMedia: () => ({
      get matches() {
        return reduced;
      },
      addEventListener() {},
      removeEventListener() {},
    }),
    DeviceMotionEvent: { requestPermission: request },
    isSecureContext: true,
    innerWidth: 390,
    innerHeight: 844,
    outerHeight: 844,
    screen: { height: 844 },
    scrollX: 0,
    scrollY: 0,
    requestAnimationFrame: () => 1,
    cancelAnimationFrame() {},
  };
  const previous = new Map(
    Object.keys(properties).map((name) => [
      name,
      Object.getOwnPropertyDescriptor(window, name),
    ]),
  );
  for (const [name, value] of Object.entries(properties))
    Object.defineProperty(window, name, { value, configurable: true });
  const judy = createJudyCursor(document);
  t.after(() => {
    judy.setEnabled(false);
    for (const [name, descriptor] of previous) {
      if (descriptor) Object.defineProperty(window, name, descriptor);
      else Reflect.deleteProperty(window, name);
    }
  });
  judy.setEnabled(true);
  assert.ok(document.querySelector(".judy-cursor-sprite"));
  const overlay = document.querySelector<HTMLElement>(".judy-playground")!;
  assert.equal(overlay.hasAttribute("popover"), false);
  assert.equal(overlay.style.top, "40px");
  Object.defineProperty(window, "scrollY", { value: 300, configurable: true });
  window.dispatchEvent(new window.Event("scroll"));
  assert.equal(overlay.style.top, "340px");
  assert.equal(request.mock.callCount(), 0);
  const touch = new window.Event("pointerdown", {
    bubbles: true,
    cancelable: true,
  });
  Object.defineProperties(touch, {
    pointerType: { value: "touch" },
    pointerId: { value: 1 },
    clientX: { value: 100 },
    clientY: { value: 100 },
  });
  document.body.dispatchEvent(touch);
  document.dispatchEvent(new window.Event("visibilitychange"));
  assert.equal(touch.defaultPrevented, false);
  assert.equal(request.mock.callCount(), 0);
  Object.defineProperties(window, {
    innerWidth: { value: 393, configurable: true },
    innerHeight: { value: 695, configurable: true },
    outerHeight: { value: 852, configurable: true },
    screen: { value: { height: 852 }, configurable: true },
  });
  reduced = true;
  window.dispatchEvent(new window.Event("resize"));
  const sprite = document.querySelector(".judy-cursor-sprite")!;
  const spriteTop = () => {
    return (
      Number.parseFloat(overlay.style.top) +
      Number(sprite.getAttribute("y")) -
      window.scrollY
    );
  };
  const moveTo = (clientY: number) => {
    const event = new window.Event("pointerdown", {
      bubbles: true,
      cancelable: true,
    });
    Object.defineProperties(event, {
      pointerType: { value: "touch" },
      pointerId: { value: 2 },
      clientX: { value: 150 },
      clientY: { value: clientY },
    });
    document.body.dispatchEvent(event);
    assert.equal(event.defaultPrevented, false);
  };
  moveTo(-1000);
  assert.equal(spriteTop(), -56);
  moveTo(2000);
  assert.equal(spriteTop() + 96, 812);
  assert.equal(request.mock.callCount(), 0);
  reduced = false;
  for (const name of ["innerWidth", "innerHeight", "outerHeight", "screen"])
    Object.defineProperty(window, name, {
      value: properties[name],
      configurable: true,
    });
  window.dispatchEvent(new window.Event("resize"));
  await judy.requestMotion();
  assert.equal(request.mock.callCount(), 1);
  assert.deepEqual(
    [...overlay.children].map((element) => element.localName),
    ["svg"],
  );
  assert.equal(document.querySelector(".judy-status"), null);
  judy.setEnabled(false);
  assert.equal(document.querySelector(".judy-playground"), null);
  Object.defineProperty(window, "scrollY", { value: 600, configurable: true });
  window.dispatchEvent(new window.Event("scroll"));
  assert.equal(overlay.style.top, "340px");
  judy.setEnabled(true);
  assert.equal(request.mock.callCount(), 1);
  permission = "denied";
  await judy.requestMotion();
  assert.equal(document.querySelector(".judy-status"), null);
  assert.deepEqual(
    [...overlay.children].map((element) => element.localName),
    ["svg"],
  );
  assert.ok(document.querySelector(".judy-cursor-sprite"));
});

test("Judy bounces off both edges without leaving the screen or jumping after a paused frame", () => {
  const state = { x: 299, y: 1, vx: 700, vy: -700 };
  advanceJudy(state, 5, { width: 300, height: 500 }, { x: 0, y: 0 });
  assert.equal(state.x, 300);
  assert.equal(state.y, 0);
  assert.ok(state.vx < 0);
  assert.ok(state.vy > 0);
  assert.ok(Math.abs(state.vx) < 700);
  for (let frame = 0; frame < 600; frame++) {
    advanceJudy(
      state,
      1 / 60,
      { width: 300, height: 500 },
      { x: -300, y: 600 },
    );
    assert.ok(state.x >= 0 && state.x <= 300);
    assert.ok(state.y >= 0 && state.y <= 500);
  }
  const paused = { x: 100, y: 100, vx: 100, vy: 100 };
  advanceJudy(paused, 30, { width: 300, height: 500 }, { x: 0, y: 0 });
  assert.ok(paused.x < 106 && paused.y < 106);
});
