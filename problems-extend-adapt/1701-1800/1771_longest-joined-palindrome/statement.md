# Longest Joined Palindrome

## Description

Two words, `word1` and `word2`, are given. Build a string by this
recipe:

- Take a non-empty subsequence out of `word1`.
- Take a non-empty subsequence out of `word2`.
- Join the two pieces, `first + second`.

Among all strings that can be produced this way, find the length of
the longest one that is a palindrome. When nothing palindromic can be
produced at all, answer `0`.

Recall that a subsequence of `s` keeps any characters of `s` in their
original order while deleting the rest, and a palindrome reads
identically in both directions.

### Example 1

```text
Input: word1 = "race", word2 = "cart"
Output: 7
Explanation: Take "race" from word1 and "car" from word2; joined they
form "racecar", a palindrome of length 7.
```

### Example 2

```text
Input: word1 = "brag", word2 = "grab"
Output: 6
Explanation: Take "bag" from word1 and "gab" from word2 to get
"baggab", which is a palindrome.
```

### Example 3

```text
Input: word1 = "abcde", word2 = "xyzk"
Output: 0
Explanation: The two words share no letter, so no palindrome can be
produced by the recipe.
```

### Constraints

- `1 <= word1.length, word2.length <= 1000`
- Both words are made of lowercase English letters.

## Hints

### Hint 1

Set the non-emptiness rule aside for a moment: gluing the words
together and finding the longest palindromic subsequence of the glue
with interval DP solves the relaxed task.

### Hint 2

Any palindrome assembled from both words must begin with a character
taken from `word1` and finish with a character taken from `word2`, so
its first and last positions straddle the join. Scanning pairs
`word1[i]`, `word2[j]` with equal letters restores the non-emptiness
guarantee.
