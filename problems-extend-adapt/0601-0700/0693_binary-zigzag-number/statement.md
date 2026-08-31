# Binary Zigzag Number

## Description

You are given a positive integer `n`. Look at its binary representation
and check whether it zigzags: every pair of neighboring bits must differ,
so no two adjacent bits are ever equal.

Return `true` when `n`'s bits zigzag this way, and `false` otherwise.

### Example 1

```text
Input: n = 10
Output: true
Explanation: 10 in binary is 1010. Reading left to right, every
neighboring pair of bits (1,0), (0,1), (1,0) differs.
```

### Example 2

```text
Input: n = 6
Output: false
Explanation: 6 in binary is 110. The two middle bits are both 1, so they
do not differ.
```

### Example 3

```text
Input: n = 12
Output: false
Explanation: 12 in binary is 1100. The middle pair of bits is 1 and 1, and
the trailing pair is 0 and 0 — neither pair differs.
```

### Constraints

- `1 <= n <= 2³¹ - 1`
