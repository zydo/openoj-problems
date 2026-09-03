# The Smallest Possible Peak XOR

## Description

You are given an integer array `nums` and an integer `k`. Cut `nums` into
exactly `k` consecutive, non-empty pieces. Each piece is scored by the
bitwise XOR of the numbers it contains, and the split as a whole is scored
by its worst piece — the largest XOR among the `k` pieces.

Choose the cuts to make that worst piece as small as possible, and return
the resulting score.

### Example 1

```text
Input: nums = [4,7,3], k = 2
Output: 3
Explanation: Cutting after the 7 gives the pieces [4,7] and [3]. Their
XORs are 4 XOR 7 = 3 and 3, so the worst piece scores 3. Every other cut
leaves some piece scoring at least 4, so 3 is optimal.
```

### Example 2

```text
Input: nums = [3,5,2,6], k = 2
Output: 3
Explanation: The best cut isolates [3] as one piece and groups the rest as
[5,2,6], whose XOR is 5 XOR 2 XOR 6 = 1. The worst of the two pieces is 3,
and no split does better.
```

### Example 3

```text
Input: nums = [8,8,8], k = 3
Output: 8
Explanation: Three pieces from three elements forces [8], [8], [8], so the
peak XOR is 8.
```

### Constraints

- `1 <= nums.length <= 250`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= n`

## Hints

### Hint 1

Think dynamic programming over prefixes: an optimal split of the whole
array is built from an optimal split of a shorter prefix plus one last
piece.

### Hint 2

XOR of any piece `nums[l..r-1]` comes free from prefix XORs — keep
`pre[i] = nums[0] ^ … ^ nums[i-1]` and the piece scores `pre[r] ^ pre[l]`.

### Hint 3

Let `dp[i][j]` be the smallest achievable peak XOR when the first `i`
elements are split into `j` pieces.

### Hint 4

Transition by trying every start `t` of the final piece:
`dp[i][j] = min over t of max(dp[t][j-1], pre[i] ^ pre[t])`.
