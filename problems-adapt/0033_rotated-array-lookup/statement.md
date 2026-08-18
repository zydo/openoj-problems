# Rotated Array Lookup

## Description

Take an array of distinct integers that was in ascending order, cut it at one
position, and move the front piece to the back. The result is `nums`. The cut
position is not given to you, and it may have been the very start, in which
case `nums` is still in plain ascending order.

Given `nums` and an integer `target`, return the index holding `target`, or
`-1` when no index does. Your method must run in `O(log n)` time.

### Example 1

```text
Input: nums = [12,15,20,26,3,8,9], target = 3
Output: 4
Explanation: The ascending order 3,8,9,12,15,20,26 was cut before 12.
```

### Example 2

```text
Input: nums = [30,40,50,10,20], target = 45
Output: -1
Explanation: 45 never appears, so there is no index to report.
```

### Example 3

```text
Input: nums = [-6,-2,5,11], target = 11
Output: 3
Explanation: The cut may be a no-op, leaving an ordinary ascending array.
```

### Constraints

- `1 <= nums.length <= 5000`
- `-10^4 <= nums[i] <= 10^4`
- `-10^4 <= target <= 10^4`
- No value repeats in `nums`.
- `nums` is an ascending array that has been cut and re-joined at most once.

## Hints

### Hint 1

Halving the search window needs a reason to throw one side away. Ascending
order gives that reason; a single cut destroys it only along one seam.

### Hint 2

Take the midpoint of any window. The seam can lie on only one side of it, so
the other side is still in plain ascending order — and you can tell which by
comparing the window's first value with the midpoint's.

### Hint 3

The ordered side's first and last values bound everything in it. One
comparison against those bounds says whether `target` could be there; if it
could not, the answer lies on the other side, and the window halves either way.
