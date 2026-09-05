# Folding Signs For The Quickest Drive

## Description

A drive follows a straight road `l` kilometers long. You are given an
integer `n`, an integer `k`, and two integer arrays `position` and `time`,
each of length `n`.

`position` lists the kilometer marks of `n` signs in strictly increasing
order, with `position[0] = 0` and `position[n - 1] = l`. For every index
`i`, `time[i]` is the driving pace of the stretch between sign `i` and
sign `i + 1`, measured in minutes per kilometer.

You must perform exactly `k` folds. One fold picks two neighboring signs
at indices `i` and `i + 1` (so `i > 0` and `i + 1 < n`) and:

- sets the time at index `i + 1` to `time[i] + time[i + 1]`;
- removes the sign at index `i`.

Return the fewest minutes a drive from kilometer `0` to kilometer `l` can
take once exactly `k` folds have been made.

### Example 1

```text
Input: l = 9, n = 4, k = 1, position = [0,2,5,9], time = [3,1,4,2]
Output: 13
Explanation: Fold the signs at indices 2 and 3: the sign at index 2 goes
away and the time at index 3 becomes 4 + 2 = 6, leaving
position = [0,2,9] and time = [3,1,6]. The drive is billed 0 → 2 at
3 min/km (6 minutes) and 2 → 9 at 1 min/km (7 minutes) — 13 minutes in
all. Folding the other pair instead would cost 35.
```

### Example 2

```text
Input: l = 12, n = 6, k = 2, position = [0,1,4,6,9,12],
time = [5,2,8,1,3,7]
Output: 46
Explanation: Fold away the sign at km 1 — its time 2 is absorbed by the
sign at km 4, which now holds 10 — and fold away the sign at km 9, whose
time 3 is absorbed by the final sign. The survivors sit at
position = [0,4,6,12] with time = [5,10,1,10], so the billing is
4 km × 5 = 20, then 2 km × 10 = 20, then 6 km × 1 = 6: 46 minutes.
```

### Example 3

```text
Input: l = 6, n = 3, k = 0, position = [0,2,6], time = [3,4,1]
Output: 22
Explanation: No folds are permitted, so the drive is billed exactly as
given: 2 km at 3 min/km plus 4 km at 4 min/km comes to 22 minutes.
```

### Constraints

- `1 <= l <= 10⁵`
- `2 <= n <= min(l + 1, 50)`
- `0 <= k <= min(n - 2, 10)`
- `position.length == n`
- `position[0] = 0` and `position[n - 1] = l`
- `position` is sorted in strictly increasing order.
- `time.length == n`
- `1 <= time[i] <= 100`
- `1 <= sum(time) <= 100`

## Hints

### Hint 1

Only the pace stored on the sign where a stretch begins is ever billed,
so a final configuration is described entirely by which signs survive.

### Hint 2

A fold never moves a kilometer mark — it only re-prices the stretch that
now starts at the surviving right neighbor. Exactly `k` folds means
exactly `k` interior signs are gone.

### Hint 3

Define `dp[i][j][s]` as the least driving time over the prefix ending at
a surviving sign `i` after `j` folds, where the `s` signs immediately to
the left of `i` were folded away in one run; that run length alone fixes
sign `i`'s folded pace.

### Hint 4

Extend each state to the next surviving sign `q`: charge
`(position[q] - position[i])` at sign `i`'s pace, add the skipped count
`q - i - 1` to `j`, and let prefix sums look up every folded pace in
constant time.
