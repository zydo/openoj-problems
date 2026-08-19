## 0368 — Largest Divisible Subset

- New id / title / slug: 368 / Longest Divisibility Chain / `longest-divisibility-chain`
- Old → new API: `largestDivisibleSubset` → `longestDivisibilityChain` (go `longestDivisibilityChain`, rust `longest_divisibility_chain`, ts `longestDivisibilityChain`); parameter `nums` kept (conventional)
- Core algorithm / difficulty: sort ascending, longest-chain DP with parent pointers, reconstruct / H3 (unchanged)
- Statement rewritten from spec: yes — the task is posed as "choose as many values as possible, any two compatible", with the pairwise rule spelled out once in code and the chain characterisation left to the hints
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[12,3,5,6,24] → [3,6,12,24]` (one unique longest chain, one value excluded), `[15,4,22] → [4]` (nothing divides anything), `[8,2,16,7] → [2,8,16]` (doubling chain plus an outsider)
  - Each example was chosen to have a **unique** maximum-size chain wherever the size exceeds one, so the `exact` comparison never depends on tie-breaking; the one tie-broken case (`[15,4,22]`) matches the existing hidden case `[2,3,5,7,11,13] → [2]`, whose tie-break every port already agrees on
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The bundle's `comparison` is `exact` while the task legitimately admits any
  maximum-size answer. That tension is inherited, not introduced: the hidden
  cases already pin one particular reconstruction. The safe rule for examples
  here is to avoid ties in the *size* of the answer, which keeps the statement's
  "return whichever you like" honest for every case a reader can see.
- `[1,2]` and `[1,3]` are source example literals, so any array literal in the
  adapted bundle has to steer clear of them once whitespace is squashed —
  `dp[1][2]`-style prose is fine (the squashed form is `[1][2]`), a two-element
  array is not.
