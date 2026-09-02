# Twin Rising Runs II

## Description

You are given an integer array `nums` of length `n`. A size `k` works when
the array holds two touching stretches of length `k`, each of them strictly
increasing: some block `nums[a..a + k - 1]` and the block
`nums[a + k..a + 2 * k - 1]` that begins exactly where the first one ends.
The stretches must be neighbors — no gap and no overlap is allowed between
them.

Return the largest size `k` for which such a neighboring pair exists. A
subarray is a contiguous, non-empty sequence of elements of the array, and
a one-element sequence counts as strictly increasing.

### Example 1

```text
Input: nums = [10,12,13,4,5,6,7,1,2]
Output: 3
Explanation: With `k = 3`, the stretch at indices 0..2 is `[10,12,13]`
and the stretch at indices 3..5 is `[4,5,6]`. Both are strictly
increasing and adjacent. No `k` above 3 admits a neighboring pair.
```

### Example 2

```text
Input: nums = [3,4,5,6,7,8,9,20]
Output: 4
Explanation: The whole array is one unbroken strictly increasing run of
length 8, so two adjacent stretches of length 4 fit inside it:
`[3,4,5,6]` followed by `[7,8,9,20]`.
```

### Example 3

```text
Input: nums = [7,7,7,7]
Output: 1
Explanation: The array never strictly rises, so the only size that works
is `k = 1`: any single element is a strictly increasing stretch, and the
first two positions give a neighboring pair.
```

### Constraints

- `2 <= nums.length <= 2 * 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

Walk the array once and mark where a strict rise breaks; those breaks cut
`nums` into maximal strictly increasing stretches.

### Hint 2

Two touching windows of length `k` either hide inside one stretch of
length `l` — then `k` can reach `l // 2` — or straddle two neighboring
stretches — then `k` is capped by the shorter of the pair. Fold those
candidates together as you scan.
