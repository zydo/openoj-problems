# Balanced-Letter Splits

## Description

You are given a string `s`. A split cuts `s` into a non-empty prefix
`sleft` and a non-empty suffix `sright` such that `sleft + sright = s`.
A split is **balanced** when the two pieces contain the same number of
distinct letters.

Count how many balanced splits `s` has.

### Example 1

```text
Input: s = "aabaac"
Output: 2
Explanation: The string has 5 possible cuts. Four of them fail:
("a", "abaac") has 1 and 3 distinct letters, and ("aa", "baac") has 1
and 3. But ("aab", "aac") has 2 and 2, and ("aaba", "ac") has 2 and 2.
The last cut, ("aabaa", "c"), has 2 and 1. So 2 splits are balanced.
```

### Example 2

```text
Input: s = "abcba"
Output: 0
Explanation: Every cut leaves one side richer in distinct letters than
the other, so no split is balanced.
```

### Example 3

```text
Input: s = "aabb"
Output: 1
Explanation: The cut ("aa", "bb") puts 1 distinct letter on each side.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of only lowercase English letters.

## Hints

### Hint 1

Sweep the string from both ends once, and after each position record how
many distinct letters that prefix (and that suffix) contain.

### Hint 2

Once both tables exist, every cut point is a single comparison: the split
there is balanced exactly when the prefix count at the last left
character equals the suffix count at the first right character.
