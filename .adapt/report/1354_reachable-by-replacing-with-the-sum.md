## 1354 — Construct Target Array With Multiple Sums

- New id / title / slug: 1354 / Reachable by Replacing With the Sum / `reachable-by-replacing-with-the-sum`
- Old → new API: `isPossible` → `isReachable` (go `isReachable`, rust `is_reachable`, ts `isReachable`); parameter `target` kept
- Core algorithm / difficulty: reverse simulation from the target with a max-heap, modulo batch-jump over repeated undos / H3 (unchanged)
- Statement rewritten from spec: yes (procedure restated as sum-write moves from all-ones)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,5,9]` → true (forward trace given), `[2,1,1,1]` → false (first write is at least 4), `[3,7]` → true (4-move trace)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (bundle check clean) verify ✓ (7/7 languages, 22/22 cases) sandbox n/a (function kind, batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Boolean-returning problems keep `comparison: exact`; the `true`/`false`
  outputs round-trip through the JSON codec unchanged.
- Expecteds cross-checked by a pruned forward reachability search over
  states (`.localonly/wave-e-01/pub_1354.py`).
- Source literals `[1,1,1,2]`, `[8,5]`, `[9,3,5]`: only `[9,3,5]` and
  `[8,5]` clear the stale gate's two-character threshold; both avoided.
