# Close Enough Letter Counts

## Description

Two strings are said to have close enough letter counts when, for every
letter from `'a'` through `'z'`, the number of times that letter occurs in
the first string differs from the number of times it occurs in the second
by at most `3`.

Given two strings `word1` and `word2`, both of length `n`, return `true`
when their letter counts are close enough and `false` when they are not.

The count of a letter is simply how many times that letter shows up in a
string.

### Example 1

```text
Input: word1 = "fffff", word2 = "fgggg"
Output: false
Explanation: The letter `f` occurs 5 times in `word1` but only once in
`word2`. That gap of 4 exceeds the allowed 3, so the answer is false.
```

### Example 2

```text
Input: word1 = "abcabc", word2 = "aabbcc"
Output: true
Explanation: Each of `a`, `b`, and `c` occurs twice in both strings, so
every difference is 0 — comfortably inside the limit.
```

### Example 3

```text
Input: word1 = "kkkhh", word2 = "khhhh"
Output: true
Explanation: `k` occurs 3 times versus 1 — a difference of exactly 3,
which the rule still permits. `h` differs by 2, so the answer is true.
```

### Constraints

- `n == word1.length == word2.length`
- `1 <= n <= 100`
- `word1` and `word2` consist only of lowercase English letters.

## Hints

### Hint 1

Tally how often each of the 26 possible letters appears in each string.
What convenient structure holds all 26 tallies at once?

### Hint 2

A letter present in one string but missing from the other still counts:
its missing side's tally is simply zero, so the difference is the one
nonzero count.
