# Prepend To Palindrome

## Description

You are given a string `s`. You may turn it into a palindrome by sticking
characters onto its front only — never inside, never at the end.

Return the shortest palindrome obtainable this way. There is always an
answer: in the worst case the whole string, reversed, goes in front.

### Example 1

```text
Input: s = "race"
Output: "ecarace"
Explanation: Prepending "eca" leaves "ecarace", which reads the same both
ways; nothing shorter can be built from "race" this way.
```

### Example 2

```text
Input: s = "ananab"
Output: "bananab"
Explanation: The first five characters, "anana", already form a palindrome,
so only the final "b" needs a mirror up front.
```

### Example 3

```text
Input: s = "deed"
Output: "deed"
Explanation: The input is already a palindrome; prepend nothing.
```

### Constraints

- `0 <= s.length <= 5 * 10^4`
- `s` holds lowercase English letters only.

## Hints

### Hint 1

Characters go on the front only, so the tail of `s` never moves. Which part
of `s` can stay exactly as it is?

### Hint 2

The answer keeps the longest prefix of `s` that already reads the same both
ways; everything after it is mirrored onto the front.

### Hint 3

A prefix of `s` that is a palindrome is also a suffix of the reversed
string. Feed `s + "#" + reversed(s)` to a KMP prefix function (or use
Manacher) and read the palindromic prefix length off the last entry —
linear time.

### Hint 4

Once that prefix length is known, the prepended part is just the remainder
of `s`, reversed.
