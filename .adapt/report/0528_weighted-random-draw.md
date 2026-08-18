## 0528 — Random Pick with Weight

- New id / title / slug: 528 / Weighted Random Draw / `weighted-random-draw`
- Old → new API: `pickIndex` → `drawIndex`; constructor parameter `w` → `weights`; class stays `Solution` (framework wrapper — the design action `"Solution"` names it and is not renamed)
- Core algorithm / difficulty: prefix sums as segment boundaries over `[0, total)`, one uniform draw located by binary search / H2 (unchanged)
- Statement rewritten from spec: yes — the distribution requirement and the statistical-judging section are restated from the mechanism
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `weights = [4]` → every draw is 0; `weights = [2, 3, 5]` → shares 2/10, 3/10, 5/10
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design problems offer only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 16/16 cases) sandbox deferred to the batch run (design kind, no local stack) compatibility ✓ stale ✓ overlap ✓

### Notes

- Hidden cases: 14, data-identical to the source with exactly one in-place
  rename — `"call": "pickIndex"` → `"call": "drawIndex"` inside the action
  objects (the PROTOCOL's design exception). Verified programmatically:
  each hidden case equals the source's after applying the same rename.
- Public expected values are distribution objects; the probabilities were
  computed from the weights by script (`w[i]/sum(w)`), not copied.
- The stale gate caught `Output: [null, 0]` — identical to the source's
  Example 1 output line. Fixed by showing three draws
  (`[null, 0, 0, 0]`). Design-example output lines are identifying literals
  like any array; vary their shape, not just the weights.
- Source keeps the tension between "at most 10⁴ calls" in its constraints
  and the ~300000-draw statistical cases; the constraint is kept verbatim
  in numeric domain (decision 5) — flagging it for the main agent in case
  the batch review wants it reconciled.
