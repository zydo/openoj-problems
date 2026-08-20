## 19 — Trapping Rain Water

- New id / title / slug: 19 / Water Pooled Between Bars / `water-pooled-between-bars`
- Old → new API: `trap` → `pooled` (go `pooled`, rust `pooled`, ts `pooled`)
- Core algorithm / difficulty: two converging pointers, settle the shorter side / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — all figures dropped)
  - `[3,1,0,2,1,4]` → 8 (one basin), `[2,0,5,0,3,0,4]` → 11 (two basins at different levels), `[1,2,3]` → 0 (monotone)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (all three: `example-1.svg`, `example-2.svg`, `solution-two-pointer-walk.svg`)
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- All three figures are histograms: bar heights and shaded water rectangles are
  drawn as `<rect>` heights and offsets, which is the textbook case ADAPT.md
  names for dropping. No renderer exists for this family. The bundle therefore
  ships with no figures and goes to phase 2 — an elevation-map renderer would
  pay for itself here and again at 0407, since the drawing is a deterministic
  function of the height array.
- The method is the single lowercase word `pooled` for the compatibility-gate
  reason documented at 0033: the source method `trap` is also its rust
  entrypoint, so a camelCase new name would leave `solution.rust` renamed to
  the go/ts spelling and failing to compile. `pooled` keeps method, go, rust
  and ts identical, exactly as the source had them.
- Comments in the ports said "traps nothing" / "trapped depth" — old
  terminology rather than identifiers, invisible to the stale gate but changed
  anyway per ADAPT.md's rule about comments naming old terminology.
- Kinship note for whoever takes 0407 (`trapping-rain-water-ii`): the natural
  sibling title is "Water Pooled On A Grid".
