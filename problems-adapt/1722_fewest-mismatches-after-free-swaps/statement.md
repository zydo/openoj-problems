# Fewest Mismatches After Free Swaps

## Description

You are given two integer arrays `source` and `target` of equal length, and a
list `allowedSwaps` of index pairs. Each entry `[a, b]` permits you to trade
the values at positions `a` and `b` of `source` — and any given pair may be
used as many times as you like, in any order.

The mismatch count of the two arrays is the number of positions holding
different values.

Rearrange `source` through any sequence of permitted trades and return the
smallest mismatch count against `target` you can reach.

### Example 1

```text
Input: source = [3,7,9,4], target = [9,3,7,4], allowedSwaps = [[0,1],[1,2]]
Output: 0
Explanation: Positions 0, 1 and 2 trade freely among themselves, and they hold
{3,7,9} while target wants {9,3,7} there — the same three values, so a
rearrangement lines them all up. Position 3 may not trade, and it already
holds 4 in both arrays.
```

### Example 2

```text
Input: source = [6,1,2,9], target = [1,6,9,2], allowedSwaps = [[0,1]]
Output: 2
Explanation: Trading positions 0 and 1 fixes the front, but 2 and 9 sit at
positions that may not trade, so both stay wrong.
```

### Example 3

```text
Input: source = [5,5,3,1], target = [5,3,3,1], allowedSwaps = [[0,1],[1,2],[2,3]]
Output: 1
Explanation: Every position trades with every other, yet source carries two 5s
and one 3 while target wants one 5 and two 3s. One 5 has nowhere to go, so a
single mismatch remains.
```

### Constraints

- `source` and `target` have the same length `n`, with `1 <= n <= 10⁵`
- `1 <= source[i], target[i] <= 10⁵`
- `0 <= allowedSwaps.length <= 10⁵`
- every entry of `allowedSwaps` is a pair of distinct positions `0 <= a, b <= n - 1`

## Hints

### Hint 1

Draw the positions as nodes and each permitted trade as an edge. What can a
sequence of trades achieve inside one connected piece?

### Hint 2

Within one connected piece the values can land in any order at all — and no
value can ever leave its piece.

### Hint 3

A piece can match `target` at exactly the positions covered by the values the
two arrays share. Compare what `source` holds in the piece against what
`target` wants there, value by value; every value that fails to pair off costs
one mismatch.
