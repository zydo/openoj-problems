# The Best-Scoring City Tour

## Description

A country has n cities, and every pair of cities is linked by a direct
road. A traveler will spend exactly k days there (days are numbered
from 0), and may pick any city to arrive in — the arrival is free. Two
integers n and k come in first, followed by two n-by-n integer grids,
stayScore and travelScore.

On each day the traveler picks exactly one option:

- Remain in the city they are currently in, called curr: the day pays
  stayScore[i][curr] points on day i.
- Take a road to a different city dest: the day pays
  travelScore[curr][dest] points.

What is the largest total the traveler can finish the trip with?

### Example 1

```text
Input: n = 2, k = 1, stayScore = [[5,1]], travelScore = [[0,3],[2,0]]
Output: 5
Explanation: Arriving in city 0 and staying put for the single day
banks 5 points, the best available.
```

### Example 2

```text
Input: n = 3, k = 2, stayScore = [[4,1,2],[1,5,1]],
       travelScore = [[0,6,1],[6,0,2],[1,2,0]]
Output: 12
Explanation: Arrive in city 0, hop to city 1 on day 0 (6 points), then
hop back to city 0 on day 1 (6 more) — 12 in total.
```

### Example 3

```text
Input: n = 2, k = 3, stayScore = [[2,9],[2,9],[2,9]],
       travelScore = [[0,7],[7,0]]
Output: 27
Explanation: City 1 pays 9 a day, so arriving there and staying all
three days earns 27 — no hopping can beat it.
```

### Constraints

- `1 <= n <= 200`
- `1 <= k <= 200`
- `n == travelScore.length == travelScore[i].length == stayScore[i].length`
- `k == stayScore.length`
- `1 <= stayScore[i][j] <= 100`
- `0 <= travelScore[i][j] <= 100`
- `travelScore[i][i] == 0`

## Hints

### Hint 1

Dynamic programming over the days works: the city the traveler wakes
up in is all the future needs to know.

### Hint 2

Let dp[i][j] be the best total achievable from day i onward when the
traveler is currently in city j, and combine the two options per day.
