# Rotating Toward The Most Matches

## Description

Two equal-length integer arrays `nums1` and `nums2` are given. A position
`i` lines up when `nums1[i] == nums2[i]`. You may spin `nums1` to the right
as many times as you like: one spin moves the element at index `i` to index
`(i + 1) % n` for every `i`. Pick the number of spins that lines up the most
positions and return that count.

### Example 1

```text
Input: nums1 = [2,7,4], nums2 = [4,2,7]
Output: 3
Explanation: One spin carries the 4 to the front and nums1 becomes
[4, 2, 7] — identical to nums2, so all three positions line up.
```

### Example 2

```text
Input: nums1 = [1,2,3,4], nums2 = [2,3,4,1]
Output: 4
Explanation: Spinning three times slides the 1 to the end and nums1 becomes
[2, 3, 4, 1], matching nums2 at every position.
```

### Example 3

```text
Input: nums1 = [1,1,2], nums2 = [1,2,2]
Output: 2
Explanation: No spin reproduces nums2 exactly, but leaving nums1 alone
already lines up positions 0 and 2, and no spin beats those two.
```

### Constraints

- `nums1.length == nums2.length`
- `1 <= nums1.length, nums2.length <= 3000`
- `1 <= nums1[i], nums2[i] <= 10⁹`

## Hints

### Hint 1

Spinning `n` times returns `nums1` to where it started, so only the `n`
distinct shift amounts matter.

### Hint 2

Count the positionwise matches for each shift amount and keep the largest;
with `n <= 3000` a direct sweep over all shifts fits easily.
