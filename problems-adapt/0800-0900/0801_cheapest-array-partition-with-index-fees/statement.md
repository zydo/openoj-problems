# Cheapest Array Partition With Index Fees

## Description

You are given two integer arrays `nums` and `cost` of equal length, and an
integer `k`.

Cut `nums` into consecutive, non-empty blocks. Number the blocks `1, 2, 3, …`
from left to right. When block number `i` covers positions `l` through `r`,
charge it

```text
(nums[0] + nums[1] + … + nums[r] + k * i) * (cost[l] + … + cost[r]).
```

Two details in that formula deserve attention: the left factor adds up `nums`
from the very start of the array through `r` — the whole prefix, not just the
block — and the index `i` grows with every block you create.

Return the smallest total charge over all ways of cutting.

### Example 1

```text
Input: nums = [2,7,3], cost = [5,1,4], k = 2
Output: 100
Explanation: Cut into [2] and [7,3]. The first block pays (2 + 2*1) * 5 = 20;
the second pays (2 + 7 + 3 + 2*2) * (1 + 4) = 16 * 5 = 80. Cutting into three
blocks instead gives 20 + 13 + 72 = 105, and keeping [2,7] together gives 130.
```

### Example 2

```text
Input: nums = [6,2], cost = [3,9], k = 5
Output: 156
Explanation: One block covering everything pays (6 + 2 + 5*1) * (3 + 9) = 13 *
12 = 156. Splitting raises the second block's index fee and costs 195.
```

### Example 3

```text
Input: nums = [1,5,2,8], cost = [2,3,1,4], k = 3
Output: 154
Explanation: Cut into [1,5,2] and [8]: (1 + 5 + 2 + 3) * (2 + 3 + 1) = 11 * 6
= 66 for the first block, then (1 + 5 + 2 + 8 + 3*2) * 4 = 22 * 4 = 88, a
total of 154. The cut [1,5] | [2,8] comes within one unit at 155.
```

### Constraints

- `1 <= nums.length <= 1000`
- `cost.length == nums.length`
- `1 <= nums[i] <= 1000` and `1 <= cost[i] <= 1000`
- `1 <= k <= 1000`

## Hints

### Hint 1

Solve suffixes: the cheapest way to cut what remains from each position,
filling the table from the right.

### Hint 2

The index fee sounds global, but it telescopes — a block starting at position
`l` can be charged `k` times the weight mass from `l` to the array's end, no
matter what happens to its right.

### Hint 3

Prefix sums of both arrays price any block in constant time; remember the
value prefix ends at the block's right edge while the weight sum stays inside
the block.
