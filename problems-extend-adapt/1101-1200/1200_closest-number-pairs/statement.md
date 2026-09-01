# Closest Number Pairs

## Description

You are given an array `arr` of distinct integers. Among all pairs of
values the array holds, some pair realizes the smallest possible gap —
the minimum absolute difference between any two elements.

Collect every pair `[a, b]` that achieves that smallest gap, where

- `a` and `b` are both elements of `arr`,
- `a < b`,
- `b - a` equals that minimum gap.

Return the pairs sorted in ascending order.

### Example 1

```text
Input: arr = [12, 7, 29, 4]
Output: [[4, 7]]
Explanation: The closest two values are 4 and 7, three apart; every other
pairing is wider.
```

### Example 2

```text
Input: arr = [20, 14, 8, 2]
Output: [[2, 8], [8, 14], [14, 20]]
Explanation: Neighbouring values are evenly spaced by 6, so all three
gaps tie for the minimum.
```

### Example 3

```text
Input: arr = [-30, -25, 5, 10, 40]
Output: [[-30, -25], [5, 10]]
Explanation: Two separate pairs sit at the minimum gap of 5, one in the
negatives and one among the positives.
```

### Constraints

- `2 <= arr.length <= 10⁵`
- `-10⁶ <= arr[i] <= 10⁶`
- All values in `arr` are distinct.

## Hints

### Hint 1

The tightest gap in the whole array is set by some pair of values — but
checking every pair is far more work than needed.

### Hint 2

After arranging the values in ascending order, the closest pair must be
two direct neighbours: any non-adjacent pair spans several gaps at once.
