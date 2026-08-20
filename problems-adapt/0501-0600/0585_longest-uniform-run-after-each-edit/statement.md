# Longest Uniform Run After Each Edit

## Description

You are given a string `s` of lowercase English letters, a string
`rewriteChars`, and an array of positions `rewritePositions`, the last two
of equal length `k`.

Edit `i` overwrites one character of `s`: the position `rewritePositions[i]`
takes the character `rewriteChars[i]`. Edits apply in order, and later
edits build on earlier ones.

Return an array of length `k` whose entry `i` is the length of the longest
block of identical consecutive characters in `s` after edit `i`.

### Example 1

```text
Input: s = "abbaa", rewriteChars = "bba", rewritePositions = [0,4,1]
Output: [3,3,1]
Explanation: The first edit turns the string into "bbbaa" — the block
"bbb" has length 3. The second makes "bbbab", leaving that 3 intact. The
third rewrites position 1 into 'a', giving "babab", whose longest block is
any single character.
```

### Example 2

```text
Input: s = "aabaa", rewriteChars = "azb", rewritePositions = [2,0,4]
Output: [5,4,3]
Explanation: One edit can bridge two blocks: rewriting position 2 to 'a'
fuses "aa" and "aa" into "aaaaa", of length 5. Rewriting position 0 to 'z'
trims the left end, leaving "zaaaa" of length 4; rewriting position 4 to
'b' trims the right end, leaving "zaaab" of length 3.
```

### Example 3

```text
Input: s = "xyyxx", rewriteChars = "yx", rewritePositions = [0,4]
Output: [3,3]
Explanation: Extending at the left gives "yyyxx"; extending at the right
gives "yyyxy". Either way the longest block is 3.
```

### Constraints

- `1 <= s.length <= 10^5`
- `s` contains only lowercase English letters.
- `k == rewriteChars.length == rewritePositions.length`
- `1 <= k <= 10^5`
- `rewriteChars` contains only lowercase English letters.
- `0 <= rewritePositions[i] < s.length`

## Hints

### Hint 1

Each edit changes one position and then asks about the whole string.
Which classic structure serves repeated point updates with a global
summary?

### Hint 2

Let every segment-tree node summarize its span: the longest uniform block
inside it, the longest uniform prefix, the longest uniform suffix, and the
characters at both ends.

### Hint 3

Two children merge into a parent by extending the prefix and suffix across
the seam when the boundary characters agree, and by considering a block
that straddles it: suffix of the left child plus prefix of the right.

### Hint 4

Serve each edit by rewriting one leaf and recomputing the nodes above it;
the root's summary is the answer to report.
