# Cheapest Uniform Windows

## Description

You are given an integer array `nums` and two integers, `x` and `k`. One
operation picks any element and raises or lowers it by `1`.

Pick at least `k` non-overlapping subarrays of `nums`, each of length
exactly `x`, and spend operations until the elements inside every picked
subarray are all equal.

Return the smallest number of operations that can pull this off.

### Example 1

```text
Input: nums = [1,0,2,-1,3], x = 2, k = 2
Output: 4
Explanation: Level [1,0] to [0,0] with one operation, and level [2,-1] to
[2,2] with three. No other pair of disjoint windows costs less than 4.
```

### Example 2

```text
Input: nums = [3,1,3,1,3], x = 2, k = 1
Output: 2
Explanation: A single window is enough. Every adjacent pair holds a 1 and
a 3, and leveling either pair to a common value takes 2 operations.
```

### Example 3

```text
Input: nums = [4,4,4,4], x = 2, k = 2
Output: 0
Explanation: The whole array is already equal, so any two disjoint windows
of length 2 need no work at all.
```

### Example 4

```text
Input: nums = [7,7,1,9,9,0], x = 3, k = 2
Output: 15
Explanation: With the array 6 long and windows 3 wide, the only disjoint
pair starts at 0 and at 3. Raising the 1 in [7,7,1] up to 7 takes 6
operations, and raising the 0 in [9,9,0] up to 9 takes 9: 15 in total.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `-10⁶ <= nums[i] <= 10⁶`
- `2 <= x <= nums.length`
- `1 <= k <= 15`
- `2 <= k * x <= nums.length`

## Hints

### Hint 1

For one fixed window, the cheapest common target is its median; the cost is
the sum of absolute differences from that median.

### Hint 2

Slide a length-`x` window across the array with an order-statistics
structure (a Fenwick tree over compressed values, or two heaps) to price
every window in logarithmic time.

### Hint 3

With every window's price known, pick `k` mutually disjoint windows with a
selection DP over start positions, where taking a window at `i` forces the
previous pick to end before `i - x`.
