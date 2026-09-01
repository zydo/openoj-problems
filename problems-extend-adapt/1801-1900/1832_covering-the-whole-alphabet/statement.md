# Covering the Whole Alphabet

## Description

A string is a full-alphabet sentence when all 26 lowercase English letters
appear in it at least once.

Given a string `sentence` made up of lowercase English letters, return
`true` when `sentence` covers the whole alphabet and `false` otherwise.

### Example 1

```text
Input: sentence = "sphinxofblackquartzjudgemyvow"
Output: true
Explanation: Every letter from a to z occurs at least once.
```

### Example 2

```text
Input: sentence = "thequickbrownfoxjumps"
Output: false
Explanation: The letters a, d, g, and several others never appear.
```

### Example 3

```text
Input: sentence = "abcdefghijklmnopqrstuvwxyz"
Output: true
Explanation: The alphabet itself, each letter exactly once, suffices.
```

### Constraints

- `1 <= sentence.length <= 1000`
- `sentence` consists of lowercase English letters.

## Hints

### Hint 1

Only one property matters: how many distinct letters the string holds.

### Hint 2

Mark which of the 26 letters you have seen while scanning, then compare
the number of marks against 26.
