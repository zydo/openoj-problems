# Hall Seating

## Description

A hall has `n` rows numbered `0` to `n - 1`, and each row holds `m` seats
numbered `0` to `m - 1`. Every seat begins free, and a seat that has been
handed out is never handed out again.

Groups arrive one at a time. A group of `k` people also announces a row
limit `lastRow`: nobody in the group will sit in a row above it. Each group
asks for seats under one of two rules:

- together — all `k` of them side by side in a single row, or
- loose — any `k` free seats in the allowed rows, split over several rows
  if that is what it takes.

When a request can be honored in more than one way, seats come out of the
lowest-numbered row possible, and within a row out of the lowest-numbered
seats possible. A request that cannot be honored changes nothing.

Implement the `HallSeating` class:

- `HallSeating(int n, int m)` — opens the hall: `n` rows of `m` free seats
  each.
- `int[] block(int k, int lastRow)` — seats all `k` members side by side in
  some row `r <= lastRow`, and returns `[r, c]`, where `c` is the leftmost
  seat of the run `[c, c + k - 1]` the group takes. Returns `[]` when no
  row within the limit still holds `k` adjacent free seats; nothing is
  taken.
- `boolean spread(int k, int lastRow)` — seats the `k` members anywhere in
  rows `0` to `lastRow`. If those rows hold at least `k` free seats, the
  `k` seats are taken — front rows first, and within a row from the left —
  and the method returns `true`. Otherwise it returns `false` and takes
  nothing.

### Example 1

```text
Input:
["HallSeating", "block", "block", "block", "spread", "spread"]
[[3, 4], [3, 0], [2, 0], [2, 1], [6, 2], [2, 1]]
Output: [null, [0, 0], [], [1, 0], true, false]
Explanation:
HallSeating hall = new HallSeating(3, 4); // 3 rows of 4 seats.
hall.block(3, 0);  // row 0 is empty and fits three together: seats
                   // [0, 2] of row 0.
hall.block(2, 0);  // one seat is left in row 0 — no pair fits below
                   // row 1.
hall.block(2, 1);  // row 0 fails again, row 1 takes the pair: seats
                   // [0, 1] of row 1.
hall.spread(6, 2); // rows 0..2 hold 1 + 2 + 4 = 7 free seats, so 6 go:
                   // seat 3 of row 0, seats 2..3 of row 1, seats 0..2
                   // of row 2.
hall.spread(2, 1); // rows 0..1 are full by now.
```

### Example 2

```text
Input:
["HallSeating", "spread", "block", "block", "spread"]
[[1, 6], [4, 0], [3, 0], [2, 0], [1, 0]]
Output: [null, true, [], [0, 4], false]
Explanation: A single row: `spread` fills seats 0..3, a run of three does
not fit the two seats that remain, the pair takes seats 4..5, and the last
straggler finds the row full.
```

### Example 3

```text
Input:
["HallSeating", "spread", "block", "block", "spread"]
[[2, 7], [9, 1], [6, 1], [5, 1], [1, 1]]
Output: [null, true, [], [1, 2], false]
Explanation:
HallSeating hall = new HallSeating(2, 7);
hall.spread(9, 1); // takes all 7 seats of row 0 plus seats 0..1 of row 1.
hall.block(6, 1);  // row 1 has 5 seats left, and 6 together do not fit.
hall.block(5, 1);  // row 1 works: seats 2..6, so the answer is [1, 2].
hall.spread(1, 1); // the hall is full.
```

### Constraints

- `1 <= n <= 5 * 10⁴`
- `1 <= m, k <= 10⁹`
- `0 <= lastRow <= n - 1`
- At most `5 * 10⁴` calls in total are made to `block` and `spread`.

### Follow-up

`block` needs the earliest row within the limit that still contains a run
of `k` free seats, and `spread` only needs to know whether the rows up to
the limit contain `k` free seats at all. Which two aggregate statistics
let one structure answer both?

## Hints

### Hint 1

Seats never leave the middle of a row: every request bites off the left
end of the row's free stretch. So one number per row — how many seats it
still has free — is the whole state, and a `block` that lands in row `r`
starts at seat `m - free[r]`.

### Hint 2

Read as an array of free counts, the hall answers two prefix questions:
`block` wants the first index not above `lastRow` whose value reaches
`k`, and `spread` starts by asking whether the values up to `lastRow`
total at least `k`. One tree that carries the maximum and the sum of
every range settles both in logarithmic time.

### Hint 3

To find the first row, walk down from the root trying the left child
whenever it overlaps the prefix and its maximum reaches `k`, and drop to
the right child only when the left fails. For `spread`, once the total
check passes, keep jumping to the next row that still has a seat and
emptying it; a row runs out at most once per run of calls, so all that
emptying is amortized away.
