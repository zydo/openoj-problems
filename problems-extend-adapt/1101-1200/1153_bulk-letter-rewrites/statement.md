# Bulk Letter Rewrites

## Description

You are given two strings `str1` and `str2` of the same length. One
**bulk rewrite** picks a source letter and a different destination
letter, then replaces every occurrence of the source letter in `str1`
with the destination letter — all of them at once, wherever they sit.

Return `true` if some sequence of zero or more bulk rewrites can turn
`str1` into `str2`, and `false` otherwise.

### Example 1

```text
Input: str1 = "paper", str2 = "title"
Output: true
Explanation: Rewrite p to t, a to i, e to l, and r to e. No letter is
asked for two destinations, so the rewrites never collide.
```

### Example 2

```text
Input: str1 = "aa", str2 = "bc"
Output: false
Explanation: One a would have to become b while the other becomes c, but
a bulk rewrite moves every occurrence of a letter together.
```

### Example 3

```text
Input: str1 = "abab", str2 = "baba"
Output: true
Explanation: Rewriting a to b and b to a forms a cycle, which is only
possible because some spare letter that str2 never uses can absorb one
of them mid-sequence.
```

### Constraints

- `1 <= str1.length == str2.length <= 10⁴`
- `str1` and `str2` contain only lowercase English letters.

## Hints

### Hint 1

Read the two strings side by side: every position demands that one
specific letter of `str1` end up as one specific letter of `str2`.

### Hint 2

If some source letter is demanded to become two different letters, the
answer is `false` on the spot. Otherwise the demands form a mapping in
which each letter has at most one outgoing edge.

### Hint 3

A cycle in that mapping is the real obstacle: applying any rewrite inside
the cycle destroys another rewrite's input. It can only be routed through
a spare letter — one that never appears in `str2` — unless the strings are
already equal and no rewrite is needed at all.
