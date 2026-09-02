# Fewest Copies to Unify the Blocks

## Description

A string `word` of length `n` and an integer `k` that divides `n` are
given. Picture `word` as consecutive blocks of length `k`, where a
block is the slice beginning at a multiple of `k`.

One operation picks two block starts `i` and `j` — each a multiple of
`k` — and overwrites the block `word[i..i+k-1]` with a copy of the
block `word[j..j+k-1]`.

The word is called k-periodic when some length-`k` string `s`, tiled
end to end, reproduces it exactly — for instance `"ababab"` is
2-periodic with `s = "ab"`. Find the smallest number of operations
that turns `word` k-periodic.

### Example 1

```text
Input: word = "cdabefabcdab", k = 4
Output: 1
Explanation: The blocks are "cdab", "efab", "cdab". Copying the first
block over the middle one leaves "cdabcdabcdab" — `s = "cdab"` tiled
three times.
```

### Example 2

```text
Input: word = "banana", k = 3
Output: 1
Explanation: The blocks "ban" and "ana" differ; one copy of either
over the other settles the word.
```

### Example 3

```text
Input: word = "abcabcabc", k = 3
Output: 0
Explanation: The word is already 3-periodic with `s = "abc"`.
```

### Example 4

```text
Input: word = "xyzzyx", k = 2
Output: 2
Explanation: The blocks "xy", "zz", and "yx" are pairwise different,
so whichever text survives, the other two blocks each need one
overwriting copy.
```

### Constraints

- `1 <= n == word.length <= 10^5`
- `1 <= k <= n`
- `k` divides `n`.
- `word` consists only of lowercase English letters.

### Hint 1

Tally how many times each distinct length-`k` block text occurs among
the blocks whose starts are multiples of `k`.

### Hint 2

Let the most frequent block text be the final period; every other
block is fixed by exactly one copy.
