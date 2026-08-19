# Sum of Pairwise Floor Quotients

## Description

Given an integer array `nums`, add up `floor(nums[i] / nums[j])` over every
ordered pair of indices `0 <= i, j < nums.length`. Return the total
**modulo** `10⁹ + 7`, as it may be very large.

Here `floor(a / b)` is the integer part of the division — the quotient with
the remainder discarded.

### Example 1

```text
Input: nums = [3,4,12]
Output: 11
Explanation: The nonzero terms come from
floor(3/3) = 1, floor(4/3) = 1, floor(4/4) = 1,
floor(12/3) = 4, floor(12/4) = 3, floor(12/12) = 1.
Dividing the smaller elements by larger ones contributes 0.
```

### Example 2

```text
Input: nums = [6,6,6,6]
Output: 16
Explanation: Every one of the 4 × 4 ordered pairs yields
floor(6/6) = 1.
```

### Example 3

```text
Input: nums = [1,10,100]
Output: 123
Explanation: floor(100/1) = 100, floor(10/1) = 10, floor(100/10) = 10,
and the three equal pairs contribute 1 each — 123 in all.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

How often each value occurs, and how many elements sit at or above any
given threshold, are enough to evaluate the whole double sum. What array
answers the threshold question in constant time?

### Hint 2

`floor(x / y)` counts the multiples of `y` that do not exceed `x`. So for
each value `y` present, walk its multiples `y, 2y, 3y, …` and add, for each
one, the number of elements at least that large.
