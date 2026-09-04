# Blending Two Strings II

## Description

Two strings `s1` and `s2` are given. Blend them into the shortest string
that still contains both of them as substrings — contiguous runs of
characters. When several blends tie for shortest, any one of them is
acceptable.

### Example 1

```text
Input: s1 = "abc", s2 = "bca"
Output: "abca"
Explanation:
The tail "bc" of "abc" doubles as the head of "bca", so gluing the two
strings together over that shared part yields "abca" — no shorter string
can hold both.
```

### Example 2

```text
Input: s1 = "xyz", s2 = "abc"
Output: "xyzabc"
Explanation:
Nothing in one string lines up with the other, so the only blend that
works is plain concatenation.
```

### Example 3

```text
Input: s1 = "abab", s2 = "ba"
Output: "abab"
Explanation:
"ba" already occurs inside "abab", so the longer string on its own is
the shortest blend.
```

### Constraints

- `1 <= s1.length <= 100`
- `1 <= s2.length <= 100`
- `s1` and `s2` consist of lowercase English letters only.

## Hints

### Hint 1

First ask whether one string already sits inside the other — if so, the
longer string is itself the answer.

### Hint 2

Otherwise the blend must glue the pair together: find the longest suffix
of either string that equals a prefix of the other, and overlap the two
over that part; the deeper of the two possible overlaps gives the
shortest result.
