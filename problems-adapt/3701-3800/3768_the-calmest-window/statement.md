# The Calmest Window

## Description

An integer array `nums` of length `n` and an integer `k` are given.

Inside a window — a contiguous stretch of the array — a pair of
positions `i < j` is an inversion when `nums[i] > nums[j]`. A window's
inversion total is the number of such pairs it holds: a sorted window
scores zero, and each out-of-order pair adds one unit of disorder.

Among every stretch of `nums` exactly `k` long, find the calmest one and
return its inversion total.

### Example 1

```text
Input: nums = [4,6,1,3,2,5], k = 3
Output: 1
Explanation: The length-3 windows are [4,6,1] with 2 inversions,
[6,1,3] with 2, [1,3,2] with 1 (the pair 3,2), and [3,2,5] with 1 (the
pair 3,2 again). One inversion is as calm as it gets here.
```

### Example 2

```text
Input: nums = [9,8,7,1,2,3], k = 4
Output: 3
Explanation: The windows [9,8,7,1], [8,7,1,2], and [7,1,2,3] carry 6,
5, and 3 inversions. The last is calmest: its inversions are exactly the
leading 7 against 1, 2, and 3.
```

### Example 3

```text
Input: nums = [2,4,1,3], k = 4
Output: 3
Explanation: Here k equals the array length, so the whole array is the
only window; the pairs 2>1, 4>1, and 4>3 make 3 inversions.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= n`

## Hints

### Hint 1

Neighboring windows share all but two of their elements, so scoring each
window from zero repeats nearly all the work — follow how the total
changes across a slide instead.

### Hint 2

The element leaving the front was inverted with exactly the smaller
values that stay behind; the element arriving at the back is inverted
with exactly the larger values already inside. Subtract the first
number, add the second.

### Hint 3

"Count members smaller/greater than x inside a shifting set" is a rank
query: compress the values to ranks and hold the window's membership in
a Fenwick tree, or keep the window itself sorted and read both terms off
two bisection positions.

### Hint 4

Slide in the right order: retire the front element and subtract its term
before admitting the newcomer and adding its own — measuring against the
wrong intermediate membership silently double-counts once values repeat.
