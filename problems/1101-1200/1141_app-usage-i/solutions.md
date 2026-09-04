# Solutions — App Usage I

## Filter the window, then count distinct users per day

The window is fixed and closed on both ends: the 30 days ending
2019-07-27 run from 2019-06-28 through 2019-07-27, so a `BETWEEN` on
`event_date` keeps exactly those rows and nothing else — the example's
out-of-window user is dropped by this one predicate. Every event type
counts, so no predicate on `event_type` is needed.

Grouping the survivors by date and counting `DISTINCT user_id` gives
each day's active count: a user with several events, several sessions,
or literal duplicate rows on one day still contributes 1 — example 2's
user 5 counts once on 2019-07-01 no matter how many rows they appear
in. Days with no rows never form a group, which is the statement's rule
that zero-user days are simply absent.

**Complexity:** `O(N)` time over `N` Events rows — one filtered grouped
scan with a per-group user set — and `O(U)` space per day group.
