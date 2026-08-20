## 411 — Divide Array in Sets of K Consecutive Numbers

- New id / title / slug: 411 / Split Into Runs of k Consecutive Values / `split-into-runs-of-k-consecutive-values`
- Old → new API: `isPossibleDivide` → `splitIntoRuns` (go `splitIntoRuns`, rust `split_into_runs`, ts `splitIntoRuns`); parameters `nums`, `k` kept
- Core algorithm / difficulty: greedy run consumption from the smallest remaining value / H2 (unchanged)
- Statement rewritten from spec: yes ("sets of k consecutive numbers" becomes runs of k consecutive values)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,5,6,5,6,7,6,7,8] k=3` → true (three overlapping runs); `[10,12,11,14,13] k=5` → true (unsorted input, one run); `[8,8,9,10] k=3` → false (count shortage)
- Constraints: domain unchanged, presentation rewritten; the source's "Note: same as 846" line dropped — the mapping file carries provenance now
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 17/17 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- 0846_hand-of-straights is the same task in card clothing and is not yet
  adapted. Whoever takes it should stay kin to this title ("… runs of k
  consecutive …") so the pair remains recognizable, e.g. "Deal Runs of k
  Consecutive Cards".
