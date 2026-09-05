# The Fewest Queries To Zero IV

## Description

You are given an integer array `nums` of length `n` and an array
`queries`, where `queries[i] = [li, ri, vali]`.

Carrying out `queries[i]` means: pick any subset of the positions inside
`[li, ri]` and lower the value stored at each chosen position by exactly
`vali`. Different queries — and different positions inside one query's
range — may be picked or skipped independently.

An array whose every entry is `0` is called a zero array.

Return the smallest non-negative `k` for which the first `k` queries,
carried out in their given order with subsets chosen well, can leave
`nums` as a zero array. If no prefix of queries achieves this, return
`-1`.

### Example 1

```text
Input: nums = [3,1,2], queries = [[0,2,1],[0,2,1],[0,1,1]]
Output: 3
Explanation: Pick positions 0 and 2 in the first query, 0 and 2 in the
second, and 0 and 1 in the third. The array walks through [2,1,1],
[1,1,0], and finally [0,0,0]. Two queries are not enough — index 0 can
have been lowered at most twice by then — so k = 3.
```

### Example 2

```text
Input: nums = [5], queries = [[0,0,2],[0,0,3],[0,0,4],[0,0,1]]
Output: 2
Explanation: The first two queries decrement index 0 by 2 and 3; selecting
index 0 in both reaches exactly 5. No single query's value is 5, so k = 2
is minimal.
```

### Example 3

```text
Input: nums = [4,1], queries = [[0,1,2],[0,0,1]]
Output: -1
Explanation: Index 0 is only ever offered decrements of 2 and 1, whose
possible totals are 0, 1, 2, and 3 — never 4. The array can never become
all zero.
```

### Example 4

```text
Input: nums = [0,0,0], queries = [[0,2,5]]
Output: 0
Explanation: nums is a zero array before any query is carried out, so
k = 0.
```

### Constraints

- `1 <= nums.length <= 10`
- `0 <= nums[i] <= 1000`
- `1 <= queries.length <= 1000`
- `queries[i] = [li, ri, vali]`
- `0 <= li <= ri < nums.length`
- `1 <= vali <= 10`

## Hints

### Hint 1

Enlarging the prefix never hurts: any subset choice available to the
first `k` queries is still available to the first `k+1`. So the smallest
workable `k` can be found by scanning prefixes in order and stopping at
the first one that suffices.

### Hint 2

Positions are independent: a query may include or skip every position of
its range separately, so position `i` can reach zero within the first `k`
queries exactly when `nums[i]` is some subset sum of the `val` values of
the first `k` queries whose range covers `i`. Maintain one subset-sum
reachability set per position, folding in one `val` per query, and stop
counting a position once its target becomes reachable.
