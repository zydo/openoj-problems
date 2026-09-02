# Totaling The Stepwise Stretches

## Description

Call a stretch of array entries — one element or more, always contiguous
— **stepped** when, read left to right, one of these holds:

- every neighboring pair climbs by exactly `1`;
- every neighboring pair falls by exactly `1`.

A stretch's value is the total of the numbers it contains. For instance,
`[3, 4, 5]` is stepped and worth `12`, and `[9, 8]` is stepped and worth
`17`, whereas neither `[3, 4, 3]` nor `[8, 6]` qualifies.

Handed an integer array `nums`, add up the values of every stepped
contiguous stretch it contains and return that grand total. Because the
total can grow enormous, report it modulo `10⁹ + 7`.

Remember that a single element counts as a stepped stretch too.

### Example 1

```text
Input: nums = [4, 5, 4, 3]
Output: 53
Explanation: The stepped stretches are the four singletons (worth
4 + 5 + 4 + 3 = 16), the pairs [4, 5], [5, 4], and [4, 3] (worth
9 + 9 + 7 = 25), and the triple [5, 4, 3] (worth 12). The total is
16 + 25 + 12 = 53; note [4, 5, 4] fails because its direction turns.
```

### Example 2

```text
Input: nums = [1, 5, 6]
Output: 23
Explanation: The jump from 1 to 5 breaks the walk, so the only
multi-element stretch is [5, 6]. Everything sums to
1 + 5 + 6 + 11 = 23.
```

### Example 3

```text
Input: nums = [3, 2, 1, 2]
Output: 25
Explanation: A falling walk covers [3, 2, 1]; the final up-step restarts
a fresh stretch at 1. All told: 8 for the singletons, 5 + 3 + 3 = 11 for
the qualifying pairs, and 6 for [3, 2, 1] — 25.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Think incrementally: decide what information about the previous position
is enough to account for every new stretch that ends at the current one.

### Hint 2

Carry one number per direction state — the combined value of all stepped
stretches that end exactly at the current index. Summing that carried
number at every index counts each stretch once, grouped by its right end.

### Hint 3

When the walk repeats its direction, every surviving stretch extends over
the new element and a singleton is born; when the direction breaks, only
stretches at most one pair long can survive. Watch the pair that straddles
a direction flip.

### Hint 4

Reduce by `10⁹ + 7` as you go, and let the step's sign handle both the
climbing and the falling case in the same loop.
