# Longest Zigzag Run After Dropping One Element

## Description

You are given an integer array `nums`.

A contiguous run `nums[l..r]` is zigzag when its neighboring comparisons
strictly alternate in direction. One of the two shapes below holds:

- `nums[l] < nums[l + 1] > nums[l + 2] < nums[l + 3] > ...`
- `nums[l] > nums[l + 1] < nums[l + 2] > nums[l + 3] < ...`

So every step inside the run is a strict increase or a strict decrease,
and the two directions keep swapping. A step between equal values is not
allowed, and a single element counts as a zigzag run.

Before you choose the run, you may drop at most one element from `nums` —
or drop nothing at all. Return the length of the longest zigzag run you
can select afterwards.

### Example 1

```text
Input: nums = [6,2,7,1,8]
Output: 5
Explanation: Drop nothing. The whole array already zigzags:
6 > 2 < 7 > 1 < 8, so all five elements form one run.
```

### Example 2

```text
Input: nums = [10,5,5,8,2,9]
Output: 5
Explanation: Drop the second 5. The array becomes [10, 5, 8, 2, 9] and
the comparisons alternate: 10 > 5 < 8 > 2 < 9.
```

### Example 3

```text
Input: nums = [7,7,7]
Output: 1
Explanation: Every neighboring pair is equal, and dropping one element
still leaves an equal pair, so any single element is the longest run.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

For each index, track the length of the longest zigzag run ending there,
tagged by the direction of its final comparison, and the same quantity
for runs starting there, tagged by their first comparison.

### Hint 2

Build the ending tables in one left-to-right pass and the starting
tables in one right-to-left pass. An equal adjacent pair gives no step,
so both tables reset to a length-1 run there.

### Hint 3

A dropped element only pays off when the chosen run spans its position.
Compare the two neighbors across the gap: if the left one is smaller, a
run on the left must end with `>` while one on the right starts with
`>`; if it is larger, both directions flip. Equal neighbors bridge
nothing.

### Hint 4

The answer is the larger of two maxima: the best single run with no
drop, and the best joined pair over every interior dropped position.
