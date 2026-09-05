# Staging And Scoring The Show

## Description

Three integers `n`, `x`, and `y` describe a show. n performers arrive one
by one, and each is placed on one of x stages. Everyone sharing a stage
performs as a single band, and stages left without anyone stay dark.

Once all performing is done, the jury hands every band a score from 1
through y.

Count the distinct ways the whole show can play out, modulo 10⁹ + 7. Two
runs of the show count as different as soon as one of these holds:

- some performer ends up on a different stage than in the other run, or
- some band carries a different score than its counterpart.

### Example 1

```text
Input: n = 2, x = 2, y = 2
Output: 12
Explanation:
The two performers can share a stage (2 assignments, 1 band, 2 possible
scores — 4 outcomes) or split across stages (2 assignments, 2 bands,
4 score pairs — 8 outcomes), giving 12 in total.
```

### Example 2

```text
Input: n = 3, x = 1, y = 5
Output: 5
Explanation:
The lone stage takes every performer, so the only freedom is the score of
the single band: 1 through 5.
```

### Example 3

```text
Input: n = 4, x = 3, y = 2
Output: 462
```

### Constraints

- `1 <= n, x, y <= 1000`

## Hints

### Hint 1

Treat the number of stages actually used as the backbone of the count and
handle each possible number separately.

### Hint 2

Grow the stage assignments arrival by arrival: the next performer either
joins one of the bands already formed or founds a new one on a dark stage.

### Hint 3

Finish with the jury: an arrangement built on j bands multiplies by y^j,
and adding that up over every j closes the count.
