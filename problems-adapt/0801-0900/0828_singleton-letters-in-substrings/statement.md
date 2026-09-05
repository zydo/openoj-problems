# Singleton Letters In Substrings

## Description

A letter is a _singleton_ of a string when it occurs in that string exactly once.
Write `singletons(t)` for how many letters are singletons of `t`; for example
`singletons("PROGRAM")` is 5, because only `R` occurs more than once.

Given `s`, add up `singletons(t)` across every substring `t` of `s`. Substrings
taken from different positions are separate terms of the sum even when they spell
the same thing. The total is guaranteed to fit in a signed 32-bit integer.

### Example 1

```text
Input: s = "CODE"
Output: 20
Explanation: No letter repeats, so every one of the ten substrings has all of
its letters as singletons and contributes its own length: 4 + 6 + 6 + 4 = 20.
```

### Example 2

```text
Input: s = "PEEP"
Output: 10
Explanation: The four single letters give 4, and "PE" and "EP" give 2 each.
"PEE" and "EEP" give 1 each, since only the P is a singleton there. "EE" and
the whole of "PEEP" give nothing at all.
```

### Example 3

```text
Input: s = "SUCCESS"
Output: 45
```

### Constraints

- The length of `s` runs from 1 to `10^5`.
- Every character of `s` is an uppercase English letter.

## Hints

### Hint 1

There are about `n^2 / 2` substrings, so they cannot be visited. Turn the sum
inside out: instead of asking what each substring contains, ask of one position
how many substrings it is a singleton in.

### Hint 2

Fix a position `i`. It is a singleton of exactly those substrings that begin
after the nearest earlier copy of the same letter and end before the nearest
later copy. Writing `p` and `q` for those two neighbouring copies leaves `i - p`
admissible starts and `q - i` admissible ends.

### Hint 3

Sweep once to record, for each of the 26 letters, the increasing list of
positions where it appears. Pad each list on the left with `-1` and on the right
with the length of `s`, so the outermost copies obey the same arithmetic as the
rest, and accumulate the products.
