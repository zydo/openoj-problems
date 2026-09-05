# Cheapest Lit Bulb-Hours

## Description

A row of `n` lamps stands on a line, numbered `0` through `n - 1`. A schedule
of demand windows is given as `intervals`, where `intervals[i] = [starti,
endi]` is an inclusive span of integer time units during which the row must
be bright enough.

Lamps toggle independently at every time unit. While a lamp is on it lights
its own position plus the positions immediately left and right of it, when
those exist; a position lit by two neighbours still counts once. At any time
unit, the row's illumination is the number of distinct lit positions.

Throughout every time unit lying in at least one demand window, that
illumination must reach `brightness`; outside the windows the row may go
fully dark. Every lamp that is on burns one unit of energy per time unit.

Return the smallest possible total energy burn.

### Example 1

```text
Input: n = 9, brightness = 5, intervals = [[3,10]]
Output: 16
Explanation:
    Two lamps are enough to light five positions on the row.
    The single window spans 10 - 3 + 1 = 8 time units.
    The total burn is 2 * 8 = 16.
```

### Example 2

```text
Input: n = 3, brightness = 1, intervals = [[0,0],[5,7],[2,4]]
Output: 7
Explanation:
    One lamp satisfies a requirement of 1.
    Windows [2,4] and [5,7] are back-to-back, so together they demand
    light for 6 units; with the lone unit at time 0 the row must be lit
    for 7 units in total.
    The total burn is 1 * 7 = 7.
```

### Example 3

```text
Input: n = 8, brightness = 7, intervals = [[4,9]]
Output: 18
Explanation:
    Covering seven positions takes three lamps, since one lamp lights at
    most three positions.
    The window lasts 9 - 4 + 1 = 6 time units.
    The total burn is 3 * 6 = 18.
```

### Constraints

- `1 <= n <= 10^6`
- `1 <= brightness <= n`
- `1 <= intervals.length <= 10^5`
- `intervals[i] == [starti, endi]`
- `0 <= starti <= endi <= 10^9`

### Hint 1

The lamps you switch on look the same at every demanded time unit — only how
long they stay on changes.

### Hint 2

Work out first how few lamps light at least `brightness` positions of a line
of `n` spots.

### Hint 3

A lamp lights at most three positions — itself and both neighbours — with
fewer near an end of the row, so the lamp count is essentially
`ceil(brightness / 3)`.

### Hint 4

Fuse overlapping or touching windows into spans and add up their lengths to
learn how long the row must stay lit.
