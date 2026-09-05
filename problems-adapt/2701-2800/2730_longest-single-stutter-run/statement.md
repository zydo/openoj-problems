# The Longest Single-Stutter Run

## Description

You are given a string `s` whose characters are the digits `0` through `9`.

Call two neighboring characters a stutter when they are the same digit. A
string carries at most one stutter when either no two adjacent characters
are equal, or exactly one such neighboring pair is equal — `"2002"` and
`"54944"` each carry a single stutter, while `"1101234883"` carries two,
namely `11` and `88`.

Return the length of the longest substring of `s` that carries at most one
stutter.

### Example 1

```text
Input: s = "609566"
Output: 6
Explanation: The entire string qualifies — its only stutter is the trailing 66.
```

### Example 2

```text
Input: s = "8008008"
Output: 5
Explanation: Two 00 pairs occur, so at least one end has to go. Trimming to "08008" keeps a single stutter and length 5.
```

### Example 3

```text
Input: s = "31415926"
Output: 8
Explanation: No digit ever sits beside an equal one, so nothing needs to be cut.
```

### Constraints

- `1 <= s.length <= 50`
- `s` consists only of the digits `'0'`–`'9'`

## Hints

### Hint 1

The length cap is tiny. Slide a window across `s` while counting the
stutters inside it — the widest window whose count stays at one or below
is the answer.

### Hint 2

A stutter enters the window whenever the newly included character matches
its predecessor. When the count reaches two, shrink from the left until
the window's leftmost stutter is dropped.
