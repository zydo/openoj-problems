# Smallest Cumulative Gap

## Description

You are given two positive integer arrays `nums1` and `nums2`, both of length
`n`. Pair them up by position and measure the cumulative gap: the sum of
`|nums1[i] - nums2[i]|` over every index `i` (`0 <= i < n`).

You are allowed one adjustment — pick a single slot of `nums1` and overwrite
its value with any value that already appears somewhere in `nums1`. Nothing
else about the arrays changes.

Returning the cumulative gap after making at most one such adjustment, as
small as it can be. The total can be enormous, so report it modulo `10⁹ + 7`.

`|x|` denotes `x` when `x >= 0` and `-x` otherwise.

### Example 1

```text
Input: nums1 = [3,9,6], nums2 = [4,2,7]
Output: 3
Explanation: The three pairs contribute 1 + 7 + 1 = 9. Copying the 3 over
the 9 gives [3,3,6] and shrinks the middle pair to |3-2| = 1, for a new total
of 1 + 1 + 1 = 3. No other single adjustment does better.
```

### Example 2

```text
Input: nums1 = [5,5,5], nums2 = [5,5,5]
Output: 0
Explanation: The arrays agree at every position, so the gap is already 0 and
no adjustment is worthwhile.
```

### Example 3

```text
Input: nums1 = [4,15,9,22], nums2 = [14,3,20,6]
Output: 35
Explanation: The pairs start at 10 + 12 + 11 + 16 = 49. Copying the 4 over
the 22 gives [4,15,9,4], turning the last pair from 16 into |4-6| = 2 and
saving 14, for a total of 35.
```

### Constraints

- `1 <= n <= 10⁵`, where `n` is the shared length of `nums1` and `nums2`
- `1 <= nums1[i], nums2[i] <= 10⁵`

### Hint 1

Every pair except the one you rewrite contributes a fixed amount, so the only
question is which slot can be improved the most.

### Hint 2

For the slot feeding `nums2[i]`, the strongest possible rewrite is the element
of `nums1` numerically closest to `nums2[i]` — a sorted copy of `nums1` finds
it with one binary search per slot.
