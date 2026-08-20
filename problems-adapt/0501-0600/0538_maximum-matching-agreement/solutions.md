# Solutions — Maximum Matching Agreement

## Bitmask DP over Taken Mentors

The pairing is a perfect matching between students and mentors, and with
`m <= 8` the right DP state is the set of mentors already taken. Let
`dp[mask]` be the best total agreement achievable by matching the first
`popcount(mask)` students to exactly the mentors in `mask`. No student
dimension is needed: in any complete pairing the first `i + 1` students
occupy precisely `i + 1` mentors, so the size of the mask alone tells you
which student is being seated next. `dp[0] = 0`; the answer reads
`dp[full - 1]`.

Masks are consumed in ascending numeric order, and since every mask's
submasks are numerically smaller, each state's dependencies are already
final when it is reached. For a given mask the student to place is
`i = popcount(mask) - 1`, and the recurrence extends `dp[mask ^ (1 << j)]`
by `score[i][j]` for every mentor `j` the mask contains. Each state branches
over at most `m` mentors, so the whole table costs `2^m · m` transitions —
at most 2048 at `m = 8`, effectively instant.

The pairwise scores are materialized first as an `m × m` table of agreement
counts, which keeps the DP itself pure integer work, and popcounts come
straight from `bin(mask).count("1")`. Example 1's optimum — student 0 to
mentor 1, student 1 to mentor 2, student 2 to mentor 0, for
3 + 1 + 3 — is exactly the kind of non-greedy arrangement the table
discovers: taking student 0's perfect mentor still leaves student 2 a
perfect match. Degenerate sizes need no branches: with `m = 1` a single
mask is filled.

**Complexity:** `O(2^m · m + m^2 · n)` time, `O(2^m + m^2)` space.
