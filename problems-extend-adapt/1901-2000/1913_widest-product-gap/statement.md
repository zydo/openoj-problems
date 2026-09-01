# Widest Product Gap

## Description

From `nums`, pick four entries at distinct positions and split them into two
pairs. Writing the pair values as `a, b` and `c, d`, the gap between the
pairs is `(a * b) - (c * d)`. For instance, the pairs `(9, 4)` and `(2, 3)`
have gap `(9 * 4) - (2 * 3) = 30`.

Choose the four entries to make this gap as large as possible, and return
that largest gap.

### Example 1

```text
Input: nums = [3,8,1,6]
Output: 45
Explanation: Pair the two largest values (8, 6) against the two smallest
(1, 3): (8 * 6) - (1 * 3) = 45.
```

### Example 2

```text
Input: nums = [9,9,2,2,5]
Output: 77
Explanation: The top pair is (9, 9) from the two 9s, the bottom pair is
(2, 2), and (9 * 9) - (2 * 2) = 77.
```

### Example 3

```text
Input: nums = [2,2,2,2]
Output: 0
Explanation: Every pairing multiplies equal values on both sides, so the
gap is always 2 * 2 - 2 * 2 = 0.
```

### Example 4

```text
Input: nums = [7,3,10,4,10,2]
Output: 94
Explanation: The two largest values are 10 and 10, the two smallest are 2
and 3, and (10 * 10) - (2 * 3) = 94.
```

### Constraints

- `4 <= nums.length <= 10^4`
- `1 <= nums[i] <= 10^4`

## Hints

### Hint 1

To make a product of two entries as large as possible, both factors should
be as large as the array offers — which two values are always the right
choice, and which two are always the right choice for the small product?

### Hint 2

The answer is decided by exactly four values: the two largest and the two
smallest in the array. A single scan that maintains those four extremes is
enough.
