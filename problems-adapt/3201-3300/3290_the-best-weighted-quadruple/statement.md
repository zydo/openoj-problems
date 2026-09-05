# The Best Weighted Quadruple

## Description

You are given an array `a` holding exactly four weights and an array `b`
holding at least four values.

Pick four positions of `b`, `i0 < i1 < i2 < i3`, and pair them with the
weights in order: the score of the pick is

`a[0] * b[i0] + a[1] * b[i1] + a[2] * b[i2] + a[3] * b[i3]`.

Return the largest score any ordered quadruple of positions can reach.

### Example 1

```text
Input: a = [1,2,3,4], b = [10,20,30,40]
Output: 300
Explanation: Taking the four positions in order gives
1 * 10 + 2 * 20 + 3 * 30 + 4 * 40 = 300.
```

### Example 2

```text
Input: a = [-2,0,5,-3], b = [1,-4,2,7,-6]
Output: 61
Explanation: Skipping the first value and pairing the rest in order gives
(-2) * (-4) + 0 * 2 + 5 * 7 + (-3) * (-6) = 61, which no other quadruple
beats.
```

### Example 3

```text
Input: a = [9,-1,9,-1], b = [4,0,-2,8,5,-7,6]
Output: 117
Explanation: The best quadruple of positions scores
9 * 4 + (-1) * (-2) + 9 * 8 + (-1) * (-7) = 117.
```

### Constraints

- `a.length == 4`
- `4 <= b.length <= 10⁵`
- `-10⁵ <= a[i], b[i] <= 10⁵`

## Hints

### Hint 1

Think dynamic programming.

### Hint 2

Keep two things in the state: how far the scan into `b` has reached, and
how many of the four weights have already been placed.

### Hint 3

Each position of `b` either extends a partial pairing or is skipped, so
the table only ever reads the previous position — the whole scan collapses
to four rolling numbers.
