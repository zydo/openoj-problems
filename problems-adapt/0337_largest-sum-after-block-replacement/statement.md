# Largest Sum After Block Replacement

## Description

You are given an integer array `arr` and an integer `k`.

Cut the array into consecutive blocks, each no longer than `k`. Then every entry
of a block is overwritten with that block's maximum value.

Return the largest total the array can sum to after the overwrites.

### Example 1

```text
Input: arr = [2,12,6,10,3,8], k = 3
Output: 66
Explanation: Cut as [2,12,6] and [10,3,8]. The first block becomes three 12s
and the second three 10s, giving 36 + 30 = 66 — no other legal cut beats it.
```

### Example 2

```text
Input: arr = [1,5,2], k = 3
Output: 15
Explanation: One block holding everything: all three entries become 5.
```

### Example 3

```text
Input: arr = [7,4,9], k = 1
Output: 20
Explanation: Blocks of one entry change nothing, so the sum stays
7 + 4 + 9 = 20.
```

### Constraints

- `1 <= arr.length <= 500`
- `0 <= arr[i] <= 10^9`
- `1 <= k <= arr.length`

## Hints

### Hint 1

Let `dp[i]` be the best total for the prefix `arr[0..i-1]`; the answer is
`dp[arr.length]`.

### Hint 2

Argue from the final block: for each length `j = 1..k` that fits, that block
scores its maximum times `j`, added to the best total for the shorter prefix
before it.

### Hint 3

While trying the lengths `j` for one prefix, grow the block leftward and fold
each entering entry into a running maximum — then each prefix costs `O(k)`.
