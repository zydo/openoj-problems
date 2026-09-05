# Matching Totals By Filling Blanks

## Description

You are given two integer arrays, `nums1` and `nums2`. Treat every `0` in
either array as a blank, and fill each blank with any strictly positive
integer you like. After the fills, the totals of the two arrays must match
exactly.

Return the smallest matching total that some way of filling the blanks can
produce, or `-1` if no fill can ever bring the two totals together.

### Example 1

```text
Input: nums1 = [4,0,3], nums2 = [2,5,0]
Output: 8
Explanation: Fill both blanks with 1: nums1 becomes [4,1,3] with total 8,
and nums2 becomes [2,5,1] with total 8. Totals below 8 are out of reach —
each array's floor is its sum plus one per blank — so 8 is minimal.
```

### Example 2

```text
Input: nums1 = [6], nums2 = [1,0,0]
Output: 6
Explanation: nums1 holds no blank, so its total is frozen at 6. nums2 can
reach any total from 3 (its sum 1 plus its two blanks) upward, and 6
clears that floor — fill the blanks with 2 and 3 to get [1,2,3].
```

### Example 3

```text
Input: nums1 = [5,1], nums2 = [8,0]
Output: -1
Explanation: nums1 is frozen at 6, while nums2's smallest reachable total
is 9 (sum 8 plus its one blank). The climber can never come down to the
frozen array, so no fill works.
```

### Constraints

- `1 <= nums1.length, nums2.length <= 10^5`
- `0 <= nums1[i], nums2[i] <= 10^6`

## Hints

### Hint 1

An array holding `z` blanks can realize every total from `sum + z` upward,
since one blank can absorb any amount of extra slack; an array with no
blank can only keep its exact total.

### Hint 2

The answer is the smallest value inside the reach of both arrays: the
higher of the two floors when both can climb, the frozen total when only
one can — and a failure whenever the frozen total sits below the other
array's floor.
