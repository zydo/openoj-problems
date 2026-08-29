# Corpus flags — deferred decisions on judge data and statement wording

Written 2026-08-23, after the multi-solution variant wave (54 bundles,
commit 05ec87bc) and the reference_solution contract (8490afb8) landed.
Each item below is a place where committed judge data or statement prose
contradicts something the wave proved. None is fixed because each requires
an authored-content decision (frozen cases.json / statement wording), not
a code change. Resolve top-down; tick the log at the bottom.

Entries 1–4 concern problems whose LeetCode originals are archived in
problems-bettercode and whose adapted bundles live in problems-adapt.
Every entry from 5 on concerns the problems-extend set, which keeps the
crawled originals as-is under ORIGINAL form. The two tracks are separate
corpora: resolve each entry against its own tree, and never port a
decision, wording, or wire pin from one track to the other.

**Entries 5–11 are RESOLVED (2026-08-28)**: the judge-contract
extensions they demanded shipped in the 2026-08-26→28 infra wave, and
every bundle they name has landed and verified green (probe exemplars
under `openoj/.localonly/probank/9000-9099/`; wire law in
`openoj/docs/CODECS.md`). They stay as the historical evidence trail.
Entries 1–4 and 12 remain open authored-content decisions.

----------------------------------------------------------------------

## 1. 0432_rebalance-a-bst — the DSW variant is impossible under exact-shape pinning

**State**: no variant shipped; the bundle is single-solution. Deliberately
not worked around.

**What happened**: the curation pool proposed Day-Stout-Warren rotation
rebalancing as the second solution. The authoring agent proved it cannot
pass this bundle as judged, and correctly wrote nothing.

**Evidence** (full analysis preserved at `scripts/dsw_shape_study.py`):
- `problem.json` sets `comparison: "exact"`; each case in `cases.json`
  pins one expected tree, and every expected is exactly the shipped
  solution's in-order-flatten + `(lo+hi)//2` midpoint-rebuild output.
  The statement's "any balanced tree is acceptable" is not honored by
  the machine — only the reference's specific shape is.
- Both published DSW orientations were implemented and compared against
  the pinned shapes for all n ≤ 64: standard DSW (ascending vine + left
  rotations) mismatches case sizes {4, 8, 9} — 4 and 8 are PUBLIC cases
  (DSW roots the 3rd value; the expected roots the 2nd); mirror DSW
  mismatches only {9}, the hidden case
  `[7,3,9,1,5,8,10,null,null,4,6]` (expected roots 6; mirror DSW roots
  5; standard roots 7 — all three are height-balanced BSTs on the same
  values).
- Structural proof of impossibility: DSW's first compress round demotes
  an every-second (stride-2) run of vine nodes, which become the deepest
  leaves. The expected tree's deepest leaves for n=9 sit at in-order
  positions 3 and 8 — stride 5 — unreachable by any start-parity or
  orientation combination of every-second compress rounds. The mismatch
  is inherent to the algorithm family, not a coding slip.

**Options**:
- (a) Leave 0432 variant-less. Zero cost; current state.
- (b) Sanction `any_of` expected lists in `cases.json` (list the DSW
  tree as an accepted alternative), making the judge honor the
  statement's "any balanced tree" promise. The 0432 agent reported the
  judge already supports an `any_of` mode — VERIFY that claim in
  openoj `api/app/judge.py` / runner comparison code before relying on
  it. If true, this is a one-case edit + re-author the DSW variant
  (fresh authoring task; nothing was written).
- (c) A custom shape-validating comparator (validate: BST + height
  balance + same in-order). Most faithful, most work, judge-contract
  change.

**Recommendation**: (b), gated on the `any_of` verification.

----------------------------------------------------------------------

## 2. 0527_longest-shared-segment — hidden case 14 violates the stated value bound

**State**: variant shipped and green; the offending case remains as
authored; the new solution absorbs it defensively.

**What happened**: the statement promises `paths[i][j] < n`, but hidden
case 14 has `n = 6` with a value `6` (on the boundary — likely a typo
for `n = 7`). The canonical hash-bisection solutions never noticed
because they never consult `n`. The new suffix-array variant initially
returned 3 vs expected 2: the stray value collided with the separator
numbering (`n + i`) and leaked matches across sequence boundaries.

