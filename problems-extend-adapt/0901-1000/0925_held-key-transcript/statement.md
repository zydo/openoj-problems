# Held-Key Transcript

## Description

A keyboard logs one character per registered keystroke. While typing, a key
can be held down a moment too long, and then that single keystroke registers
as two or more consecutive copies of its character instead of one.

You are given the intended word `name` and the transcript `typed`. Return
`true` if `typed` could be the transcript produced by typing `name` when
some keystrokes — possibly none — were held long enough to register extra
copies, and `false` otherwise.

### Example 1

```text
Input: name = "noor", typed = "nooor"
Output: true
Explanation: The first `o` registered three times; holding that one key
turns `noor` into `nooor`.
```

### Example 2

```text
Input: name = "zoe", typed = "zzoea"
Output: false
Explanation: The trailing `a` matches nothing — a held key repeats a
character that was typed, it never contributes a new one.
```

### Example 3

```text
Input: name = "mira", typed = "mra"
Output: false
Explanation: The `i` never registered at all. Held keys only duplicate
characters, so a keystroke that was skipped leaves the word unrecoverable.
```

### Constraints

- `1 <= name.length, typed.length <= 1000`
- `name` and `typed` consist only of lowercase English letters.
