# Gathering Every Grain

## Description

A number of hens and a number of grains sit at integer positions on a line.
You are given their positions in two integer arrays, `hens` and `grains`.

The moment a hen shares a position with a grain, that grain is eaten —
instantly — and a single hen may eat any number of grains this way. Every
second, each hen steps one unit to the left or one unit to the right, all of
them moving simultaneously and independently.

Return the fewest seconds needed for every grain to be eaten, assuming the
hens coordinate their movements perfectly.

### Example 1

```text
Input: hens = [0], grains = [3,8]
Output: 8
Explanation: The lone hen walks right from position 0. It eats the grain at
position 3 while passing through, and reaches the grain at position 8 at
second 8.
```

### Example 2

```text
Input: hens = [5,10], grains = [1,12]
Output: 4
Explanation: The hen at 5 walks left to the grain at 1, taking 4 seconds.
Meanwhile the hen at 10 walks right to the grain at 12 in 2 seconds. The
slower of the two trips is 4 seconds.
```

### Example 3

```text
Input: hens = [10], grains = [0,2]
Output: 10
Explanation: The single hen sweeps left from position 10, eating the grain
at position 2 while passing through, and arrives at position 0 at second
10.
```

### Constraints

- `1 <= hens.length, grains.length <= 2 * 10⁴`
- `0 <= hens[i], grains[j] <= 10⁹`

## Hints

### Hint 1

If the hens can finish everything within `t` seconds, they can certainly
finish within any larger budget. That monotonicity makes `t` itself the
thing to search for.

### Hint 2

To test a budget, sort both arrays and let the hens, in increasing
position order, split the grains into contiguous runs. For hen `i`, ask
how far right it can reach while still swallowing the leftmost
not-yet-eaten grain.

### Hint 3

The budget under test is achievable exactly when this greedy pass manages
to swallow the rightmost grain.
