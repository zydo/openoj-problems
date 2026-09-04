# Solutions — Fewest Capped Course Rounds

## Bitmask Dynamic Programming Over Taken Sets

Fifteen courses means the finished set is a 15-bit integer, small enough to index a table directly. Let `dp[mask]` hold the fewest rounds that leave exactly the courses of `mask` finished. Because a round only ever _adds_ courses, the mask it produces is numerically above the one it came from, so a single sweep through masks in increasing order reads only entries that are already final — no recursion or explicit ordering needed.

Eligibility is one bit test and one AND. Build `prereq[c]`, the mask of courses that must precede course `c`, in a single pass over `precedence`. Course `c` may join a round from state `mask` when its bit is clear in `mask` and `prereq[c] & ~mask` is zero, meaning nothing it waits on is still outstanding. Collecting those bits gives the eligible set for the state.

The cap decides how the state branches. With at most `k` eligible, there is nothing to choose: take them all and move to `mask | eligible` in one round. With more than `k` eligible, the round must leave someone out, and _which_ someone matters, so every `k`-subset is enumerated. What does not need enumerating is a smaller round: an extra finished course only ever removes an obstacle, never adds one, so any schedule that takes fewer than `min(k, eligible)` courses in a round can absorb one more without lengthening. That observation is what keeps the branching to `C(eligible, k)` instead of every subset.

States that no schedule can reach sit at a sentinel of `n + 1` rounds and are skipped on sight, so they never seed a transition. The promise that a schedule exists means the all-ones mask is reached, and `dp` at that mask is the answer. Cost is dominated by the states where roughly half the courses are eligible at once and the `k`-subsets are most numerous.

**Complexity:** `O(2^n · (n + C(n, k) · k))` time, `O(2^n)` space.
