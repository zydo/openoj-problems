# Unmake the Palindrome

## Description

You are given a lowercase string `palindrome` that reads the same forwards
and backwards. Replace exactly one of its characters with any lowercase
letter so the string stops being a palindrome, picking the replacement
that yields the lexicographically smallest result, and return that result.
If no single replacement can break the palindrome, return the empty
string.

For equal-length strings, the lexicographically smaller one is the string
whose character is smaller at the first position where the two differ —
`"abb"` is smaller than `"abc"` because `'b' < 'c'` at their first
difference.

### Example 1

```text
Input: palindrome = "racecar"
Output: "aacecar"
Explanation: Dropping the leading 'r' to 'a' gives "aacecar". The mirrored
change on the final 'r' can never beat it, and every other single
replacement leaves a larger string.
```

### Example 2

```text
Input: palindrome = "noon"
Output: "aoon"
Explanation: Changing the first 'n' to 'a' already breaks the match with
the final character, and no letter is smaller than 'a'.
```

### Example 3

```text
Input: palindrome = "zz"
Output: "az"
Explanation: The first 'z' falls to 'a', leaving "az" — no longer the same
in both directions.
```

### Example 4

```text
Input: palindrome = "e"
Output: ""
Explanation: A one-letter string stays a palindrome under any single
replacement, so the answer is the empty string.
```

### Constraints

- `1 <= palindrome.length <= 1000`
- `palindrome` consists of lowercase English letters.

## Hints

### Hint 1

A length-1 string is the only hopeless case; any longer palindrome has a
mirrored pair somewhere that one change can set out of step.

### Hint 2

A change in the first half always beats the same change at its mirror, and
lexicographic order rewards acting as far left as possible — so lower the
first character before the midpoint that is not already `'a'`.

### Hint 3

If that whole first half is `'a'`, nothing on the left can drop; instead
raise the final character to `'b'`, the smallest rise that still breaks
the mirror.
