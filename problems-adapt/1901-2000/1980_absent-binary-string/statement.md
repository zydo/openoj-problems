# Absent Binary String

## Description

You are given `nums`, an array of `n` distinct binary strings, each
exactly `n` characters long. Produce any binary string of length `n`
that appears nowhere in `nums`.

When several strings qualify, returning any one of them is fine.

### Example 1

```text
Input: nums = ["1"]
Output: "0"
Explanation: The only 1-bit strings are "0" and "1", and "1" is
already taken, so "0" is the answer.
```

### Example 2

```text
Input: nums = ["10","11"]
Output: "00"
Explanation: "00" appears nowhere in nums; "01" would be just as
acceptable.
```

### Example 3

```text
Input: nums = ["000","111","010"]
Output: "101"
Explanation: "101" is absent from nums, and so are "001", "011",
"100", and "110".
```

### Constraints

- `n == nums.length`
- `1 <= n <= 16`
- `nums[i].length == n`
- Every character of `nums[i]` is `'0'` or `'1'`.
- The strings in `nums` are pairwise distinct.

## Hints

### Hint 1

A set of the given strings — reading each as a plain number if you
like — answers the membership question for any candidate quickly.

### Hint 2

Recursion can walk the candidates one bit at a time until it reaches a
string the set does not hold.
