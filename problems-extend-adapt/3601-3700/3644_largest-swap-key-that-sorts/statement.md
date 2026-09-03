# Largest Swap Key That Sorts

## Description

The array `nums` holds every value from `0` to `n - 1` exactly once — a
permutation that may be out of order.

Before any moves, you fix one non-negative integer `k`. From then on the
only permitted move is exchanging the values at two indices `i` and `j`
whose values AND together to exactly that `k`, i.e. `nums[i] AND nums[j] == k`.
You can think of `k` as a key: a pair of values may trade places only when
their bits combine to produce the key.

Return the largest `k` with which the permutation can still be rearranged
into non-decreasing order. An array that is already sorted answers `0`.

### Example 1

```text
Input: nums = [0,1,2,3,4,5,7,6]
Output: 6
Explanation: The values 7 and 6 stand in each other's spots, and swapping
them is legal under k = 6 because 7 AND 6 = 6. The array becomes fully
sorted, so the key can be as large as 6.
```

### Example 2

```text
Input: nums = [0,1,2,3,4,6,5,7]
Output: 4
Explanation: Only the pair 6 and 5 is misplaced. Their AND is 6 AND 5 = 4,
so k = 4 licenses the one swap that sorts the array.
```

### Example 3

```text
Input: nums = [4,3,2,1,0]
Output: 0
Explanation: Sorting the reversal takes several swaps, and no positive key
survives them: values 4 and 3 both have to move, and even their AND is
already 0, which caps every candidate key at 0.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `0 <= nums[i] <= n - 1`
- `nums` contains each integer from `0` to `n - 1` exactly once.

## Hints

### Hint 1

Only values resting off their home positions ever need to move, and each of
them takes part in at least one swap; every swap such a value joins pins the
key inside that value's bits, so no key can exceed the bitwise AND of all
displaced values — and that AND itself always suffices.
