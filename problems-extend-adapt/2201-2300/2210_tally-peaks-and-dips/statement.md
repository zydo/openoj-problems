# Tally Peaks and Dips

## Description

You are given a 0-indexed integer array `nums`. Call an index `i` a peak
if the nearest neighbors of `nums[i]` that differ from it — one on each
side — are both smaller than `nums[i]`, and a dip if those nearest
differing neighbors are both larger. Indices holding equal values belong
to the same peak or dip and count only once.

An index can only be a peak or a dip when a differing neighbor exists on
both its left and its right.

Return how many peaks and dips `nums` contains in total.

### Example 1

```text
Input: nums = [1,3,2,4,2,4,1]
Output: 5
Explanation:
The array zigzags, so every interior element is an extremum: 3, 4, and 4
are each higher than both nearest differing neighbors, and the two 2's
are each lower than both. That makes 5 in total; the endpoints 1 and 1
have a differing neighbor on only one side.
```

### Example 2

```text
Input: nums = [5,5,5,5]
Output: 0
Explanation: No element has a differing neighbor on either side, so
nothing can be a peak or a dip.
```

### Example 3

```text
Input: nums = [3,1,2,2,4,2,5,5,3]
Output: 4
Explanation:
The 1 dips below 3 and 2; the 4 rises above the equal run 2, 2 on its
left and the 2 on its right; that following 2 dips below 4 and 5; and the
run 5, 5 rises above 2 and 3. Members of an equal run share one counting
extremum, so the answer is 4.
```

### Constraints

- `3 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

For each element, the nearest differing neighbor on each side is all that
matters — equal values in between can be skipped.

### Hint 2

Consecutive equal values share their extremum. Collapsing each run of
equal values to one representative makes the count a simple scan for
interior elements that are strictly above or strictly below both of
their compressed neighbors.
