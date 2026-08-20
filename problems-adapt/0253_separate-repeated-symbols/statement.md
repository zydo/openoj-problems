# Separate Repeated Symbols

## Description

Rearrange the lowercase letters of `text` so that equal letters never occupy
neighboring positions. Return an empty string when no such arrangement
exists.

When multiple arrangements are valid, return the canonical one built as
follows:

1. Order distinct letters by decreasing frequency, breaking ties
   alphabetically.
2. Place their copies into indices `0, 2, 4, ...`, then continue at indices
   `1, 3, 5, ...`.

### Example 1

```text
Input: text = "bbcca"
Output: "bcbac"
Explanation: b and c tie for the highest frequency, so b is placed first.
The even-then-odd placement yields the required canonical arrangement.
```

### Example 2

```text
Input: text = "ddddxy"
Output: ""
Explanation: Four copies of d cannot be separated by the other two letters.
```

### Constraints

- `1 <= text.length <= 500`
- `text` contains only lowercase English letters.

## Hints

### Hint 1

Count the letters before choosing positions.

### Hint 2

An arrangement exists exactly when the largest frequency is at most
`(n + 1) // 2`.

### Hint 3

Filling even indices before odd indices leaves a slot between repeated copies
of each high-frequency letter.
