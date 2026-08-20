## 492 — Minimize Hamming Distance After Swap Operations

- New id / title / slug: 492 / Fewest Mismatches After Free Swaps / `fewest-mismatches-after-free-swaps`
- Old → new API: `minimumHammingDistance` → `fewestMismatches` (go `fewestMismatches`, rust `fewest_mismatches`, ts `fewestMismatches`); parameters `source`, `target`, `allowedSwaps` kept
- Core algorithm / difficulty: union-find over positions, per-component multiset matching of held vs wanted values / H3 (unchanged)
- Statement rewritten from spec: yes ("Hamming distance" recast as mismatch count; the swap-chaining rule is re-derived)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,7,9,4]` vs `[9,3,7,4]`, swaps `[[0,1],[1,2]]` → 0 (rearrangement inside one component hits perfection)
  - `[6,1,2,9]` vs `[1,6,9,2]`, swaps `[[0,1]]` → 2 (fixed front, frozen residue)
  - `[5,5,3,1]` vs `[5,3,3,1]`, swaps `[[0,1],[1,2],[2,3]]` → 1 (fully connected yet multiset-imbalanced)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static replica) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Multiset imbalance counts once per unpaired value, not twice — my first
  hand-computed expectation for the `[5,5,3,1]` shape said 2; brute force
  over in-component permutations said 1 and the reference agreed. Always run
  the brute force.
- "Hamming" dropped from the identity: the concept is now "mismatch count",
  consistent with the method rename.
