# Flatten the Array to Zero

## Description

You are given an array `nums` of non-negative integers. One operation
works like this:

- Pick a positive integer `x` that does not exceed the smallest positive
  value currently in `nums`.
- Lower every positive element of `nums` by `x`. Elements already equal to
  0 are left alone.

Return the fewest operations that turn the whole array into zeros.

### Example 1

```text
Input: nums = [4,4,4,4]
Output: 1
Explanation:
Pick x = 4. Every element drops to 0 at once, leaving nums = [0,0,0,0].
```

### Example 2

```text
Input: nums = [1,2,3,4,5]
Output: 5
Explanation:
Each operation can retire only the current smallest positive value, and
all five values are distinct, so five operations are needed — the last
one takes nums from [0,0,0,0,1] to all zeros.
```

### Example 3

```text
Input: nums = [0,7,0,7]
Output: 1
Explanation:
Pick x = 7; both positive elements fall to 0 and the zeros stay put.
```

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`

## Hints

### Hint 1

Taking `x` to be the current smallest positive element is never wasteful.

### Hint 2

Two elements that start equal hit zero on the same operation, and two
elements that start different never do — so operations are counted by
distinct values.

### Hint 3

The answer is just how many different positive values `nums` contains.
