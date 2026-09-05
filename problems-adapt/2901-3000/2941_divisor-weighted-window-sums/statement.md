# Divisor-Weighted Window Sums

## Description

You are given an integer array `nums` and an integer `k`. Every contiguous
stretch of the array carries a score built from two ingredients:

- `s`, the total of the stretch's elements.
- `g`, the greatest value that divides every element of the stretch.
- The stretch's score is the product `s * g`.

Among all stretches of `nums` holding at least `k` elements, return the
largest score.

### Example 1

```text
Input: nums = [12,8,6,18], k = 2
Output: 144
Explanation: The stretch [6,18] totals 24 and every element divides by 6,
so it scores 6 * 24 = 144. No other qualifying stretch scores higher.
```

### Example 2

```text
Input: nums = [5,10,15], k = 1
Output: 225
Explanation: Single elements qualify, and the stretch [15] scores
15 * 15 = 225, which nothing beats.
```

### Example 3

```text
Input: nums = [9,6,12,3], k = 3
Output: 90
Explanation: Every qualifying stretch shares gcd 3, so the widest one
wins: 3 * (9 + 6 + 12 + 3) = 90.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 10⁵`
- `1 <= nums[i] <= 10⁶`
- `1 <= k <= n`

## Hints

### Hint 1

The gcd of a stretch can be answered in constant time once you preprocess
the array with a sparse table.

### Hint 2

Pin a left end `L` and ask which stretch beginning there is worth the most.

### Hint 3

With `L` fixed, pulling one more element into the stretch either leaves the
gcd exactly as it was or knocks it down to at most half.

### Hint 4

That drop rate lets a binary search locate the last position `R` where the
gcd of `nums[L..R]` still equals `nums[L]`.

### Hint 5

Fold `nums[R + 1]` in and carry on, each round walking to the end of the
stretch that still shares the current gcd.
