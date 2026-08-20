## 592 — Maximum Cost of Trip With K Highways

- New id / title / slug: 592 / Heaviest Trip Over Exactly K Roads / `heaviest-trip-over-exactly-k-roads`
- Old → new API: `maximumCost` → `maxTripCost` (go `maxTripCost`, rust `max_trip_cost`, ts `maxTripCost`); parameter `highways` → `roads` (`n`, `k` kept)
- Core algorithm / difficulty: bitmask DP over `(visited set, last town)` with masks pruned at k+1 bits / H3 (unchanged)
- Statement rewritten from spec: yes (cities/highways → towns/roads, "visit at most once" → "no town entered twice")
- Examples newly constructed: yes (structure-preserving: yes)
  - same 5-node edge set, tolls `6,2,9,5,4` → 19 (optimal drive still the drawn 0→1→4→3), two disconnected pairs → -1, four-town loop → 18 (third example, no figure)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (toll texts, captions, comments; arrows and geometry untouched)
- Gates: check ✓ verify ✓ (7/7 languages, 20/20 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Picking tolls so the drawn arrow path stays the unique optimum took one
  enumeration of all 3-edge paths by hand, then the generator confirmed it —
  worth doing before touching the SVG, since a tie or a better rival path
  silently invalidates the highlight.
- Role-symmetric answers: in this problem the optimum is invariant under
  permuting (src, dst) roles, so query triples only need to differ literally,
  not semantically.
