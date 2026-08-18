# Combined Median

## Description

You are given two sorted arrays `first` and `second`. Return the median of all
their elements, taken in combined sorted order.

Either array may be empty, as long as at least one element exists in total.
The intended running time is `O(log (m + n))`, where `m` and `n` are the two
lengths.

### Example 1

```text
Input: first = [2,6], second = [9]
Output: 6.00000
Explanation: Combined order is [2,6,9]; the middle element is 6.
```

### Example 2

```text
Input: first = [-3,0], second = [4,11]
Output: 2.00000
Explanation: Combined order is [-3,0,4,11]; the median is the average of the
two middle elements, (0 + 4) / 2 = 2.
```

### Example 3

```text
Input: first = [7], second = []
Output: 7.00000
Explanation: One array is empty, so the median is just the middle of [7].
```

### Constraints

- `first.length == m`, `second.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10⁶ <= first[i], second[i] <= 10⁶`

## Hints

### Hint 1

The median marks where the combined ordering splits into a lower and an upper
half. You never need to merge: searching for how many elements the shorter
array donates to the lower half pins everything down.

### Hint 2

Fix that donation count `i` and the longer array's cut is no longer free —
the lower half holds exactly `(m + n + 1) / 2` elements overall.

### Hint 3

The donation count is right when nothing on the lower side exceeds anything
on the upper side; because both arrays are sorted, two cross comparisons are
enough. Cuts at the very ends of an array can be compared against -∞ and +∞.

### Hint 4

An odd total leaves the median as the smallest element of the upper half; an
even total averages the two elements that straddle the split.
