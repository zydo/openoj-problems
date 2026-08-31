# Average of Even Multiples of Three

## Description

You are given an array `nums` of positive integers. Look only at the
entries that are simultaneously even and a multiple of three, and
report the average of that subset, floored down to an integer.

The average of a group of `n` values is their sum divided by `n`,
rounded toward negative infinity. If no entry in `nums` qualifies,
report `0` instead of an undefined average.

### Example 1

```text
Input: nums = [4,9,6,3,12,18,7]
Output: 12
Explanation: 6, 12, and 18 qualify. (6 + 12 + 18) / 3 = 12.
```

### Example 2

```text
Input: nums = [5,7,11,13]
Output: 0
Explanation: No entry is both even and a multiple of three, so the
result is 0.
```

### Example 3

```text
Input: nums = [3,9,6,18,12,24,2,4]
Output: 15
Explanation: 6, 18, 12, and 24 qualify. (6 + 18 + 12 + 24) / 4 = 15.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`

## Hints

### Hint 1

A number that is both even and a multiple of three has a stronger,
single combined property — what is it?

### Hint 2

Being divisible by 2 and by 3 at the same time is the same as being
divisible by `lcm(2, 3) = 6`, so one modulus check replaces two.
