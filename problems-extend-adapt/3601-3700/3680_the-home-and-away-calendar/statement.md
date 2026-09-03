# The Home-And-Away Calendar

## Description

A league has `n` teams, labeled `0` through `n - 1`. Draw up a match
calendar in which:

- Every two different teams meet exactly twice — each side hosting once.
- One match fills each day: the calendar is a single consecutive run of
  days, and `calendar[i]` is the fixture staged on day `i`.
- No team plays on two days in a row.

Return the calendar as a 2D integer array, where `calendar[i][0]` is the
home side and `calendar[i][1]` the visitors on day `i`. If the conditions
cannot all be met, return an empty array.

The underlying task admits many valid calendars, but this judge compares
outputs exactly, so one canonical construction is pinned. For `n <= 4` no
calendar exists at all: return `[]`. For `n == 5`, return exactly the
fixed twenty-fixture list `[0,1],[2,3],[0,4],[1,2],[3,4],[0,2],[1,3],
[2,4],[0,3],[1,4],[2,0],[3,1],[4,0],[2,1],[4,3],[1,0],[3,2],[4,1],[3,0],
[4,2]`.

For `n >= 6`, lay the fixtures out with the circle method and read the
rounds off day by day. When `n` is even, seat teams `0` through `n - 2`
around a circle and leave team `n - 1` stationary; round `r`, for each
`r = 0, 1, ..., n - 2`, opens with the fixture `[n - 1, r]` and continues
with `[(r + k) mod (n - 1), (r - k) mod (n - 1)]` for `k = 1, ...,
(n - 2) / 2`. When `n` is odd, seat all teams `0` through `n - 1` on the
circle; round `r`, for each `r = 0, 1, ..., n - 1`, holds just the
fixtures `[(r + k) mod n, (r - k) mod n]` for `k = 1, ..., (n - 1) / 2`.
Emit the first half by walking the rounds in order: each round begins with
the first fixture in its list that shares no team with the match emitted
just before it — in the very first round, simply take the first listed
fixture — and the round's remaining fixtures then follow in listed order.
The second half replays those same rounds with every fixture's home and
away sides exchanged, carrying the same rule on from the final match of
the first half. No two fixtures inside one round share a team, and for
`n >= 6` every round lists at least three fixtures while at most two can
touch the preceding match, so the opening scan is never stuck.

### Example 1

```text
Input: n = 4
Output: []
Explanation: Twelve matches are needed and each of the four teams would
appear in six of them — exactly half of the twelve days. Every team must
therefore sit out precisely one day of each adjacent pair, and no ordering
of the twelve fixtures manages that for all four teams at once. The
conditions cannot be met, so the answer is [].
```

### Example 2

```text
Input: n = 5
Output: [[0,1],[2,3],[0,4],[1,2],[3,4],[0,2],[1,3],[2,4],[0,3],[1,4],
[2,0],[3,1],[4,0],[2,1],[4,3],[1,0],[3,2],[4,1],[3,0],[4,2]]
Explanation: Five teams need twenty fixtures in all, and this is exactly
the pinned five-team list above; reading across it, no team appears on two
neighboring days.
```

### Constraints

- `2 <= n <= 50`

## Hints

### Hint 1

Start from the calendar's arithmetic: a team with `2(n - 1)` appearances
cannot squeeze them into days that offer fewer non-adjacent slots, which
is what sinks the small cases.

### Hint 2

The pinned route is the circle method — one round-robin per half, with the
second half replaying the first and swapping venues.

### Hint 3

Inside a round no team appears twice, so the only trouble is the seam
between neighboring rounds: at most two fixtures of the next round touch
the match just emitted.

### Hint 4

Open each round with its first fixture that avoids both teams of the
previous day's match, then read the rest out in list order; from `n = 6`
up, every round holds enough fixtures for that scan to succeed.
