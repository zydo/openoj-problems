## 2576 — Find the Maximum Number of Marked Indices

- New id / title / slug: 2576 / Most Pairs Under Doubling / `most-pairs-under-doubling`
- Old → new API: `maxNumOfMarkedIndices` → `mostPairs` (go `mostPairs`, rust `most_pairs`, ts `mostPairs`); parameter `nums` kept
- Core algorithm / difficulty: sort, two pointers — dear pointer over the upper half from the midpoint, cheap pointer advances on `2 * nums[i] <= nums[j]`, answer `2 * i` / H3 (unchanged)
- Statement rewritten from spec: yes (marking reframed as "spending" positions)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,9,3,6]` → `4` (everything pairs), `[6,4,7]` → `0` (no legal move), `[2,10,4,7,3]` → `4` (odd length, one value left over)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Brute force is an exhaustive memoized search over every sequence of legal
  pair markings (fine at n ≤ 5); it matched the reference on all examples.
