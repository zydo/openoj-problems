# Cab Ride Profits

## Description

A cab driver works a one-way street with `n` stops numbered `1` through `n`.
The cab starts at stop `1`, always moves toward larger stop numbers, and can
carry at most one passenger at a time.

The waiting passengers are given as a 0-indexed array `rides`, where
`rides[i] = [start, end, tip]` describes a passenger traveling from stop
`start` to stop `end` who pays the fare plus a `tip`-dollar gratuity. Carrying
passenger `i` earns `end - start + tip` dollars.

The driver decides which passengers to carry and may decline anyone. Dropping
one passenger off and picking up the next at the very same stop is allowed.
Return the largest total the driver can collect while traveling from stop `1`
to stop `n`.

### Example 1

```text
Input: n = 5, rides = [[1,3,2],[2,5,1],[4,5,4]]
Output: 9
Explanation: Carry passenger 0 from stop 1 to stop 3 for 3 - 1 + 2 = 4
dollars, then passenger 2 from stop 4 to stop 5 for 5 - 4 + 4 = 5 dollars.
The two rides never overlap, so the driver collects 4 + 5 = 9 dollars.
```

### Example 2

```text
Input: n = 7, rides = [[1,7,2],[2,4,3],[4,7,4]]
Output: 12
Explanation: Declining the street-spanning passenger and carrying the other
two instead earns 4 - 2 + 3 = 5 dollars plus 7 - 4 + 4 = 7 dollars, a total of
12 — more than the 8 dollars the long ride alone would pay.
```

### Example 3

```text
Input: n = 10, rides = [[1,4,1],[4,7,3],[7,10,2],[2,6,5]]
Output: 15
Explanation: Passengers 0, 1, and 2 chain perfectly: each drop-off point is
the next pick-up point. They pay 4 + 6 + 5 = 15 dollars, beating the
alternative of carrying passenger 3 (9 dollars) together with passenger 2.
```

### Constraints

- `1 <= n <= 10⁵`
- `1 <= rides.length <= 3 * 10⁴`
- `rides[i].length == 3`
- `1 <= rides[i][0] < rides[i][1] <= n`
- `1 <= rides[i][2] <= 10⁵`

## Hints

### Hint 1

Sweep the stops in increasing order and keep `dp[x]`, the most money that can
be in hand at the moment the cab reaches stop `x`.

### Hint 2

A passenger picked up at stop `s` and dropped at stop `x` extends the best
total already achievable at `s`, so bucket the rides by drop-off stop and try
each one when its drop-off stop is reached.
