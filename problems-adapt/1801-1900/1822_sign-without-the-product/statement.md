# Sign Without the Product

## Description

Given an integer array `nums`, think of the product of all its values.
Your task is to report only that product's sign:

- `1` when the product is positive,
- `-1` when it is negative,
- `0` when it is exactly zero.

The product itself quickly outgrows any fixed-width integer, so the answer
has to come from the factors alone rather than from multiplying them out.

### Example 1

```text
Input: nums = [-3,4,-5,6,-2]
Output: -1
Explanation: Three of the factors are negative. That count is odd, so the
product of the whole array lands below zero.
```

### Example 2

```text
Input: nums = [7,-9,2,-8,5]
Output: 1
Explanation: Exactly two factors are negative — an even count — so the
product of the whole array is positive.
```

### Example 3

```text
Input: nums = [4,-6,0,9]
Output: 0
Explanation: One factor is zero, so the entire product collapses to zero.
```

### Constraints

- `1 <= nums.length <= 1000`
- `-100 <= nums[i] <= 100`

### Hint 1

A single zero anywhere in the array settles the question immediately.

### Hint 2

With no zero present, only how many factors are negative matters: an odd
count makes the product negative, an even count positive.
