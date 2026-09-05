# Odd Letters In The Spelled Digits

## Description

Write a positive integer `n` out in English, digit by digit: every digit
becomes its lowercase name (`0` reads `zero`, `1` reads `one`, and so
on), and the names are glued together in the order the digits appear.

Report how many distinct letters of the spelled-out string occur an odd
number of times.

### Example 1

```text
Input: n = 2049
Output: 7
Explanation: Gluing two, zero, four, and nine gives
"twozerofournine". Seven letters occur an odd number of times:
f, i, o, t, u, w, z (while e, n, and r each appear exactly twice).
```

### Example 2

```text
Input: n = 2055
Output: 5
Explanation: "twozerofivefive" — the odd visitors are e, r, t, w, z;
f, i, o, and v each show up exactly twice.
```

### Example 3

```text
Input: n = 3141
Output: 5
Explanation: "threeonefourone" — e, f, h, t, u have odd counts, while
n, o, and r each appear twice.
```

### Constraints

- `1 <= n <= 10⁹`

## Hints

### Hint 1

Nothing clever is hiding here: build the string digit by digit with the
ten fixed names, then tally.

### Hint 2

Only parity matters, so a 26-slot table — or one on/off bit per letter,
flipped as each letter is seen — answers the question in a single scan.
