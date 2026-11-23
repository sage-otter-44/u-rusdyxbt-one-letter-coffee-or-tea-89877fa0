import * as fs from "node:fs";

const LETTER = "A";

const OUT = "/output/entry.txt";
const DIR = OUT.slice(0, OUT.lastIndexOf("/"));

fs.mkdirSync(DIR, { recursive: true });
fs.writeFileSync(OUT, LETTER, "utf8");
console.log(`wrote ${OUT} (${LETTER.length} char)`);
