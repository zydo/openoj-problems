# Longest Letter Block Seen Thrice II

## Description

Given a lowercase string `s`, call any of its substrings a _letter
block_ when that substring is made up of one single repeated character
— `"hh"` and `"q"` qualify, `"hq"` does not.

Find the length of the longest letter block that shows up at least three
times inside `s`. Occurrences may overlap each other, and they may sit
in different parts of the string. If no letter block appears three
times, return `-1`.

### Example 1

```text
Input: s = "aabaaab"
Output: 2
Explanation: The block "aa" occurs exactly three times — once in the
opening "aa" and twice inside the trailing "aaa". "aaa" occurs only
once, so 2 is the best.
```

### Example 2

```text
Input: s = "abcbda"
Output: -1
Explanation: No character occurs three times, so no letter block can.
```

### Example 3

```text
Input: s = "ggggggg"
Output: 5
Explanation: Seven copies of one letter: the block "ggg" fits three
times with room to spare, and even "ggggg" still fits at indices 0, 1,
and 2. "gggggg" only fits twice, so the answer is 5.
```

### Constraints

- `3 <= s.length <= 5 * 10⁵`
- `s` consists of only lowercase English letters.

## Hints

### Hint 1

Compress `s` into its maximal runs of equal characters; every letter
block lives inside one run.

### Hint 2

A run of length `r` contains exactly `r - L + 1` blocks of length `L`,
so what matters per character is only its few longest run lengths.

### Hint 3

For each character, keep its three longest runs: three blocks fit when
`L <= f1 - 2`, or when two fit in the longest and one in the second
(`L <= min(f1 - 1, f2)`), or when each of the three longest runs
contributes one (`L <= f3`).
