# Filling The Valleys

## Description

You are given an integer array `nums` of length `n`.

A single operation selects any contiguous segment `nums[l..r]` and lifts
every element inside it by the same positive integer amount `x`.

Transform the array into a non-decreasing one — each element at least as
large as its predecessor — and return the smallest achievable total of the
`x` values spent over all operations.

### Example 1

```text
Input: nums = [6,2,7,4]
Output: 7
Explanation:
    One optimal way to spend the operations:

        Lift segment [1..1] by x = 4, giving [6, 6, 7, 4]
        Lift segment [3..3] by x = 3, giving [6, 6, 7, 7]

    The array is now non-decreasing, and the total spent is 4 + 3 = 7.
```

### Example 2

```text
Input: nums = [1,5,5,9]
Output: 0
Explanation:
    The array already rises (with one tie) from left to right, so no
    operation is needed.
```

### Example 3

```text
Input: nums = [8,8,3,10,1]
Output: 14
Explanation:
    The descents are 8 -> 3 (a gap of 5) and 10 -> 1 (a gap of 9). Covering
    each gap with lifts totalling exactly that much repairs the order, so
    the minimum spend is 5 + 9 = 14.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Only adjacent positions where the value drops — `nums[i] > nums[i + 1]` —
stand between you and a sorted array.

### Hint 2

A drop at `i + 1` can only be repaired by operations whose segment begins
at `i + 1` or later; segments reaching past it cannot help.

### Hint 3

Paying exactly the size of each drop, and nothing more, is achievable — so
the drops' sizes simply add up.
