import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The doorbell rang at 3:07 a.m.; I opened it, and my daughter—who has been " +
  "missing since Tuesday—said, 'Don't let me in.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
