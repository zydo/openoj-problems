## 751 — Peaks in Array

- New id / title / slug: 751 / Peak Counts Under Point Updates / `peak-counts-under-point-updates`
- Old → new API: `countOfPeaks` → `countPeaks` (go `countPeaks`, rust `count_peaks`, ts `countPeaks`); parameters `nums`, `queries` kept
- Core algorithm / difficulty: Fenwick tree over a 0/1 peak strip; point writes touch at most three markers / H4 (unchanged)
- Statement rewritten from spec: yes (two instruction types stated as a running log; "peak" kept as the unavoidable generic term)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,6,1,6,2,9]` count–lower–count → `[2,1]`, flat `[4,4,4,4,4,4]` raise-one → `[0,1]`, `[1,4,2,5,3,6]` window queries → `[0,1]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The stale gate collects the *inner* query triples from the source's fenced examples (`[1,0,4]`, `[2,3,4]`, ...), so query ranges like a full-range `[1,0,4]` on an n=5 example are off-limits; all example arrays here were chosen with that check in mind (examples use n=6 so full ranges read `[1,0,5]`).
- Expected outputs cross-checked with an independent brute-force recount per instruction.
