# Corpus flags — deferred decisions on judge data and statement wording

Written 2026-08-23, after the multi-solution variant wave (54 bundles,
commit 05ec87bc) and the reference_solution contract (8490afb8) landed.
Each item below is a place where committed judge data or statement prose
contradicts something the wave proved. None is fixed because each requires
an authored-content decision (frozen cases.json / statement wording), not
a code change. Resolve top-down; tick the log at the bottom.

All entries here concern problems whose LeetCode originals are archived in
problems-bettercode and whose adapted bundles live in problems-adapt.
Resolved entries (including a past problems-extend cohort covering wire-
expressiveness gaps that later shipped, and a handful of one-off case/limit
fixes) have been removed from this file; only open decisions remain.

---

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

---

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

---

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

---

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

---

## Resolution log

- [ ] 1. 0432 — decide drop / any_of / comparator (verify any_of first)
- [ ] 2. 0527 — case 14 n→7, re-verify bundle
- [ ] 3. 0236 — reword Hint 3 (optionally normalize canonical tie rule)
- [ ] 4. 0254 — insert "strictly" in the multiset section
