# Longest Stretch of Open Floors

## Description

Every floor of a building numbered `bottom` through `top` has been leased,
and a handful of those floors have been taken out of service for
maintenance.

You are given the integers `bottom` and `top` and an array `blocked`, where
`blocked[i]` is one of the leased floors currently unavailable.

Return the size of the longest run of consecutive leased floors that
contains no unavailable floor.

### Example 1

```text
Input: bottom = 10, top = 30, blocked = [13,25,19]
Output: 5
Explanation: The unavailable floors split the lease into runs of open
floors: 10-12 (3 floors), 14-18 (5), 20-24 (5), and 26-30 (5). The longest
run has 5 floors.
```

### Example 2

```text
Input: bottom = 1, top = 100, blocked = [50]
Output: 50
Explanation: The floors below the unavailable one form a run of 49, the
floors above it a run of 50, so the answer is 50.
```

### Example 3

```text
Input: bottom = 5, top = 5, blocked = [5]
Output: 0
Explanation: The only leased floor is unavailable, so the longest open run
is empty.
```

### Constraints

- `1 <= blocked.length <= 10⁵`
- `1 <= bottom <= blocked[i] <= top <= 10⁹`
- All values in `blocked` are distinct.

## Hints

### Hint 1

After sorting, two neighboring unavailable floors `x` and `y` leave exactly
`y - x - 1` open floors between them.

### Hint 2

Scan the sorted array once, tracking the largest gap: the candidate at each
step is `blocked[i] - blocked[i - 1] - 1`.

### Hint 3

Two more runs sit outside the array: below the first unavailable floor and
above the last one.

### Hint 4

Fold those ends into the same maximum: `blocked[0] - bottom` and
`top - blocked[last]` compete with the interior gaps.
