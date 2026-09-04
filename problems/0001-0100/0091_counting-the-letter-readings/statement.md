# Counting The Letter Readings

## Description

A string of digits can be read as a row of letters. Every letter owns a
number: `'A'` is 1, `'B'` is 2, and the numbering climbs in order until `'Z'`
at 26. To read a digit string, carve it left to right into pieces of one or
two digits, where each piece must name a letter — so `"7"` is a piece,
`"17"` is a piece, and `"27"` is not, because nothing lives at 27. A piece
also never starts with `0`: `"07"` is not a second spelling of 7, it is not
a piece at all. Each distinct carving into valid pieces is one reading of
the string, and the same string usually has several.

For instance, `"229"` has two readings: it splits as `(2, 2, 9)`, spelling
`"BBI"`, or as `(22, 9)`, spelling `"VI"`. The split `(2, 29)` contributes
nothing because 29 is past `'Z'`.

Some strings cannot be read in any way and have zero readings.

Given a string `s` of digits, count its readings. If no carving into valid
pieces exists, the count is 0.

The answer for every tested string fits in a 32-bit signed integer.

### Example 1

```text
Input: s = "229"
Output: 2
Explanation: "229" reads as "BBI" (2 2 9) or "VI" (22 9). The split (2 29)
is barred because 29 names no letter.
```

### Example 2

```text
Input: s = "6181"
Output: 2
Explanation: "6181" reads as "FAHA" (6 1 8 1) or "FRA" (6 18 1). Both "61"
and "81" overshoot 'Z', so no other carving survives.
```

### Example 3

```text
Input: s = "1081"
Output: 1
Explanation: the only reading is "JHA" (10 8 1). The "0" cannot stand on its
own, and "08" is not a piece, so the "1" is forced to join it.
```

### Example 4

```text
Input: s = "1002"
Output: 0
Explanation: after the forced opening piece "10", the next "0" can neither
stand alone nor start a two-digit piece ("00" and "02" are both invalid), so
the tail is unreadable and the whole string has no reading.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists only of the characters `'0'` through `'9'`, and may begin
  with `'0'`.
