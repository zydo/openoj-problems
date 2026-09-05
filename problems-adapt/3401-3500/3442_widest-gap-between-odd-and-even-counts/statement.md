# Widest Gap Between Odd And Even Counts

## Description

You are given a string `s` of lowercase English letters.

Count how often each letter occurs, then pick two distinct letters `a1` and
`a2` so that the gap `freq(a1) - freq(a2)` is as large as possible, where:

- `a1` occurs an odd number of times in `s`,
- `a2` occurs an even number of times in `s`.

Return that largest possible gap. It may be negative when every odd-count
letter is rarer than every even-count letter.

### Example 1

```text
Input: s = "ggggghh"
Output: 3
Explanation: The letter 'g' occurs 5 times, an odd count, and 'h' occurs
twice, an even count. The gap 5 - 2 = 3 is the widest available.
```

### Example 2

```text
Input: s = "pppqqqrr"
Output: 1
Explanation: The letters 'p' and 'q' each occur an odd 3 times and 'r'
occurs an even 2 times, so the best gap is 3 - 2 = 1.
```

### Example 3

```text
Input: s = "yzzzz"
Output: -3
Explanation: The only odd-count letter is 'y', occurring once, and the
only even-count letter is 'z', occurring 4 times, so the gap is 1 - 4 = -3.
```

### Constraints

- `3 <= s.length <= 100`
- `s` consists only of lowercase English letters.
- `s` contains at least one letter with an odd count and at least one with
  an even count.

## Hints

### Hint 1

Tally every letter in one pass; the answer only needs the largest odd
tally and the smallest even tally in that table.
