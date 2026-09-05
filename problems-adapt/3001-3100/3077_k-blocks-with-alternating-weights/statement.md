# K Blocks with Alternating Weights

## Description

Given an integer array `nums` of length `n` and a positive odd integer
`k`, choose exactly `k` non-overlapping blocks of consecutive elements
`b1, b2, ..., bk`, where `bi` ends strictly before `b{i+1}` begins. The
blocks need not tile the whole array.

The score of a choice is

`score = k * sum(b1) - (k - 1) * sum(b2) + (k - 2) * sum(b3) - ... + sum(bk)`

with `sum(bi)` the total of the elements in block `bi`: the leftmost
block is counted `k` times, the next one `-(k - 1)` times, and the signs
keep alternating down to the rightmost block, which counts once.

Return the highest score attainable by choosing exactly `k` blocks.

### Example 1

```text
Input: nums = [3, -1, 4, -1, 5], k = 3
Output: 25
Explanation: Take the first three elements as one block, the fourth
element alone, and the fifth element alone. Then
score = 3 * (3 - 1 + 4) - 2 * (-1) + 5 = 18 + 2 + 5 = 25 — absorbing the
middle -1 into the first block and buying the second -1 alone at weight
-2 both pay off.
```

### Example 2

```text
Input: nums = [7, -2, -2, -2, 7], k = 5
Output: 48
Explanation: With k equal to the array length, every element is its own
block: 5 * 7 - 4 * (-2) + 3 * (-2) - 2 * (-2) + 7 = 48.
```

### Example 3

```text
Input: nums = [-4, -2, -7], k = 1
Output: -2
Explanation: One block must be taken, so the least harmful is the single
element -2; any longer block only drags in more loss.
```

### Constraints

- `1 <= n <= 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`
- `1 <= k <= n`
- `1 <= n * k <= 10⁶`
- `k` is odd.

## Hints

### Hint 1

Work from the right and count what remains: let `dp[i][j][x]` be the best
score still available from `nums[i..]` when `j` more blocks must be
placed, with `x = 1` marking that `nums[i]` belongs to the next block.

### Hint 2

The only reachable zero-cost finish is `dp[n][0][0] = 0`; everything else
on the boundary is negative infinity so it can never win a maximum.

### Hint 3

Counting blocks from the right makes the weight of the next block simply
`j` when `j` is odd and `-j` when it is even. So
`dp[i][j][1] = nums[i] * weight(j) + max(dp[i+1][j-1][0], dp[i+1][j][1])`
— the first option closes this block, the second grows it by one element.

### Hint 4

Skipping `nums[i]` passes to `dp[i+1][j][0]`, and taking it was already
computed, so `dp[i][j][0] = max(dp[i+1][j][0], dp[i][j][1])`.

### Hint 5

The wanted value sits at `dp[0][k][0]`.
