import { mkdirSync, writeFileSync } from "node:fs";

// Write only to /output/entry.txt — never to a relative path, so the
// program works in the grader's read-only sandbox. The entry is exactly
// this one line, with no trailing newline.
const line = "The optician congratulated me on the sight in my blind left eye.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
