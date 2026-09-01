# Triples With No Common Bits

## Description

Given an integer array `nums`, count the ordered index triples `(i, j, k)`
whose three values AND to zero: `nums[i] & nums[j] & nums[k] == 0`, where
`&` is the bitwise-AND operator. Equivalently, no single bit may be set in
all three chosen values at once.

Each of `i`, `j`, `k` independently ranges over the whole array: positions
may repeat and order matters, so `(0, 1, 2)` and `(1, 0, 2)` are different
triples.

### Example 1

```text
Input: nums = [5,2]
Output: 6
Explanation: Of the 2 × 2 × 2 = 8 ordered triples, only (5,5,5) and
(2,2,2) keep a bit set across all three picks; the other 6 AND to zero.
```

### Example 2

```text
Input: nums = [0,0,0,0]
Output: 64
Explanation: Every AND is already 0, so all 4 × 4 × 4 = 64 triples count.
```

### Example 3

```text
Input: nums = [7]
Output: 0
Explanation: The only triple ANDs 7 with itself three times and keeps
every bit.
```

### Constraints

- `1 <= nums.length <= 1000`
- `0 <= nums[i] < 2¹⁶`
