# Fewest Print Strokes

## Description

An unusual printer supports only two moves:

- It can lay down a single stroke of one repeated character.
- A stroke may start and end anywhere in the string, and it paints over
  whatever characters were already there.

Given a string `s`, return the smallest number of strokes needed to produce
it, starting from a blank page.

### Example 1

```text
Input: s = "xxxyyy"
Output: 2
Explanation: Stroke "xxx" first, then stroke "yyy".
```

### Example 2

```text
Input: s = "ccdcc"
Output: 2
Explanation: Stroke "ccccc" across the whole string first, then stroke "d"
over the middle position, covering the 'c' that was there.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists of lowercase English letters.
