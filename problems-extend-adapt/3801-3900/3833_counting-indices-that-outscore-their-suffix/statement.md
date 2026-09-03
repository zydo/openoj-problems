# Counting Indices That Outscore Their Suffix

## Description

You are given an integer array `nums` of length `n`.

Call an index `i` outscoring when `nums[i]` is strictly greater than the
average of everything after it, that is, of
`nums[i + 1], nums[i + 2], ..., nums[n - 1]`.

An average is the sum of some numbers divided by how many there are.
The last index of the array never qualifies — no elements remain to its
right, so there is no average for it to beat.

Return how many indices of `nums` are outscoring.

### Example 1

```text
Input: nums = [8,3,5,2]
Output: 2
Explanation: Index 0 wins, since 8 > average(3, 5, 2) = 10/3. Index 1
loses, since 3 < average(5, 2) = 3.5. Index 2 wins, since 5 > average(2)
= 2. The count is 2.
```

### Example 2

```text
Input: nums = [1,2,3,4]
Output: 0
Explanation: Each element sits at or below the average of the larger
values after it, so not a single index qualifies.
```

### Example 3

```text
Input: nums = [9,1,9,1,9,2]
Output: 3
Explanation: Indices 0, 2 and 4 each beat the average of their suffix
(9 > 4.4, 9 > 4, and 9 > 2), while every 1 fails, so the count is 3.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Testing against an average needs no division: comparing `nums[i]` with
its suffix average is the same as comparing `nums[i]` times the suffix
length against the suffix sum, both integers.

### Hint 2

Sweep from right to left while carrying one running suffix sum; every
index then tests in constant time by reusing the sum its right
neighbor already built.
