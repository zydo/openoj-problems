# Nearest Subsequence Sum

## Description

You are given an integer array `nums` and an integer `goal`.

Delete any elements you like — none, some, or all — and add up what remains.
Which deletion choice lands the resulting sum as near `goal` as possible?

Return the smallest achievable value of `abs(sum - goal)`.

### Example 1

```text
Input: nums = [4,-6,2,7], goal = 5
Output: 0
Explanation: Delete the 2; the rest sums to 4 - 6 + 7 = 5, exactly the goal.
```

### Example 2

```text
Input: nums = [5,-2,9], goal = 1
Output: 1
Explanation: The reachable sums are 0, 5, -2, 9, 3, 14, 7, 12. Both 0 and 3
sit one away from 1, and nothing lands closer.
```

### Example 3

```text
Input: nums = [2,4,6], goal = -15
Output: 15
Explanation: Every element is positive, so no sum dips below 0; deleting
everything gives the nearest sum, 15 away from the goal.
```

### Constraints

- `1 <= nums.length <= 40`
- `-10⁷ <= nums[i] <= 10⁷`
- `-10⁹ <= goal <= 10⁹`

## Hints

### Hint 1

Trying every deletion pattern is `2^n` work — far too much once `n` reaches 40.

### Hint 2

Cut the array into two halves of roughly twenty elements each; every sum of
the whole array pairs a sum from the left half with one from the right.

### Hint 3

Enumerate every left-half sum, and sort that list.

### Hint 4

For each right-half sum `x`, what remains to find is the left sum nearest to
`goal - x` — and on a sorted list, a binary search pins that down.
