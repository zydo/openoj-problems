# Product Remainder Tallies II

## Description

You are given an array `nums` of positive integers, a positive integer `k`,
and a 2D array `queries` where `queries[i] = [indexi, valuei, starti, xi]`.

Here the operation keeps a non-empty prefix of `nums`: you delete one
suffix, which may be empty, and `nums` must remain non-empty.

For a fixed query, take these two steps in order:

- Set `nums[indexi] = valuei`. This change persists for all later queries.
- Delete the prefix `nums[0..(starti - 1)]` (the empty prefix when
  `starti` is 0).

After those steps, the tally for `xi` is the number of ways to delete one
suffix so that the product of what remains is congruent to `xi` modulo `k`.
Return an array `answers` of length `queries.length` where `answers[i]` is
the tally for the i-th query.

Note that this version counts surviving prefixes of a tail, not middles as
in the first version.

### Example 1

```text
Input: nums = [2,3,4], k = 3, queries = [[1,5,0,1],[2,6,1,0]]
Output: [2,1]
Explanation:
Query 0 sets nums = [2,5,4] and removes the empty prefix. Keeping [2]
gives product 2; keeping [2,5] gives 10 and keeping [2,5,4] gives 40 —
both ≡ 1 (mod 3) — so the tally for 1 is 2.
Query 1 sets nums = [2,5,6] and removes the prefix [2]. Keeping [5] gives
product 5 and keeping [5,6] gives 30 ≡ 0 (mod 3), so the tally for 0 is 1.
```

### Example 2

```text
Input: nums = [4,6,8], k = 2, queries = [[0,3,0,0],[1,5,2,1]]
Output: [2,0]
Explanation:
Query 0 sets nums = [3,6,8] and removes the empty prefix. Keeping [3]
gives an odd product, while keeping [3,6] and [3,6,8] both give even
products, so the tally for 0 is 2.
Query 1 sets nums = [3,5,8] and removes the prefix [3,5], leaving only the
option of keeping [8] — an even product — so the tally for 1 is 0.
```

### Example 3

```text
Input: nums = [1,2,3], k = 5, queries = [[2,4,1,3],[0,7,0,2]]
Output: [1,1]
Explanation:
Query 0 sets nums = [1,2,4] and removes the prefix [1]; keeping [2,4]
gives product 8 ≡ 3 (mod 5), the only way to reach 3.
Query 1 sets nums = [7,2,4] and removes the empty prefix; keeping [7]
gives product 7 ≡ 2 (mod 5), while keeping [7,2] gives 14 and keeping
[7,2,4] gives 56 — neither ≡ 2 (mod 5) — so the tally for 2 is 1.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= 5`
- `1 <= queries.length <= 2 * 10⁴`
- `queries[i] == [indexi, valuei, starti, xi]`
- `0 <= indexi <= nums.length - 1`
- `1 <= valuei <= 10⁹`
- `0 <= starti <= nums.length - 1`
- `0 <= xi <= k - 1`

## Hints

### Hint 1

A query only ever looks at the tail `nums[start..]`, and the ways to
delete a suffix are exactly the ways to keep a prefix of that tail — count
prefixes.

### Hint 2

Store the array in a segment tree whose every node keeps, for each
remainder in `0..k - 1`, how many prefixes of its segment produce that
product remainder, together with the whole segment's product.

### Hint 3

A point update re-merges one leaf-to-root path; a query folds the O(log n)
segments that cover `nums[start..]` from left to right, carrying the
running product into the node counts.
