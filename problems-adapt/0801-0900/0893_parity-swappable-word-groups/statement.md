# Parity-Swappable Word Groups

## Description

All strings in `words` have the same length. Within one word, a move may swap
any two characters at even indexes or any two characters at odd indexes.
Indexes are zero-based.

Two words belong to the same class if some sequence of these moves can turn
one into the other. Return the number of distinct classes represented in
`words`.

### Example 1

```text
Input: words = ["abcd","cbad","adcb","xyyx","yxxy"]
Output: 2
Explanation: The first three words form one class because their characters at
even indexes can be rearranged among themselves, as can those at odd indexes.
The final two words form the other class.
```

### Example 2

```text
Input: words = ["abc","cba","bac","acb"]
Output: 3
```

### Constraints

- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 20`
- Every `words[i]` consists only of lowercase English letters.
- All input strings have equal length.
