# Bitwise Quorum OR

## Description

You are given an integer array `nums` and an integer `k`.

The quorum-OR is a stricter cousin of bitwise OR. Walk the bit positions
one at a time: a position lands as `1` in the result when at least `k`
elements of `nums` carry a `1` in that same position, and stays `0`
otherwise.

Return the quorum-OR of `nums`.

### Example 1

```text
Input: nums = [13,7,13], k = 2
Output: 13
Explanation: Bit 0 is present in all three elements and bit 2 is too.
Bit 3 is present in the two copies of 13. Bit 1 lives only in 7, one vote
short. Positions 0, 2, and 3 clear the bar of k = 2, so the result is
(1101)₂ = 13.
```

### Example 2

```text
Input: nums = [21,21,6,13], k = 3
Output: 5
Explanation: Bit 0 collects three votes (21, 21, 13) and bit 2 collects
four (every element). No other position reaches three. The result is
(101)₂ = 5.
```

### Example 3

```text
Input: nums = [9,3], k = 1
Output: 11
Explanation: With k = 1 a single vote is enough everywhere, so the
quorum-OR degenerates into the plain bitwise OR of the elements:
9 OR 3 = (1011)₂ = 11.
```

### Constraints

- `1 <= nums.length <= 50`
- `0 <= nums[i] < 2^31`
- `1 <= k <= nums.length`

## Hints

### Hint 1

Let every bit position run its own election: count how many elements carry
a `1` there, and seat the bit exactly when the count reaches `k`.

### Hint 2

An element votes for position `b` precisely when `(x >> b) & 1` equals 1.
