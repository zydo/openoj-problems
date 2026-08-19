## 1381 — Design a Stack With Increment Operation

- New id / title / slug: 1381 / Bottom-Boost Stack / `bottom-boost-stack`
- Old → new API: class `CustomStack` → `BottomBoostStack`; `increment` → `boost`; `push`/`pop` kept (universal stack vocabulary, per 0155); parameters `maxSize`, `x`, `k`, `val` kept
- Core algorithm / difficulty: lazy raises recorded in a parallel `pending` array, settled on pop / H2 (unchanged)
- Statement rewritten from spec: yes (increment → boost/raise vocabulary)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - capacity 2 with ignored push, bottom-only boost, `k` > depth, empty pop; capacity 4 with overflow push, partial + full boosts, drained to `-1`, then reuse
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: java, py (source only had those two)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 14/14 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓

### Notes

- Design kind: hidden `actions` strings renamed in place (`CustomStack` → `BottomBoostStack`,
  `increment` → `boost`) — the one sanctioned hidden-case edit; params untouched.
- The word `increment` survives in the reference solutions as a *local* variable and
  in comments ("increments always target a prefix") — deliberately untouched, and the
  stale gate correctly ignores bare-word locals that never appear at a call site.
- The solutions.md walkthrough of `pending` evolution was hand-traced and re-verified
  against the staged reference before writing (first draft mis-stated the array).
