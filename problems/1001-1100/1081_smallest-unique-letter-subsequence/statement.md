# Smallest Unique-Letter Subsequence

## Description

Pick out a subsequence of the string `s` in which every distinct letter
of `s` shows up exactly once. Among all such subsequences, return the
one that is lexicographically smallest.

### Example 1

```text
Input: s = "zxyxzy"
Output: "xyz"
Explanation: The three distinct letters x, y, and z must each appear
once, and copies of them can be chosen in alphabetical order.
```

### Example 2

```text
Input: s = "abacbdc"
Output: "abcd"
Explanation: "abcd" is itself a subsequence of `s`, and no arrangement
of the four distinct letters sorts before it.
```

### Example 3

```text
Input: s = "qqqzqq"
Output: "qz"
Explanation: Both orders "qz" and "zq" can be formed, and "qz" is the
smaller string.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

Sweep `s` while keeping the current answer on a stack. Before pushing a
letter, note where each letter last occurs: a larger letter sitting on
top of the stack can still be popped and re-added later, but only if it
shows up again somewhere ahead — otherwise it is stuck for good.
