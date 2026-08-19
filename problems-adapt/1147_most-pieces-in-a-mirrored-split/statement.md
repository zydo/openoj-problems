# Most Pieces in a Mirrored Split

## Description

Cut the string `text` into `k` consecutive non-empty pieces
`piece_1, piece_2, ..., piece_k` so that:

- every piece is non-empty;
- the pieces concatenated in order reproduce `text` exactly;
- the sequence of pieces is symmetric: `piece_i == piece_k-i+1` for every
  valid `i` — the first piece equals the last, the second equals the
  second-to-last, and so on. With odd `k`, the middle piece pairs with
  itself, so any content is allowed there.

Return the largest `k` for which such a cut exists.

### Example 1

```text
Input: text = "abcdefcdeab"
Output: 5
Explanation: (ab)(cde)(f)(cde)(ab) — each outer pair matches, and the
single middle piece f stands alone.
```

### Example 2

```text
Input: text = "puzzle"
Output: 1
Explanation: No prefix of this text pairs with a suffix of the same length,
so the only legal cut is the whole string as one piece: (puzzle).
```

### Example 3

```text
Input: text = "aaaaaa"
Output: 6
Explanation: Every character pairs with its mirror: (a)(a)(a)(a)(a)(a).
```

### Constraints

- `1 <= text.length <= 1000`
- `text` contains only lowercase English letters.

## Hints

### Hint 1

Work from the outside in: the first and last pieces must be identical, so
compare a prefix and a suffix of equal length on the untouched text, peel
them off as a pair, and repeat on the part left between them.

### Hint 2

Among all matching prefix/suffix pairs at a given step, commit to the
shortest one. An exchange argument shows this is never worse: any split that
starts with a longer pair can be re-cut where your short pair ends, keeping
every later pair intact.

### Hint 3

Two boundaries walking inward are all the state you need — no recursion, no
copies of the middle. When no prefix/suffix length matches, whatever is left
between the boundaries becomes one final piece and the process stops.
