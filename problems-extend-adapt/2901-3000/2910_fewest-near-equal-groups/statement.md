# Fewest Near-Equal Groups

## Description

You are given a 0-indexed array `balls`, where `balls[i]` is the label of
the `i`-th ball. Split all of the balls into groups under two rules:

- Every group holds balls of a single label only. A label whose ball
  count is larger than one may spread across several groups if that
  helps.
- Group sizes must stay nearly equal: no group may hold more than one
  ball in excess of the smallest group.

Return the fewest number of groups a valid split can use.

### Example 1

```text
Input: balls = [1,1,2,2,2,3,3]
Output: 3
Explanation: Group the balls as {1,1}, {2,2,2} and {3,3}. The sizes 2,
3 and 2 differ by at most one, and two groups cannot work — groups would
then need at least 3 balls each, leaving the label with 2 copies
nowhere to go.
```

### Example 2

```text
Input: balls = [6,6,6,6,6,6,2,2,2,2]
Output: 3
Explanation: Group the balls as {6,6,6}, {6,6,6} and {2,2,2,2}. Sizes 3,
3 and 4 differ by at most one. Two groups cannot work, since groups
would then need at least 5 balls each and the label with 4 copies would
not fit.
```

### Example 3

```text
Input: balls = [1,2,3,4]
Output: 4
Explanation: All four labels are distinct, so every ball forms its own
group of size 1.
```

### Constraints

- `1 <= balls.length <= 10⁵`
- `1 <= balls[i] <= 10⁹`

## Hints

### Hint 1

Only the multiset of label frequencies matters — a label with `f` copies
behaves identically wherever its balls sit. Count the frequencies first.

### Hint 2

The near-equal rule means some base size `s` exists for which every
group holds exactly `s` or `s + 1` balls. A group needs at least `s`
copies, so `s` can never exceed the smallest frequency; `s = 1` always
works.

### Hint 3

For a fixed `s`, a label with `f` copies fits into `g` groups exactly
when `g·s ≤ f ≤ g·(s + 1)`, so compute the cheapest such `g` for every
label.

### Hint 4

To price one label: write `f = a·(s + 1) + b`. If `b = 0`, `a` groups
suffice; otherwise the `b` leftovers can be absorbed only by demoting
`b` full groups to size `s`, which needs `s - b ≤ a` and costs `a + 1`
groups. If that fails, this `s` is unusable.

### Hint 5

The total for a given `s` is the sum of the per-label prices, and the
answer is the smallest total over all usable `s`.
