# Minimum Largest Pile

## Description

You are given an integer array `piles`, where `piles[i]` is the number of
stones in the `i`th pile, and an integer `maxSplits`.

Each move takes one pile and splits it into two piles that each hold a positive
number of stones: a pile of `5` may become piles of `1` and `4`, or piles of
`2` and `3`.

You may make at most `maxSplits` moves. Your score afterwards is the number of
stones in the largest pile. Return the smallest score you can reach.

### Example 1

```text
Input: piles = [7], maxSplits = 2
Output: 3
Explanation: Split the 7 into 4 and 3, then split the 4 into 2 and 2. The
largest pile now holds 3 stones, and no two moves reach a largest pile of 2.
```

### Example 2

```text
Input: piles = [10,3,6], maxSplits = 3
Output: 4
Explanation: Split the 10 into 4, 3 and 3 (two moves) and the 6 into 4 and 2.
No pile exceeds 4 stones, and three moves cannot bring every pile down to 3.
```

### Example 3

```text
Input: piles = [4,9,2], maxSplits = 6
Output: 2
Explanation: One move on the 4 and four moves on the 9 leave piles of size at
most 2. A largest pile of 1 would need twelve moves in total, one per stone
beyond the first in each pile.
```

### Constraints

- `1 <= piles.length <= 10⁵`
- `1 <= piles[i] <= 10⁹`
- `1 <= maxSplits <= 10⁹`

## Hints

### Hint 1

Turn the question around: for a candidate cap `p`, how many moves does it take
to bring every pile down to at most `p` stones?

### Hint 2

A pile of `v` stones must finish as no fewer than `ceil(v / p)` pieces, so it
costs `ceil(v / p) - 1` moves — and that total falls as `p` rises, which makes
the cap binary-searchable.
