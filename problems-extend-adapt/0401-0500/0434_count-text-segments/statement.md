# Count Text Segments

## Description

A segment is a maximal run of non-space characters. Given a string `s`,
return how many segments it contains.

### Example 1

```text
Input: s = "  one two  three "
Output: 3
Explanation: The segments are "one", "two", and "three"; leading,
trailing, and repeated spaces form no segment.
```

### Example 2

```text
Input: s = "hello"
Output: 1
```

### Example 3

```text
Input: s = ""
Output: 0
```

### Constraints

- `0 <= s.length <= 300`
- `s` consists of lowercase and uppercase English letters, digits, or one
  of the characters `"!@#$%^&*()_+-=',.:"`.
- The only whitespace character in `s` is `' '`.
