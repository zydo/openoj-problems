# The Top-Frequency Element Count

## Description

You are given an array `nums` of positive integers.

The frequency of a value is how many times that value occurs in `nums`.
Let `m` be the largest frequency any value reaches. Return the total number
of array elements whose value occurs exactly `m` times — that is, add up
the frequencies of every value tied for the top frequency.

### Example 1

```text
Input: nums = [5,5,7,7,7,9]
Output: 3
Explanation: The value `7` occurs three times — the highest frequency in
the array. Only `7` reaches it, so the answer is those three occurrences.
```

### Example 2

```text
Input: nums = [8,8,8,8]
Output: 4
Explanation: The single value `8` owns the top frequency, which is 4, so
all four elements count.
```

### Example 3

```text
Input: nums = [2,4,6,2,4,6,1]
Output: 6
Explanation: The values `2`, `4`, and `6` each occur twice, and no value
does better. Three values tied at the top, contributing `2 + 2 + 2 = 6`
elements.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Tally how often each value occurs before anything else.

### Hint 2

Locate the largest tally, then sum the tallies of every value that equals
it — each such value contributes exactly that many elements.
