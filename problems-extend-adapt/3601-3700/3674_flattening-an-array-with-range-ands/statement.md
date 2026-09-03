# Flattening an Array With Range ANDs

## Description

An integer array `nums` of length `n` is given.

One move selects a contiguous segment `nums[l...r]` (where
`0 <= l <= r < n`) and rewrites every element of that segment with the
bitwise AND of all the elements it contains.

How few moves are needed before every element of `nums` holds the same
value?

A segment is any non-empty consecutive stretch of the array.

### Example 1

```text
Input: nums = [6,10]
Output: 1
Explanation: Take the segment covering both elements. The AND of 6 and
10 is 2, so the array turns into [2, 2] — uniform after one move.
```

### Example 2

```text
Input: nums = [4,4,4,4]
Output: 0
Explanation: Every element already matches, so nothing needs to be done.
```

### Example 3

```text
Input: nums = [1,2,3]
Output: 1
Explanation: The elements differ, but one move over the whole array
replaces each of them with 1 & 2 & 3 = 0, and [0, 0, 0] is uniform.
```

### Constraints

- `1 <= n == nums.length <= 100`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

What is the answer when the array already consists of a single repeated
value?

### Hint 2

Convince yourself the answer never exceeds 1.

### Hint 3

Zero moves are enough exactly when the array starts uniform. Otherwise a
single move over the entire array sets every position to the AND of all
elements, which is uniform by construction.
