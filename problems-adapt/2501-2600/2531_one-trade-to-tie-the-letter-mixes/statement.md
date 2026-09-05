# One Trade to Tie the Letter Mixes

## Description

Two strings `word1` and `word2` are given, both indexed starting at 0.

One trade means picking a position `i` inside `word1` and a position `j`
inside `word2`, then exchanging the two letters that sit there.

Decide whether some single trade can leave the two strings holding the
same number of distinct letters. Return `true` if such a trade exists and
`false` otherwise.

### Example 1

```text
Input: word1 = "xxyy", word2 = "mno"
Output: true
Explanation: Trade an `x` for the `m`: the strings become `"mxyy"` and
`"xno"`, and each holds three distinct letters.
```

### Example 2

```text
Input: word1 = "abc", word2 = "ab"
Output: true
Explanation: Send the lone `c` over in exchange for an `a`: the strings
become `"aba"` and `"cb"`, each holding two distinct letters.
```

### Example 3

```text
Input: word1 = "aa", word2 = "bcd"
Output: false
Explanation: Whichever letter the second string gives up, it still keeps
three distinct letters, while the first can climb to only two.
```

### Constraints

- `1 <= word1.length, word2.length <= 10⁵`
- Both strings contain only lowercase English letters.

## Hints

### Hint 1

Tally how often each of the 26 letters appears in each string; the
distinct-letter totals are just the tallies' non-empty rows.

### Hint 2

A trade is fully described by the letter that leaves `word1` and the
letter that arrives in its place — at most 26 × 26 candidate shapes.

### Hint 3

Walk every candidate pair and update the two totals in constant time:
`word1` loses a letter only when the departing one was its last copy and
gains one only when the arrival is brand new; check the mirror effect on
`word2`.
