## 152 — Shuffle an Array

- New id / title / slug: 152 / Shuffle an Array / `shuffle-an-array` —
  title, slug, and API all **kept**: the title is an unavoidable generic
  term (the task is shuffling an array, 0202/0274 precedent), and
  `reset`/`shuffle`/`Solution` are the universal vocabulary for it
- Core algorithm / difficulty: Fisher-Yates on a fresh copy of a pristine
  original / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[6,2,9]` with reset-before-any-shuffle then two judged shuffles (six
    orderings at 1/6 each), and `[-7]` showing the degenerate
    single-arrangement case around two resets
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design problems offer only these)
- Figures: none
- Gates: compatibility ✓ verify ✓ (2/2 languages, 15/15 cases) sandbox
  deferred to the batch run stale ✓ overlap ✓

### Notes

- First bundle in this chunk with **no rename at all** (api map empty, like
  0202/0274 in the pilot wave). The adaptation here is entirely the
  statement/guide/examples rewrite plus regenerated public cases.
- The stale gate earned its keep on action-list literals: my first example 2
  reused the source's `["Solution","shuffle","reset"]` action sequence
  verbatim and was flagged (`source example ["Solution","shuffle","reset"]`).
  The fix was to change the example's shape — reset before any shuffle,
  then again after — not to argue with the gate. Design action lists are
  example data even when every name in them is kept.
- Public probability tables (six orderings at 1/6, the single `[-7]`) were
  generated from `itertools.permutations` and cross-checked against 120k
  reference shuffles (each bucket 0.165–0.168).
