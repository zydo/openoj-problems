# One Frequency for Every Letter

## Description

Call a string `s` balanced when every letter that occurs in it occurs
exactly the same number of times — one shared frequency across all the
letters that show up.

Given a string `s`, report whether `s` is balanced.

### Example 1

```text
Input: s = "xyzxyz"
Output: true
Explanation: the letters 'x', 'y', and 'z' each appear twice, so one
frequency covers them all.
```

### Example 2

```text
Input: s = "mississippi"
Output: false
Explanation: 'i' occurs 4 times but 'm' occurs once, so the frequencies
disagree.
```

### Example 3

```text
Input: s = "aabbccdd"
Output: true
Explanation: each of the four letters appears exactly twice.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

Tally how many times each distinct letter of `s` appears.

### Hint 2

The string is balanced exactly when all the non-zero tallies agree —
collecting the tallies into a set leaves a single value.
