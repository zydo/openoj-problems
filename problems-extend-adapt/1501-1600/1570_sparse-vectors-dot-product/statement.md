# Sparse Vectors' Dot Product

## Description

Given two integer vectors, compute their dot product — the sum of
`a[i] * b[i]` over every index — but exploit how few entries are actually
non-zero: most positions are zero in both vectors.

Implement the `CompactVector` class:

- `CompactVector(int[] nums)` initializes the compact representation with
  the vector's values.
- `int dotAgainst(CompactVector vec)` returns the dot product of this
  vector and `vec`.

Your score depends on the total number of non-zero entries your compact
form touches across both vectors — storing everything densely defeats the
purpose.

### Example 1

```text
Input:
v1 = [2,0,0,4], v2 = [3,0,5,0]
Output: 6
Explanation: Only index 0 has non-zero values in both vectors:
2 * 3 = 6.
```

### Example 2

```text
Input:
v1 = [0,7], v2 = [0,2]
Output: 14
```

### Example 3

```text
Input:
v1 = [1,2,3], v2 = [4,5,6]
Output: 32
Explanation: 1*4 + 2*5 + 3*6 = 32 — with no zero entries, every pair
contributes.
```

### Constraints

- `1 <= nums.length <= 10⁵` for both vectors, and both vectors have the
  same length.
- `0 <= nums[i] <= 1000`

## Hints

### Hint 1

Store each vector as a list of (index, value) pairs for its non-zero
entries only.

### Hint 2

Two sorted pair lists can be merged with two pointers — only shared
non-zero indices need a multiplication.
