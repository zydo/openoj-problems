# Cut a Digit String Down by Ones

## Description

You are given a string `s` made up entirely of digits.

Decide whether `s` can be cut into two or more non-empty pieces so that,
reading each piece as a number, the values step down by exactly one:
every piece must be one less than the piece before it.

- For instance, `s = "09087"` can be cut into `["09", "08", "7"]`, whose
  values `[9, 8, 7]` each land one below the previous, so this cut works.
- On the other hand, every cut of `s = "019"` — `["0", "19"]`,
  `["01", "9"]`, or `["0", "1", "9"]` — yields values `[0, 19]`, `[1, 9]`,
  or `[0, 1, 9]`, none of which step down by one, so no cut works.

Return `true` when such a cut exists and `false` otherwise.

A piece is any contiguous run of characters taken from `s` in order.

### Example 1

```text
Input: s = "4321"
Output: true
Explanation: Cutting s into ["4","3","2","1"] gives the values
[4,3,2,1] — a perfect step-down chain.
```

### Example 2

```text
Input: s = "070605"
Output: true
Explanation: The cut ["07","06","05"] reads as the values [7,6,5]; the
leading zeros change nothing.
```

### Example 3

```text
Input: s = "987655"
Output: false
Explanation: No cut of s produces values that descend by exactly one
throughout.
```

### Constraints

- `1 <= s.length <= 20`
- `s` consists only of digits.

## Hints

### Hint 1

Fixing the first piece leaves nothing to choose: every later piece must
read as exactly one less than its predecessor.

### Hint 2

Leading zeros let one value be written with several lengths, so each
matching cut position has to be tried.
