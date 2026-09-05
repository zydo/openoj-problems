# Spending Blanks On Rarest Letters

## Description

You are given a string `s` of lowercase English letters and `'?'` characters.
A string is scored by walking it once and, at every position, counting how
many earlier positions hold the same letter; the string's score is the sum of
those counts. For instance, `"abac"` scores `1` — only the second `a` sees an
earlier copy of itself.

Replace every `'?'` in `s` with a lowercase letter so that the finished
string's score is as small as possible. Return the lexicographically smallest
string among all replacements that reach that minimum.

### Example 1

```text
Input: s = "b?c?b"
Output: "bacdb"
Explanation: The letters a and d are missing entirely, so handing each blank one of them leaves only the second b repeating. "bacdb" scores 1, and the fixed pair of b characters keeps the score from dropping below 1.
```

### Example 2

```text
Input: s = "x?x?"
Output: "xaxb"
Explanation: Filling the blanks with a and b leaves only the second x repeating, for a score of 1; the two fixed x characters make anything lower impossible.
```

### Example 3

```text
Input: s = "?z?"
Output: "azb"
Explanation: Putting different letters in the two blanks makes every letter unique, so "azb" scores 0, and among the zero-score fills that keep the z in place it is the lexicographically smallest.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of lowercase English letters and `'?'`

## Hints

### Hint 1

A letter that ends up appearing `x` times contributes
`0 + 1 + … + (x − 1) = x(x − 1)/2` wherever its copies sit — only the final
counts enter the score.

### Hint 2

Spend each blank on the letter whose count is currently smallest, taking the
smallest letter on ties; that tie rule also makes the chosen letter multiset
lexicographically smallest.

### Hint 3

With the chosen letters fixed, dropping them into the blanks in sorted order
produces the lexicographically smallest string.
