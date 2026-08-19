# Count Strings From Run Appends

## Description

Four integers are given: `low`, `high`, `zero`, and `one`.

A binary string is grown from the empty string. At each step, exactly one of
two moves may be applied:

- append the character `0` a total of `zero` times in a row, or
- append the character `1` a total of `one` times in a row.

Moves may be applied any number of times and in any order. A finished string
counts when its final length lies between `low` and `high`, inclusive.

Return how many distinct strings can be produced that count. The number can
be large, so report it modulo `10⁹ + 7`.

### Example 1

```text
Input: low = 4, high = 4, zero = 1, one = 1
Output: 16
Explanation: Each move adds a single character, so every binary string of
length 4 can be grown — for instance "1011" as "" -> "1" -> "10" -> "101"
-> "1011". All 16 of them have length 4 and therefore count.
```

### Example 2

```text
Input: low = 3, high = 4, zero = 2, one = 1
Output: 8
Explanation: The moves append either "00" or "1". The qualifying strings are
"100", "001", and "111" of length 3, plus "0000", "0011", "1001", "1100", and
"1111" of length 4 — 8 in total.
```

### Example 3

```text
Input: low = 4, high = 8, zero = 2, one = 2
Output: 28
Explanation: Every move appends two equal characters, so lengths 4, 6, and 8
are the only reachable ones, with 4 + 8 + 16 = 28 qualifying strings.
```

### Constraints

- `1 <= low <= high <= 10⁵`
- `1 <= zero, one <= low`

## Hints

### Hint 1

Length is the only thing that decides whether a grown string counts, so first
ask: how many growable strings have length exactly `L`?

### Hint 2

Look at the final move of a growable string of length `L` — it appended a run
of `zero` zeros or a run of `one` ones, and what came before is itself a
growable string. Two move sizes, one recurrence.

### Hint 3

Tabulate `L` up to `high` and add the entries from `low` to `high`, reducing
modulo `10⁹ + 7` as the table fills.
