// Famous Last Words at 1 Percent — make.fun bounty entry.
// The program writes the phone's last words, one line, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LAST_WORDS =
  "I survived four hundred drops, one toilet, and your toddler — but one percent is what kills me. Delete my browser history.";

// The gate only accepts 1–199 characters of non-blank UTF-8 text, so
// refuse to write anything outside that range instead of submitting junk.
const length = [...LAST_WORDS].length;
if (length < 1 || length > 199 || LAST_WORDS.trim().length === 0) {
  throw new Error(`entry is ${length} characters; the gate needs 1-199`);
}
if (LAST_WORDS.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LAST_WORDS, "utf8");
console.log(`Wrote ${length} characters to /output/entry.txt`);
