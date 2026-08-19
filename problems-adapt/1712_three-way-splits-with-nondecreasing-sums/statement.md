# Three-Way Splits With Nondecreasing Sums

## Description

You are given an array `nums` of non-negative integers. Cut it into three
non-empty consecutive blocks — `head`, `body`, `tail`, from left to right.

A cut is **balanced** when no block sums to less than the block before it:

- the sum of `head` is at most the sum of `body`, and
- the sum of `body` is at most the sum of `tail`.

Count the balanced ways to cut `nums`. Two cuts are different whenever either
of the two cut positions differs. Return the count modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [1,1,2,1,2]
Output: 3
Explanation: The balanced cuts are:
[1] [1] [2,1,2]   sums 1, 1, 5
[1] [1,2] [1,2]   sums 1, 3, 3
[1,1] [2] [1,2]   sums 2, 2, 3
```

### Example 2

```text
Input: nums = [1,0,1,0,1]
Output: 4
Explanation: Zeros let many blocks tie. All four cuts [1|0,1|0,1], [1|0,1,0|1],
[1,0|1|0,1] and [1,0|1,0|1] give block sums 1, 1, 1, so all four count.
```

### Example 3

```text
Input: nums = [4,2,1,1]
Output: 0
Explanation: The leading 4 makes every first block too heavy — no cut is balanced.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁴`

## Hints

### Hint 1

A prefix-sum table turns the sum of any block into a subtraction of two
entries, so the two balance conditions become comparisons between table
entries.

### Hint 2

There are two cut positions. Walk the first one across the array and, for
each of its values, determine the range the second position may take.

### Hint 3

Because the elements are non-negative, the prefix table never decreases, and
the legal positions of the second cut form one contiguous stretch — two binary
searches mark its ends.
