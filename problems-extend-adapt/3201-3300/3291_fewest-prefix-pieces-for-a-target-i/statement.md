# Fewest Prefix Pieces For A Target I

## Description

You are given an array of lowercase strings `words` and a lowercase string
`target`.

Call a string `x` a usable piece when `x` is a prefix of at least one
string in `words`. A piece may be any length from one character up to that
word's full length, and the same piece may be reused any number of times.

Return the fewest pieces that, concatenated in some order, spell out
`target` exactly. If no combination can do it, return `-1`.

### Example 1

```text
Input: words = ["hello","help","heap"], target = "heaphelp"
Output: 2
Explanation: The pieces "heap" (a prefix of words[2]) and "help" (a
prefix of words[1]) concatenate to "heaphelp". No single usable piece
covers the whole target.
```

### Example 2

```text
Input: words = ["xy","yxz"], target = "xyxzy"
Output: 3
Explanation: "xy" is a prefix of words[0], "yxz" is a prefix of words[1],
and the final "y" reuses words[0] — three pieces in total.
```

### Example 3

```text
Input: words = ["ab","abc"], target = "acb"
Output: -1
Explanation: After taking the piece "a", no usable piece begins with "c",
so the target can never be completed.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 5 * 10³`
- `1 <= target.length <= 5 * 10³`
- The sum of all `words[i].length` is at most `10⁵`.
- `words[i]` and `target` consist only of lowercase English letters.

## Hints

### Hint 1

Let `dp[i]` be the fewest pieces that spell the first `i` characters of
`target`.

### Hint 2

What matters at each offset is a single number: the longest stretch
`target[i..L)` that is a prefix of some word. If you know that longest
stretch for every offset, choosing a piece starting at `i` becomes a jump
of any length up to that stretch.

### Hint 3

For one word, a single Z-function pass over `word + separator + target`
tells you, at every offset of `target`, how many characters continue to
match that word's beginning.

### Hint 4

With the longest usable stretch known per offset, the fewest pieces is a
layered frontier scan: commit a piece when the walk reaches the current
layer's boundary, and fail whenever a boundary's positions reach nothing
beyond it.
