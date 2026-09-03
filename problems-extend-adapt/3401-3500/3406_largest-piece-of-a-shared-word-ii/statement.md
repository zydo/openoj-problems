# Largest Piece Of A Shared Word II

## Description

You are given a string `word` and an integer `numFriends`.

A group of `numFriends` friends shares the word. Many dealings of it are
played out; in each dealing:

- `word` is dealt to the friends as exactly `numFriends` non-empty
  pieces, and no dealing ever repeats a dealing that has already been
  played.
- every piece dealt lands in one shared pile.

Once every possible dealing has been played, return the
lexicographically largest string sitting in the pile.

A string `a` sorts below a string `b` when, at the first position where
the two differ, `a` carries a letter earlier in the alphabet than `b`'s
letter there. If one string is a prefix of the other, the shorter one
sorts below.

### Example 1

```text
Input: word = "cabbage", numFriends = 3
Output: "ge"
Explanation: The dealing "cab", "ba", "ge" drops "ge" into the pile. A
piece can hold at most five letters here, and no piece in any dealing
sorts above "ge".
```

### Example 2

```text
Input: word = "ededed", numFriends = 2
Output: "edede"
Explanation: The dealing "e", "deded" puts the five-letter piece
"edede" into the pile, and nothing dealt in any other dealing can beat
it.
```

### Example 3

```text
Input: word = "sol", numFriends = 1
Output: "sol"
Explanation: With a single friend the only dealing is the untouched
word itself.
```

### Constraints

- `1 <= word.length <= 2 * 10⁵`
- `word` contains only lowercase English letters.
- `1 <= numFriends <= word.length`

## Hints

### Hint 1

The answer is the longest usable prefix of the lexicographically largest
suffix of `word` — find that suffix without comparing all pairs.

### Hint 2

A two-pointer duel between a reigning start and a challenger start, with
a shared tie offset, locates the largest suffix in linear time.
