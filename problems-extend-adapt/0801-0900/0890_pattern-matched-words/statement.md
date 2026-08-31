# Pattern-Matched Words

## Description

You are given a list of lowercase strings `words` and a lowercase string
`pattern`. Return every word that has the same repetition structure as
`pattern`, preserving the order in which those words occur in `words`.

A word has the same structure when its letters can be paired one-to-one with
the letters of `pattern`: equal letters in `pattern` must correspond to equal
letters in the word, and different letters must correspond to different
letters. The pairing must be a bijection over letters.

### Example 1

```text
Input: words = ["ab","no","xy","aa","cc","pq"], pattern = "xy"
Output: ["ab","no","xy","pq"]
Explanation: Each returned word has two different letters, just as xy does.
The words aa and cc repeat their only letter, so neither can use a one-to-one
letter pairing with the pattern.
```

### Example 2

```text
Input: words = ["mom","dad","xyx","foo","bar"], pattern = "aba"
Output: ["mom","dad","xyx"]
Explanation: A matching word must repeat its first letter in the final
position while using a different letter in the middle.
```

### Constraints

- `1 <= pattern.length <= 20`
- `1 <= words.length <= 50`
- Every `words[i]` has length `pattern.length`.
- `pattern` and every word use lowercase English letters only.
