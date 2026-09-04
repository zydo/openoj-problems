# Solutions — Count Locker Assignments

## Bitmask dynamic programming over the served set

The two sides are lopsided: never more than 10 students, but locker ids run to 40. So the state should track students, not lockers — a subset of students
needs at most `2^10` states, while the lockers can simply be processed one at a
time. Let `dp[mask]` count the ways to have served exactly the students whose
bits are set in `mask`, using only the lockers already processed.

Sweep the ids from 1 to 40. For each locker, the new table starts as a copy of
the old one — the copy _is_ the option of nobody taking this locker — and then
every nonzero `dp[mask]` is added into the entry `mask | bit` for each student
who accepts this locker and is not yet in `mask`. Because the additions read
the old table while writing the copy, a locker is handed out at most once per
counted way, which is precisely the no-sharing rule.

Lockers nobody accepts are skipped; their copy step would be a no-op. Each
addition is reduced modulo `10^9 + 7` as it happens, and masks that stay at
zero are never expanded. When the sweep ends, `dp[full]` is the answer — every
student must be served, while lockers left empty cost nothing. The table never
exceeds 1024 entries, so 40 lockers × 1024 masks × 10 students is negligible
work. For `lockers = [[6,7,8],[6,7,8],[6,7,8]]` the sweep ends with
`dp[full] = 6`, the six orderings of the three lockers.

**Complexity:** `O(40 · n · 2^n)` time, `O(2^n)` space.
