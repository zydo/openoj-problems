# Largest Disjoint Word Product

## Description

Given an array of strings `words`, pick two different entries whose letter
sets are disjoint — no letter occurs in both — and return the largest
possible product of their lengths. If every pair of entries shares at least
one letter, return `0`.

### Example 1

```text
Input: words = ["brick","stone","metal","waxy"]
Output: 25
Explanation: brick and stone share no letter, and their lengths multiply to
5 * 5. metal is also five letters long but shares t and e with stone, so it
cannot take brick's partner spot.
```

### Example 2

```text
Input: words = ["moon","loom","wool","moat"]
Output: 0
Explanation: Every entry contains the letter o, so no pair is disjoint.
```

### Example 3

```text
Input: words = ["cat","cart","care","dog"]
Output: 12
Explanation: cart and dog share no letter and give 4 * 3 = 12. care and dog
also qualify with the same product; cat and dog give only 9.
```

### Constraints

- `2 <= words.length <= 1000`
- `1 <= words[i].length <= 1000`
- every entry consists of lowercase English letters only.

## Hints

### Hint 1

For the pairing question, a word is fully described by which letters it
contains — neither their order nor how often each appears matters.

### Hint 2

Encode each word's letter set as a 26-bit integer, one bit per letter of the
alphabet. Two words are disjoint exactly when their integers have no set bit
in common.

### Hint 3

With at most 1000 words, testing every pair costs about half a million of
those single-instruction checks.
