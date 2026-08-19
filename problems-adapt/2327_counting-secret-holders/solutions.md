# Solutions — Counting Secret Holders

## Day-indexed counting DP with a sliding window

Let `know[d]` be the number of people who learn the secret on day `d`.
Everyone who learns on a given day behaves the same afterwards, so
counting per day replaces tracking per person: a learner of day `d`
recruits one newcomer on each day from `d + delay` through
`d + forget - 1` and stops counting on day `d + forget`. Each day's
newcomer count therefore depends only on earlier days, and the whole
process runs forward.

On day `day`, the active recruiters are the learners of days `d` with
`d + delay <= day <= d + forget - 1` — the interval
`[day - forget + 1, day - delay]`, cut off at day 1 before which nobody
existed. Summing `know[d]` across that window produces `know[day]`,
stored modulo `10^9 + 7`. Both window edges step forward one day at a
time, the textbook sliding-window shape; at `n <= 1000` a plain inner
loop over the range needs no prefix sums.

When day `n` closes, the holders are precisely the learners of the last
`forget - 1` days: `know[n - forget + 1]` through `know[n]`, since
`forget <= n` keeps the slice inside the array and the seed `know[1] =
1` starts everything. In Example 2 (`n = 6, delay = 1, forget = 4`) the
daily learners are 1, 1, 2, 4, 7, 13 — each day sums the previous three
— and the final four days hold 2 + 4 + 7 + 13 = 26. `delay < forget`
guarantees every learner at least one sharing day; the first example
(`n = 5, delay = 2, forget = 3`) shows the opposite extreme, where a
one-day sharing window leaves just two holders standing.

**Complexity:** `O(n * (forget - delay))` time, `O(n)` space.
