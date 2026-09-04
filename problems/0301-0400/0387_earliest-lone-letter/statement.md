# Earliest Lone Letter

## Description

Find the leftmost position in `s` whose character occurs nowhere else in the
string. Return that zero-based index, or return `-1` if every character has a
second occurrence.

### Example 1

```text
Input: s = "swiss"
Output: 1
Explanation: The `w` at index 1 appears once, while the earlier `s` repeats.
```

### Example 2

```text
Input: s = "aaccbbd"
Output: 6
```

### Example 3

```text
Input: s = "zzxx"
Output: -1
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists only of lowercase English letters.
