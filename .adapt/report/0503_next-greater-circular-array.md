## 0503 — Next Greater Element II

- New id / title / slug: 503 / Next Greater, Circular Array / `next-greater-circular-array`
- Old → new API: `nextGreaterElements` → `nextGreaterCircular` (go `nextGreaterCircular`, rust `next_greater_circular`, ts `nextGreaterCircular`); parameter `nums` kept
- Core algorithm / difficulty: doubled-scan (index-modulo) monotonic stack over a circular array / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,8,2] → [8,-1,3]` (wrap resolves the last entry), `[7,4,2] → [-1,7,7]` (wrap hits the front first, not the intermediate), `[5,5,5] → [-1,-1,-1]` (strictness under duplicates)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 20/20 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Second member of the Next Greater family, adapted back to back with
  0496 ("Next Greater, Query Values") and 2454 ("Next Greater, Second
  Match") so the kinship reads in all three titles.
