# Shift Amount Between Arrays II

## Description

You are given two integer arrays, `nums1` and `nums2`.

Two elements have been dropped from `nums1`, and every surviving
element was then shifted by the same integer `x`. The survivors match
`nums2` exactly: the same values with the same frequencies, in any
order.

Return the smallest `x` for which such a match is possible. The input
guarantees that at least one valid `x` exists.

### Example 1

```text
Input: nums1 = [10,2,8,4], nums2 = [5,11]
Output: 1
Explanation: Dropping the 2 and 8 leaves [10,4], and adding 1 turns it
into [5,11]. A shift of 3 also works after dropping a different pair,
but 1 is smaller.
```

### Example 2

```text
Input: nums1 = [1,100,3], nums2 = [2]
Output: -98
Explanation: Keeping the 100 and dropping 1 and 3 leaves one element
that lands on 2 after adding -98 — the smallest of the workable
shifts.
```

### Example 3

```text
Input: nums1 = [7,7,3,3,9], nums2 = [5,5,7]
Output: -2
Explanation: Dropping the two 3s leaves [7,7,9], and -2 maps it onto
[5,5,7].
```

### Constraints

- `3 <= nums1.length <= 200`
- `nums2.length == nums1.length - 2`
- `0 <= nums1[i], nums2[i] <= 1000`
- Some integer `x` matches `nums2` after two elements of `nums1` are
  removed and `x` is added to each survivor.

## Hints

### Hint 1

A uniform shift never reorders values: the kept elements, sorted, plus
`x`, must line up with `nums2` sorted — so the kept minimum lands
exactly on `min(nums2)`.

### Hint 2

Two removals can hide at most two elements smaller than the kept
minimum, so the kept minimum is one of the three smallest values of
`nums1`, and only three candidate shifts exist.

### Hint 3

Validate each candidate by consuming the multiset of `nums1` against
`nums2`, then return the smallest candidate that survives.
