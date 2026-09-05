# Flip The Opening Stretch

## Description

You receive a lowercase string s and an integer k. Flip the opening
stretch of s — its first k characters — so that stretch reads back to
front, and leave every character past it exactly where it was. Return the
string after this single flip.

### Example 1

```text
Input: s = "garden", k = 3
Output: "ragden"
Explanation: The opening stretch "gar" reads "rag" once flipped, and the
tail "den" is untouched, giving "ragden".
```

### Example 2

```text
Input: s = "orbit", k = 5
Output: "tibro"
Explanation: The stretch covers the whole string, so "orbit" simply reads
"tibro" afterwards.
```

### Example 3

```text
Input: s = "leaf", k = 1
Output: "leaf"
Explanation: A one-character stretch is its own mirror image, so the
string comes back unchanged.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists of lowercase English letters.
- `1 <= k <= s.length`

## Hints

### Hint 1

Only positions 0 through k - 1 change hands: the character at position i
ends up at position k - 1 - i, and nothing beyond index k - 1 moves at
all.
