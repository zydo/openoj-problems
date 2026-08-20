# Maximum Subarray Score

## Description

The **score** of an array is its smallest element multiplied by the sum of
all its elements.

- For example, `[3,2,5]` has smallest element `2` and sum `10`, so its
  score is `2 × 10 = 20`.

Given an integer array `nums`, return the largest score of any non-empty
subarray of `nums`. The answer may be large, so return it **modulo**
`10⁹ + 7`.

Take the maximum over the true scores first and apply the modulo only at
the end; the test data guarantees the largest true score fits in a 64-bit
signed integer.

A **subarray** is a contiguous stretch of an array.

### Example 1

```text
Input: nums = [2,3,5,3]
Output: 33
Explanation: The best subarray is [3,5,3], whose smallest element is 3.
3 × (3+5+3) = 3 × 11 = 33.
```

### Example 2

```text
Input: nums = [5,2,4,4,1]
Output: 32
Explanation: The best subarray is [4,4]: its smallest element 4 beats the
wider windows, which the 2 and the 1 drag down.
4 × (4+4) = 32.
```

### Example 3

```text
Input: nums = [2,1,4,6,5,3]
Output: 60
Explanation: The best subarray is [4,6,5], whose smallest element is 4.
4 × (4+6+5) = 4 × 15 = 60.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁷`

## Hints

### Hint 1

Every subarray has one element that serves as its minimum. Fix, for each
index, the widest subarray in which that index is the minimum — what does
a monotonic stack give you for its two ends?

### Hint 2

With prefix sums, each index's candidate is its value times the sum of its
widest subarray. Take the maximum of those candidates before reducing
modulo `10⁹ + 7`.
