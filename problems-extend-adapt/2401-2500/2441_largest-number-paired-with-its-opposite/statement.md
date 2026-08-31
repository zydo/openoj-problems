# Largest Number Paired With Its Opposite

## Description

You are given an integer array `nums` that contains no zeros. Find the
largest positive integer `k` such that `-k` also appears somewhere in
`nums`.

Return that integer `k`. If no positive integer has its negative present
in the array, return `-1`.

### Example 1

```text
Input: nums = [-3,2,3,-2,5]
Output: 3
Explanation: Both 3 and 2 have their opposites in the array, and the
larger of the two is 3.
```

### Example 2

```text
Input: nums = [-8,8,4,-4,1]
Output: 8
Explanation: The positive values 8 and 4 both come with their negatives,
so 8 wins as the largest.
```

### Example 3

```text
Input: nums = [2,-3,5,-6]
Output: -1
Explanation: No positive value's negation is present, so the answer is -1.
```

### Constraints

- `1 <= nums.length <= 1000`
- `-1000 <= nums[i] <= 1000`
- `nums[i] != 0`

## Hints

### Hint 1

Membership tests are the whole task — reach for a data structure that can
answer "is this value present?" in constant time.

### Hint 2

Build a set from every element, then scan the array once for the largest
positive value whose negation is in that set.
