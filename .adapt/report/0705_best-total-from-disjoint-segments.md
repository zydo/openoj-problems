## 705 — Maximize the Profit as the Salesman

- New id / title / slug: 705 / Best Total from Disjoint Segments / `best-total-from-disjoint-segments`
- Old → new API: `maximizeTheProfit` → `maxDisjointTotal` (go `maxDisjointTotal`, rust `max_disjoint_total`, ts `maxDisjointTotal`); parameter `offers` → `segments` (no source solution declares a local `segments` — checked before renaming); `n` kept
- Core algorithm / difficulty: weighted interval scheduling, DP over positions with segments bucketed by end / H3 (unchanged)
- Statement rewritten from spec: yes — houses/buyers/gold → positions/runs/values, abstract framing
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `6, [[0,1,4],[2,3,6],[1,4,9]] → 10` (two short runs beat the wide one), `7, [[0,2,7],[3,6,5],[0,6,13]] → 13` (one full-length run wins), `4, [[0,0,3],[1,1,4],[2,2,5],[3,3,6]] → 18` (all single positions)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- A renamed parameter is stale inside fenced example blocks too — the word
  "offers" used as an English verb inside an ```text explanation tripped the
  stale gate; reworded. Renamed parameters cannot appear in any code span,
  even as ordinary prose.
