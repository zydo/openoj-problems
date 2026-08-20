## 158 — Frog Jump

- New id / title / slug: 158 / Hops Across Stones / `hops-across-stones`
- Old → new API: `canCross` → `canHopAcross` (go `canHopAcross`, rust `can_hop_across`, ts `canHopAcross`); parameter `stones` kept (conventional domain name, and the title still names it)
- Core algorithm / difficulty: DP over (stone, arriving hop length) pairs / H3 (unchanged)
- Statement rewritten from spec: yes — the river/frog dressing is dropped for a marker travelling along a line of stones, and the ±1 rule is stated as a rule about the previous hop's length rather than as a story beat
- Examples newly constructed: yes (structure-preserving: **yes** — eight stones with one flown-over stone, matching the figure's shape)
  - `[0,1,3,5,8,11,13,15] → true` (hops 1,2,2,3,3,4), `[0,1,2,4,6,9,13,20] → false` (13 is reachable only by a hop of 4, so 16/17/18 are the only continuations), `[0,2,4] → false` (nothing at position 1 for the opening hop)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: **regenerated** — `figures/solution-hop-arcs.svg`, redrawn for the new stone layout by a throwaway generator in the scratchpad (no renderer for this family exists in `scripts/adapt_figures.py`)
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- This figure family is a good candidate for a real renderer in
  `scripts/adapt_figures.py`: it is a pure function of (stone positions, chosen
  hop path). The layout is `x = 60 + position * scale`, arcs are quadratics
  whose control height is a linear function of hop length, and the flown-over
  stones are the dashed circles. The source figure's own caption sits inside the
  SVG as five `<text>` lines and has to be rewritten with the data — dropping
  the figure and keeping the caption would have left source example values in
  the bundle.
- The figure is referenced from `solutions.md`, not `statement.md`, so its alt
  text escapes the overlap gate (which reads `statement.md` only). It was still
  written fresh; a future gate extension over `solutions.md` prose would catch
  bundles where it was not.
