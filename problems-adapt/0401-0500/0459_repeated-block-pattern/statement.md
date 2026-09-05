# Repeated-Block Pattern

## Description

Given a string `s`, determine whether it consists of two or more complete
copies of a shorter block: `s` equals some prefix of itself repeated an
integer number of times.

Return `true` if that construction is possible, and `false` otherwise.

### Example 1

```text
Input: s = "abcabcabc"
Output: true
Explanation: The block `"abc"` repeated three times.
```

### Example 2

```text
Input: s = "ababac"
Output: false
```

### Example 3

```text
Input: s = "bbbb"
Output: true
Explanation: The single-character block `"b"` repeated four times.
```

### Constraints

- `1 <= s.length <= 10⁴`
- `s` consists of lowercase English letters.
