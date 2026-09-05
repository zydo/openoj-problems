# One-To-One Character Mapping

## Description

You are given two strings `s` and `t` of equal length. Decide whether there
is a character substitution that turns `s` into `t`.

The substitution must be a consistent, one-to-one mapping: every occurrence
of a given character in `s` is replaced by the same character, distinct
characters in `s` are never replaced by the same character, and a character
is allowed to map to itself. Return `true` when such a mapping exists,
`false` otherwise.

### Example 1

```text
Input: s = "abca", t = "xyzx"
Output: true
Explanation: Map 'a'->'x', 'b'->'y', 'c'->'z'. Every occurrence of a
character in s lands on the same character of t, and no two characters of
s share a target.
```

### Example 2

```text
Input: s = "foo", t = "bar"
Output: false
Explanation: The two occurrences of 'o' in s would have to map to both 'a'
and 'r', which is not a single consistent replacement.
```

### Example 3

```text
Input: s = "ab", t = "cc"
Output: false
Explanation: 'a' and 'b' are distinct characters in s, but both would have
to map to 'c' — two characters sharing one target is not allowed.
```

### Constraints

- `1 <= s.length <= 5 * 10⁴`
- `t.length == s.length`
- `s` and `t` consist of any valid ascii character.
