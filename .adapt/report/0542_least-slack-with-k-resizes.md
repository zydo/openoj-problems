## 542 — Minimum Total Space Wasted With K Resizing Operations

- New id / title / slug: 542 / Least Slack With K Resizes / `least-slack-with-k-resizes`
- Old → new API: `minSpaceWastedKResizing` → `leastSlack` (go `leastSlack`, rust `least_slack`, ts `leastSlack`)
- Core algorithm / difficulty: partition into ≤ k+1 segments with precomputed segment waste, O(k·n²) / H3 (unchanged)
- Statement rewritten from spec: yes (capacity/slack framing replaces the dynamic-array story)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,12,7], k=0` → 13, `[5,40,6,7], k=1` → 36, `[15,25,10,20], k=2` → 10
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- A host restart killed the first verify run; adapt_gates results survived in
  the task output file, so only verify needed re-running. Bundle dirs are the
  source of truth after any interruption — inspect before redoing work.
- Examples cross-checked against a brute force over all cut-position subsets.
