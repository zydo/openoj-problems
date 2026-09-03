# Two Couriers On One Clock

## Description

Two couriers set out from the same depot. You are given two integer arrays
of length 2: `d = [d1, d2]` and `r = [r1, r2]`.

Courier `i` owes exactly `di` runs, and one run fills an entire hour —
during any given hour at most one of the two couriers can be out making a
run.

Each courier also sits out a fixed recurring pattern of hours: courier `i`
cannot work during any hour whose number is a multiple of `ri`. Hours are
numbered `1, 2, 3, ...`; for `r = [2, 3]` the first courier rests at hours
2, 4, 6, ... and the second at hours 3, 6, 9, ....

Return the smallest number of hours after which every owed run has been
completed.

### Example 1

```text
Input: d = [2,2], r = [2,3]
Output: 4
Explanation: Courier 1 runs at hours 1 and 3 (hours 2 and 4 are recharge
hours for it), while courier 2 runs at hours 2 and 4 (hour 3 is its
recharge hour). Three hours cannot cover four runs, since hour 2 is the
only one of the first three open to courier 1.
```

### Example 2

```text
Input: d = [5,5], r = [4,5]
Output: 10
Explanation: Hours 4 and 8 are recharge hours for courier 1, so courier 2
takes them; hours 5 and 10 belong to courier 2's rest pattern, so courier 1
takes those. Assign courier 1 the runs at hours 1, 2, 3, 5, 10 and courier
2 the runs at hours 4, 6, 7, 8, 9 — all ten hours are spent, so nothing
shorter can fit ten runs.
```

### Example 3

```text
Input: d = [1,1], r = [2,2]
Output: 3
Explanation: Hour 2 is a recharge hour for both couriers at once. Courier 1
runs at hour 1 and courier 2 at hour 3, and the pair cannot finish sooner
because only hour 1 would be usable inside two hours.
```

### Constraints

- `d = [d1, d2]`, `r = [r1, r2]`; both arrays have length 2.
- `1 <= di <= 10⁹`
- `2 <= ri <= 3 · 10⁴`

## Hints

### Hint 1

Ask, for a candidate deadline `T`, whether everything fits — and binary
search the smallest such `T`, since a longer deadline never removes
working hours.

### Hint 2

Hours numbered a multiple of `lcm(r1, r2)` fall in both rest patterns at
once, so nobody can work then.

### Hint 3

Within a horizon of `T` hours, courier 1 is blocked during
`floor(T / r1)` of them and courier 2 during `floor(T / r2)`.

### Hint 4

So courier 1 has `T - floor(T / r1)` usable hours, courier 2 has its
analogue, and the hours where at least one courier can work number
`T - floor(T / r1) - floor(T / r2) + floor(T / lcm(r1, r2))`.

### Hint 5

The counts are also sufficient: hand each courier its exclusive usable
hours first, then pour the leftover runs into the hours both could serve.
