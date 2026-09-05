# Recasting One Word Into Another

## Description

Two lowercase words `word1` and `word2` share the same length. The goal
is to rebuild `word1` into `word2`.

First cut `word1` into one or more consecutive pieces. The pieces line
up with `word2` in order, and each piece is then repaired on its own,
using moves of three kinds — each kind costs one move:

- Overwrite: change the letter at any one position of the piece into any
  other lowercase letter.
- Exchange: choose two positions in the piece and swap the letters
  sitting there.
- Flip: reverse the entire piece.

A position of a piece may take part in at most one overwrite, at most
one exchange, and at most one flip — no letter can be involved in two
moves of the same kind.

Return the fewest moves that turn `word1` into `word2`.

### Example 1

```text
Input: word1 = "kitten", word2 = "sitten"
Output: 1
Explanation: Keep the word whole and overwrite its first letter: k
becomes s. One move in all.
```

### Example 2

```text
Input: word1 = "aab", word2 = "aba"
Output: 1
Explanation: One exchange of the last two positions does it: "aab"
becomes "aba".
```

### Example 3

```text
Input: word1 = "xyz", word2 = "zyx"
Output: 1
Explanation: A single flip of the whole word reads it backwards into
the target.
```

### Example 4

```text
Input: word1 = "abcd", word2 = "badc"
Output: 2
Explanation: Cut the word into "ab" and "cd", then exchange the two
letters inside each piece. No single move mends both halves at once,
so two moves are necessary.
```

### Constraints

- `1 <= word1.length == word2.length <= 100`
- `word1` and `word2` consist only of lowercase English letters.

## Hints

### Hint 1

Pieces do not interact: the total price is the sum of the pieces'
prices, so a partition DP over prefix lengths finds the best cut set.

### Hint 2

To price one piece, note a position can serve at most one exchange and
at most one flip. Some optimal schedule therefore permutes the piece
first — at most one flip plus a set of pairwise-disjoint exchanges —
and overwrites whatever is still wrong afterwards.

### Hint 3

An exchange is worth spending only when it mends two positions at once:
positions `p`, `q` where `word1` reads `(a, b)` and `word2` reads
`(b, a)`. Tally mismatch types in a 26×26 table; the best disjoint
exchange count is `Σ min(cnt[a][b], cnt[b][a])` over mirrored types.

### Hint 4

The piece may also be flipped before anything else. That costs one
extra move but reads the window backwards — price both alignments and
keep the cheaper.
