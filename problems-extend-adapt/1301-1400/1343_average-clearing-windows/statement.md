# Average-Clearing Windows

## Description

You are given an integer array `arr` and two integers `k` and
`threshold`. Look at every contiguous window of exactly `k` elements and
compute its average — the sum of its elements divided by `k`.

Return how many of these fixed-length windows have an average of at
least `threshold`.

### Example 1

```text
Input: arr = [4,1,7,2,9,3,8], k = 2, threshold = 5
Output: 3
Explanation: The windows [2,9], [9,3] and [3,8] average 5.5, 6 and 5.5
respectively; every other pair of neighbours falls short of 5.
```

### Example 2

```text
Input: arr = [6,5,2,8,4,1,9,7], k = 3, threshold = 5
Output: 2
Explanation: [5,2,8] averages exactly 5 and [1,9,7] averages about
5.67 — both clear the bar, while the remaining four windows do not.
```

### Example 3

```text
Input: arr = [1,2,3,4,10], k = 5, threshold = 4
Output: 1
Explanation: The whole array is the only window of length 5, and its
average is exactly 4, which meets the threshold.
```

### Constraints

- `1 <= arr.length <= 10⁵`
- `1 <= arr[i] <= 10⁴`
- `1 <= k <= arr.length`
- `0 <= threshold <= 10⁴`

## Hints

### Hint 1

Begin with the very first window of `k` elements and compare what it
averages against `threshold`.

### Hint 2

Slide the window one element at a time, keeping its length at `k` all
the way across the array, and tally each window whose average clears
the threshold. Averaging a window means dividing its sum by `k`, so the
test can be applied to the sums directly.
