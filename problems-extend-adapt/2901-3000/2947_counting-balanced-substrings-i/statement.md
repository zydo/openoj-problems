# Counting Balanced Substrings I

## Description

You are handed a lowercase string s together with a positive integer k.
Walk through all of its substrings and count how many of them qualify as
balanced.

A substring is balanced when both of these hold:

- It contains exactly as many vowels as consonants.
- The product of those two counts is divisible by k, i.e.
  (vowels * consonants) % k == 0.

Vowels are the letters 'a', 'e', 'i', 'o', and 'u'; every other lowercase
letter counts as a consonant. A substring is any contiguous run of
characters taken from s. Return the number of non-empty balanced
substrings of s.

### Example 1

```text
Input: s = "banana", k = 2
Output: 3
Explanation: Three substrings qualify:
- "bana" holds vowels 2 (a, a) and consonants 2 (b, n), and 2 * 2 is
  divisible by 2.
- "anan" holds vowels 2 (a, a) and consonants 2 (n, n).
- "nana" holds vowels 2 (a, a) and consonants 2 (n, n).
No other substring manages to even out its counts.
```

### Example 2

```text
Input: s = "abcde", k = 1
Output: 2
Explanation: With k = 1 the divisibility test passes trivially, so only
the vowel/consonant balance matters. "ab" pairs one vowel with one
consonant, and so does "de"; nothing else in the string evens out.
```

### Example 3

```text
Input: s = "rhythm", k = 5
Output: 0
Explanation: Every letter here is a consonant, so no substring can ever
hold equal numbers of vowels and consonants.
```

### Constraints

- `1 <= s.length <= 1000`
- `1 <= k <= 1000`
- `s` consists of only English lowercase letters.

## Hints

### Hint 1

Fix a start index and grow the substring one character at a time while
tracking the running difference between vowel and consonant counts. The
counts balance exactly when that difference reaches zero, at which point
both equal half the length — a single multiply-and-modulo against k then
settles whether the substring counts.
