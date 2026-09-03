# Peak XOR Within a Tight Value Band

## Description

Given a non-negative integer array `nums` and an integer `k`, pick one
contiguous subarray of `nums` whose spread is at most `k` — the largest
element in it minus the smallest element in it must not exceed `k`.

The worth of the chosen subarray is the bitwise XOR of all of its
elements. Return the greatest worth any qualifying subarray can reach.

### Example 1

```text
Input: nums = [7,2,9,4], k = 5
Output: 13
Explanation: The subarray [9, 4] has spread 9 - 4 = 5, which fits
within k, and 9 XOR 4 = 13. No qualifying subarray is worth more.
```

### Example 2

```text
Input: nums = [1,2,4,8], k = 7
Output: 15
Explanation: The whole array has spread 8 - 1 = 7, exactly k, so
[1, 2, 4, 8] qualifies and is worth 1 XOR 2 XOR 4 XOR 8 = 15.
```

### Example 3

```text
Input: nums = [10,1,12], k = 0
Output: 12
Explanation: With k = 0 a qualifying subarray must be constant, so only
single elements (and repeats of one value) are legal. The best single
element is 12.
```

### Constraints

- `1 <= nums.length <= 4 * 10⁴`
- `0 <= nums[i] < 2¹⁵`
- `0 <= k < 2¹⁵`

## Hints

### Hint 1

Sweep the right end of the subarray and keep a window of start
positions whose max-minus-min is still within `k`; that window only
ever shrinks from the left.

### Hint 2

XOR over a range telescopes through prefix xors (`pref[0] = 0`,
`pref[i + 1] = pref[i] ^ nums[i]`), so each window question is "which
stored prefix xor beats `pref[r + 1]`?"

### Hint 3

Store the window's prefix xors in a binary trie with a counter on every
node so a prefix can be retired when it slides out of the window.

### Hint 4

For each right end, walk `pref[r + 1]` down the 15 trie levels
greedily, preferring the opposite-bit branch whenever its counter is
still positive.
