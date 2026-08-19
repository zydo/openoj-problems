## 2599 — Make the Prefix Sum Non-negative

- New id / title / slug: 2599 / Least Deferrals for Nonnegative Prefixes / `least-deferrals-for-nonnegative-prefixes`
- Old → new API: `makePrefSumNonNegative` → `leastDeferrals` (go `leastDeferrals`, rust `least_deferrals`, ts `leastDeferrals`); parameter `nums` kept
- Core algorithm / difficulty: one scan with a running total and a min-heap; each negative dip pops the smallest element seen (one deferral) / H3 (unchanged)
- Statement rewritten from spec: yes ("prefix sum array" → running totals; operation framed as deferring an element to the back)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,-3,1,-2]` → `0` (totals hit exactly 0 at the end), `[2,-7,5,3]` → `1` (one big negative deferred), `[-1,-2,6,-4,1]` → `2` (two deferrals)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Brute force enumerates deferral subsets *and* the deferred tail's order —
  the tail order matters (a big negative appended before a positive can dip
  below zero), so plain subset enumeration would be unsound.
