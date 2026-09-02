# Interleaving Positives and Negatives

## Description

You are given a 0-indexed integer array `nums` of even length holding
equally many positive and negative integers. Reorder its elements so that

- every adjacent pair carries opposite signs,
- within each sign, the elements keep the relative order they had in
  `nums`,
- the rearranged array starts with a positive element,

then return the result. The reordering does not have to happen in place.

### Example 1

```text
Input: nums = [2,3,-8,-4,6,-5]
Output: [2,-8,3,-4,6,-5]
Explanation: The positives appear in the order 2, 3, 6 and the negatives
as -8, -4, -5. Alternating the two groups — positives first — stitches
them into [2,-8,3,-4,6,-5].
```

### Example 2

```text
Input: nums = [-3,1,-2,4]
Output: [1,-3,4,-2]
Explanation: The positives 1 and 4 keep their order, as do the negatives
-3 and -2; the alternating weave has to open with a positive.
```

### Example 3

```text
Input: nums = [-5,-7,10,20]
Output: [10,-5,20,-7]
Explanation: Both negatives precede both positives in the input, yet each
group's internal order survives the weave.
```

### Constraints

- `2 <= nums.length <= 2 * 10⁵`
- `nums.length` is even
- `1 <= |nums[i]| <= 10⁵`
- `nums` holds equally many positive and negative integers.

## Hints

### Hint 1

Slots alternate strictly, so an element's destination is fixed by its
sign and by how many elements of that same sign preceded it.

### Hint 2

The k-th positive belongs at an even index and the k-th negative at the
odd index right after it — one pass can place everything.
