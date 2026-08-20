# Leftmost Local Maximum

## Description

An entry of `nums` is a *local maximum* when it is strictly greater than each
of its neighbours. The two end entries have only one neighbour, so meeting the
definition there means beating that one entry.

Return the smallest index whose entry is a local maximum. Several indices can
qualify; the one wanted is the earliest.

### Example 1

```text
Input: nums = [5,9,4,8,3]
Output: 1
Explanation: 9 at index 1 and 8 at index 3 are both local maxima. 9 comes
first, so index 1 is the answer.
```

### Example 2

```text
Input: nums = [-8,-3,0,6]
Output: 3
Explanation: The array climbs all the way, so no interior entry beats both
sides. The final entry beats its single neighbour and takes it.
```

### Example 3

```text
Input: nums = [7,5,2,-1]
Output: 0
Explanation: The mirror of Example 2: the descent never stops, so the very
first entry qualifies through its lone neighbour.
```

### Constraints

- `nums` holds between `1` and `1000` entries
- `-2³¹ <= nums[i] <= 2³¹ - 1`
- no two adjacent entries are equal, so an entry either exceeds its neighbour
  or falls below it

## Hints

### Hint 1

A qualifying index beats the entry before it *and* the entry after it. What
does the array look like at and before the first index that beats its
right-hand neighbour?

### Hint 2

Walk from the left. Everything you have passed so far has been rising the
moment you meet the first index `i` with `nums[i] > nums[i + 1]` — so that
index beats its left side by the climb and its right side by definition.

### Hint 3

If you reach the end without ever descending, the final index is the answer.
One entry alone qualifies trivially, with no neighbour to compare against.
