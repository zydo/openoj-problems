## 2615 — Sum of Distances

- New id / title / slug: 2615 / Distances to Equal Values / `distances-to-equal-values`
- Old → new API: `distance` → `equalValueDistances` (go/rust/ts identical — source had method == rust entrypoint, so the equality is preserved per convention); parameter `nums` kept
- Core algorithm / difficulty: bucket positions by value, prefix sums of each bucket's positions, O(1) per occurrence / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,9,4,8,4] → [6,0,4,0,6]` (triple + two singletons), `[6,1,9] → [0,0,0]` (all distinct), `[3,3,8,3,8] → [4,3,2,5,2]` (two interleaved values)
- Constraints: domain unchanged (1 ≤ n ≤ 10⁵, 0 ≤ nums[i] ≤ 10⁹), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- `distance` is a bare English word, so the blind word-boundary rename also
  hit prose comments ("every distance total" → "every equalValueDistances
  total"); repaired those three comment lines by hand in all 7 solutions so
  only real identifiers carry the new name.
