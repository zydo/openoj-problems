# Star Erasures For The Smallest Word

## Description

The word `s` is written with lowercase letters and any number of `'*'`
marks, and every `'*'` must be erased. Erasing happens one star at a time:

- Take the leftmost remaining `'*'`, and along with it delete one
  non-`'*'` character standing somewhere to its left. That victim must be
  the smallest character currently available; among equally small
  candidates, any one of them may be chosen.

After every star is gone, the remaining characters keep their original
order and form the answer.

Return the lexicographically smallest word that can remain once all the
`'*'` marks have been erased.

### Example 1

```text
Input: s = "de*"
Output: "e"
Explanation: The star erases the smallest character to its left, "d",
leaving just "e".
```

### Example 2

```text
Input: s = "cbda**"
Output: "cd"
```

### Example 3

```text
Input: s = "edcba***"
Output: "ed"
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` contains only lowercase English letters and `'*'`.
- The input guarantees every `'*'` can be paired with a character to its
  left.

## Hints

### Hint 1

Process the string left to right and, at each `'*'`, remove the most recent
surviving copy of the smallest letter seen so far.

### Hint 2

Keeping one position stack per letter makes "the newest copy of the
smallest letter" a constant-time lookup, and deleting the newest copy —
rather than an older one — never hurts the final word.
