## 1498 — Number of Subsequences That Satisfy the Given Sum Condition

- New id / title / slug: 1498 / Subsequences With Bounded Ends / `subsequences-with-bounded-ends`
- Old → new API: `numSubseq` → `countSubseq` (go `countSubseq`, rust `count_subseq`, ts `countSubseq`); parameters `nums`, `target` kept
- Core algorithm / difficulty: sort, two pointers walking inward, 2^(j-i) contribution per pinned minimum, mod 10⁹+7 / H2 (unchanged)
- Statement rewritten from spec: yes — condition stated as smallest-plus-largest bound
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,4,5,9] target=8 → 5` (an element failing alone: 5+5 > 8), `[3,3,6,4] target=9 → 13` (duplicates counted separately), `[5,10] target=9 → 0` — cross-checked by full subset enumeration
- Constraints: domain unchanged (length ≤ 10⁵, values and target ≤ 10⁶), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Hand-computing example 1 gave 7; the brute force said 5 — the [5]-alone
  case (its own min and max) is easy to miscount, a reminder that example
  expectations always come from the script, never by hand.
