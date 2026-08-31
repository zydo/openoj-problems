# Circular Heist II

## Description

You are casing a ring of houses arranged in a circle, so the first house
and the last house count as neighbors too. Each house `i` holds `nums[i]`
in cash. Every house is wired to both of its neighbors, and breaking into
two neighboring houses on the same night trips the alarm — so no two houses
you hit may be adjacent anywhere around the ring, including the wraparound
pair.

Return the largest total you can collect in one night without ever hitting
two adjacent houses.

### Example 1

```text
Input: nums = [2,7,9,3,1]
Output: 11
Explanation: Hitting indices 0 and 2 (values 2 and 9) totals only 11 once
the best combination is found; index 4 sits next to index 0 around the
ring and index 1 sits between the two chosen houses, so neither can be
added without creating an adjacent pair.
```

### Example 2

```text
Input: nums = [4,4,4,4]
Output: 8
Explanation: Hitting indices 0 and 2 (or 1 and 3) avoids every adjacent
pair around the ring, for a total of 4 + 4 = 8. Hitting three or more of
the four houses always lands on an adjacent pair somewhere.
```

### Example 3

```text
Input: nums = [6]
Output: 6
Explanation: A single house has no distinct neighbor to clash with, so
hitting it is always safe.
```

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 1000`

## Hints

### Hint 1

The wraparound edge means index 0 and the last index can never both be
hit. Splitting the ring at that edge into two ordinary, non-circular
runs — one that drops the first house, one that drops the last — reduces
the problem to a version without any circular adjacency at all.