**Workaround in place**: the variant seats its first separator at
`max(n, largest observed value + 1)` — measured from the data, so
in-spec behavior is unchanged and the stray value is absorbed. The
solutions.md prose documents this honestly. It is defensive code
papering over an invalid case.

**Options**:
- (a) Fix the case: `n` 6 → 7 (values and expected unchanged in
  intent). Then re-run
  `verify_solution.py problems/0501-0600/0527_longest-shared-segment`
  — all 14 solutions must stay green (the canonical ignores n, the SA
  variant's separator moves but its answer on valid inputs does not
  change; the expected 2 was produced under the current collision-free
  reading, so it should hold — VERIFY, don't assume).
- (b) Keep the defensive form forever (current state).
- (c) Reword the constraint to `<= n` — changes problem semantics;
  not recommended.

**Recommendation**: (a) — one number plus a verification run.

----------------------------------------------------------------------

## 3. 0236_merge-contact-records — Hint 3 is falsified by its own hidden cases

**State**: variant shipped and green (16/16); the statement's Hint 3 is
wrong about the corpus's own cases.

**What happened**: Hint 3 says merged accounts "all agree" on the name.
Hidden cases 10 and 13 deliberately merge accounts with DIFFERENT names
(case data uses Yan/Zoe and Early/Late — authored to exercise this),
and the pinned expecteds print the LATER record's name.

**How each solution picks the name**:
- The canonical's choice is a union-find mechanical artifact:
  `owner[root]`, where the root depends on union order.
- The DFS variant reverse-engineered the observable rule — "the last
  account in reading order touching the component wins" (per-account
  last-write-wins re-stamping) — and verified agreement with the
  canonical on every corpus pin (the only two mixed-name components).

**Residual risk (why this is flagged)**: the two rules can analytically
diverge on inputs OUTSIDE the corpus (the authoring agent constructed
such an input). If a future case of that shape is added and expecteds
are regenerated from the canonical, the DFS variant would fail it.

**Options**:
- (a) Reword Hint 3 to state the actual rule: "a merged record carries
  the name of the most recently read account that joins it". One
  sentence; makes docs and corpus consistent.
- (b) Additionally normalize the canonical's tie-breaking to be
  explicitly reading-order (small code change in 7 languages), turning
  the accidental rule into an intended one and eliminating the
  divergence risk.

**Recommendation**: (a) now; (b) opportunistically if the canonical is
ever touched again.

----------------------------------------------------------------------

## 4. 0254_maximum-sortable-blocks — one falsifiable sentence in the existing section

**State**: variant shipped and green (16/16); the old section's claim is
now falsifiable two sections later.

**What happened**: the pre-existing "sorted-copy multiset balance"
section asserts: "comparing running maxima against running minima is
not enough here — the test has to be multiset equality." That is true
only of a STRICT comparison. The new O(n) cut-counting variant's
equivalence proof (40,000 randomized arrays plus exhaustive enumeration
of every slicing for n ≤ 8, duplicate-heavy, values 0–4; zero
mismatches vs both the multiset solution and ground truth) shows the
NON-STRICT test — cut legal iff `max(arr[0..k]) <= min(arr[k+1..])` —
is exactly equivalent, duplicates included. The new section already
reconciles this in prose (the `[2,1,2]` equal-boundary example shows
non-strictness is the whole trick with repeats), but the old sentence
stands unqualified.

**Fix**: insert one word — "comparing running maxima against running
minima **strictly** is not enough here". Pure editorial, zero risk.

**Recommendation**: do it; it is a one-word edit to a shipped section,
noted here only because the byte-identical rule during the wave
correctly kept agents out of old section bodies.

----------------------------------------------------------------------

## 5. problems-extend 0116/0117/0138/0426/0430/0510 — pointer-wired nodes inexpressible under the judge contract

**State**: no bundle authored (correctly — the agent proved impossibility and
wrote nothing). ROSTER marks both `blocked`. 0385_mini-parser is the output-side variant of the same
wall (deserialize a string into a NestedInteger): the input string rides the wire
fine, but no output codec can serialize the recursive structure back, and a
string round-trip (s in, s out) would judge an identity no-op — the same
output-unfalsifiable class as entry 7's 0138. Blocked with this entry.

