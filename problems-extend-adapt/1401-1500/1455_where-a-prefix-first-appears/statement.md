# Where a Prefix First Appears

## Description

A sentence is a sequence of words separated by single spaces. Given such
a sentence and a `searchWord`, find the first word of the sentence that
begins with `searchWord`.

Return that word's position counted from 1. When several words begin with
`searchWord`, the earliest one wins; when no word does, return `-1`.

Taking any number of leading characters from a word produces a prefix of
it, and a word equal to `searchWord` counts as its own prefix.

### Example 1

```text
Input: sentence = "she sells sea shells", searchWord = "se"
Output: 2
Explanation: The first word, "she", does not begin with "se", while the
second word, "sells", does.
```

### Example 2

```text
Input: sentence = "we work with wool", searchWord = "wo"
Output: 2
Explanation: Both "work" (word 2) and "wool" (word 4) start with "wo",
so the smaller position is returned.
```

### Example 3

```text
Input: sentence = "the sky is blue", searchWord = "gr"
Output: -1
Explanation: No word in the sentence begins with "gr".
```

### Constraints

- `1 <= sentence.length <= 100`
- `1 <= searchWord.length <= 10`
- `sentence` consists of lowercase English letters and spaces.
- `searchWord` consists of lowercase English letters.

## Hints

### Hint 1

Split the sentence on its spaces and walk the words from left to right.

### Hint 2

Report the position of the first word that starts with `searchWord`; if
the walk finishes without a match, the answer is `-1`.
