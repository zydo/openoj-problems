# Fewest Rising Subsequences to Clear an Array

## Description

You are given an integer array `nums`.

One operation deletes a **strictly increasing subsequence** of the current
array, closing the gaps left behind.

Find how few operations it takes to delete the entire array. The subsequence
of an operation keeps the original left-to-right order but need not be
contiguous.

### Example 1

```text
Input: nums = [4,1,7,2,9]
Output: 2
Explanation: Take [1,7,9] first, leaving [4,2]; neither of those can precede
the other in a rising subsequence, so a second operation takes them.
```

### Example 2

```text
Input: nums = [2,6,11,30]
Output: 1
Explanation: The whole array already rises, so one operation deletes it.
```

### Example 3

```text
Input: nums = [3,8,8,5]
Output: 3
Explanation: Equal values do not count as increasing, so the two 8s can never
share an operation, and the trailing 5 is smaller than both. The chain
8, 8, 5 — non-increasing throughout — forces three separate deletions, for
instance [3,8], [8], [5].
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Look for a set of elements no single operation can ever take together —
values that fail to rise as you read them left to right.

### Hint 2

Any such non-rising chain (each value greater than or equal to the next)
needs one operation per element, since a rising subsequence admits no such
pair.

### Hint 3

A longest non-rising chain lower-bounds the answer. Why is that bound
attained — what does patience sorting's pile construction say about covering
the array with rising subsequences?
