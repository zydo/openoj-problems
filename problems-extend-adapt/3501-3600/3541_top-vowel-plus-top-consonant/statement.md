# Top Vowel Plus Top Consonant

## Description

You are given a string `s` made up of lowercase English letters (`'a'` to
`'z'`).

Count how often each letter occurs in `s` — that count is the letter's
frequency. Then:

- take the largest frequency among the vowels `'a'`, `'e'`, `'i'`, `'o'`,
  and `'u'`;
- take the largest frequency among the remaining twenty-one letters (the
  consonants).

Return the sum of those two largest frequencies.

A letter that never shows up has frequency `0`, so a string with no
vowels at all — or no consonants — still gets a well-defined sum. Ties
need no tie-breaking: when several letters share the top frequency, the
value is the same no matter which one you credit.

### Example 1

```text
Input: s = "mississippi"
Output: 8
Explanation: The counts are m:1, i:4, s:4, p:2. Among the vowels the
best is i with 4; among the consonants the best is s with 4. The answer
is 4 + 4 = 8.
```

### Example 2

```text
Input: s = "banana"
Output: 5
Explanation: a occurs 3 times and is the top vowel; n occurs twice and
is the top consonant, with b trailing at 1. The answer is 3 + 2 = 5.
```

### Example 3

```text
Input: s = "rhythm"
Output: 2
Explanation: No vowel appears at all, so the vowel side contributes 0.
The busiest consonant is h with 2, giving 2 + 0 = 2.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists of lowercase English letters only.

## Hints

### Hint 1

Tally each letter's occurrences in one scan of the string — 26 counters
cover every letter you can meet.

### Hint 2

The answer splits into two independent maxima: walk the five vowel
buckets and the twenty-one consonant buckets separately, then add the
two winners. Absent letters stay at 0, which handles the missing-category
cases for free.
