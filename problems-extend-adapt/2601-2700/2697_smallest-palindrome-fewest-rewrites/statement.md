# Smallest Palindrome, Fewest Rewrites

## Description

You are given a string `s` of lowercase English letters. One operation
replaces any single character of `s` with another lowercase English
letter.

Turn `s` into a palindrome at the lowest possible operation count. Among
every palindrome reachable at that minimum cost, output the
lexicographically smallest one.

(For two strings of equal length, the smaller is the one holding the
earlier alphabet letter at the first position where they differ.)

Return the palindrome you end up with.

### Example 1

```text
Input: s = "mnxm"
Output: "mnnm"
Explanation: Only the pair 'n' and 'x' disagrees, so one rewrite is
enough; changing 'x' into 'n' yields the smallest possible result.
```

### Example 2

```text
Input: s = "operator"
Output: "ooeaaeoo"
Explanation: All four mirrored pairs disagree, so four rewrites are
forced no matter what. Rewriting each pair to its smaller letter — o,
o, e, a working from the outside in — is both minimal and smallest.
```

### Example 3

```text
Input: s = "hgh"
Output: "hgh"
Explanation: The string is already a palindrome, so nothing needs to
change.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` consists of only lowercase English letters.

## Hints

### Hint 1

Forcing every character at index `i` to equal its partner at index
`length - i - 1` (0-based) always produces a palindrome.

### Hint 2

At a mismatched pair, rewriting toward the alphabetically earlier of the
two letters costs the same one operation and nudges the whole string
toward the smallest answer.
