# Counting Array Split Points

## Description

You are given a 0-indexed integer array `nums` whose length is `n`.

Cutting `nums` after index `i` divides it into a left part — the first
`i + 1` elements — and a right part holding the remaining `n - i - 1`
elements. The cut is called good when the left part's sum is greater than
or equal to the right part's sum. Both parts must be non-empty, so `i`
ranges over `0 <= i < n - 1`.

Return how many good cuts `nums` has.

### Example 1

```text
Input: nums = [5,2,1]
Output: 2
Explanation:
- Cutting after index 0 gives [5] and [2,1]: sums 5 and 3, and 5 >= 3.
- Cutting after index 1 gives [5,2] and [1]: sums 7 and 1, and 7 >= 1.
Both cuts are good, so the answer is 2.
```

### Example 2

```text
Input: nums = [-3,4,-1,2]
Output: 1
Explanation:
- After index 0: sums -3 and 5 — not good.
- After index 1: sums 1 and 1, and 1 >= 1 — good.
- After index 2: sums 0 and 2 — not good.
Only the middle cut is good, so the answer is 1.
```

### Example 3

```text
Input: nums = [-5,-2,9]
Output: 0
Explanation: The left sums are -5 and -7, while the right sums are 7 and
9; the left never catches up, so no cut is good.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `-10⁵ <= nums[i] <= 10⁵`

## Hints

### Hint 1

A running sum lets you obtain the left part's sum at index `i` from the
left sum at index `i - 1` in constant time.

### Hint 2

Once the array's total is known, the right part's sum at a cut is just the
total minus the left part's sum — no second pass is needed.
