# Counting Well-Spaced Matching Quartets

## Description

You are given an array `nums` of positive integers.

Pick four indices `p < q < r < s`, keeping at least one element between
each consecutive pair — that is, `q - p > 1`, `r - q > 1`, and
`s - r > 1`. Call such a quartet matched when

- `nums[p] * nums[r] == nums[q] * nums[s]`

Return how many matched quartets `nums` contains.

### Example 1

```text
Input: nums = [4,2,8,1,16,3,9,27,6,12]
Output: 2
Explanation: The matched quartets are:
(p, q, r, s) = (0, 3, 5, 9): nums[0] * nums[5] = 4 * 3 = 12 and
nums[3] * nums[9] = 1 * 12 = 12.
(p, q, r, s) = (1, 3, 5, 8): nums[1] * nums[5] = 2 * 3 = 6 and
nums[3] * nums[8] = 1 * 6 = 6.
```

### Example 2

```text
Input: nums = [2,3,6,1,3,6,4,2,6,9]
Output: 1
Explanation: The only matched quartet is (0, 2, 5, 7):
nums[0] * nums[5] = 2 * 6 = 12 and nums[2] * nums[7] = 6 * 2 = 12.
```

### Example 3

```text
Input: nums = [2,6,3,4,1,8,9,5]
Output: 0
Explanation: No choice of four well-spaced indices balances the two
products.
```

### Constraints

- `7 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`

## Hints

### Hint 1

Rewrite the balance as a pair of equal fractions,
`nums[p] / nums[q] == nums[s] / nums[r]`, and reduce both with the GCD
so they can be compared exactly.

### Hint 2

Sweep the third index left to right, dropping every legal `(p, q)` lead
into a hash map as it becomes available, and for each `(r, s)` pair add
how many leads carry the same reduced fraction.
