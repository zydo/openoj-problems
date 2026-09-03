# Largest Piece Of A Shared Word

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

### Example 1

```text
Input: word = "cbeda", numFriends = 2
Output: "eda"
Explanation: Dealing "cb" to one friend and "eda" to the other drops
"eda" into the pile. A piece can hold at most four letters here, and no
piece in any dealing sorts above "eda".
```

### Example 2

```text
Input: word = "banana", numFriends = 3
Output: "nana"
Explanation: The dealing "b", "a", "nana" puts "nana" into the pile, and
nothing dealt in any other dealing can beat it.
```

### Example 3

```text
Input: word = "quo", numFriends = 1
Output: "quo"
Explanation: With a single friend the only dealing is the untouched
word itself.
```

### Constraints

- `1 <= word.length <= 5 * 10³`
- `word` contains only lowercase English letters.
- `1 <= numFriends <= word.length`

## Hints

### Hint 1

For every starting index, look at the lexicographically largest substring
of length `n - numFriends + 1` or less that begins there.

### Hint 2

Any piece longer than `n - numFriends + 1` is impossible, and every
shorter substring can be completed to a full dealing by handing out one
letter to each remaining friend.
