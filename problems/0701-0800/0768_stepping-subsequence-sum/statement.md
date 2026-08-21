# Stepping Subsequence Sum

## Description

You are given an integer array `nums`.

Call a subsequence *stepping* when each pair of adjacent elements in it
differs by exactly 1 — that is, every element after the first is one more
or one less than the element before it. A subsequence of one element
counts as stepping.

Add up the elements of every stepping subsequence of `nums` and return
that total. Equal values at different positions make different
subsequences, and each is counted as many times as it occurs.

Since the answer may be very large, return it modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [2,1,2]
Output: 16
Explanation: The stepping subsequences are [2], [1], [2], [2,1], [1,2],
and [2,1,2], whose elements add up to 16.
```

### Example 2

```text
Input: nums = [4,3,2]
Output: 30
Explanation: Downhill runs count as much as uphill ones: [4], [3], [2],
[4,3], [3,2], and [4,3,2] sum to 30.
```

### Example 3

```text
Input: nums = [5,7,6]
Output: 42
Explanation: The 5 and the 7 differ by 2, so they can never sit side by
side. The stepping subsequences are [5], [7], [6], [5,6], and [7,6],
summing to 42.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Summing every subsequence is the same as asking, for each element, how
many stepping subsequences contain it. What would you need to know to
answer that per element?

### Hint 2

Whether a partial subsequence can grow by a value depends only on the
value it currently ends with — so track, per ending value, how many
partial stepping subsequences end there and what their elements add up
to.

### Hint 3

When value `v` arrives, it can close every partial subsequence ending at
`v - 1` or `v + 1`, plus start one of its own. Fold each batch's sum in
as it is created, so nothing is double-counted.
