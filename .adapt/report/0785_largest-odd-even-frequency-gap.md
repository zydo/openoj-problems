## 785 — Maximum Difference Between Even and Odd Frequency II

- New id / title / slug: 785 / Largest Odd-Even Frequency Gap / `largest-odd-even-frequency-gap`
- Old → new API: `maxDifference` → `largestGap` (go `largestGap`, rust `largest_gap`, ts `largestGap`); parameters `s`, `k` kept
- Core algorithm / difficulty: fix each of the 20 ordered digit pairs, prefix count difference with parities, monotone left-bound limit `min(r-k, last_b_at[r])` feeding a 2x2 minimum-per-parity table / H4 (unchanged)
- Statement rewritten from spec: yes (window/pair/gap vocabulary defined from scratch; the "even but nonzero" clause restated via the last occurrence of `b`)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"20441" k=5` → -1 (k = n forces the whole string; answer negative), `"3333311" k=3` → 3 (positive gap; the bare odd run admits no pair), `"333331131" k=7` → 3 (whole string makes the odd digit even, so the window stops early)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static tier clean; full-tree run left to the claiming session) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Brute-force cross-check (`exp_3445.py`, 400 random inputs) needed a guard:
  inputs with no legal pair at all return the sentinel -10^18 from the
  reference, because they violate the statement's existence guarantee — the
  bank's judged data never contains them. Skip those in any future
  cross-check for this family.
