// Pigeon Pitch, One Line — make.fun bounty
// u-donrulezz-pigeon-pitch-one-line-af06c6cf
//
// Writes a single line of pitch (1-200 characters) to /output/entry.txt:
// the elevator pitch a city pigeon gives investors for its startup.
// Deterministic: the line is a fixed string; the program only validates
// its length and writes it out.
//
// Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

const LINE =
  "We're pre-seed — literally. My startup turns every dropped crumb in this city into recurring revenue, and churn is zero: we're homing pigeons, we always come back.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (!LINE.endsWith(".")) {
  throw new Error("entry must be a single sentence");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`wrote ${chars} chars to ${join(OUTPUT_DIR, "entry.txt")}`);
console.log(LINE);
