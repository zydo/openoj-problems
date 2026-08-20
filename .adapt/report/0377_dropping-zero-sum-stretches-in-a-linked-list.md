## 377 — Remove Zero Sum Consecutive Nodes from Linked List

- New id / title / slug: 377 / Dropping Zero-Sum Stretches in a Linked
  List / `dropping-zero-sum-stretches-in-a-linked-list`
- Old → new API: `removeZeroSumSublists` → `dropZeroSumStretches`
  (go `dropZeroSumStretches`, rust `drop_zero_sum_stretches`,
  ts `dropZeroSumStretches`); parameter `head` kept
- Core algorithm / difficulty: flatten to array, prefix-sum hash map,
  restart after each removal / H3 (unchanged)
- Statement rewritten from spec: yes — "stretch" defined up front as a run
  of consecutive nodes with cancelling values
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,5,-5,6]` → `[2,6]` (interior pair), `[4,-2,3,-5,7]` → `[7]`
    (head-anchored stretch), `[1,-1,0,4]` → `[4]` (pair plus lone zero)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) compatibility ✓ stale ✓
  overlap ✓ sandbox n/a (function kind)

### Notes

- The source statement says "you may return any such answer", yet
  `comparison` is `exact` and the hidden expectations pin one list — an
  ambiguity in the source I did not reproduce: every new example was
  brute-forced to have a **unique** fixed point, so the statement makes no
  promise the judge breaks. (Removing the note is presentational; judged
  semantics are untouched.)
- Uniqueness check lives in the scratch generator
  (`.localonly/wave-d-03/gen1171.py`, `all_fixed_points`); worth reusing for
  any problem with "any valid answer" phrasing.
