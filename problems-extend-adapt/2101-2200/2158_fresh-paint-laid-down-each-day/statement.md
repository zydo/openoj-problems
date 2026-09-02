# Fresh Paint Laid Down Each Day

## Description

Imagine a long, narrow strip of canvas modelled as a number line. You are
given a 0-indexed 2D integer array `paint` of length `n`, where
`paint[i] = [start_i, end_i]` means that on day `i` you paint the stretch of
the strip between `start_i` and `end_i`.

Painting over an area that is already covered would leave the finish uneven,
so you skip anything a previous day has already painted.

Return an integer array `worklog` of length `n`, where `worklog[i]` is how
much previously unpainted length you covered on day `i`.

### Example 1

![diagram](figures/2158-1.svg)

```text
Input: paint = [[1,4],[4,7],[5,8]]
Output: [3,3,1]
Explanation:
Day 0 covers the stretch from 1 to 4 — all of it is new, so 4 - 1 = 3.
Day 1 covers the stretch from 4 to 7 — all new, another 3.
Day 2 covers the stretch from 5 to 8 — the part from 5 to 7 was already
painted on day 1, so only 8 - 7 = 1 is new.
```

### Example 2

![diagram](figures/2158-2.svg)

```text
Input: paint = [[1,4],[5,8],[4,7]]
Output: [3,3,1]
Explanation:
Day 0 covers 1 to 4, all new: 3.
Day 1 covers 5 to 8, all new: 3.
Day 2 covers 4 to 7 — everything from 5 onward is already done, so only
5 - 4 = 1 is new.
```

### Example 3

![diagram](figures/2158-3.svg)

```text
Input: paint = [[1,5],[2,4]]
Output: [4,0]
Explanation:
Day 0 covers 1 to 5, all new: 4.
Day 1 covers 2 to 4, which day 0 already finished, so nothing new is
painted and the day's total is 0.
```

### Constraints

- `1 <= paint.length <= 10⁵`
- `paint[i].length == 2`
- `0 <= start_i < end_i <= 5 * 10⁴`

## Hints

### Hint 1

You need a fast way to know, for any stretch, which parts of the strip are
still blank after previous days.

### Hint 2

One model is a flag per unit cell — set to "done" the moment the cell is
painted.

### Hint 3

With such a model, how would you total only the still-blank cells of a
day's stretch without rescanning finished ground every day?

### Hint 4

A "next possibly-blank cell" pointer per cell (maintained with path
compression, like union-find) lets each painted cell be visited exactly once
over all days.
