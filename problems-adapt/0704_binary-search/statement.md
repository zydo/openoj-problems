# Binary Search

## Description

`nums` holds distinct integers in increasing order. Locate `target` in it:
return the position it occupies, or `-1` when `nums` does not contain it.
Positions are counted from `0`.

The sorted order is what makes the problem interesting — a solution that reads
every entry is too slow. Aim for a running time logarithmic in the length of
`nums`.

### Example 1

```text
Input: nums = [-8,-3,1,4,6,10,15], target = -3
Output: 1
Explanation: -3 sits second from the left, at position 1.
```

### Example 2

```text
Input: nums = [-8,-3,1,4,6,10,15], target = 7
Output: -1
Explanation: 7 would belong between 6 and 10, but it is not there.
```

### Example 3

```text
Input: nums = [2], target = 2
Output: 0
Explanation: The lone entry is the match.
```

### Constraints

- `1 <= nums.length <= 10^4`
- Every value, and `target` too, lies strictly between `-10^4` and `10^4`
- No value appears twice in `nums`
- `nums` is given in increasing order

## Hints

### Hint 1

Track a window of positions that could still hold the target — start with the
whole array — and look at the entry halfway across it.

### Hint 2

That one comparison settles half the window. A halfway entry below `target`
rules out itself and everything to its left; above `target`, itself and
everything to its right. When the window closes up with nothing left in it,
`target` is absent.
