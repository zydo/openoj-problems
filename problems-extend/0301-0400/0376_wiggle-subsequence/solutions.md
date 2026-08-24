# Solutions — Wiggle Subsequence

## One pass, count direction flips

Everything that matters about a wiggle subsequence happens at the points
where the direction of travel changes. Walk the array and watch the sign of
each step: equal neighbors never help, because a zero difference is neither
positive nor negative and dropping duplicates loses nothing, so only strict
rises and strict falls count. Between two consecutive direction changes the
values move monotonically one way, and the answer is the first element plus
one for every change of direction — the local extrema together with the two
endpoints.

That count is optimal in both directions. A wiggle subsequence cannot keep
two interior elements of one monotone stretch, since the differences
between them would then share a sign; each stretch can contribute at most
its boundary points, so no subsequence beats the extrema. Conversely,
deleting everything between two direction changes is itself optimal: the
surviving sequence steps up into each extremum and down out of it, so its
differences strictly alternate, which shows the extrema count is attainable.

The pass keeps `count` starting at 1 for the first element and `direction`
remembering the sign of the last counted move (0 before any move). Each
strict step in a fresh direction increments `count`; a step that continues
the current direction, or equals its neighbor, changes nothing. A single
element returns 1, an all-equal array returns 1, and two distinct elements
return 2 — exactly the trivial cases the statement grants — and the whole
scan is one pass with two integer registers, which also answers the
follow-up.

**Complexity:** `O(n)` time, `O(1)` space.
