# Circular Route Start

## Description

A route visits `n` stops laid out in a ring: stop `0`, then stop `1`, and so on
up to stop `n - 1`, which leads back to stop `0`. Two integer arrays describe
it. Arriving at stop `i` earns you `supply[i]` units of fuel, and leaving stop
`i` for the stop after it burns `cost[i]` units.

You pick a stop to begin at, arrive there with nothing in the tank, and then go
all the way round, back to where you began. The tank has no upper limit, but it
can never go below zero — you cannot leave a stop whose departure costs more
than you are holding.

Return the index of a stop from which the whole ring can be completed, or `-1`
if no such stop exists. At most one stop qualifies.

### Example 1

```text
Input: supply = [5,2,6,9,3], cost = [6,5,8,5,1]
Output: 3
Explanation: Beginning at stop 3, the tank reads 4 on leaving stop 3, then 6, 5,
2 and finally 0 on arriving back at stop 3 — never negative. Any other start
runs dry.
```

### Example 2

```text
Input: supply = [4,1,2], cost = [2,5,4]
Output: -1
Explanation: The ring hands out 7 units in total and demands 11, so the tank is
short no matter where you begin.
```

### Example 3

```text
Input: supply = [6,0,4,3], cost = [1,4,2,5]
Output: 0
Explanation: Stop 0 alone banks enough of a lead to cover the two lean stops
that follow, so the very first index already works.
```

### Constraints

- `supply` and `cost` have the same length `n`, with `1 <= n <= 10⁵`
- `0 <= supply[i] <= 10⁴` and `0 <= cost[i] <= 10⁴`
- The tests are built so that at most one stop is a valid start

## Hints

### Hint 1

Only the difference `supply[i] - cost[i]` matters at each stop. Add all `n` of
them: if that total falls below zero the ring is unaffordable from anywhere,
whatever order you visit it in.

### Hint 2

Suppose you set out from stop `s` and the tank first goes negative on leaving
stop `j`. Every stop strictly between `s` and `j` reaches `j` holding no more
than you did — you got there with a non-negative balance they do not have — so
none of them can be the answer either.

### Hint 3

That lets one left-to-right sweep do everything: carry a running balance from
the current candidate, and whenever it drops below zero, move the candidate to
the next index and zero the balance. Combined with the total from Hint 1, the
surviving candidate is the answer.
