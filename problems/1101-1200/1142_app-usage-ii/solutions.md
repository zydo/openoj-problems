# Solutions — App Usage II

## Count distinct sessions per user, then average

The unit of counting is a `(user, session)` pair, not an event: a
session with one event and a session with fifty both count once, which
is exactly what `COUNT(DISTINCT session_id)` inside a per-user group
computes — example 2's duplicate row for session 21 does not invent a
second session. The inner query first narrows `Events` to the closed
window 2019-06-28 through 2019-07-27 (the 30 days ending 2019-07-27),
then groups by `user_id`. Grouping over the filtered rows gives the
statement's second rule for free: a user appears in the inner result
only when they have at least one in-window event, and a session that
straddles the boundary survives through its in-window half.

The outer query averages the per-user session counts and rounds to two
decimal places. With no in-window events at all, the inner result is
empty and `AVG` yields `NULL`, the natural answer for an undefined
average.

**Complexity:** `O(N)` time over `N` Events rows — one filtered grouped
scan with a per-user session set — and `O(U × S)` space for `U` users
and their distinct sessions.
