# Tighten the Spread With Two Edits

## Description

An array of integers `nums` is scored by two of its differences:

- the low score is the smallest absolute difference between any pair of
  its elements;
- the high score is the largest absolute difference between any pair;
- the array's score is the high score plus the low score.

You may rewrite two elements, each to any integer you like — a
replacement may copy an existing value or equal the other replacement.
Return the smallest score reachable this way.

### Example 1

```text
Input: nums = [9,2,40,15]
Output: 6
Explanation:
- Rewrite nums[1] and nums[2] to 15 so that nums becomes [9,15,15,15].
- The low score is the smallest absolute difference: |15 - 15| = 0.
- The high score is the largest absolute difference: |15 - 9| = 6.
- The score is 6.
```

### Example 2

```text
Input: nums = [5,5,5,100]
Output: 0
Explanation:
- Rewrite nums[0] and nums[3] to 5 so that nums becomes [5,5,5,5].
- Every pair difference is 0, so the score is 0.
```

### Example 3

```text
Input: nums = [3,480,860,861]
Output: 1
Explanation:
- Rewrite nums[0] and nums[1] to 861 so that nums becomes
  [861,861,860,861].
- The low score is 0 and the high score is |861 - 860| = 1, so the score
  is 1.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

The rewrites don't have to introduce anything new: aim both changed
slots at the same value and the low score collapses to 0, so only the
span of what remains needs minimizing.

### Hint 2

After sorting, the elements you leave alone form a contiguous window of
length `n − 2`. Compare the three windows you could keep — drop the two
smallest, drop the two largest, or drop one of each — and take the
tightest span.
