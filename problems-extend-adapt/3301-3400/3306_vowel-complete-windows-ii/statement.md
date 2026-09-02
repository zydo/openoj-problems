# Vowel-Complete Windows II

## Description

A piece of `word` is vowel-complete when each of the five vowels — `'a'`,
`'e'`, `'i'`, `'o'`, and `'u'` — shows up in it at least once.

Given `word` and a non-negative integer `k`, count the substrings that
are vowel-complete while carrying exactly `k` consonants. Compared with
the small version of this task, `word` can be far longer, so a
quadratic-size scan of windows is off the table.

### Example 1

```text
Input: word = "qaeiouq", k = 1
Output: 2
Explanation: "qaeiou" and "aeiouq" each hold all five vowels plus a
single consonant; the full word carries two consonants and every shorter
vowel-only window misses a vowel.
```

### Example 2

```text
Input: word = "aueio", k = 0
Output: 1
Explanation: The whole word is one consonant-free arrangement of all
five vowels.
```

### Example 3

```text
Input: word = "bbaeioub", k = 2
Output: 2
Explanation: "bbaeiou" and "baeioub" both take every vowel together
with exactly two 'b's.
```

### Example 4

```text
Input: word = "aeiouaeiou", k = 1
Output: 0
Explanation: No consonant ever appears, so a one-consonant window can
never be formed.
```

### Constraints

- `5 <= word.length <= 2 * 10⁵`
- `word` consists only of lowercase English letters.
- `0 <= k <= word.length - 5`

## Hints

### Hint 1

Exactly `k` is an awkward condition to count head-on. It is the number
of windows with at least `k` consonants minus the number with at least
`k + 1`.

### Hint 2

Counting "all five vowels and at least `c` consonants" can sweep each
left end once: the shortest right end that completes the window only
ever moves forward as the left end advances.

### Hint 3

Every qualifying left end contributes everything from its minimal right
end to the string's end, so two pointers finish in a single linear pass
per threshold.
