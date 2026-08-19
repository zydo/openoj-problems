## 2832 — Maximal Range That Each Element Is Maximum in It

- New id / title / slug: 2832 / Widest Span Where Each Element Is Maximum / `widest-span-where-each-element-is-maximum`
- Old → new API: `maximumLengthOfRanges` → `widestSpans` (go `widestSpans`, rust `widest_spans`, ts `widestSpans`); parameter `nums` kept (conventional)
- Core algorithm / difficulty: two monotonic-stack passes for nearest larger neighbours, span = R − L + 1 / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `[3,9,7,12,5] → [1,3,1,5,1]` (mixed), `[4,7,10,13] → [1,2,3,4]` (increasing), `[8,6,4,2] → [4,3,2,1]` (decreasing)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (solution-monotonic-stack-spans) — the drawn brackets ARE the span structure, i.e. the answer itself; any structure-preserving example reproduces the source's output array `[1,4,2,1,5]`, which is a stale literal, so preserving the picture and passing the stale gate cannot both hold (phase-two redraw candidate)
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- When a figure's geometry encodes the *answer*, the stale gate and the
  structure-preserving rule collide head-on; dropping is the only honest
  resolution available to a chunk agent.
