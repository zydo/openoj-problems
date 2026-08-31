# Wraparound Substring Count

## Description

The *wraparound alphabet* is the endless string that repeats the alphabet in
order, `z` wrapping back to `a`:

```text
"...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd..."
```

Given a string `s`, count the distinct non-empty substrings of `s` that also
occur in the wraparound alphabet.

### Example 1

```text
Input: s = "xyz"
Output: 6
Explanation: The substrings of xyz that live in the wraparound alphabet are
x, y, z, xy, yz, and xyz.
```

### Example 2

```text
Input: s = "abca"
Output: 6
Explanation: All letters already appear in the alphabet, and the two
consecutive runs ab and bc each contribute their suffixes; the second a adds
nothing new.
```

### Example 3

```text
Input: s = "abc"
Output: 6
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists only of lowercase English letters.
