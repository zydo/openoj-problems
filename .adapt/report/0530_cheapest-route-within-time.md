## 530 — Minimum Cost to Reach Destination in Time

- New id / title / slug: 530 / Cheapest Route Within Time / `cheapest-route-within-time`
- Old → new API: `minCost` → `cheapestRoute` (go `cheapestRoute`, rust `cheapest_route`, ts `cheapestRoute`); parameters `maxTime`, `edges`, `passingFees` kept (conventional)
- Core algorithm / difficulty: time-indexed layered DP over exact arrival minutes / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - Same 6-city topology as the source figure with new times/fees: `maxTime 28 → 15` (fast cheap top route), `27 → 60` (top route no longer fits, must pay the expensive bottom); plus a different 3-city graph with parallel roads `100 → 15`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (2 of 2 — edge times, city fees, captions; node positions, topology, and highlighted paths unchanged)
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 18/18 cases) check ✓ (per-bundle static)

### Notes

- Chained sed on `$1` → `$2` → `$3` fee labels self-clobbered and dropped a
  `>` in the SVG; caught by re-reading the figure and validated with an XML
  parse. Label edits that overlap in value need ordered, non-overlapping
  replacements — worth remembering for the next figure edit.
- Structure-preserving examples made both figures a pure label edit; the
  third example (parallel roads) covers the multi-edge constraint, which the
  source's examples never showed.
