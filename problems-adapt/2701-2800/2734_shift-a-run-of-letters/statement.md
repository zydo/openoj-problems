# Shift A Run Of Letters

## Description

You are given a string `s` of lowercase English letters. You must apply
the following operation exactly once:

- Choose a non-empty substring and shift every letter inside it one step
  backward through the alphabet. The step wraps around at the front:
  `'b'` becomes `'a'`, and `'a'` wraps to `'z'`.

Return the lexicographically smallest string that can result.

### Example 1

```text
Input: s = "stamp"
Output: "rsamp"
Explanation: Shift the substring "st" (indices 0 through 1) one step back. Continuing past index 1 would wrap the 'a' at index 2 into a 'z'.
```

### Example 2

```text
Input: s = "azaza"
Output: "ayaza"
Explanation: The only helpful choice is the single letter 'z' at index 1, which becomes 'y'. Touching any 'a' only makes things worse.
```

### Example 3

```text
Input: s = "aaaa"
Output: "aaaz"
Explanation: Every letter is 'a', so any choice plants at least one 'z'. Wrapping only the last letter confines the damage to the far right.
```

### Example 4

```text
Input: s = "trick"
Output: "sqhbj"
Explanation: No letter is 'a', so shifting the entire string one step back is best.
```

### Constraints

- `1 <= s.length <= 3 * 10⁵`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

A shifted letter improves the string only where the letter is not `'a'`
— and the earliest differing position decides lexicographic order, so
the shift should begin at the first non-`'a'` letter.

### Hint 2

From that starting point, keep shifting through consecutive non-`'a'`
letters and stop at the next `'a'`. If the string is all `'a'`s, wrap
just the last letter.
