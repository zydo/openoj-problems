# Ordered Character Selection

## Description

Determine whether `s` can be produced from `t` by discarding zero or more
characters while keeping all characters that remain in the same relative
order. Return `true` when it can and `false` otherwise.

For instance, `"bdf"` can be selected from `"abcdef"`, but `"bad"` cannot:
after selecting `a`, the required `d` occurs too late to select `b` first.

### Example 1

```text
Input: s = "bdf", t = "abcdef"
Output: true
Explanation: Choosing the characters at positions 2, 4, and 6 of t forms bdf.
```

### Example 2

```text
Input: s = "bad", t = "abcdef"
Output: false
```

### Example 3

```text
Input: s = "", t = "z"
Output: true
Explanation: Selecting no characters is always possible.
```

### Constraints

- `0 <= s.length <= 100`
- `0 <= t.length <= 10⁴`
- `s` and `t` contain only lowercase English letters.

### Follow-up

If many candidate strings must be checked against one fixed `t`, what
preprocessing could make each query faster?
