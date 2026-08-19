# Longest No-Triple String

## Description

Build a string over the letters `'a'`, `'b'`, `'c'` subject to:

- no letter appears three times consecutively — `aaa`, `bbb`, `ccc` are
  forbidden substrings;
- `'a'` is used at most `a` times, `'b'` at most `b` times, `'c'` at most `c`
  times.

Return the longest string satisfying both rules. When several strings tie for
longest, any one of them is accepted.

### Example 1

```text
Input: a = 1, b = 6, c = 2
Output: "bbcbbabbc"
Explanation: All nine letters are used. The six b's appear in pairs, split by
the single a and the two c's, so no triple ever forms.
```

### Example 2

```text
Input: a = 5, b = 1, c = 1
Output: "aabaaca"
Explanation: Only two non-a letters exist to break up the a's, so the string
runs aa, then a break, aa, a break, aa — length 7 is the maximum.
```

### Example 3

```text
Input: a = 0, b = 2, c = 3
Output: "cbcbc"
Explanation: With no a's available, b and c must alternate; the string ends
when the two b's are spent.
```

### Constraints

- `0 <= a, b, c <= 100`
- `a + b + c > 0`

## Hints

### Hint 1

Think about what the letter with the largest budget forces: leaving it for
later only makes things worse, because the breakers it needs get burned
early.

### Hint 2

Append the letter with the largest remaining budget, unless it was just
appended twice — then take the runner-up. A single rule of "no third in a
row" is all the bookkeeping required.
