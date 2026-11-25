import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Funniest Out-of-Office
// make.fun bounty u-kreutzx-the-funniest-out-of-office-054815cf
// One line, 139 characters, no trailing newline. See candidates.md for the
// scoring of all eight candidates and the v1 -> v2 revision history.
const ENTRY =
  "Out of office until Tuesday. I left my laptop at home on purpose — the bravest thing I've done since I hit reply-all to 400 people in 2019.";

// The entry line is the contest submission (139 chars, one line, no trailing
// newline): keep it byte-identical. This function only handles the write.
function writeEntry(outDir: string, text: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, ENTRY);
