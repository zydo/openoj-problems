# Cheapest Way To Split Into K Blocks

## Description

You are given an integer array `nums` and an integer `k`.

Split `nums` into exactly `k` contiguous blocks — every element belongs to
one block, and the blocks read left to right cover the array. A block whose
elements add up to `s` is charged `s × (s + 1) / 2`, and the charge of a
split is the total over its `k` blocks.

Return the smallest charge any split can reach.

### Example 1

```text
Input: nums = [9,1], k = 2
Output: 46
Explanation: Both blocks are forced: [9] and [1]. Their charges are
9 × 10 / 2 = 45 and 1 × 2 / 2 = 1, for a total of 46.
```

### Example 2

```text
Input: nums = [3,8,2,6,4], k = 2
Output: 144
Explanation: The best cut sits after the 8: blocks [3, 8] and [2, 6, 4].
Their sums are 11 and 12, charged 11 × 12 / 2 = 66 and 12 × 13 / 2 = 78,
so the total is 144. Cutting after the 3 instead would charge 6 + 210 =
216, and after the 2 it would be 190 + 10 = 200.
```

### Example 3

```text
Input: nums = [2,2,2,2], k = 4
Output: 12
Explanation: The split is forced: four blocks of [2]. Each is charged
2 × 3 / 2 = 3, giving 3 + 3 + 3 + 3 = 12.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10⁴`
- `1 <= k <= nums.length`

## Hints

### Hint 1

Prefix sums make any block's charge a constant-time formula. Let
`dp[j][i]` be the cheapest charge for splitting the first `i` elements
into `j` blocks, and try every last cut point `t`:
`dp[j][i] = min(dp[j-1][t] + charge(P[i] - P[t]))`.

### Hint 2

Trying every `t` for every state is `O(k·n²)` — far too slow at these
bounds. Partition DPs like this one usually hide a monotonic structure in
where the best cut falls.

### Hint 3

The charge `s × (s + 1) / 2` is convex in `s`, which makes the block
charge obey the quadrangle inequality. The best cut point then never moves
left as the right end grows, and a divide-and-conquer sweep per layer finds
all best cut points in `O(n log n)` instead of `O(n²)`.
