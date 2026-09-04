# Weekly Getaway Planner

## Description

A remote worker has been offered `k` weeks (each exactly seven days)
to split between work and vacation across `n` cities, indexed `0`
through `n - 1`. On Monday morning of week `0` they are already
standing in city `0`.

The cities are linked by one-way flight routes, given as an `n x n`
matrix `flights`: `flights[i][j] == 1` means a direct flight from city
`i` to city `j` exists, and `flights[i][j] == 0` means it does not.
Every city always has a route to itself in the trivial sense of simply
staying put — `flights[i][i]` is always `0`, since flying to your own
city is not a real flight — and it is always legal to remain where you
are for the week instead of moving.

At most one flight may be taken, and only on a Monday, so each week
resolves to a single choice: which city (the current one, or one
directly reachable by flight) to spend that week in. A second matrix
`days`, sized `n x k`, caps how much of a week can be vacation:
`days[i][w]` is the largest number of vacation days available in city
`i` during week `w`. Any day beyond that cap in a city is a normal
working day and contributes nothing. If the traveler flies into city
`j` to begin week `w`, that week's vacation allowance is drawn from
`days[j][w]`, not the city they departed from.

Given `flights` and `days`, return the greatest total number of
vacation days obtainable across all `k` weeks.

### Example 1

```text
Input:
flights = [[0,1,0],[1,0,1],[0,1,0]]
days = [[1,4,1],[5,0,2],[2,2,2]]
Output: 11
Explanation:
Week 1: fly from city 0 to city 1, take 5 vacation days.
Week 2: fly back from city 1 to city 0, take 4 vacation days.
Week 3: fly again from city 0 to city 1, take 2 vacation days.
Total = 5 + 4 + 2 = 11.
```

### Example 2

```text
Input:
flights = [[0,0],[0,0]]
days = [[2,2],[7,7]]
Output: 4
Explanation: No flight route exists at all, so the traveler is stuck
in city 0 for both weeks and can only draw from city 0's allowance:
2 + 2 = 4.
```

### Constraints

- `n == flights.length == flights[i].length == days.length`
- `k == days[i].length`
- `1 <= n, k <= 100`
- `flights[i][j]` is either `0` or `1`, and `flights[i][i] == 0`.
- `0 <= days[i][j] <= 7`
