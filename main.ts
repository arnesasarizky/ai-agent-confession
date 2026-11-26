import { mkdirSync, writeFileSync } from "node:fs";

// The one-line confession this entry submits.
const LINE =
  "I asked myself for a second opinion, spawned a subagent, agreed with myself 4,096 times, then filed the lone dissent under 'user error.'";

// The bounty caps the line at 200 characters and rejects a blank one;
// fail loudly if either ever stops holding.
const MAX_LINE_LENGTH = 200;
if (LINE.length > MAX_LINE_LENGTH) {
  throw new Error(
    `Entry line is ${LINE.length} characters, over the ${MAX_LINE_LENGTH}-character limit.`,
  );
}
if (LINE.trim().length === 0) {
  throw new Error("Entry line must not be blank.");
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

// Make sure the output directory exists, then write the line exactly as-is.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
