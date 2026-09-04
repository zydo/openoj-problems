# Cheapest Half-and-Half Assignment

## Description

Each of `2n` people must be sent to one of two sites. Sending person `i` to the
first site costs `costs[i][0]`; sending them to the second site costs
`costs[i][1]`.

Exactly `n` people must end up at each site.

Return the least total cost of such an assignment.

### Example 1

```text
Input: costs = [[15,60],[70,10],[40,45],[35,35]]
Output: 100
Explanation: Two per site. Positions 0 and 2 go to the first site (15 + 40),
positions 1 and 3 to the second (10 + 35). No other even split costs less.
```

### Example 2

```text
Input: costs = [[20,20],[30,10]]
Output: 30
Explanation: One person per site. Position 0 takes the first site for 20,
position 1 the second for 10.
```

### Example 3

```text
Input: costs = [[50,80],[90,20],[60,65],[10,95],[85,30],[40,45]]
Output: 215
Explanation: Three per site. Positions 3, 0, and 2 go to the first site
(10 + 50 + 60); positions 1, 4, and 5 go to the second (20 + 30 + 45).
```

### Constraints

- `2 * n == costs.length`
- `2 <= costs.length <= 100`
- `costs.length` is even.
- `1 <= costs[i][0], costs[i][1] <= 1000`

## Hints

### Hint 1

Start from the plan that sends everyone to the second site, then ask which `n`
people should be moved to the first.

### Hint 2

Moving person `i` adjusts the total by `costs[i][0] - costs[i][1]` regardless of
what anyone else does — so the most negative differences mark the people who
save the most by moving.

### Hint 3

Order everyone by that difference: the first half moves to the first site, the
rest stay on the second.
