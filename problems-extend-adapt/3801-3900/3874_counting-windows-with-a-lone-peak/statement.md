# Counting Windows With a Lone Peak

## Description

You are given an integer array `nums` of length `n` and an integer `k`.

Call an index `i` a peak when it is strictly inside the array and its value
rises above both neighbors:

- `0 < i < n - 1`
- `nums[i] > nums[i - 1]` and `nums[i] > nums[i + 1]`

A window `[l, r]` — a contiguous, non-empty run of elements — counts as a
lone-peak window when it holds exactly one peak, at some index `i`, and that
peak sits close enough to both ends:

- `i - l <= k` and `r - i <= k`

Return how many windows of `nums` qualify.

### Example 1

```text
Input: nums = [5,9,4,9,5], k = 2
Output: 8
Explanation: The peaks sit at indices 1 and 3. The window around index 1
may start at 0 or 1 and end at 1 or 2, giving [5,9], [9], [5,9,4], [9,4];
the window around index 3 may start at 2 or 3 and end at 3 or 4, giving
[4,9], [9], [4,9,5], [9,5]. No window can reach from one peak to the other
while holding only that one, so the answer is 8.
```

### Example 2

```text
Input: nums = [1,2,3,2,1], k = 1
Output: 4
Explanation: Only index 2 is a peak. With k = 1 the window may extend at
most one slot away from it on either side, so the starts come from
{1, 2} and the ends from {2, 3}: [2,3], [3], [2,3,2], and [3,2].
```

### Example 3

```text
Input: nums = [9,7,5,3], k = 1
Output: 0
Explanation: The array only falls from left to right, so no index stands
above both of its neighbors and there is no peak to anchor a window.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `-10⁵ <= nums[i] <= 10⁵`
- `1 <= k <= n`

## Hints

### Hint 1

List every peak first; the windows anchored at one peak end where the
neighboring peaks begin.

### Hint 2

For each peak, the distance rule caps how far the two endpoints may drift,
and the neighboring peaks cap them again.

### Hint 3

The legal starts and legal ends of a peak's windows pair up freely, so
multiply the two counts and add the products over all peaks.
