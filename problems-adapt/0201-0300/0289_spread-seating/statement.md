# Spread Seating

## Description

A row holds `n` seats numbered `0` through `n - 1`. Seats are handed out one
at a time under a single rule: the next person takes the free seat whose
distance to the nearest taken seat is as large as it can be. When several free
seats tie on that distance, the smallest-numbered one wins, and while the row
is completely empty the rule yields seat `0`. Seats are given back one at a
time as well.

Implement the `SpreadSeating` class:

- `SpreadSeating(int n)` — a row of `n` seats, none of them taken.
- `int assign()` — apply the rule, mark the chosen seat taken, and return its
  number.
- `void vacate(int p)` — release seat `p`. It is taken when the call is made.

### Example 1

```text
Input:
["SpreadSeating", "assign", "assign", "assign", "vacate", "assign", "assign"]
[[12], [], [], [], [0], [], []]
Output: [null, 0, 11, 5, null, 0, 8]
Explanation:
SpreadSeating row = new SpreadSeating(12);
row.assign();   // 0 — nobody is seated yet
row.assign();   // 11 — the far end is 11 away from seat 0
row.assign();   // 5 — halfway along, 5 from seat 0 and 6 from seat 11
row.vacate(0);  // seat 0 is free again
row.assign();   // 0 — five clear seats to its neighbour, beating the 3 inside the gap
row.assign();   // 8 — the middle of the widest remaining stretch, 5 to 11
```

### Example 2

```text
Input:
["SpreadSeating", "assign", "assign", "assign", "assign", "assign", "vacate", "assign"]
[[5], [], [], [], [], [], [2], []]
Output: [null, 0, 4, 2, 1, 3, null, 2]
Explanation: The fourth call sees seats 1 and 3 both one away from a
neighbour, so the lower number 1 is taken. After the row fills and seat 2 is
released, it is the only free seat left.
```

### Constraints

- `1 <= n <= 10⁹`
- `assign` and `vacate` are called at most `10⁴` times in total.
- Every `vacate(p)` names a seat that is taken at that moment.

### Follow-up

The row can be a billion seats wide, so nothing may scan it. Can every call
be answered in time that depends only on how many people are currently
seated?

## Hints

### Hint 1

Only a handful of free seats are ever worth considering. Inside a run of free
seats bounded by two taken ones, the best choice is the middle of the run, and
its score is half the run's width. The two ends of the row are special: seat
`0` scores its distance to the first taken seat, and seat `n - 1` scores its
distance to the last one. So think in terms of the gaps between neighbouring
occupants, not the seats.

### Hint 2

Describe each gap by the pair of taken seats that bound it, using imaginary
occupants at `-1` and `n` so the two ends fit the same description. A gap's
candidate and score follow from that pair alone. `assign` wants the highest
score, breaking ties by the smaller candidate, so order the gaps in a priority
queue under exactly that comparison.

### Hint 3

Every call reshapes the gaps: seating someone splits one gap into two,
releasing a seat fuses two gaps into one. A priority queue cannot delete from
the middle, so let the fused-away entries linger and keep a set of the pairs
that are currently real. Pop until you reach an entry the set still recognises;
the rest are debris. Store a gap only when it actually contains a free seat.
