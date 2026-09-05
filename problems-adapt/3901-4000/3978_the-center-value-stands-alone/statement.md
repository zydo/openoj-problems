# The Center Value Stands Alone

## Description

You are given an integer array `nums` whose odd length is `n`.

Look at the value sitting in the exact middle of the array. Answer `true`
when that one value occurs nowhere else in `nums`, and `false` when any
other position repeats it.

### Example 1

```text
Input: nums = [4,9,7,9,8]
Output: true
Explanation:
    The middle slot holds 7, and 7 shows up exactly once in the array.

    Thus, the answer is true.
```

### Example 2

```text
Input: nums = [5,5,5,5,5]
Output: false
Explanation:
    The middle slot holds 5, but every other slot holds 5 as well.

    Thus, the answer is false.
```

### Example 3

```text
Input: nums = [6,1,3]
Output: true
Explanation: The middle slot holds 1, a value that appears only there.
```

### Constraints

- `1 <= n == nums.length <= 100`
- `n` is odd.
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

The middle slot of an odd-length array sits at index `nums.length / 2`.

### Hint 2

Tally how often `nums[nums.length / 2]` shows up across the whole array;
only a tally of one counts.
