// One-line office joke for make.fun u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.
// Writes a single joke line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Node 22, standard library only.
//
// Run it:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const joke =
  "My boss calls everything a 'growth opportunity': the pay freeze, the weekend shifts, and the office plant — which has grown exactly as much as my salary has.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), joke, 'utf8');
console.log(`entry.txt written: ${joke.length} characters`);
