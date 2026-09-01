# Longest Layered Palindromic Subsequence II

## Description

Call a subsequence of `s` a **layered palindrome** when every one of these
holds:

- It is a subsequence of `s`.
- It reads identically in both directions.
- Its length is even.
- Apart from the two middle characters, no character sits next to an equal
  character.

To illustrate, take `s = "abaabbba"`: the subsequence `"abaaba"` is a layered
palindrome, whereas `"bbbb"` (it repeats characters side by side away from
the middle) and `"aba"` (its length is odd) are not.

Return the length of the longest layered palindrome that can be picked out
of `s`.

### Example 1

```text
Input: s = "abaabbba"
Output: 6
Explanation: The whole answer is the subsequence "abaaba".
```

### Example 2

```text
Input: s = "bccb"
Output: 4
Explanation: The string itself, "bccb", is already a layered palindrome.
```

### Example 3

```text
Input: s = "aabaa"
Output: 2
Explanation: Stacking more than the middle pair fails here — "aaaa" repeats
`a` next to itself away from the middle — so the best pick is "aa".
```

### Constraints

- `1 <= s.length <= 250`
- `s` is made up of lowercase English letters.

## Hints

### Hint 1

Palindromes over intervals invite dynamic programming from the two ends
inward; start there.

### Hint 2

The only way a nested pair can break the rules is by reusing the letter of
the pair wrapped around it, so remember that letter as part of the DP state.
