# Biggest Weave of Two Words

## Description

You hold two strings, `word1` and `word2`, and weave them into one
result string. While either word still has letters, you repeatedly
pick one of these moves:

- If `word1` is non-empty, move its first letter to the end of the
  result and delete it from `word1`. For instance, with
  `word1 = "abc"` and the result so far `"dv"`, the move leaves
  `word1 = "bc"` and the result `"dva"`.
- If `word2` is non-empty, move its first letter to the end of the
  result and delete it from `word2`. For instance, with
  `word2 = "abc"` and an empty result so far, the move leaves
  `word2 = "bc"` and the result `"a"`.

Return the lexicographically largest result any sequence of moves can
produce.

One string `a` is lexicographically larger than another string `b` (of
equal length) if, at the first position where they differ, `a` carries
a strictly larger character than `b` does. For example, `"abcd"` is
lexicographically larger than `"abcc"` because the strings first
diverge at the fourth character, where `d` beats `c`.

### Example 1

```text
Input: word1 = "zug", word2 = "yxz"
Output: "zyxzug"
Explanation: The letters z, then y, then x lead the result, because
at every step the chosen remaining string is the one whose remaining
part is lexicographically larger.
```

### Example 2

```text
Input: word1 = "azb", word2 = "aza"
Output: "azbaza"
Explanation: The opening letters tie on a, then z — so the decision
falls to the whole remaining parts: "azb" beats "aza", so word1 is
consumed first.
```

### Example 3

```text
Input: word1 = "cb", word2 = "cba"
Output: "ccbba"
Explanation: The first letters tie on c, and since "cba" is
lexicographically larger than "cb", the move takes from word2.
```

### Constraints

- `1 <= word1.length, word2.length <= 3000`
- `word1` and `word2` consist only of lowercase English letters.

## Hints

### Hint 1

Assemble the result one letter at a time; each step you commit to one
of the two words.

### Hint 2

When the two candidate letters differ, taking the larger one is
always safe.

### Hint 3

When the two candidate letters are equal, you need a tie-break rule
that looks deeper than the single letter.

### Hint 4

Compare the entire remaining parts and consume from the word whose
remainder is lexicographically larger.
