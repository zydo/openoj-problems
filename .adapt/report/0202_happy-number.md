## 0202 — Happy Number

- New id / title / slug: 202 / Happy Number / `happy-number` — **title kept**
- Old → new API: none — `isHappy` kept (parameters `n` kept)
- Core algorithm / difficulty: iterate digit-square map, hash-set cycle detection / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `13 → true` (two-step chain shown), `5 → false` (cycle spelled out)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 7/7 languages, 17/17 cases)

### Notes

- "Happy number" is standard mathematical terminology, not LeetCode coinage —
  the unavoidable-generic-term clause applies, so title, slug, and method all
  stay (per ADAPT.md "never rename merely to differ"). Everything else was
  still written fresh from the spec.
