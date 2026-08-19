## 3141 — Maximum Hamming Distances

- New id / title / slug: 3141 / Farthest Hamming Neighbor / `farthest-hamming-neighbor`
- Old → new API: `maxHammingDistances` → `farthestHamming` (go `farthestHamming`, rust `farthest_hamming`, ts `farthestHamming`); parameters `nums`, `m` kept
- Core algorithm / difficulty: multi-source BFS over the m-dimensional hypercube, answer = m − dist(complement) / H3 (unchanged)
- Statement rewritten from spec: yes (m-bit-word framing; "Hamming distance" kept as the unavoidable generic term)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,5,1] m=3` → `[2,2,1]` (plain disagreement), `[10,5,12] m=4` → `[4,4,2]` (complement pair present), `[0,1,2] m=2` → `[1,2,2]` (smallest cube)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The source's explanation arrays (`[1001,1100,1001,1011]` style binary lists) are stale-gate literals too; the new examples' binary renderings were chosen to differ (verified in `.localonly/wave-f-05/gen3141.py` output).
- Hand-computing Hamming distances is error-prone (I mis-derived one entry); the script is the authority and its outputs went into cases.json unedited.
