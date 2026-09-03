# Lamps Left Lit

## Description

You are given an array `lamps` of integers between 1 and 100.

There are 100 lamps in a room, numbered 1 to 100, and every one of them
starts out dark.

Walk the array in order; for each element `lamps[i]`, flip the state of
the lamp with that number — a dark lamp lights up, a lit lamp goes
dark.

Return the numbers of the lamps that are still lit once the whole array
has been processed, in ascending order. If every lamp ends dark,
return an empty list.

### Example 1

```text
Input: lamps = [7,42,7,90,42,42]
Output: [42,90]
Explanation:
Lamp 7 is flipped by elements 0 and 2 — two flips leave it dark.
Lamp 42 is flipped by elements 1, 4, and 5 — three flips leave it lit.
Lamp 90 is flipped once, by element 3, and stays lit.
The lamps still lit are 42 and 90.
```

### Example 2

```text
Input: lamps = [13,13,13,13,5]
Output: [5]
Explanation:
Lamp 13 is flipped four times, an even count, so it ends dark. Lamp 5
is flipped once and ends lit.
```

### Example 3

```text
Input: lamps = [99,99]
Output: []
Explanation:
Lamp 99 is flipped twice — on, then off again — so nothing is lit at
the end.
```

### Constraints

- `1 <= lamps.length <= 100`
- `1 <= lamps[i] <= 100`

## Hints

### Hint 1

Flipping a lamp twice returns it to where it started, so the order and
spacing of the flips never matter — only how many times each number
appears.

### Hint 2

Keep a fixed boolean table for lamp numbers 1 to 100, flip the entry
for every array element, then sweep the table once and collect the
positions still lit; the sweep visits numbers in ascending order, so
no sort is needed.
