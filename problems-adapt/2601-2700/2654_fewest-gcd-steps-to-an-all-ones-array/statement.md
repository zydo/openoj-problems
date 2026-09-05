# Fewest Gcd Steps to an All-Ones Array

## Description

You are given a 0-indexed array `nums` of positive integers. As many
times as you like, you may pick an index `i` with `0 <= i <
nums.length - 1` and overwrite either `nums[i]` or `nums[i + 1]` with
the gcd of the pair.

Return the fewest operations that leave every element of `nums` equal
to `1`, or `-1` when no sequence of operations can ever get there.

(The gcd of two positive integers is their greatest common divisor —
the largest integer that divides both.)

### Example 1

```text
Input: nums = [6,10,15]
Output: 4
Explanation: Four operations are enough:
- Set nums[1] to gcd(nums[0], nums[1]) = gcd(6,10) = 2. Now
  nums = [6,2,15].
- Set nums[1] to gcd(nums[1], nums[2]) = gcd(2,15) = 1. Now
  nums = [6,1,15].
- Set nums[0] to gcd(nums[0], nums[1]) = gcd(6,1) = 1. Now
  nums = [1,1,15].
- Set nums[2] to gcd(nums[1], nums[2]) = gcd(1,15) = 1. Now
  nums = [1,1,1].
```

### Example 2

```text
Input: nums = [1,5,9]
Output: 2
Explanation: A `1` is already present. Overwrite the 5 with
gcd(1,5) = 1 and then the 9 with gcd(1,9) = 1 — one operation per
remaining element.
```

### Example 3

```text
Input: nums = [4,8]
Output: -1
Explanation: Every value the array can ever hold stays divisible by 4,
so an all-ones array is out of reach.
```

### Constraints

- `2 <= nums.length <= 50`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

As soon as a single `1` appears anywhere in the array, every remaining
element can become a `1` at a cost of one operation each.

### Hint 2

When no `1` exists yet, the first one has to be manufactured: find the
shortest stretch of consecutive elements whose overall gcd is `1`.
