# Max of Window Minima

## Description

You are given an integer array `nums` of length `n`. For every window size
`k` from `1` to `n`, look at each contiguous run of exactly `k` elements,
record the smallest value inside it, and keep the largest of those smallest
values.

Return an integer array `answer` of length `n`, where `answer[k - 1]` holds
that result for windows of size `k`.

### Example 1

```text
Input: nums = [3,8,5,2]
Output: [8,5,3,2]
Explanation:
k=1: the windows are [3], [8], [5], [2], whose minima are 3, 8, 5, 2. The largest is 8.
k=2: the windows are [3,8], [8,5], [5,2], whose minima are 3, 5, 2. The largest is 5.
k=3: the windows are [3,8,5], [8,5,2], whose minima are 3, 2. The largest is 3.
k=4: the single window [3,8,5,2] has minimum 2, so the answer is 2.
```

### Example 2

```text
Input: nums = [6,2,4,9]
Output: [9,4,2,2]
Explanation:
k=2: the minima of the three windows are 2, 2, 4, so the answer is 4.
k=3: both windows contain the 2, so their minimum is 2 and the answer is 2.
Every larger window also contains the 2, so the rest of the output stays at 2.
```

### Example 3

```text
Input: nums = [1,3,1,3,1]
Output: [3,1,1,1,1]
Explanation: every window of size 2 or more contains a 1, so 1 is the answer
for all of them; only the size-1 window holding the single 3 reaches higher.
```

### Constraints

- `1 <= n <= 10⁵`
- `0 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Enumerating windows for every size is quadratic. Flip the question around:
for each element, decide the range of window sizes in which it can be the
minimum.

### Hint 2

An element stays the minimum of a window until the window swallows something
smaller. So its reach is bounded by the nearest strictly smaller elements on
the left and on the right — a stack finds both in one pass each.

### Hint 3

If an element's reach spans `w` positions, it is the minimum of some window
of every size from `1` to `w`, which makes it a candidate answer for all
those sizes at once.

### Hint 4

A window of size `k + 1` always contains a window of size `k` whose minimum
is no smaller, so the answers weakly decrease as `k` grows. Seed the best
value at each maximal reach, then let a right-to-left running maximum carry
it down to the shorter sizes.
