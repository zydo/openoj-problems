# Rotation-Sortable Divisors

## Description

An integer array `nums` of length `n` is given.

A positive integer `k` earns the label sortable when two things hold: `k`
divides `n`, and cutting `nums` into consecutive blocks of length `k` lets
you straighten the whole array into non-decreasing order — where each block
may be cyclically rotated on its own, in either direction, as many times as
needed.

Return the sum of every sortable `k`.

### Example 1

```text
Input: nums = [2,1,4,3]
Output: 2
Explanation:
    The divisors of 4 are 1, 2, and 4.
    k = 1 rotates nothing, so it fails.
    k = 2 works: [2,1] spins into [1,2] and [4,3] into [3,4].
    k = 4 fails: no rotation of the single block [2,1,4,3] equals the
    sorted array [1,2,3,4].
    Only 2 is sortable, so the answer is 2.
```

### Example 2

```text
Input: nums = [1,2,3]
Output: 4
Explanation:
    The array is already sorted, so both divisors 1 and 3 pass and the
    answer is 1 + 3 = 4.
```

### Example 3

```text
Input: nums = [2,2,1]
Output: 3
Explanation:
    Divisor 1 fails. For k = 3 the lone block [2,2,1] rotates into the
    sorted [1,2,2], so the answer is 3.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

The block cut only exists when `k` divides `n`, so start from the divisors
of `n` — there are few of them.

### Hint 2

Blocks never exchange elements with their neighbours, so the final array is
forced: it must be the sorted copy of `nums`. Each block therefore has to
rotate into exactly the sorted slice occupying its positions.

### Hint 3

A sequence is a cyclic rotation of a block precisely when it occurs inside
two copies of that block glued end to end.

### Hint 4

A linear-time substring search (KMP) settles each block's test; a divisor
survives when all its blocks do. Add up the survivors.
