# The Earliest Majority Split

## Description

Call a value the _majority value_ of an array when it fills strictly more
than half of the array's slots.

You are given an integer array `nums` of length `n`, indexed from `0`,
guaranteed to hold exactly one such majority value.

Cutting `nums` after index `i` produces a left part `nums[0..i]` and a
right part `nums[i + 1..n - 1]`. The cut is acceptable when:

- `0 <= i < n - 1`, and
- both parts carry the same majority value.

Here `nums[i..j]` means the contiguous run from index `i` through index
`j`, both ends included; when `j < i` it denotes an empty run.

Return the smallest index at which an acceptable cut exists, or `-1` if
no cut qualifies.

### Example 1

```text
Input: nums = [1,5,5,1,5,5,5,2]
Output: 2
Explanation: The value 5 fills five of the eight slots, so it is the
majority value. Cutting after index 2 leaves [1,5,5] on the left, where
5 holds two of three slots, and [1,5,5,5,2] on the right, where 5 holds
three of five — strictly more than half on each side. Neither of the two
earlier cuts leaves 5 ahead on both sides, so 2 is the answer.
```

### Example 2

```text
Input: nums = [8,8,8,3]
Output: 0
Explanation: Cutting after index 0 gives [8] and [8,8,3]. The value 8
holds one of one slots on the left and two of three on the right — both
strict majorities — so index 0 is already acceptable.
```

### Example 3

```text
Input: nums = [1,2,3,9,9,9,9]
Output: -1
Explanation: The value 9 is the majority value of the whole array, but
every allowed cut strands too few copies of 9 on the left for it to lead
that part as well, so no cut qualifies.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `nums` contains exactly one majority value.

### Hint 1

Only the array's own majority value can anchor a qualifying cut: a value
that fills more than half of the left part and more than half of the
right part must fill more than half of the whole array. Count values
with a hash map to find it and its total count `f`.

### Hint 2

Sweep the cut positions left to right, carrying `c`, the number of
copies of the majority value seen so far. Cutting after index `i` works
exactly when `c * 2 > i + 1` and `(f - c) * 2 > n - i - 1`; return the
first index that passes both strict tests.
