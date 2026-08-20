# Smallest Fixed-Length Subsequence

## Description

You are handed an integer array `nums` and an integer `k`. Choose
exactly `k` of its entries, in the order they appear, and return the
selection that reads smallest from left to right.

Comparisons run like dictionary order: two selections of equal length
are judged at the first position where they disagree, and the one
holding the smaller number there wins. So `[1,3,4]` beats `[1,3,5]` —
they agree until the final slot, and `4 < 5`.

### Example 1

```text
Input: nums = [4,7,1,5], k = 2
Output: [1,5]
Explanation: The size-2 selections include [4,7], [4,1], [4,5], [7,1],
[7,5] and [1,5]. Only the last opens with 1, so it wins.
```

### Example 2

```text
Input: nums = [4,9,2], k = 2
Output: [4,2]
Explanation: When 2 arrives it evicts 9, but evicting 4 as well would
leave nothing but the 2 itself to cover both slots, so 4 survives.
```

### Example 3

```text
Input: nums = [3,7,4,7,2,6], k = 4
Output: [3,4,2,6]
Explanation: 4 evicts the first 7 on its way in. The later 2 would evict
4 too, but too few unread values remain to refill the four slots, so it
simply sits on top; 6 completes the selection.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`
- `1 <= k <= nums.length`

## Hints

### Hint 1

Dictionary order weighs an early position more than every later one
combined. Whatever you do, settle the leftmost slots as early and as low
as the input permits.

### Hint 2

Grow the selection left to right inside a stack. When a smaller value
arrives, throw out larger tops — but only while enough unread entries
remain to still fill the selection out to `k`.
