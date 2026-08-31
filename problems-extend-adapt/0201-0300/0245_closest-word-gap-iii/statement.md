# Closest Word Gap III

## Description

You are given an array of strings `wordsDict` along with two query words
`word1` and `word2`, each guaranteed to occur somewhere in the array.
Unlike the plain version of this problem, `word1` and `word2` are
allowed to be **the same word** here — both are only guaranteed to
individually occur in `wordsDict`, with no promise that they differ.

Find the smallest distance between an occurrence of `word1` and an
occurrence of `word2`, measured as the absolute difference between
their indices in `wordsDict`. When the two query words are equal, the
two occurrences being compared must still be two different positions in
the array. Return that smallest distance.

### Example 1

```text
Input: wordsDict = ["sun", "moon", "star", "sun", "moon"], word1 = "moon", word2 = "star"
Output: 1
```

### Example 2

```text
Input: wordsDict = ["sun", "moon", "star", "sun", "moon"], word1 = "moon", word2 = "moon"
Output: 3
```

### Constraints

- `1 <= wordsDict.length <= 10⁵`
- `1 <= wordsDict[i].length <= 10`
- `wordsDict[i]` consists of lowercase English letters.
- `word1` and `word2` each occur at least once in `wordsDict`.
