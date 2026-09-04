# Sequences With K Records

## Description

Arrange the integers `1` through `n` in a row. An element is a **record**
when it is strictly larger than every element to its left; the first
element is always a record.

Given `n` and `k`, count the arrangements in which exactly `k` elements
are records. The count can be astronomically large, so report it
**modulo** `10^9 + 7`.

### Example 1

```text
Input: n = 4, k = 2
Output: 11
Explanation: Eleven of the 24 arrangements qualify. Two of them are [1,4,2,3],
whose records are 1 and 4, and [3,1,2,4], whose records are 3 and 4.
```

### Example 2

```text
Input: n = 6, k = 1
Output: 120
Explanation: A single record means the 6 comes first — nothing after it can
surpass it. The remaining five values may follow in any order, 5! = 120 ways.
```

### Example 3

```text
Input: n = 20, k = 5
Output: 745534512
Explanation: The count of arrangements of 1..20 with exactly five records,
reduced modulo 10^9 + 7.
```

### Constraints

- `1 <= n <= 1000`
- `1 <= k <= n`

## Hints

### Hint 1

Let `f(i, j)` count the rows of `{1, …, i}` with `j` records. To build a
recurrence, single out one value and ask where it stands — the _smallest_
is the one whose position is easiest to reason about.

### Hint 2

If the smallest of the `i` values stands first, it is a record and the rest
is a row of `i - 1` values with `j - 1` records. Otherwise a larger value
precedes it, it can never be a record, and deleting it from any of its
`i - 1` other positions leaves `j` unchanged.
