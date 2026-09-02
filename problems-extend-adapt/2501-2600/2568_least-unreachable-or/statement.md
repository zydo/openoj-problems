# Least Unreachable OR

## Description

You are given a 0-indexed integer array `nums`.

Call an integer `x` reachable when some non-empty choice of elements
with indices `index1 < index2 < ... < indexk` satisfies
`nums[index1] | nums[index2] | ... | nums[indexk] = x` — that is, `x`
can be rebuilt bit for bit as the bitwise OR of a subsequence of `nums`.

Return the smallest positive integer that is not reachable.

### Example 1

```text
Input: nums = [1,2,4]
Output: 8
Explanation: The powers 1, 2, and 4 are present, so every value from 1
through 7 is reachable: OR the elements whose bits match the target.
An OR can equal 8 only if some element is exactly 8, and none is, so
the answer is 8.
```

### Example 2

```text
Input: nums = [3,7,5]
Output: 1
Explanation: No element equals 1, and ORing larger values can never
produce a number whose only set bit is bit 0, so 1 is unreachable and
is the smallest such value.
```

### Example 3

```text
Input: nums = [16,1,2,600]
Output: 4
Explanation: 1 and 2 are present, so 1, 2, and 3 are all reachable.
Producing 4 would take an element equal to 4, which the array lacks.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Try assembling small numbers one power of two at a time — the question
is which single-bit values the array contains in isolation.

### Hint 2

Once `1, 2, 4, ..., 2^(k-1)` all appear as elements, every integer
below `2^k` is reachable; meanwhile an OR lands exactly on `2^k` only
if some element is `2^k` itself. So the first missing power of two is
the answer.
