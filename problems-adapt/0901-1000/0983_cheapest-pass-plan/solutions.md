# Solutions — Cheapest Pass Plan

## Dynamic programming over calendar days

The riding days are few but the choices attach to the calendar, so index the
table by calendar day instead of by position in `days`. Write `dp[d]` for the
least money that buys coverage of every riding day at or before day `d`. The
largest riding day is at most `365`, so the table is tiny.

Two rules fill it. A day nobody rides offers no decision at all, so `dp[d]`
inherits `dp[d - 1]` unchanged. A riding day `d` must lie inside some pass, and
that pass is one of three lengths, so the recurrence branches three ways.

The step that makes the recurrence finite is noticing that a covering pass can
always be slid until it _ends_ on day `d`. Sliding it later would push its
start past `d` and stop covering `d`; sliding it earlier only shrinks the set
of days behind `d` that it happens to catch, and `dp` never decreases, so that
cannot help. With the end pinned, a pass of length `u` occupies exactly the
window `(d - u, d]`, and everything strictly before that window is somebody
else's problem — already priced at `dp[d - u]`. Hence

`dp[d] = min over u in {1, 7, 30} of dp[max(0, d - u)] + price(u)`,

with `dp[0] = 0`. The clamp is what lets a thirty-day pass be activated
"before the calendar starts": its window swallows everything up to `d`, and the
term correctly reduces to the pass's own price.

Sweeping `d` from `1` to the last riding day and reading off `dp[last]` answers
the question. No case needs special handling. In Example 1 the sweep prices the
pair of days 2 and 3 at 8 by taking single-day passes twice, then at day 11 the
seven-day option finally undercuts the running single-day total, and day 25
adds a final 4 for 23. In Example 3 the table has one interesting row and the
minimum simply picks the thirty-day price because it is the smallest of the
three.

**Complexity:** `O(D)` time and `O(D)` space, where `D` is the last riding day
and never exceeds 365.
