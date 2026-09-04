# Stamping Out the X Marks

## Description

A string `s` has `n` characters, every one of them an `'X'` or an `'O'`.

One stamp picks any three consecutive characters of `s` and turns each of them
into `'O'` — a character that is already `'O'` simply stays as it is.

Return the fewest stamps needed until no `'X'` remains anywhere in `s`.

### Example 1

```text
Input: s = "XOXOXO"
Output: 2
Explanation: One stamp over positions 0-2 wipes the first 'X', then a stamp
over positions 3-5 wipes the second.
```

### Example 2

```text
Input: s = "OOXOO"
Output: 1
Explanation: A single stamp covering the middle three characters turns the
lone 'X' into an 'O'.
```

### Example 3

```text
Input: s = "XXOOX"
Output: 2
Explanation: The opening 'XX' falls to one stamp over positions 0-2, and the
trailing 'X' needs a second stamp over positions 2-4, whose other cells are
already 'O'.
```

### Constraints

- `3 <= s.length <= 1000`
- Every character of `s` is `'X'` or `'O'`.

## Hints

### Hint 1

Whenever the scan meets an `'X'`, that character must be covered by some
stamp — and the leftmost uncovered `'X'` is the most urgent one.

### Hint 2

Delay each stamp until it is unavoidable: the stamp that clears the earliest
remaining `'X'` might as well be placed right over it, sweeping up to three
positions in one go.
