# problems-extend — the non-curated LeetCode originals

The remainder of the lc-crawl corpus beyond bettercode's curated good-value
set: 3,180 problems (of 4,018 crawled; the 838 good-value originals live in
`problems-bettercode` and are adapted into `problems-adapt`). Shards
0001-0100 through 4001-4100.

`ROSTER.json` is the working manifest: every problem keyed by shard with
id, slug, title, LeetCode difficulty, topics, premium flag, statement
presence, and a status field (`pending` -> `done` as shards complete).
Waves are authored shard-by-shard on demand.

Each completed entry mirrors the `problems-bettercode` original-bundle
shape in FULL — content-identical conventions, including the minimal
`solutions.md` (a `# Solutions — <Title>` heading plus ONE plain approach
section and its complexity line; none of the adapt set's tutorial
structure). ORIGINAL form: original title/slug/id (no
renumbering, no rewritten statements), with
solution code in the ORIGINAL style conventions, Python included:
legacy typing (`from typing import List`), matching the archived
originals. The adapted (copyright-free) pipeline of CLAUDE.md does NOT
apply here; this set keeps the crawled text as-is.

HARDNESS IS UNSET: bettercode re-evaluated hardness on its own 5-level
scheme, lc-crawl carries only LeetCode's label — neither is ours. Every
bundle ships difficulty "" and the bank evaluates hardness in a later
dedicated pass; the roster's difficulty field is the raw LeetCode crawl
value, kept as reference input for that pass only.

Crawled LeetCode labels for reference: Medium 1,673 / Easy 937 / Hard 570.
694 problems are LeetCode-premium-flagged (roster carries the flag; their
crawled statements are complete).
