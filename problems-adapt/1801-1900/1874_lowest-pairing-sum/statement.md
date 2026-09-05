# Lowest Pairing Sum

## Description

Two integer arrays `nums1` and `nums2` share the same length `n`. Their
pairing sum is the total you get by multiplying the arrays position by
position and adding everything up:

- with `nums1 = [2,5,3]` and `nums2 = [4,1,6]`, the pairing sum is
  `2*4 + 5*1 + 3*6 = 29`.

You may shuffle the elements of `nums1` into any order you like before the
positions are matched; `nums2` stays put. Report the smallest pairing sum
that any arrangement of `nums1` can achieve.

### Example 1

```text
Input: nums1 = [7,2,9,4], nums2 = [3,8,5,6]
Output: 102
Explanation: Ordering nums1 as [9,2,7,4] pairs it against nums2 = [3,8,5,6]
for 9*3 + 2*8 + 7*5 + 4*6 = 102. Every other arrangement of nums1 gives a
larger total.
```

### Example 2

```text
Input: nums1 = [1,6,3,8,5], nums2 = [4,7,2,9,3]
Output: 84
Explanation: Ordering nums1 as [5,3,8,1,6] gives 5*4 + 3*7 + 8*2 + 1*9 +
6*3 = 84, the best possible pairing.
```

### Example 3

```text
Input: nums1 = [10], nums2 = [12]
Output: 120
Explanation: A single position leaves nothing to rearrange, so the sum is
just 10 * 12.
```

### Constraints

- `n == nums1.length == nums2.length`
- `1 <= n <= 10⁵`
- `1 <= nums1[i], nums2[i] <= 100`

### Hint 1

When two big numbers meet, their product dwarfs what two small numbers
would produce. Which value of `nums1` should stand opposite the largest
value of `nums2`?

### Hint 2

Sorting one array upward and the other downward and multiplying across is
optimal — if two positions are ever paired "in order," swapping their
partners never increases the total.
