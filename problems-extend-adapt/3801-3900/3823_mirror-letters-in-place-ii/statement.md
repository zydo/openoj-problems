# Mirror Letters in Place II

## Description

A string `s` is built from two kinds of characters: lowercase English
letters, and the special characters `"!@#$%^&*()"`.

Perform two flips, in this order:

- Flip the sequence of letters: the letters, read across the positions that
  hold letters, are reversed within those positions.
- Flip the sequence of special characters: the specials, read across the
  positions that hold specials, are reversed within those positions.

Every character stays within the kind of position it started in. Return the
string once both flips are done.

### Example 1

```text
Input: s = "o@rem#h"
Output: "h#mer@o"
Explanation:
The letters, in order, are ['o', 'r', 'e', 'm', 'h']:

    Reversed, they read ['h', 'm', 'e', 'r', 'o']
    s becomes "h@mer#o"

The special characters, in order, are ['@', '#']:

    Reversed, they read ['#', '@']
    s becomes "h#mer@o"
```

### Example 2

```text
Input: s = "*!&()"
Output: ")(&!*"
Explanation: The string holds no letters, so the first flip does nothing.
Every position holds a special character, so the second flip reverses the
whole string.
```

### Example 3

```text
Input: s = "(@a@)"
Output: ")@a@("
Explanation: The single letter cannot change place, so it anchors the
middle. The special characters ['(', '@', '@', ')'] reverse to
[')', '@', '@', '('] around it.
```

### Constraints

- `1 <= s.length <= 100`
- `s` contains only lowercase English letters and characters from
  `"!@#$%^&*()"`.

## Hints

### Hint 1

Copy out just the letters, reverse that copy, and write it back over the
letter positions; nothing else moves.

### Hint 2

Letters and special characters never share a position, so the second flip
cannot undo the first. Run the same copy-reverse-writeback on the special
characters.
