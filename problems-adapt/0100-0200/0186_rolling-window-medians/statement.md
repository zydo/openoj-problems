# Rolling Window Medians

## Description

The median of an ordered list of numbers is its middle entry; when the list
has even length there is no single middle, and the median is the mean of the
two entries that straddle the middle. So `[7, 9, 12]` has median `9`, while
`[3, 8, 9, 14]` has median `(8 + 9) / 2 = 8.5`.

You are given an integer array `nums` and a window width `k`. A window of
`k` consecutive entries starts at the left end of `nums` and advances one
position at a time until it reaches the right end. For every position the
window occupies, report the median of the `k` values it covers, in order.

Any value within `10⁻⁵` of the exact median is accepted.

### Example 1

```text
Input: nums = [4,1,8,2,7,3], k = 4
Output: [3.0, 4.5, 5.0]
Explanation:
Window position              Median
---------------              ------
[4  1  8  2] 7  3             3.0
 4 [1  8  2  7] 3             4.5
 4  1 [8  2  7  3]            5.0
```

### Example 2

```text
Input: nums = [5,-2,6,1,-4,0], k = 3
Output: [5.0, 1.0, 1.0, 0.0]
Explanation: The first window [5,-2,6] sorted is [-2,5,6], so its median is
the middle value 5. Values may be negative.
```

### Example 3

```text
Input: nums = [7,-1,4,7,-1,4], k = 6
Output: [4.0]
Explanation: The window spans the whole array, so there is a single median.
Sorted, the array is [-1,-1,4,4,7,7]; the two middle values are both 4, so
the median is 4.0.
```

### Constraints

- `1 <= k <= nums.length <= 10⁵`
- `-2³¹ <= nums[i] <= 2³¹ - 1`

## Hints

### Hint 1

Sorting each window from scratch repeats almost all of the previous window's
work. What part of a window actually changes when it advances by one?

### Hint 2

One value enters and one leaves; every other entry, and their relative
order, carries over. How would you keep a sorted view of the window current
with those two touches?

### Hint 3

A sorted list makes the median an index computation: the middle cell for odd
`k`, the mean of the two central cells for even `k`. Find each insert and
eviction position by binary search so only the shifting stays linear.
