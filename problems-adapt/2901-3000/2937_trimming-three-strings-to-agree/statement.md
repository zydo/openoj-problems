# Trimming Three Strings To Agree

## Description

Three strings are on the table: `s1`, `s2`, and `s3`. A single move
takes any one of the three and cuts off its last character. There is one
guardrail — a move may never reduce a string to nothing.

How few moves does it take until all three strings are identical? If no
amount of cutting can get them there, return `-1`.

### Example 1

```text
Input: s1 = "hello", s2 = "helm", s3 = "heap"
Output: 7
Explanation: All three start "he", but the third characters differ.
Cutting back to "he" takes 3 cuts from s1, 2 from s2, and 2 from
s3 — seven moves in total.
```

### Example 2

```text
Input: s1 = "xyz", s2 = "x", s3 = "xz"
Output: 3
Explanation: The first characters all match, so cutting s1 back to "x"
costs 2 moves and s3 back to "x" costs 1, for 3 moves. s2 needs none.
```

### Example 3

```text
Input: s1 = "cat", s2 = "dog", s3 = "cow"
Output: -1
Explanation: The opening characters of s1 and s2 already disagree, and
a first character can never be removed. Agreement is impossible.
```

### Constraints

- `1 <= s1.length, s2.length, s3.length <= 100`
- `s1`, `s2`, and `s3` contain only lowercase English letters.

## Hints

### Hint 1

Whatever the three strings end up as, each is a prefix of what it
started as — and the guardrail means that shared prefix must be
non-empty.

### Hint 2

So measure the longest common prefix of the three strings; every
character past it in each string is one forced cut.
