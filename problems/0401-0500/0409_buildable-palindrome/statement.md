# Buildable Palindrome

## Description

Given a string `s` of English letters (uppercase and lowercase), find the
length of the longest palindrome you can assemble by rearranging (and, if
wanted, discarding) its characters.

Case matters: `'A'` and `'a'` are different letters, so `"Aa"` is not a
palindrome.

### Example 1

```text
Input: s = "aa"
Output: 2
Explanation: The whole string is already the palindrome "aa".
```

### Example 2

```text
Input: s = "abc"
Output: 1
Explanation: At most one character can serve as the palindrome's center.
```

### Example 3

```text
Input: s = "aA"
Output: 1
Explanation: The two letters differ in case, so they cannot be paired.
```

### Constraints

- `1 <= s.length <= 2000`
- `s` consists of lowercase and/or uppercase English letters only.
