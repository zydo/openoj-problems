# Cheapest Pile Collapse

## Description

Counters sit in `n` piles arranged in a row; `piles[i]` is how many the `i`th
pile holds. You are also given an integer `k`.

A move takes exactly `k` adjacent piles, replaces them with one pile containing
all their counters, and charges you the number of counters combined.

Reduce the whole row to a single pile as cheaply as possible and return that
total cost. If no sequence of moves can get the row down to one pile, return
`-1`.

### Example 1

```text
Input: piles = [6,2,4,3], k = 2
Output: 30
Explanation: Merge the left pair for 8, leaving [8,4,3].
Merge the right pair for 7, leaving [8,7].
Merging those costs 15, leaving [15].
The bill is 8 + 7 + 15 = 30, and no order of merges does better.
```

### Example 2

```text
Input: piles = [2,6,1,3], k = 3
Output: -1
Explanation: A move turns 3 piles into 1, so the count falls by 2: four piles
can only ever reach two, never one.
```

### Example 3

```text
Input: piles = [4,1,3,2,5], k = 3
Output: 21
Explanation: Merge the middle triple for 6, leaving [4,6,5].
That triple merges for 15, leaving [15].
The bill is 6 + 15 = 21, which is the minimum.
```

### Constraints

- `1 <= piles.length <= 30`
- `1 <= piles[i] <= 100`
- `2 <= k <= 30`

## Hints

### Hint 1

Every move trades `k` piles for one, so the pile count drops in steps of
`k - 1`. Which starting counts can ever land on exactly one pile?

### Hint 2

A pile produced by merging always covers consecutive positions of the original
row, so any intermediate state is a partition into contiguous stretches. That
suggests an interval table: cheapest cost to shrink `piles[i..j]` down to
exactly `m` piles.

### Hint 3

For `m >= 2`, split the stretch so the left part becomes one pile and the right
part `m - 1` of them, and try every split point. A stretch sitting at exactly
`k` piles may collapse to one, paying its whole counter total — prefix sums make
that total an `O(1)` lookup.
