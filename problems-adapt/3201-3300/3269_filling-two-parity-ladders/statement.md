# Filling Two Parity Ladders

## Description

You are given two binary arrays `nums1` and `nums2`. Every slot must be
filled with a fresh positive integer: a slot holding `0` must receive an
even number, and a slot holding `1` must receive an odd number. After
filling, each array must read as a strictly increasing ladder, and no
integer may be used in both arrays.

Choose the fillings so that the largest number used anywhere is as small
as possible. Return that smallest possible largest number.

### Example 1

```text
Input: nums1 = [1,0], nums2 = [0]
Output: 4
Explanation: Filling nums1 = [1, 2] and nums2 = [4] keeps every ladder
increasing and never reuses a value. Two distinct even numbers are
needed no matter what, so a smaller top value cannot work.
```

### Example 2

```text
Input: nums1 = [], nums2 = [0,1,1]
Output: 5
Explanation: One best filling is nums1 = [] and nums2 = [2, 3, 5].
```

### Example 3

```text
Input: nums1 = [1,1,0,0], nums2 = [0,1,0]
Output: 8
Explanation: One best filling is nums1 = [1, 3, 4, 6] and
nums2 = [2, 7, 8].
```

### Constraints

- `0 <= nums1.length <= 1000`
- `1 <= nums2.length <= 1000`
- Every element of `nums1` and `nums2` is `0` or `1`.

## Hints

### Hint 1

Read every filled value in increasing order: an optimal filling is an
interleaving of the two arrays, where each new value lands at the front
of one of them. Which numbers get spent is forced by parity alone — the
only real choice is the interleaving.

### Hint 2

Replaying an interleaving greedily is optimal: each slot takes the
smallest number above the previous one with the required parity, adding
1 when the parity flips and 2 when it repeats. Dynamic programming over
the consumed prefixes and the array that holds the last value then finds
the best interleaving.
