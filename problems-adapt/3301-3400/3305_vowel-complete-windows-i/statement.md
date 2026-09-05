# Vowel-Complete Windows I

## Description

A piece of `word` is vowel-complete when each of the five vowels — `'a'`,
`'e'`, `'i'`, `'o'`, and `'u'` — shows up in it at least once.

Given `word` and a non-negative integer `k`, count the substrings that
are vowel-complete while carrying exactly `k` consonants.

### Example 1

```text
Input: word = "eauio", k = 0
Output: 1
Explanation: The whole word rearranges all five vowels and holds no
consonants, so exactly one substring qualifies.
```

### Example 2

```text
Input: word = "aeioua", k = 0
Output: 3
Explanation: The qualifying consonant-free substrings are "aeiou",
"eioua", and "aeioua" itself.
```

### Example 3

```text
Input: word = "oaeiubc", k = 1
Output: 1
Explanation: "oaeiub" gathers every vowel plus the single consonant 'b';
extending to the 'c' adds a second consonant and trimming drops a vowel.
```

### Example 4

```text
Input: word = "aeiou", k = 1
Output: 0
Explanation: There is no consonant anywhere to fill the required slot.
```

### Constraints

- `5 <= word.length <= 250`
- `word` consists only of lowercase English letters.
- `0 <= k <= word.length - 5`

## Hints

### Hint 1

The length cap keeps the substring count modest — testing every window
directly is a fair plan at this size.

### Hint 2

For a fixed left edge, extend the right edge one character at a time,
tracking which of the five vowels have arrived (a small mask or set does
it) and how many consonants have piled up; record each moment both
conditions hold.
