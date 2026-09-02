# Widest Union After Halving Both Arrays

## Description

You are given two 0-indexed integer arrays `nums1` and `nums2`, both of even
length `n`.

From `nums1` delete exactly `n / 2` elements, and from `nums2` delete exactly
`n / 2` elements — you choose which. The two remainders are then merged into
a set `s`: values that appear more than once among the survivors still count
once.

Return the greatest number of distinct values `s` can hold over all ways to
pick the deletions.

### Example 1

```text
Input: nums1 = [8,8,8,9], nums2 = [9,9,9,7]
Output: 3
Explanation: Keep `8` and `9` in the first array and `7` and `9` in the
second. The survivors' union is `{7, 8, 9}`. That is the ceiling here —
every kept element comes from just three distinct values — so no choice of
deletions can reach four.
```

### Example 2

```text
Input: nums1 = [5,5,5,5,5,5], nums2 = [6,6,6,6,6,6]
Output: 2
Explanation: The first array holds nothing but `5` and the second nothing
but `6`, so however the halves are chosen, the set can only ever contain
`{5, 6}` — and keeping one of each value attains it.
```

### Example 3

```text
Input: nums1 = [1,2,3,4], nums2 = [3,4,5,6]
Output: 4
Explanation: Only four elements survive in total, so the set cannot exceed
four values. Spend the budget on undisputed ground: keep `1` and `2` from
`nums1` and `5` and `6` from `nums2`, giving four distinct survivors and
abandoning the shared pair `3, 4`.
```

### Constraints

- `nums1.length == nums2.length == n`
- `n` is even and `1 <= n <= 2 * 10⁴`
- `1 <= nums1[i], nums2[i] <= 10⁹`

## Hints

### Hint 1

Deleting `n / 2` elements from each array is the same decision as keeping
`n / 2` elements in each — flip the question around.

### Hint 2

Partition the values into three groups: those appearing only in `nums1`,
those appearing only in `nums2`, and those both arrays share.

### Hint 3

Let each array spend its `n / 2` kept slots on its exclusive values first.
Any slot left over may add a shared value, and each distinct shared value
enlarges the set once no matter which array supplies it.
