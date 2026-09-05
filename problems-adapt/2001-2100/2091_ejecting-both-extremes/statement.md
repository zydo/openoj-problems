# Ejecting Both Extremes

## Description

You are given a 0-indexed array `nums` of distinct integers.

One entry of `nums` carries the smallest value and one carries the
largest; call them the minimum and the maximum. Your job is to get both
of them out of the array.

The only move available is a removal at an end: take one element off
the front of the array, or take one element off the back.

Return the fewest such end removals that rid the array of both the
minimum and the maximum.

### Example 1

```text
Input: nums = [12,4,19,3,8,15,1,7]
Output: 5
Explanation: The maximum, 19, sits at index 2 and the minimum, 1,
sits at index 6. Removing three elements from the front clears down
to 19, and two more from the back clears up to 1, for 3 + 2 = 5
removals — the least possible here.
```

### Example 2

```text
Input: nums = [9,1,5,3,8]
Output: 2
Explanation: The maximum, 9, is at index 0 and the minimum, 1, is at
index 1, so two removals from the front clear both at once.
```

### Example 3

```text
Input: nums = [6,2,9,4,1,8]
Output: 4
Explanation: The maximum, 9, is at index 2 and the minimum, 1, is at
index 4. Stripping four elements off the back removes 8, 1, 4 and 9
together, which beats every front-heavy alternative.
```

### Example 4

```text
Input: nums = [7]
Output: 1
Explanation: The lone element is simultaneously the minimum and the
maximum, and one removal takes it away.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁵ <= nums[i] <= 10⁵`
- The values in `nums` are pairwise distinct.

## Hints

### Hint 1

Whatever plan you follow, only three shapes are possible when both
extremes must go.

### Hint 2

Shape one: everything comes off the front until both elements are
gone.

### Hint 3

Shape two: everything comes off the back instead.

### Hint 4

Shape three: the front side releases one of the two elements while the
back side releases the other.

### Hint 5

Evaluate all three shapes for the two positions at hand and keep the
cheapest.
