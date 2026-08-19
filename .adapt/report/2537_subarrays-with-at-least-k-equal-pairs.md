## 2537 — Count the Number of Good Subarrays

- New id / title / slug: 2537 / Subarrays With At Least K Equal Pairs / `subarrays-with-at-least-k-equal-pairs`
- Old → new API: `countGood` → `countEqualPairSubarrays` (go `countEqualPairSubarrays`, rust `count_equal_pair_subarrays`, ts `countEqualPairSubarrays`); parameters `nums`, `k` kept
- Core algorithm / difficulty: two pointers, hash map of in-window counts, batch-count `n - right` per qualifying right endpoint / H3 (unchanged)
- Statement rewritten from spec: yes (coined "good" re-coined as "rich", equal pairs defined from scratch)
- Examples newly constructed: yes (structure-preserving: yes — the solution figure kept; the new array reproduces the drawn window pattern exactly: pairs at positions {0,3},{4,5},{2,6} so windows [0..5], [1..6], [2..6] all hold 2 pairs)
  - `[2,2,2,2]`, k=6 → 1 (only the whole array reaches C(4,2)=6), `[5,7,3,5,8,8,3]`, k=2 → 4 (the figure's data), `[6,3,6,3,6]`, k=2 → 3 (interleaved values, three rich stretches)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (solution-sliding-window — cell values and two pair annotations; brackets, indices, +n−right arithmetic untouched)
- Gates: check ✓ (no failures for this bundle) verify ✓ (7/7 languages, 16/16 cases) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Structure preservation here was a small constraint solve: the figure's three
  windows each display exactly 2 pairs, so the new array needed equal values
  at exactly the positions {0,3}, {4,5}, {2,6} (plus two unique fillers) to
  keep every bracket and count in the drawing true. Verified by brute force
  before touching the SVG.
- First candidate for Example 3 (`[6,3,6,3,6]`, k=3) returned 1, duplicating
  Example 1's answer; re-chosen at k=2 (→ 3) so the three examples show three
  different answer magnitudes.
