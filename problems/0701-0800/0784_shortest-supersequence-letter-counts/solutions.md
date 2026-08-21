# Solutions — Shortest Supersequence Letter Counts

## Subset enumeration with a DAG realizability test

Every word has length two, and that caps a shortest supersequence at two
copies of any letter: a third copy sits between two others and could be
deleted while every `a…b` embedding survives. So a candidate is fully pinned
down by deciding, for each of the `m <= 16` distinct letters, whether it
appears once or twice. Letters named by a doubled word like `"bb"` have no
say — both copies are compulsory — and those bits land in a `forced` mask
every candidate must contain.

When is a given doubling pattern realizable? Doubled letters never obstruct:
one copy may sit early and one late, so any word touching one is embeddable.
The only tension is among letters appearing once each — a string holding one
copy of each of them embeds every word between two such letters exactly when
the directed graph of those words admits a topological order, that is, when
it is acyclic. Realizability therefore reduces to cycle detection (a DFS with
visiting/done colouring) on the word graph after the doubled letters are
deleted; self-loops were settled by the forced mask.

The sweep tries all `2^m` masks, discards those missing a forced bit or whose
induced graph cycles, prices each survivor at `m + popcount(mask)`, and writes
its 26-entry row (2 on masked letters, 1 elsewhere). Rows attaining the best
price are kept. Distinct masks on the same letter set cannot produce equal
rows, but a trailing sort-and-dedupe guards the boundary anyway.

On `["cd","dc"]`: no letter is forced, the empty doubling leaves the two-cycle
`c → d → c`, so at least one letter doubles; either choice kills the cycle by
removing that letter from the graph, giving the two rows `c:1, d:2` and
`c:2, d:1` at length 3. On `["bb","bd"]` the forced bit for `b` already
breaks the would-be tension, `d` stays single, and the two minimal strings
`"bbd"` and `"bdb"` collapse into one row. On `["ab","cd","ef"]` the graph is
three disjoint arcs, the empty mask realizes it, and the floor of six letters
is met.

Edge behaviour: letters with no words between them impose nothing (one row
answers); mutually reversed pairs each demand a doubling and yield two rows;
and when both orders of a pair coexist with doubled letters, the vectors
agree only letter-by-letter, so the dedupe merges genuinely equal rows and
nothing else.

**Complexity:** `O(2^m · (m + E))` time, `O(m + E)` working space, for `m <= 16`
distinct letters and `E <= 256` words.
