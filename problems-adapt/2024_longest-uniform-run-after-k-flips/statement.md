# Longest Uniform Run After k Flips

## Description

You are given a string `s` whose characters are all `T` or `F`, and an
integer `k`.

You may change at most `k` characters of `s`, each changed character
becoming either `T` or `F`.

Return the length of the longest run of identical characters that `s` can
contain after those changes — the longest stretch of consecutive positions
holding one and the same symbol.

### Example 1

```text
Input: s = "FTFTF", k = 1
Output: 3
Explanation: Change the second character to F, giving "FFFTF": three
consecutive F characters. No single change creates a longer run in a
fully alternating string.
```

### Example 2

```text
Input: s = "TTFFTT", k = 2
Output: 6
Explanation: Change both F characters to T, giving "TTTTTT" — the entire
string is one run.
```

### Example 3

```text
Input: s = "FFTFFTF", k = 1
Output: 5
Explanation: Change the lone T inside the F block, giving "FFFFFTF":
five consecutive F characters.
```

### Constraints

- `n == s.length`
- `1 <= n <= 5 * 10⁴`
- every character of `s` is `T` or `F`
- `1 <= k <= n`

## Hints

### Hint 1

A stretch of positions can be made uniform exactly when the minority symbol
inside it appears often enough to be entirely rewritten. State that
condition as an inequality involving `k`.

### Hint 2

Sweep a window across the string: extend its right end one position at a
time, and pull the left end forward whenever the window stops satisfying
the condition.

### Hint 3

Why is it safe to shrink only from the left and never to move it back?
Think about what happens to the minority count as a window grows.

### Hint 4

The largest window the sweep ever holds is the answer — record it as the
right end advances.
