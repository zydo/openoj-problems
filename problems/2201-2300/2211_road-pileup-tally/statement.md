# Road Pileup Tally

## Description

A long straight stretch of road carries `n` cars, numbered `0` to `n - 1`
from left to right, each sitting at its own spot.

Every car's plan is encoded in the string `directions` of length `n`:
`directions[i]` is `'L'` when car `i` will drive left, `'R'` when it will
drive right, and `'S'` when it stays parked where it is. All moving cars
travel at one shared speed.

Score the crashes this way:

- Two cars driving toward each other and crashing count for `2`.
- A driving car plowing into a parked car counts for `1`.

A car that takes part in a crash stops moving for good and remains exactly
where the crash happened; apart from crashes, cars never alter their course
or speed.

Report the total score of all crashes that eventually occur.

### Example 1

```text
Input: directions = "SSRLL"
Output: 3
Explanation:
- Cars 2 and 3 drive toward each other and crash head-on, scoring 2.
- Car 4 then slides into the wreckage between them, scoring 1 more.
No other car ever meets another, so the total score is 2 + 1 = 3.
```

### Example 2

```text
Input: directions = "RSLRRR"
Output: 2
Explanation:
- The three rightmost cars drive right forever and never hit anything.
- Car 2 drives left into parked car 1, scoring 1, and stops there.
- Car 0 then drives right into that same stopped car, scoring 1 more.
The total score is 2.
```

### Example 3

```text
Input: directions = "LLLRS"
Output: 1
Explanation:
- The three leftmost cars drive left off the road and escape.
- Car 3 drives right into parked car 4, scoring the only crash.
The total score is 1.
```

### Example 4

```text
Input: directions = "SRSRS"
Output: 2
Explanation:
- Car 1 drives right into parked car 2, scoring 1.
- Car 3 then drives right into the car stopped at that same spot,
  scoring 1 more.
The total score is 2.
```

### Constraints

- `1 <= directions.length <= 10⁵`
- `directions[i]` is `'L'`, `'R'`, or `'S'`.

## Hints

### Hint 1

Which driving cars cruise along untouched forever? Compare what lies ahead
of a left-mover near the left edge with what lies behind a right-mover near
the right edge.

### Hint 2

Skip the simulation and charge every crash to the driving car that arrives
at it. How much does each driving car that cannot escape add to the score,
no matter the crash shape it first meets?

### Hint 3

Do parked cars ever add anything to the score on their own?
