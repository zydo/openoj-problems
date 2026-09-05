# Cross-Split Palindrome

## Description

You are given two strings `a` and `b` of equal length. Pick one index
and cut **both** strings there: `a` comes apart into a head `ahead` and
a tail `atail` with `a = ahead + atail`, and `b` comes apart into
`bhead` and `btail` with `b = bhead + btail`.

Either piece of a cut may be empty. Cutting `"abc"` at index 0 leaves
the head `""` and the tail `"abc"`; cutting it at index 3 leaves the
head `"abc"` and an empty tail.

The cut index is shared by the two strings, and you get to pick which
of the two cross-combinations to judge. Return `true` if some cut
index makes at least one of `ahead + btail` and `bhead + atail` a
palindrome, and `false` if no index works for either combination.

### Example 1

```text
Input: a = "rotor", b = "level"
Output: true
Explanation: Both strings are already palindromes, so a cut at index
0 works: ahead = "" and btail = "level", and ahead + btail = "level"
is a palindrome.
```

### Example 2

```text
Input: a = "ababayz", b = "tttttba"
Output: true
Explanation: Cut at index 5: ahead = "ababa", atail = "yz", bhead =
"ttttt", btail = "ba". Then ahead + btail = "ababa" + "ba" =
"abababa", which is a palindrome.
```

### Example 3

```text
Input: a = "abcdef", b = "fedcba"
Output: true
Explanation: Cut at index 3: ahead = "abc" and btail = "cba", so
ahead + btail = "abccba", a palindrome.
```

### Example 4

```text
Input: a = "abcdefg", b = "hijklmn"
Output: false
Explanation: No cut index turns either cross-combination into a
palindrome, because the two strings share no matching character
pairs at their opposing ends.
```

### Constraints

- `1 <= a.length == b.length <= 10^5`
- `a` and `b` consist of lowercase English letters.

## Hints

### Hint 1

Ask which characters end up side by side at the outer ends of the
glued string. That pairing is fixed by the strings themselves — moving
the cut index inward or outward never changes it.

### Hint 2

Once the outer pairs stop matching, the leftover middle window has to
come entirely from one of the two strings, and it contributes to the
palindrome only if it is a palindrome on its own.
