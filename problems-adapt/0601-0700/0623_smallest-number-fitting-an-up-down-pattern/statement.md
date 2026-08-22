# Smallest Number Fitting an Up-Down Pattern

## Description

You are given a string `pattern` made of the letters `'I'` (rise) and `'D'`
(fall).

Write a string `num` exactly one digit longer than `pattern`, using each of
the digits `'1'` through `'9'` at most once, so that for every index `i`:

- `pattern[i] == 'I'` means `num[i] < num[i + 1]`;
- `pattern[i] == 'D'` means `num[i] > num[i + 1]`.

Return the lexicographically smallest `num` that fits the pattern.

### Example 1

```text
Input: pattern = "IIDDI"
Output: "125436"
Explanation: The two leading rises take the cheapest digits 1 and 2. The
fall-fall then forces three positions that strictly decrease, which the
digits 3, 4, 5 fill as 5, 4, 3 — the largest of the pool first. A final rise
puts 6 at the end. Nothing smaller fits: starting the block lower would
reuse a digit, and starting it higher wastes room.
```

### Example 2

```text
Input: pattern = "DDDD"
Output: "54321"
Explanation: Every step falls, so the whole answer is one strictly
decreasing run of five digits, and the cheapest such run is 5, 4, 3, 2, 1.
```

### Example 3

```text
Input: pattern = "DDIIDI"
Output: "3214657"
Explanation: The opening falls take 1, 2, 3 and emit them as 3, 2, 1. The
next rise places 4, the following fall-pair takes 5 and 6 as 6, 5, and the
last rise closes with 7.
```

### Constraints

- `1 <= pattern.length <= 8`
- `pattern` contains only `'I'` and `'D'`.

## Hints

### Hint 1

With at most eight letters, trying every arrangement of digits is small
enough to succeed — but there is a one-pass construction.

### Hint 2

A maximal run of falls forces a block of positions whose digits strictly
decrease. Which digits should that block draw from?

### Hint 3

Scan left to right pushing 1, 2, 3, ... onto a stack, and flush the whole
stack whenever the pattern stops falling.
