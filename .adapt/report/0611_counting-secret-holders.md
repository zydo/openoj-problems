## 611 — Number of People Aware of a Secret

- New id / title / slug: 611 / Counting Secret Holders / `counting-secret-holders`
- Old → new API: `peopleAwareOfSecret` → `countSecretHolders` (go `countSecretHolders`, rust `count_secret_holders`, ts `countSecretHolders`); parameters `n`, `delay`, `forget` kept
- Core algorithm / difficulty: day-indexed DP `know[d]` with a sliding recruiter window `[day-forget+1, day-delay]`, final `forget-1`-day slice, mod 10⁹+7 / H3 (unchanged)
- Statement rewritten from spec: yes — sharing schedule stated compactly up front ("the `forget - delay` days from `delay` to `forget - 1` after learning")
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=5, delay=2, forget=3 → 2` (one sharing day each, fast forgetting), `n=6, delay=1, forget=4 → 26` (dense spread, daily learners 1,1,2,4,7,13), `n=9, delay=3, forget=6 → 9` (long quiet start, no forgetting yet)
- Constraints: domain unchanged (2 ≤ n ≤ 1000, 1 ≤ delay < forget ≤ n), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (static tier clean for this key) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Day-by-day walkthroughs in examples were hand-verified against the
  reference DP before writing (the day-5 arithmetic in a spread like
  1,1,2,4,7,13 is easy to get subtly wrong by hand).
