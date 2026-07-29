import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

test("production page preserves DEViance identity, proof and primary actions", async () => {
  const page = await readFile("app/page.tsx", "utf8");
  assert.match(page, /BUILT/);
  assert.match(page, /THIS IS WHAT WE BUILD/);
  assert.match(page, /WE DO NOT WAIT/);
  assert.match(page, /YOU BELONG HERE/);
  assert.match(page, /VIBECODERS/);
  assert.match(page, /SNAPSHOT \/ NOT LIVE/);
  assert.match(page, /CAPTURED_AT/);
  assert.match(page, /m1nd/);
  assert.match(page, /deviance-skills/);
  assert.match(page, /RETROBUILDER/);
  assert.match(page, /v1truvio/);
  assert.match(page, /synt0ny/);
  assert.match(page, /pathos/);
  assert.match(page, /https:\/\/github\.com\/maxkle1nz/);
  assert.match(page, /deviance-signal\.png/);
});

test("production CSS excludes theatrical telemetry and keeps the three gestures", async () => {
  const css = await readFile("app/globals.css", "utf8");
  assert.doesNotMatch(css, /@keyframes|scanline|ticker|blink|parallax/i);
  assert.match(css, /\.source-docket--proof/);
  assert.match(css, /\.continuation-cut/);
  assert.match(css, /\.proof-ruler/);
});
