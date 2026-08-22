# Widest Gap Choosing One Point Per Interval

## Description

You are given an integer array `start` and an integer `d`. Entry `i` names
the closed interval `[start[i], start[i] + d]`, so there are `n` intervals in
all.

Pick exactly one integer from each interval. The spread of a selection is the
smallest pairwise distance between two of the picked integers.

Return the largest spread any selection can reach.

### Example 1

```text
Input: start = [1,4,9], d = 3
Output: 5
Explanation: The intervals are [1,4], [4,7] and [9,12]. Taking 1, then 7,
then 12 leaves consecutive distances 6 and 5, and the pair (7, 12) is the
tightest — no selection pushes every pair further apart than 5.
```

### Example 2

```text
Input: start = [0,5,5], d = 0
Output: 0
Explanation: With zero width every interval is a single fixed point, and the
two 5s coincide, so some pair of picks always sits at distance 0.
```

### Example 3

```text
Input: start = [10,10], d = 8
Output: 8
Explanation: Both intervals are [10,18]. Send one pick to each end and the
distance between them equals the interval width, 8; nothing wider fits inside
a single interval.
```

### Constraints

- `2 <= start.length <= 10⁵`
- `0 <= start[i] <= 10⁹`
- `0 <= d <= 10⁹`

## Hints

### Hint 1

If some selection achieves a tightest distance of `x`, what does that say
about achieving any smaller value? What standard technique does that
monotonicity invite?

### Hint 2

For a candidate `x`, test it greedily on intervals ordered by left endpoint:
anchor the first pick at its leftmost point, and give every later interval
the smallest allowed point at distance at least `x` from the last pick.

### Hint 3

Why is leftmost placement safe? Exchange any feasible selection for the
greedy one and argue the greedy never runs out of room first.
