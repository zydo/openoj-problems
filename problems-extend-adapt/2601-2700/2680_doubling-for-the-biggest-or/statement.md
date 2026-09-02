# Doubling for the Biggest OR

## Description

You are given a 0-indexed integer array `nums` of length `n` and an integer
`k`. A single operation picks one element of the array and multiplies it by
2, and you may perform that operation at most `k` times in total.

Make the value of `nums[0] | nums[1] | ... | nums[n - 1]` as large as
possible after your operations, and return it. Here `a | b` denotes the
bitwise OR of two integers.

### Example 1

```text
Input: nums = [5,3,2], k = 1
Output: 11
Explanation: Spending the one operation on the 5 turns the array into
[10,3,2], and 10 | 3 | 2 = 11.
```

### Example 2

```text
Input: nums = [1,2,4,8], k = 3
Output: 71
Explanation: Spending all three operations on the 8 turns it into 64, and
1 | 2 | 4 | 64 = 71.
```

### Example 3

```text
Input: nums = [7], k = 4
Output: 112
Explanation: Doubling the lone element four times gives 7 * 16 = 112.
```

### Example 4

```text
Input: nums = [9,6], k = 2
Output: 38
Explanation: Doubling the 9 twice yields [36,6], whose OR is 38 — better
than growing the 6 instead, which would only reach 9 | 24 = 25.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= 15`

## Hints

### Hint 1

Splitting the `k` doublings among several elements never wins: the OR's
highest set bit comes from a single element, and piling every doubling onto
that element carries its bits highest.

### Hint 2

With that settled, try each element as the one that receives all `k`
doublings. A prefix OR of the elements to its left and a suffix OR of the
elements to its right let you score each candidate in constant time.
