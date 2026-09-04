# Closest Word Gap

## Description

You are given an array of strings `wordsDict` along with two distinct
strings `word1` and `word2` that are each guaranteed to occur somewhere
in the array. Both words may appear more than once. Find the smallest
distance between any occurrence of `word1` and any occurrence of
`word2`, measured as the absolute difference between their indices in
`wordsDict`, and return that smallest distance.

### Example 1

```text
Input: wordsDict = ["alpha", "beta", "gamma", "delta", "beta"], word1 = "delta", word2 = "alpha"
Output: 3
```

### Example 2

```text
Input: wordsDict = ["alpha", "beta", "gamma", "delta", "beta"], word1 = "beta", word2 = "delta"
Output: 1
```

### Constraints

- `2 <= wordsDict.length <= 3 * 10⁴`
- `1 <= wordsDict[i].length <= 10`
- `wordsDict[i]` consists of lowercase English letters.
- `word1` and `word2` both occur in `wordsDict`.
- `word1 != word2`
