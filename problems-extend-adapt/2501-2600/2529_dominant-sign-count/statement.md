# Dominant Sign Count

## Description

You are given an integer array `nums` arranged in non-decreasing order.
Zero is neutral — it counts as neither positive nor negative — so the
array splits into a prefix of negatives, an optional run of zeros, and a
suffix of positives.

Let `neg` be how many entries are strictly below zero and `pos` how many
are strictly above zero. Return the larger of the two counts.

### Example 1

```text
Input: nums = [-4,-2,-2,5,7,9,9]
Output: 4
Explanation: Three entries are negative and four are positive, and the
bigger side is the positives with 4.
```

### Example 2

```text
Input: nums = [-8,-3,0,0,0,4]
Output: 2
Explanation: The three zeros belong to neither camp; two negatives
outweigh one positive, so the answer is 2.
```

### Example 3

```text
Input: nums = [0,0,0]
Output: 0
Explanation: With no strictly positive or strictly negative entry at
all, both counts are zero.
```

### Constraints

- `1 <= nums.length <= 2000`
- `-2000 <= nums[i] <= 2000`
- `nums` is sorted in non-decreasing order.

### Follow-up

The obvious scan is linear. Can you land both counts with only
`O(log n)` work by exploiting the order?

## Hints

### Hint 1

You only need two numbers: how far the negative prefix runs and where
the positive suffix begins.

### Hint 2

The array is sorted, so each boundary is one binary search away — the
first index holding a value of at least 0, and the first holding a
value of at least 1.
