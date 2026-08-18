# Vocabulary Segmentation

## Description

You are given a string `s` and a list of strings `vocabulary`. Decide whether
`s` can be cut into consecutive pieces such that every piece is an entry of
`vocabulary`, and return `true` or `false` accordingly.

The cuts must use up the whole string — no characters left over at either end —
and at least one piece is required. An entry may serve as a piece as often as
you like; using it once does not remove it from `vocabulary`.

### Example 1

```text
Input: s = "sunflower", vocabulary = ["sun","flow","er"]
Output: true
Explanation: The three entries in that order spell the string exactly.
```

### Example 2

```text
Input: s = "dogdogcat", vocabulary = ["cat","dog"]
Output: true
Explanation: "dog" is used for two different pieces. Entries are reusable.
```

### Example 3

```text
Input: s = "carpetcarp", vocabulary = ["car","carpet","pet"]
Output: false
Explanation: Both openings run aground. Taking "carpet" first strands "carp",
and taking "car" then "pet" leads to the same dead end.
```

### Constraints

- `1 <= s.length <= 300`
- `vocabulary` holds between `1` and `1000` strings, each of length `1` to `20`
- `s` and every entry are made of lowercase English letters only
- No entry appears twice in `vocabulary`

## Hints

### Hint 1

Ask a smaller question than the whole string: for each cut point `i`, can
`s[0..i)` be cut up legally? The empty prefix trivially can, and the answer you
want is the one at `i = n`.

### Hint 2

A legal cutting of `s[0..i)` has a final piece, `s[j..i)`. So the prefix at `i`
works exactly when some earlier working prefix `j` leaves an entry behind — one
condition you already computed, plus one lookup.

### Hint 3

Put the entries in a hash set so a lookup costs only the length of the piece.
Alternatively, treat the cut points as nodes and the entries as edges between
them, and the question becomes plain reachability from `0` to `n`.
