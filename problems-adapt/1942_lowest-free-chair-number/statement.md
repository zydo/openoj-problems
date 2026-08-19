# Lowest Free Chair Number

## Description

`n` guests, numbered `0` to `n - 1`, come and go from a party that has as
many chairs as it needs, labeled `0`, `1`, `2`, and so on. On arriving, a
guest always claims the free chair carrying the smallest label — so with
chairs `0`, `1`, and `5` taken, the next arrival takes chair `2`.

A departing guest releases the chair at the exact moment of departure, so an
arrival at that same instant may claim it.

You are given the 0-indexed 2D integer array `times`, in which
`times[i] = [arrival_i, leaving_i]` holds guest `i`'s arrival and departure
instants, plus the integer `targetGuest`. No two guests arrive at the same
instant.

Report which chair guest `targetGuest` sits on.

### Example 1

```text
Input: times = [[2,5],[3,4],[5,6]], targetGuest = 2
Output: 0
Explanation: Guest 0 arrives at 2 and takes chair 0; guest 1 arrives at 3
and takes chair 1. At instant 4 guest 1 departs, and at instant 5 guest 0
departs just as guest 2 walks in — both chairs are free, so guest 2 takes
the smaller label, chair 0.
```

### Example 2

```text
Input: times = [[1,7],[2,8],[3,9],[4,10]], targetGuest = 2
Output: 2
Explanation: Arrivals at 1, 2, 3, 4 with nobody leaving in between: chairs
0, 1, 2, 3 are claimed in order, so guest 2 gets chair 2.
```

### Example 3

```text
Input: times = [[2,3],[1,6],[3,5],[4,7]], targetGuest = 2
Output: 1
Explanation: Sorted by arrival the guests are 1, 0, 2, 3. Guest 1 takes
chair 0; guest 0 takes chair 1 and frees it at instant 3 — the same instant
guest 2 arrives, so guest 2 reclaims chair 1.
```

### Constraints

- `n == times.length`
- `2 <= n <= 10^4`
- `times[i].length == 2`
- `1 <= arrival_i < leaving_i <= 10^5`
- `0 <= targetGuest <= n - 1`
- Every `arrival_i` is distinct.

## Hints

### Hint 1

Nothing before the target guest's arrival matters except which chairs are
free — and that is decided by processing guests in arrival order.

### Hint 2

Per arrival: release every chair whose occupant left at or before this
instant, then hand the arrival the smallest free label.

### Hint 3

Two min-heaps do both jobs: one of occupied chairs keyed by departure time,
one of free chair numbers.
