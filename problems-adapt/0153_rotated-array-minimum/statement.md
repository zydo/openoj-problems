# Rotated Array Minimum

## Description

Take `n` distinct integers arranged in increasing order, then move some number
of entries — at least `1`, at most `n` — from the back of the array to the
front, keeping their relative order. Moving all `n` leaves the array exactly as
it started. The result of that operation is the array `nums` you are given.

Return the smallest value in `nums`.

Reading every entry would answer the question in `O(n)`; you are asked for
`O(log n)`.

### Example 1

```text
Input: nums = [8,9,2,5,6]
Output: 2
Explanation: The increasing arrangement was [2,5,6,8,9], with its last two
entries brought to the front.
```

### Example 2

```text
Input: nums = [4,-7,-3,0]
Output: -7
Explanation: A single entry moved. Values may be negative.
```

### Example 3

```text
Input: nums = [2,14,29,38]
Output: 2
Explanation: All four entries moved, which puts the array back where it began,
so it still increases from left to right.
```

### Constraints

- `nums` has `n` entries with `1 <= n <= 5000`
- every entry lies in `[-5000, 5000]`
- no value occurs twice
- `nums` is an increasing array with `1` to `n` of its trailing entries moved to the front

## Hints

### Hint 1

The array is two increasing stretches laid end to end, and the value you want
begins the second one. Equivalently: find the single index where an entry is
smaller than the one before it.

### Hint 2

Halving is possible because you can always tell which side of the midpoint that
index falls on — but only if you compare against the right endpoint of the
window you are searching, not the left one.

### Hint 3

If the midpoint's value exceeds the right endpoint's, the second stretch starts
somewhere after the midpoint. Otherwise the midpoint may itself be the answer,
so keep it. Notice how the un-moved case of Example 3 behaves under that rule.
