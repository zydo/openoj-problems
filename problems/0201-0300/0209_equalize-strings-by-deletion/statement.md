# Equalize Strings by Deletion

## Description

One operation removes a single character from either `word1` or `word2`.
Return the fewest operations needed to make the two resulting strings equal.

### Example 1

```text
Input: word1 = "cab", word2 = "abd"
Output: 2
Explanation: Delete 'c' from the first word and 'd' from the second, leaving "ab".
```

### Example 2

```text
Input: word1 = "stone", word2 = "tones"
Output: 2
Explanation: Both words can be reduced to "tone" with one deletion each.
```

### Constraints

- `1 <= word1.length, word2.length <= 500`
- Both words contain only lowercase English letters.

## Hints

### Hint 1

The final shared text must be a subsequence of both original words.

### Hint 2

Keeping the longest common subsequence minimizes how much text is deleted.

### Hint 3

If its length is `L`, the answer is `word1.length + word2.length - 2 * L`.
