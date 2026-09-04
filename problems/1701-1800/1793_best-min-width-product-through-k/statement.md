# Best Min-Width Product Through K

## Description

You are given an integer array `nums` and an index `k` into it.

For a window `(i, j)` — the contiguous run `nums[i], nums[i+1], ..., nums[j]` —
define its product as

`min(nums[i], ..., nums[j]) * (j - i + 1)`,

the smallest value it contains times its width. A window is _through k_ when
`i <= k <= j`.

Return the largest product of any window through `k`.

### Example 1

```text
Input: nums = [1,6,3,7,5,4], k = 3
Output: 15
Explanation: The window (1, 5) has product
min(6,3,7,5,4) * (5-1+1) = 3 * 5 = 15, and no window through k = 3 beats it.
```

### Example 2

```text
Input: nums = [8,3,9,1,1,1], k = 2
Output: 9
Explanation: Widening past the 3 only adds 1s, which drag the minimum down
faster than the width grows: the window (0, 2) keeps product 3 * 3 = 9, while
every wider window drops to a minimum of 1. The lone cell at k also scores
9 * 1 = 9.
```

### Example 3

```text
Input: nums = [4,6,2,5,3], k = 4
Output: 10
Explanation: From the right edge every step reaches left. The full array has
minimum 2 and product 2 * 5 = 10.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 2 * 10⁴`
- `0 <= k < nums.length`

## Hints

### Hint 1

Every candidate window contains `k`, so look at the part left of `k` and the
part right of `k` as two lists you pull from, growing the window outward one
element at a time.

### Hint 2

When both sides offer a next element, take the larger one: the smaller will
lower the running minimum whenever it joins, so postpone it.

### Hint 3

Score the running minimum times the current width after every step — the best
over all widths is the answer.
