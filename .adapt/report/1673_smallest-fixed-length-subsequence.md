## 1673 — Find the Most Competitive Subsequence

- New id / title / slug: 1673 / Smallest Fixed-Length Subsequence / `smallest-fixed-length-subsequence`
- Old → new API: `mostCompetitive` → `smallestFixedSubsequence` (go `smallestFixedSubsequence`, rust `smallest_fixed_subsequence`, ts `smallestFixedSubsequence`); parameters `nums`, `k` kept
- Core algorithm / difficulty: monotonic non-decreasing stack with refill guard `len(stack) + (n − i) > k` / H3 (unchanged)
- Statement rewritten from spec: yes ("most competitive" becomes plain lexicographic minimality, named in the title)
- Examples newly constructed: yes (structure-preserving: yes — example 1 keeps the figure's exact pop pattern)
  - `[4,7,1,5], k=2` → `[1,5]` (newcomer pops the whole stack), `[4,9,2], k=2` → `[4,2]` (refill guard saves 4), `[3,7,4,7,2,6], k=4` → `[3,4,2,6]` (guard blocks mid-pass)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — `solution-stack-states.svg` kept its four-snapshot geometry; example 1 was chosen to repeat the source's pattern (push, push, double pop, push) so only the numbers and captions changed
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Naming aligned with the existing subsequence family: 0316 is
  `smallest-letter-subsequence` (method `smallestLetterSubsequence`), 2030
  `smallest-subsequence-with-letter-quota`, so `smallestFixedSubsequence`
  slots in without duplicating either method name.
- The figure edit was pure text: values 3/5/2/6 → 4/7/1/5, the two
  comparison captions, and the summary line. The crossed-out pair and
  strike lines needed no coordinate change because the new example pops
  exactly two entries at exactly the same state.
