# Rise, Fall, Rise I

## Description

Read the values of an array as a trail: climb, descend, then climb once
more. An array `nums` of length `n` has this rise-fall-rise shape when there
exist indices `p` and `q`, with `0 < p < q < n - 1`, such that (each stretch
below includes both of its endpoints):

- `nums[0..p]` is strictly increasing,
- `nums[p..q]` is strictly decreasing,
- `nums[q..n-1]` is strictly increasing.

Given an integer array `nums`, return `true` if it has this shape and
`false` otherwise.

### Example 1

```text
Input: nums = [2,4,3,5]
Output: true
Explanation: Pick p = 1 and q = 2.
- nums[0..1] = [2,4] climbs strictly (2 < 4).
- nums[1..2] = [4,3] falls strictly (4 > 3).
- nums[2..3] = [3,5] climbs strictly again (3 < 5).
```

### Example 2

```text
Input: nums = [1,2,2,3]
Output: false
Explanation: The equal neighbors 2 and 2 break every possible cut: which
stretch they land in, that stretch stops being strict, and no choice of p
and q can separate them onto different stretches.
```

### Example 3

```text
Input: nums = [5,1,4,2,6]
Output: false
Explanation: The array opens by falling (5 to 1), so the first strictly
rising stretch covers only the single element at index 0. That leaves no
room for a valid p, which needs at least one rising step before it.
```

### Example 4

```text
Input: nums = [-1,0,-2,1]
Output: true
Explanation: Pick p = 1 and q = 2: [-1,0] climbs, [0,-2] falls, and [-2,1]
climbs again.
```

### Constraints

- `3 <= n <= 100`
- `-1000 <= nums[i] <= 1000`

### Hint 1

The shape leaves no freedom in where the cut points sit: walk the opening
climb as far as it goes, and if any valid cut exists, it sits exactly where
that climb stops. Continue the walk through the fall and check that what
remains climbs to the end.