**What happened**: LC 116 (and its sibling 117) need a binary node with a
`next` pointer. No value_type kind, codec, starter emission, or provided/
mechanism can carry it: `leetcode_types.py`'s codec registry is closed (a
next-wired tree serializes to exactly its own input — the wiring is
unjudgeable and a no-op solution would pass); `typed.py` hard-validates
SUPPORTED_KINDS whose binary_tree wire encodes only left/right;
`gen_starters.py` maps only ListNode/TreeNode; `provided/` injects source
text but cannot carry a typed argument or return (the interactive-oracle
route is the sole instance path and fails ORIGINAL form on four axes).

**0426 addendum** (output side): convert-BST-to-sorted-circular-doubly-linked-list's answer IS the
prev/next wiring — a head-node tree codec cannot serialize the cycle, and pinning the output
to the sorted value list degenerates the problem to plain inorder (the 0138 mechanical-rewrite
class). Blocked here rather than shipped bent.

**0430 addendum** (input side): flatten-a-multilevel-doubly-linked-list's INPUT is a child-pointer
multilevel list — no wire kind carries prev/child wiring (linked_list is single-next only), so the
structure cannot even reach the solution. Blocked on the input side of this same wall.

**0510 addendum**: inorder-successor-in-bst-ii hands the solution a NODE with parent, left, right
references and no root — the parent wiring cannot ride any wire kind (entry 5's wall), and
receiving 'just a node' without the graph is meaningless on a value-passing judge. (Its root-based
twin 0285 IS authorable and landed, via the tree codec + node-out re-pin.) Blocked.

**Unblock** (runner-owned): a new `next_tree` value_type kind + codec in
`leetcode_types.py` AND `typed.py` (binary wire + SUPPORTED_KINDS) +
`gen_starters.py` type maps + a per-language NodeWithNext (or TreeNode with
optional next) in common/. Until then, both problems stay blocked.

## 6. problems-extend 0133/0427/0428/0429/0431/0558/0559/0589/0590 — graph/quad/nary Nodes inexpressible; nary_tree codec is tree-only

**State**: no bundle authored (proved impossible, wrote nothing). ROSTER marks 0133 `blocked`.

**What happened**: LC 133 needs a graph Node with a `neighbors` field. The common
library's n-ary Node is a TREE node (`children`, not `neighbors`), and the
`nary_tree` codec cannot carry a graph at all — serialize never terminates on
cycles (BFS with no visited set; even a 2-node cycle hangs), and parse never
creates shared references (a finite wire encodes only an unfolded tree with
duplicate-valued nodes, violating the statement's unique-val guarantee). No
`graph` value_type kind exists in `typed.py`'s SUPPORTED_KINDS; gen_starters
emits no Node-wired starter; provided/ still cannot carry typed args/returns
(entry 5). The adjacency-list json degeneration makes an identity no-op pass
every case — the cloning skill is unjudgeable.

**0427 addendum**: construct-quad-tree needs a 4-child (isLeaf, val) node OUTPUT — no quad/nary
kind exists in the typed stream (this entry's codec enumeration), and the original spec makes
non-leaf `val` explicitly arbitrary ("both are accepted"), so the output is nondeterministic by
design even before the wire gap. Blocked.

**0429 addendum** (input side): n-ary-tree-level-order-traversal takes an n-ary tree INPUT — the
nary kind is absent from SUPPORTED_KINDS and the legacy python-only nary_tree codec is rejected
by the Java harness (this entry's evidence), so no 7-language wire exists. Same unblock path:
an nary kind + codec end-to-end (val + null-grouped level-order children per the original).

**0558 addendum**: logical-or-of-two-binary-grids-represented-as-quad-trees takes quad-Node
inputs AND returns one — both sides of the 0427 wall (no 4-child kind; non-leaf val arbitrary
by spec). Blocked on the same evidence.

**0559 addendum**: maximum-depth-of-n-ary-tree takes an n-ary Node input — the 0429 wall
(no nary kind in the typed stream). Blocked.

**0589/0590 addendum**: n-ary-tree-preorder/postorder-traversal take n-ary Node inputs — the same
0559/0429 wall (no nary kind in the typed stream; the legacy codec is python-only and
Java-rejected). Both blocked on identical evidence.

**0428/0431 addendum**: serialize/deserialize-n-ary-tree and encode-n-ary-tree-to-binary-tree both
carry the n-ary structure on input AND output (0431's binary encoding target also changes the
answer shape) — the same missing nary wire as 0429, both directions. Blocked.

**Unblock** (runner-owned): a `graph` value_type kind + codec pair
(adjacency-list ↔ shared-reference Node with a cycle-safe visited-set
serialize, val-as-index per the LC test format), SUPPORTED_KINDS + binary wire
in `typed.py`, gen_starters type maps, and a common/ field decision
(`neighbors` per LC, or the codec maps onto `children`).

## 7. problems-extend 0138 — random-pointer list node: entry 5 confirmed, output unfalsifiable

**State**: no bundle authored (proved impossible, wrote nothing). ROSTER marks
0138 `blocked`; folded conceptually into entry 5's family (title updated to
0116/0117/0138).

**Decisive closure**: the OUTPUT side. `_serialize_list_node` walks only
`.val`/`.next`, so random wiring is silently dropped and `return head` — the
shallow alias the statement explicitly forbids — serializes byte-identically
to a correct deep copy. The problem's defining property is unjudgeable. Input
decode garbles, `typed.py` SUPPORTED_KINDS closes the typed path,
gen_starters cannot emit the starter, and the provided/interactive route fails
ORIGINAL form on the same four axes as entry 5. A json fallback (pairs of
`[val, random_index]` arrays) would pass mechanically but is a rewritten
problem — the bent bundle this set forbids.

**Unblock** (runner-owned): a `random_list` value_type kind + codec pair in
`leetcode_types.py` AND `typed.py` (binary wire with a random-index slot) +
gen_starters type maps + a per-language NodeWithRandom in common/.

## 8. problems-extend 0157/0158 — read4 out-buffer contract unjudgeable

**State**: no bundle authored (proved impossible, wrote nothing). ROSTER marks
both 0157 and 0158 `blocked` (158 is the same read4 contract with stateful
multiple calls — same closure).

**What happened**: LC 157/158's deliverable lives in the solution-written
out-buffer `buf`, and the judge's surface is exactly {method return value} ∪
{oracle-observed state} on every path (verified against all four harness
implementations: python_harness, go_interactive, js_interactive, the Java
harness). Auxiliary arguments are never re-inspected after the call in any
language; in five of seven the decode-per-key design makes cross-key aliasing
structurally impossible. A count-only judging is provably insufficient — a
solution that reads in the exact correct pattern, discards the data, never
writes buf, and returns min(n, len) has a byte-identical observable transcript
to a correct one; no query budget separates them. Interactive IS genuinely
7-language now (CODECS.md's "Python+Java only" is stale — 0838 ships all
seven), so cross-language support was NOT the blocker; the out-param is.

**Unblock** (runner-owned): an out-parameter judging surface — harnesses
re-encoding mutated auxiliary arrays into the actual, or a verdict granted
access to them.

## 9. problems-extend 0160 — tail-sharing between two list_node params inexpressible

**State**: no bundle authored (proved impossible, wrote nothing). ROSTER marks
0160 `blocked`.

**What happened**: LC 160 needs two lists that share a tail. The wire cannot
build the Y: `_parse_list_node` allocates fresh nodes per decode and
`_invoke_function` decodes each positional independently — no codec or hook
can make two parameters alias. Identity judging (two list_node heads in)
degenerates to always-null (the decoded lists are always disjoint, so the
canonical two-pointer returns [] on every intersecting example); value-tail
judging passes only a longest-common-suffix matcher — a different problem. On
a genuinely shared Y the two judgings would coincide exactly; the blocker is
purely wire expressiveness. The repo's own bettercode 0141/0142 solved the
identical structure-gap by rewriting the contract (json values+pos,
solution-side building) — exactly the move ORIGINAL form forbids.

**Unblock** (runner-owned): a shared-structure wire capability (e.g. a
`list_node_shared` codec where later lists may reference earlier nodes by
index), or accept the bettercode-0141 adapted form for this family.

## 10. problems-extend 0339/0364/0341/0385 — recursive NestedInteger union inexpressible in every schema kind

**State**: no bundle authored (0339's agent proved impossibility at its
expressibility gate and wrote nothing; 0364 carries the identical recursive
input wire and is blocked on the same evidence without a separate probe).
ROSTER marks both `blocked`. 0385_mini-parser is the output-side variant of the same
wall (deserialize a string into a NestedInteger): the input string rides the wire
fine, but no output codec can serialize the recursive structure back, and a
string round-trip (s in, s out) would judge an identity no-op — the same
output-unfalsifiable class as entry 7's 0138. Blocked with this entry.

**What happened**: Nested List Weight Sum's input is a recursive union — at
every level an element is an integer OR a nested list, depth up to 50 — and
both public examples mix leaf depths (`[[1,1],2,[1,1]]`, `[1,[4,[6]]]`).
`typed.py`'s SUPPORTED_KINDS has no carrier: `array` allows exactly one
items-spec per level (a depth-k spec demands leaves at exactly depth k);
`linked_list`/`binary_tree` are integer-only fixed shapes; the n-ary `Node`
is not a schema kind at all (its legacy python-only codec is used by zero
bundles and collapses `Node(2, [])` versus the integer `2` — lossy). The
one recursive-capable encoding (the tagged TAG_INT32|TAG_ARRAY stream)
exists only behind the interactive-oracle protocol, a different problem
contract than the pinned flat `depthSum(nestedList) -> int`. A string
serialization of the structure is lossless through all seven executors but
fails the 0237/0271/0284 honesty bar: the judged work becomes
parse-then-traverse, the NestedInteger interface story vanishes, and every
example's Input line visibly becomes a quoted string — the problem's
essence (being handed a recursively-typed structure) is what the bridge
would remove.

**Unblock** (runner-owned): a self-referential `nested`/`json` value_type
kind end-to-end — a `integer | array<nested>` spec in `type_spec`, a
self-describing (or tagged) form on the function stream, recursive
`read()` in all seven typed wrappers, and `python_type`/`java_type`/…
renderers for `List[NestedInteger]`; optionally a provided `NestedInteger`
class per language with harness-side construction. A common wire-schema
bump, not an authoring act.

## 11. problems-extend 0478/0519 — random-output problems unjudgeable under exact comparison

**State**: no bundle authored. ROSTER marks 0478 and 0519 `blocked`.

**What happened**: generate-random-point-in-a-circle's `randPoint()` returns uniform
random floats by definition — the original's own judge validates statistical
properties (distribution, in-circle membership), never exact values. This bank's
judge compares outputs exactly; no deterministic pin exists because the problem's
essence IS the randomness. Any seeding would have to reproduce one identical PRNG
sequence across seven languages.

**Unblock** (runner-owned): a seeded-RNG judge contract — a harness-provided
deterministic PRNG (one fixed algorithm, one seed per case) exposed to all seven
executors, plus a statistical or sequence-pinned comparator. Then 0478 (and any
future random-output problem) authors against the seeded stream.

## 12. problems-extend 3313 — exact-compare pins one answer where the crawl accepts any valid one

**State**: RESOLVED 2026-08-28 — option (b) taken. cases.json expecteds
now name the judge-side validator `last_marked_nodes` (registry:
`openoj/api/app/validators.py`; contract: `openoj/docs/CODECS.md`);
the machine finally enforces the crawl's "choose any one answer".
Bundle re-gated green x7 under validator judging.

**What happened**: the crawl statement says any pair satisfying the
marked-distance predicate is acceptable, but the bundle judged
`comparison: "exact"` and cases.json pinned the shipped oracle's specific
answers. Hidden inputs where multiple pairs tie rejected correct
alternatives — the extend-track twin of entry 1 (any-balanced tree vs
exact-shape pinning).

**Evidence**: fleet-D blocked notes under `.localonly/` (crawl quote and
tie inputs); bundle `problems-extend/3301-3400/3313_find-the-last-marked-nodes-in-tree/`.

## Resolution log

- [ ] 1. 0432 — decide drop / any_of / comparator (verify any_of first)
- [ ] 2. 0527 — case 14 n→7, re-verify bundle
- [ ] 3. 0236 — reword Hint 3 (optionally normalize canonical tie rule)
- [ ] 4. 0254 — insert "strictly" in the multiset section
- [x] 10. 0339 — RESOLVED 2026-08-28: common v2 nested/design contracts
      shipped; 0339/0341/0364/0385 landed and verified green
- [x] 11. 0478 — RESOLVED 2026-08-28: distribution/validator comparator
      shipped; 0478/0519 landed and verified green
- [x] 12. 3313 — RESOLVED 2026-08-28: judge-side `last_marked_nodes`
      validator shipped; expecteds now validator-mode, re-gated green
