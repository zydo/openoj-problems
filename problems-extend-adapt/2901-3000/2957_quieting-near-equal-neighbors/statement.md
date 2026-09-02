# Quieting Near-Equal Neighbors

## Description

You are given a string `word` whose letters are all lowercase English.

A single operation overwrites one position of `word` with any lowercase
letter you choose.

Two letters are near-equal when they are identical or occupy
neighboring spots in the alphabet (`a` and `b`, `b` and `c`, and so
on). Return the fewest operations after which no letter in `word` is
near-equal to the letter immediately following it.

### Example 1

```text
Input: word = "abccba"
Output: 3
Explanation: Overwriting positions 1, 3, and 5 turns the word into
"axcyce", whose neighboring pairs are all non-near-equal. The three
disjoint clashing pairs (a, b), (c, c), and (b, a) each force a change
of their own, so 3 cannot be improved on.
```

### Example 2

```text
Input: word = "qrs"
Output: 1
Explanation: Changing the middle letter to 'a' gives "qas", which is
free of near-equal neighbors. One change settles both clashing pairs
(q, r) and (r, s) at once, and at least one change is unavoidable.
```

### Example 3

```text
Input: word = "zyxwvu"
Output: 3
Explanation: The whole word is one descending alphabet run, so it holds
five consecutive clashing pairs. Rewriting it as "zayawa" clears them
with changes at positions 1, 3, and 5, and since a single change can
repair at most two pairs of that run, 3 is minimal.
```

### Constraints

- `1 <= word.length <= 100`
- `word` consists only of lowercase English letters.

## Hints

### Hint 1

Work through the word from the left. When two neighbors clash, changing
the right one can quiet two conflicts at once — the pair just repaired
and the pair that right letter would otherwise form with the next one.

### Hint 2

Of the 26 letters, any given letter clashes with at most three (itself
plus its two alphabet neighbors), so a safe replacement always exists —
and because only the operation count is asked, that replacement never
has to be written down.
