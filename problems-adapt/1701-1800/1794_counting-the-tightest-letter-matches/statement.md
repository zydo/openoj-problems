# Counting the Tightest Letter Matches

## Description

Two lowercase strings `firstString` and `secondString` are given, both
0-indexed. A _match_ is a quadruple of indices `(i, j, a, b)` such that

- `0 <= i <= j < firstString.length`,
- `0 <= a <= b < secondString.length`, and
- the piece `firstString[i..j]` is character-for-character identical to the
  piece `secondString[a..b]`.

Every match also has a _span_, the quantity `j - a`. Count the matches whose
span is as small as any match's can be.

### Example 1

```text
Input: firstString = "pqrst", secondString = "zpqab"
Output: 2
Explanation: Matching the single letters works best here: 'p' pairs its
firstString index 0 with its secondString index 1, and 'q' pairs index 1
with index 2. Both matches span j - a = -1, and no match can do better, so
the answer is 2.
```

### Example 2

```text
Input: firstString = "mocha", secondString = "blend"
Output: 0
Explanation: The two strings share no letter at all, so no match exists.
```

### Example 3

```text
Input: firstString = "dancer", secondString = "arcade"
Output: 1
Explanation: The tightest match is the letter 'd': first occurrence 0 in
"dancer", last occurrence 4 in "arcade", giving span 0 - 4 = -4. No other
letter reaches that span, so exactly one match qualifies.
```

### Constraints

- `1 <= firstString.length, secondString.length <= 2 * 10⁵`
- Both strings contain only lowercase English letters.

## Hints

### Hint 1

Any match longer than one character can shrink to its first character: the
single characters still match, `a` stays put, and `j` only gets smaller.

### Hint 2

So only single letters matter, and each letter does best by pairing its
earliest position in `firstString` with its latest position in
`secondString`.
