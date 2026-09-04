# Largest Product at Alternating Sum K

## Description

Given an integer array `nums` and two integers `k` and `limit`, choose a
non-empty subsequence of `nums` whose alternating sum equals `k`. Among
all such subsequences, find the one whose element product is as large as
possible while still being at most `limit`.

Return that product, or `-1` if no subsequence has an alternating sum of
`k`.

The alternating sum of a 0-indexed sequence adds the elements at even
positions and subtracts the elements at odd positions.

### Example 1

```text
Input: nums = [6,1], k = 5, limit = 10
Output: 6
Explanation:
The subsequence [6,1] has alternating sum 6 - 1 = 5 and product 6,
which is within the limit. Neither single element sums to 5.
```

### Example 2

```text
Input: nums = [3,3,5,5], k = 0, limit = 20
Output: 9
Explanation:
The pairs [3,3] and [5,5] both have alternating sum 0, with products 9
and 25. The whole array also balances to 0, but its product is 225.
Only 9 stays within the limit of 20, so the answer is 9.
```

### Example 3

```text
Input: nums = [0,2], k = 0, limit = 5
Output: 0
Explanation:
The single-element subsequence [0] has alternating sum 0. Its product
is 0, which is a valid product within the limit.
```

### Example 4

```text
Input: nums = [4,1], k = 6, limit = 100
Output: -1
Explanation:
The alternating sums reachable here are 4, 1, and 3 — never 6 — so no
subsequence qualifies.
```

### Constraints

- `1 <= nums.length <= 150`
- `0 <= nums[i] <= 12`
- `-10⁵ <= k <= 10⁵`
- `1 <= limit <= 5000`

## Hints

### Hint 1

Process the elements left to right and carry dynamic-programming states
keyed by the running alternating sum.

### Hint 2

For a fixed state, remember every product that fits under the limit, not
just the largest one — a bigger product can overflow the limit on a
later multiplication while a smaller one still fits.

### Hint 3

Treat products of zero separately: once a chosen element is 0 the
product becomes 0, and the path to it may have passed through products
above the limit.
