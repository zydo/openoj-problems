# Palindrome Ready

## Description

You are given a string `s` made up of lowercase English letters. Determine
whether the letters of `s` can be rearranged into some order that reads the
same forward and backward, and return `true` if so, `false` otherwise.

### Example 1

```text
Input: s = "aabbccd"
Output: true
Explanation: The letters rearrange into "abcdcba", a palindrome.
```

### Example 2

```text
Input: s = "hello"
Output: false
```

### Example 3

```text
Input: s = "aabbc"
Output: true
```

### Constraints

- `1 <= s.length <= 5000`
- `s` consists of only lowercase English letters.

## Hints

### Hint 1

Think about the letter counts a palindrome of even length needs versus one
of odd length.

### Hint 2

Tally how many times each letter appears in `s`.

### Hint 3

A palindrome pairs up letters from the outside in. If every letter's count
is even, those pairs use up the whole string. What can a single letter with
an odd count do?
