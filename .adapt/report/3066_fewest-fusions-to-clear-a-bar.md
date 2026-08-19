## 3066 — Minimum Operations to Exceed Threshold Value II

- New id / title / slug: 3066 / Fewest Fusions to Clear a Bar / `fewest-fusions-to-clear-a-bar`
- Old → new API: `minOperations` → `fewestFusions` (go `fewestFusions`, rust `fewest_fusions`, ts `fewestFusions`); parameters `nums`, `k` kept
- Core algorithm / difficulty: min-heap simulation of the forced fusion / H2 (unchanged)
- Statement rewritten from spec: yes ("operation" reframed as a fusion lifting the two smallest)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,1,4,15,9], k=12` → 3 (multi-fusion climb); `[7,7,9], k=5` → 0 (already clear); `[1,2,4], k=12` → 2 (drains to one element)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- LeetCode's 3065 ("... Threshold Value I", the delete-below-k variant) is not
  in this bank; the "II" suffix was dropped with no family to preserve.
- E3 doubles as a constraint check: examples must respect the "an answer
  always exists" guarantee, so the bar has to be placed where the drained
  final element clears it.
