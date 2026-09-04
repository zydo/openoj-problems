# Breaking a Number Down to Units

## Description

You are given an integer `n`.

In one operation you pick an integer `x` greater than `1` and break it into
two positive integers `a` and `b` with `a + b = x`. The operation costs
`a * b`.

Keep operating until nothing is left but `n` copies of the number `1`.
Return the smallest possible total cost of all the operations.

### Example 1

```text
Input: n = 5
Output: 10
Explanation: One way is to break 5 into 1 and 4 (cost 4), 4 into 1 and 3
(cost 3), 3 into 1 and 2 (cost 2), and finally 2 into 1 and 1 (cost 1).
The total is 4 + 3 + 2 + 1 = 10, and no plan can do better.
```

### Example 2

```text
Input: n = 8
Output: 28
Explanation: Breaking evenly also works: 8 into 4 and 4 (cost 16), each 4
into 2 and 2 (cost 4 each), and each 2 into 1 and 1 (cost 1 each). The
total is 16 + 4 + 4 + 1 + 1 + 1 + 1 = 28.
```

### Example 3

```text
Input: n = 1
Output: 0
Explanation: `n` is already a single `1`, so no operation is needed.
```

### Constraints

- `1 <= n <= 500`

## Hints

### Hint 1

Ask what one charge of `a * b` actually pays for: it counts the pairs of
final unit pieces that end up on opposite sides of that break.

### Hint 2

However you order the breaks, every unordered pair of unit pieces is
separated exactly once, so every complete plan costs the same.

### Hint 3

The number of unordered pairs among `n` units is `n * (n - 1) / 2`, and
repeatedly breaking off a single `1` achieves it.
