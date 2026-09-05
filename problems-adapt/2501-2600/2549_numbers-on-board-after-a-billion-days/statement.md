# Numbers on the Board After a Billion Days

## Description

A single positive integer `n` is written on an otherwise empty board.
A routine then runs once per day for `10⁹` days. On each day, every
number `x` currently written on the board is examined, and every `i`
with `1 <= i <= n` satisfying `x % i == 1` is added to the board too.
Numbers already on the board never leave, and `%` denotes the ordinary
remainder operation (for instance `14 % 3 = 2`).

After all `10⁹` days have elapsed, how many distinct integers are
written on the board?

### Example 1

```text
Input: n = 6
Output: 5
Explanation: On day one, 5 joins because 6 % 5 == 1. The next day
4 and 2 arrive (5 % 4 == 1 and 5 % 2 == 1), and then 3 comes in via
4 % 3 == 1. From that point the board permanently holds 2, 3, 4, 5,
and 6 — five numbers.
```

### Example 2

```text
Input: n = 4
Output: 3
Explanation: First 3 joins (4 % 3 == 1), then 2 follows (3 % 2 == 1),
leaving the board with 2, 3, and 4 forever after.
```

### Example 3

```text
Input: n = 2
Output: 1
Explanation: Only the initial 2 is present, and it invites nothing:
both 2 % 1 and 2 % 2 equal 0, so the board never grows.
```

### Constraints

- `1 <= n <= 100`

## Hints

### Hint 1

Look at what a single number does to its neighbor below: for any
`x >= 2`, `x % (x - 1) == 1`, so `x - 1` is guaranteed to join the
very next day.

### Hint 2

A billion days is effectively infinite time at this scale. The
chain from Hint 1 cascades all the way down, so every integer from
`2` through `n` ends up present.

### Hint 3

Now test the boundary: with `n = 1`, which values of `i` could ever
satisfy the remainder condition?
