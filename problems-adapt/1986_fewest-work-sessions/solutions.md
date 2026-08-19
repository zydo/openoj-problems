# Solutions — Fewest Work Sessions

## Subset-Indexed Dynamic Programming

Fourteen jobs means `2¹⁴` subsets, and a partial schedule compresses into
just two numbers: how many sessions it has opened, and how much room is left
in the one still open. Earlier sessions are sealed — nothing more can be
added to them — so `dp[mask]` keeps the best pair `(sessions, leftover)`
known for completing exactly the job set `mask`, ordered lexicographically:
fewer sessions first, and among equals more leftover room, since a roomier
open session can imitate every continuation of a tighter one.

Filling masks in increasing order finalizes every subset before it gets
extended. Out of each state the code tries every job absent from the mask:
one that fits within `leftover` moves the pair to
`(sessions, leftover - cost)`, and one that does not opens a new session,
`(sessions + 1, sessionTime - cost)`; a candidate is stored when it beats
what `dp[mask | bit]` already holds. Jobs are always appended in index
order, and every partition of jobs into sessions is realizable by some such
order, so no packing escapes the sweep.

Unvisited subsets sit at `(infinity, 0)` and are skipped. The promise that
`sessionTime` covers the longest job guarantees each job fits into a fresh
session, so `dp[FULL]` is always reached, and its session count is the
answer. For `[7,3,5,2,4]` with capacity 9 the sweep finds the three-session
packing `7+2`, `5+4`, `3` — optimal, since the 21 total hours already force
three sessions.

**Complexity:** `O(2ⁿ · n)` time, `O(2ⁿ)` space.
