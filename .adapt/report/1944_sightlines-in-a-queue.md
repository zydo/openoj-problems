## 1944 — Number of Visible People in a Queue

- New id / title / slug: 1944 / Sightlines in a Queue / `sightlines-in-a-queue`
- Old → new API: `canSeePersonsCount` → `countSightlines` (go `countSightlines`, rust `count_sightlines`, ts `countSightlines`); parameter `heights` kept (conventional)
- Core algorithm / difficulty: right-to-left monotonic stack, pop-and-count plus the surviving taller top / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `[6,2,9,4,7,3] → [2,1,2,1,1,0]`, `[4,9,7,6,10] → [1,2,2,1,0]`, `[3,1,2] → [2,1,0]`
- Constraints: domain unchanged (`n, heights[i] <= 10^5`, distinct), presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (2 of 2 — example-1.svg and solution-sight-lines.svg draw people as bars whose heights and sight-line geometry ARE the data; no renderer for the family). Phase two can redraw.
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 16/16 cases) check ✓ (per-bundle static)

### Notes

- Two traps this problem, both instructive. (1) My first example's *output*
  vector `[3,1,2,1,1,0]` matched the source's example-1 output byte for
  byte — count vectors are shape-determined, so a fresh input can silently
  reproduce the source's counts. The stale gate caught it; picked a heights
  array with a different visibility profile. (2) My hand-computed counts
  were wrong twice while the reference+brute force agreed — visibility's
  min/max condition is easy to misapply (a shorter person beyond a taller
  one is *not* seen). Never hand-write expected values for this family.
