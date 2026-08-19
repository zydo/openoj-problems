# Non-Adjacent Sum Under Point Updates

## Description

You are given an integer array `nums` and a list of updates `queries`, where
`queries[i] = [posi, xi]`.

Process the updates in order. For each one, first overwrite `nums[posi]` with
`xi`, then find the largest achievable sum of a subsequence of `nums` in which
no two picked entries sit at neighboring positions. Picking nothing is allowed
and sums to 0.

Return the total of the per-update answers, modulo `10⁹ + 7`.

A subsequence keeps the original order but may skip any entries.

### Example 1

```text
Input: nums = [4,6,2,7], queries = [[1,-3],[0,1]]
Output: 19
Explanation:
After the first update nums = [4,-3,2,7]; the best non-adjacent selection is
the ends, 4 + 7 = 11.
After the second update nums = [1,-3,2,7]; again the ends win, 1 + 7 = 8.
The total is 11 + 8 = 19.
```

### Example 2

```text
Input: nums = [-4,-6], queries = [[0,-9]]
Output: 0
Explanation:
After the update nums = [-9,-6]; every entry is negative, so the empty
selection with sum 0 is best.
```

### Example 3

```text
Input: nums = [5,1,5], queries = [[1,4],[1,-4],[1,9]]
Output: 30
Explanation:
The three updates all touch position 1. After them nums is [5,4,5], [5,-4,5],
and [5,9,5]; each time the two non-adjacent ends outscore the middle entry
(even 9 alone loses to 5 + 5), so the answers are 10, 10, 10.
```

### Constraints

- `1 <= nums.length <= 5 * 10⁴`
- `-10⁵ <= nums[i] <= 10⁵`
- `1 <= queries.length <= 5 * 10⁴`
- `queries[i] == [posi, xi]`
- `0 <= posi <= nums.length - 1`
- `-10⁵ <= xi <= 10⁵`

## Hints

### Hint 1

One update only changes one position, yet a plain dynamic programming pass
over the whole array per update is already too slow. What structure re-uses
the untouched parts?

### Hint 2

The constraint couples only adjacent positions, so a segment's contribution
can be summarized by whether each of its two boundary entries is picked.

### Hint 3

Store, per segment node, four numbers indexed by (left end picked?, right end
picked?) and merge neighbors while forbidding the pair that picks across the
seam.
