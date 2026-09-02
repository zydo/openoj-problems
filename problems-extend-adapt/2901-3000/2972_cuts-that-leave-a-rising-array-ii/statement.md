# Cuts That Leave a Rising Array II

## Description

You are given a 0-indexed array of positive integers `nums`.

Think of deleting one contiguous, non-empty stretch of elements from
`nums`. That stretch is a rising cut when whatever survives it — the
elements before it followed by the elements after it, in their original
order — is strictly increasing. Cutting `[3, 4]` out of
`[5, 3, 4, 6, 7]` is a rising cut, since the remainder `[5, 6, 7]`
rises without repeats.

Deleting the entire array is permitted, and a remainder that ends up
empty counts as strictly increasing.

Return the number of rising cuts in `nums`.

### Example 1

```text
Input: nums = [4,2,5,6]
Output: 7
Explanation: The qualifying stretches are [4], [2], [4,2], [2,5],
[4,2,5], [2,5,6], and the whole array. For instance [2] leaves
[4,5,6] and [2,5] leaves [4,6]. Cutting [5] alone fails, because
[4,2,6] remains.
```

### Example 2

```text
Input: nums = [9,8,7]
Output: 3
Explanation: Only [9,8], [8,7], and [9,8,7] qualify, leaving [7], [9],
and the empty array. Any length-1 cut leaves a descending pair behind.
```

### Example 3

```text
Input: nums = [1,2,2,3,1]
Output: 4
Explanation: The qualifying stretches are [1,2,2,3] (leaving [1]),
[2,3,1] (leaving [1,2]), [2,2,3,1] (leaving [1]), and the whole array.
Everything else leaves a plateau or a dip in the remainder.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Find where the strictly increasing run from the front ends — the
largest `x` with `nums[0..x]` strictly increasing — and where the
strictly increasing run into the back begins — the smallest `y` with
`nums[y..]` strictly increasing.

### Hint 2

Any qualifying cut keeps a piece of the front run and a piece of the
back run, with the back piece's first value strictly above the front
piece's last, and at least one element deleted.

### Hint 3

For each kept front length, count how many starting positions of the
kept back run still work, including a fully deleted middle.

### Hint 4

The threshold back-start position only ever moves right as the kept
front grows, so a single two-pointer pass counts everything in linear
time.
