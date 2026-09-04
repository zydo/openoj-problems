# The Farthest Unequal Pair I

## Description

You are given an array of strings `words`.

Select two different positions `i < j` that hold different words — that
is, `words[i] != words[j]`. The pair is measured by `j - i + 1`, counting
both ends. Return the greatest measurement any valid pair achieves. When
no unequal pair exists — the array holds one word, or every word in it is
the same — return `0`.

### Example 1

```text
Input: words = ["glow","dim","glow","ray"]
Output: 4
Explanation: words[0] and words[3] hold different words, so this pair
measures 3 - 0 + 1 = 4, and nothing beats it.
```

### Example 2

```text
Input: words = ["apple","apple","kiwi","apple","plum"]
Output: 5
Explanation: The first and last slots differ — "apple" versus "plum" —
so the pair measures 4 - 0 + 1 = 5.
```

### Example 3

```text
Input: words = ["sole","sole"]
Output: 0
Explanation: Both slots hold the same word, so no valid pair exists and
the answer is 0.
```

### Example 4

```text
Input: words = ["hi","yo"]
Output: 2
Explanation: The single possible pair differs, measuring 1 - 0 + 1 = 2.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 10`
- `words[i]` consists of only lowercase English letters.

## Hints

### Hint 1

Trying every pair of positions is cheap enough here.
