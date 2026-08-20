## 89 — The Skyline Problem

- New id / title / slug: 89 / Building Outline / `building-outline`
- Old → new API: `getSkyline` → `buildingOutline`
- Core algorithm / difficulty: sweep line over edge events with a lazy max-heap / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes — `[[1,6,8],[4,9,12],[11,14,6]]`, an equal-height abutting pair (no point at the join), and a single building
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **dropped** — both figures draw the source's five-building silhouette geometrically
- Gates: check ✓ verify ✓ compatibility ✓ stale ✓ overlap ✓ sandbox pending (batch run)

### Notes

public cases were entirely absent; three examples were constructed and their expectations computed by running the reference.

Recovered by the main agent after the chunk agents hit the 5-hour quota
mid-problem; the surviving artifacts were kept as written and only the
missing pieces authored, with all gates run fresh.
