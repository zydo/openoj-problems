# Smallest Array Under Bounded Swaps

## Description

You are given a 0-indexed array of positive integers `nums` and a positive
integer `limit`.

One swap picks two indices `i` and `j` and exchanges `nums[i]` with
`nums[j]`, but only when the two values are close enough:
`|nums[i] - nums[j]| <= limit`. You may swap as many times as you like.

Return the lexicographically smallest array reachable this way — that is,
the reachable array that is smallest in the position-by-position order,
where an array `a` precedes `b` when at the first index where they differ,
`a` holds the smaller value.

### Example 1

```text
Input: nums = [4,1,7,3,9], limit = 2
Output: [1,3,7,4,9]
Explanation: The values 1, 3 and 4 pairwise chain within distance 2, so
they may be rearranged freely among positions 0, 1 and 3 — the smallest
placement puts them in order, 1, 3, 4. Likewise 7 and 9 (distance 2) trade
places between positions 2 and 4. The two groups never mix: 7 - 4 = 3
exceeds the limit.
```

### Example 2

```text
Input: nums = [6,2,6,2,5], limit = 1
Output: [5,2,6,2,6]
Explanation: The twos (positions 1, 3) form one group and 5, 6, 6
(positions 0, 2, 4) another, since 5 - 2 = 3 > 1. Putting the second group
in order moves the single 5 to position 0; the twos already sit sorted.
```

### Example 3

```text
Input: nums = [10,40,70], limit = 5
Output: [10,40,70]
Explanation: Every pair of values differs by far more than 5, so no swap is
ever legal and the array cannot change at all.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= limit <= 10^9`

## Hints

### Hint 1

Think of the values as nodes of a graph, with an edge between two values
that differ by at most `limit`. What can you say about the values inside
one connected piece versus across two pieces?

### Hint 2

Across pieces nothing can ever cross. Inside one piece, chains of allowed
swaps realize any rearrangement of its values.

### Hint 3

You do not need to build that graph — sorting the values already lays the
pieces out.

### Hint 4

After sorting, a piece is exactly a maximal run of consecutive values whose
successive gaps are each at most `limit`; a larger gap cuts the run. Hand
each run's sorted values to its original indices in sorted order.
