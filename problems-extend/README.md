# problems-extend — the crawled-original LeetCode corpus

The remainder of the lc-crawl corpus beyond bettercode's curated good-value
set: 3,180 problems (of 4,018 crawled; the 838 good-value originals live in
`problems-bettercode` and are adapted into `problems-adapt`). Shards
0001-0100 through 4001-4100. The set is complete: 3,177 bundles on disk,
and the only unfinished work is the 16 entries of
`ROSTER-unfinished.json` — 195 (blocked: the answer is a shell one-liner
and the judge has no shell language), 3011 (authorable, never assigned),
and 14 premium-tier problems never curated into bettercode.

`ROSTER-unfinished.json` is the sole roster record. It supersedes the
deleted `ROSTER.json` and the six-fleet wave trackers (all 1,260 tracked
entries finished 2026-08-27; the 42 judge-contract blocked unblocks
landed in the 2026-08-28 wave). Corpus contradictions and deferred
content decisions live in `CORPUS-FLAGS.md`.

Each bundle mirrors the `problems-bettercode` original-bundle shape in
FULL — content-identical conventions, including the minimal
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
dedicated pass; the crawl's raw LeetCode labels (Medium 1,673 / Easy 937
/ Hard 570 across the set) are the reference input for that pass only.

694 problems carry LeetCode's premium flag; all are authored except the
14 premium entries in `ROSTER-unfinished.json` (never curated; one has
an image-only crawled statement).
