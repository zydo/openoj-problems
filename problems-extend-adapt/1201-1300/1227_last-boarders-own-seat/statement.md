# Last Boarder's Own Seat

## Description

A plane has exactly `n` seats, and `n` passengers board one at a time, each
holding a ticket for a distinct seat. The first passenger has lost their
ticket and sits in a uniformly random seat. Every later passenger takes
their own seat if it is still free; otherwise they too choose uniformly at
random among the seats that remain.

Return the probability that the `n`th and final passenger ends up in their
own seat.

### Example 1

```text
Input: n = 1
Output: 1.00000
Explanation: With a single passenger and a single seat, the lone boarder
cannot miss.
```

### Example 2

```text
Input: n = 3
Output: 0.50000
Explanation: The confused first boarder picks seat 1, seat 2, or seat 3
with equal odds. If they take seat 1, everyone settles correctly; if they
take seat 3, the last passenger surely loses; if they take seat 2, the
second boarder's coin flip between seats 1 and 3 decides it either way —
all told, exactly half the outcomes favor the last boarder.
```

### Example 3

```text
Input: n = 7
Output: 0.50000
Explanation: The same balance holds no matter how many passengers board.
```

### Constraints

- `1 <= n <= 10⁵`

## Hints

### Hint 1

Let `f(n)` be the answer for `n` passengers. Check `f(1) = 1` and
`f(2) = 1/2` first, then compute `f(3)`, `f(4)`, `f(5)` from them — a
pattern appears.

### Hint 2

The random picks keep passing one unresolved claim along, and that claim
is only ever settled when someone takes seat 1 or seat `n`; those two
seats stay free until one of them is taken, with equal odds either way.
