# Triplets With A Doubled Center

## Description

You are given an integer array `nums` of length `n`.

Count the triplets of indices `(i, j, k)` that satisfy all of the
following:

- `i < j < k` — three distinct positions taken in order;
- both outer values are exactly twice the middle value:
  `nums[i] == 2 * nums[j]` and `nums[k] == 2 * nums[j]`.

Return how many such triplets the array contains, modulo `10⁹ + 7` —
the raw count can grow far beyond 32 bits.

### Example 1

```text
Input: nums = [2,1,2,4,2]
Output: 2
Explanation:
Both triplets surround the `1` at index 1 with two `2`s:
- (0, 1, 2): nums[0] = 2 and nums[2] = 2, each equal to nums[1] * 2
- (0, 1, 4): nums[0] = 2 and nums[4] = 2, each equal to nums[1] * 2
```

### Example 2

```text
Input: nums = [4,2,4,2,4]
Output: 4
Explanation:
Each `2` in the middle is counted once per (left `4`, right `4`) pair:
- middle index 1 pairs left index 0 with right indices 2 and 4;
- middle index 3 pairs left indices 0 and 2 with right index 4.
```

### Example 3

```text
Input: nums = [0,0,5,0]
Output: 1
Explanation:
The only triplet is (0, 1, 3): the middle value nums[1] = 0, and
doubling 0 still gives 0, so nums[0] = nums[3] = 0 both qualify. The
`5` at index 2 can never be a middle (no `10` exists).
```

### Constraints

- `3 <= n == nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Sweep the array once while keeping two value-frequency tables: how many
times each value has already appeared, and how many times it is still
waiting ahead.

### Hint 2

Only the middle position decides a match. With `v = nums[j]`, that
position contributes `left[2v] * right[2v]` — every doubled value seen
so far combines with every one still to come.
