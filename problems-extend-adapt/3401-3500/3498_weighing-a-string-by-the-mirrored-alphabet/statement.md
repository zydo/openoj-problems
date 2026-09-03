# Weighing A String By The Mirrored Alphabet

## Description

Score a lowercase string `s` against the mirrored alphabet, where `'a'`
mirrors to 26, `'b'` to 25, and so on down to `'z'` mirroring to 1.

Each character of `s` contributes its mirrored-alphabet value multiplied by
its 1-indexed position in the string, and the string's weight is the sum of
those contributions. Return the weight of `s`.

### Example 1

```text
Input: s = "cba"
Output: 152
Explanation: The contributions are 24 * 1 for 'c', 25 * 2 for 'b', and
26 * 3 for 'a' — 24 + 50 + 78 = 152.
```

### Example 2

```text
Input: s = "hello"
Output: 228
Explanation: 'h' mirrors to 19, 'e' to 22, 'l' to 15, and 'o' to 12, so the
weight is 19 * 1 + 22 * 2 + 15 * 3 + 15 * 4 + 12 * 5 = 228.
```

### Example 3

```text
Input: s = "zz"
Output: 3
Explanation: 'z' mirrors to 1, the smallest value, contributing 1 and then
2.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

One pass suffices: a character `c` at 1-indexed position `i` contributes
`(26 - (c - 'a')) * i` to the total.
