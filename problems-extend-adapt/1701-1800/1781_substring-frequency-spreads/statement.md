# Substring Frequency Spreads

## Description

Define the **frequency spread** of a string as the difference between the
highest and the lowest letter counts among the letters that actually occur
in it. For instance, `"aabbc"` has counts `a: 2, b: 2, c: 1`, so its
frequency spread is `2 - 1 = 1`. A string in which every present letter
occurs the same number of times — including any one-letter string — has a
frequency spread of `0`.

Given a string `s`, return the sum of the frequency spreads of all of its
contiguous substrings.

### Example 1

```text
Input: s = "abbccc"
Output: 10
Explanation: Non-uniform substrings such as "bcc" (b: 1, c: 2) contribute
1 each, and "bccc" (b: 1, c: 3) contributes 3 - 1 = 2; every uniform
substring contributes 0. The total over all substrings is 10.
```

### Example 2

```text
Input: s = "xyxy"
Output: 2
Explanation: "xyx" and "yxy" each spread 2 - 1 = 1, while "xyxy" contains
both letters twice and spreads 0.
```

### Example 3

```text
Input: s = "qqq"
Output: 0
Explanation: Every substring consists of one repeated letter, so all
spreads are 0.
```

### Constraints

- `1 <= s.length <= 500`
- `s` consists of only lowercase English letters.

## Hints

### Hint 1

Fix the left end of a substring and slide the right end one character at a
time. Each slide touches a single letter's counter, so a 26-entry count
table tracks the current substring cheaply.

### Hint 2

For the table in hand, the spread is its largest counter minus its smallest
nonzero counter — summing that quantity at every step covers every
substring exactly once per left end.
