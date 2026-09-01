# Stepwise Array Totals

## Description

You are given an integer array `nums`. Its stepwise totals form a second
array of the same length whose entry at index `i` is the sum of the
first `i + 1` elements of `nums`. In other words, each entry carries the
previous entry forward and adds exactly one new element to it.

Return the array of stepwise totals of `nums`.

### Example 1

```text
Input: nums = [2,-1,4,7]
Output: [2,1,5,12]
Explanation: Every entry extends the one before it by the next
element: [2, 2+(-1), 2+(-1)+4, 2+(-1)+4+7].
```

### Example 2

```text
Input: nums = [-3,5,5,-2]
Output: [-3,2,7,5]
Explanation: Negative elements pull the running value back down: after
-3 the totals climb by 5 twice, then drop by 2.
```

### Example 3

```text
Input: nums = [9]
Output: [9]
Explanation: With a single element, the only total is that element
itself.
```

### Constraints

- `1 <= nums.length <= 1000`
- `-10^6 <= nums[i] <= 10^6`

## Hints

### Hint 1

No entry ever needs to be recomputed from the start: the total at index
`i` is just the total at index `i - 1` plus `nums[i]`, so one forward
pass with a carried accumulator is enough.
