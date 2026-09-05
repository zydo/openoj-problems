# Top Split Score

## Description

You are given a binary string `s` made only of the characters `'0'` and
`'1'`. Cut it into a non-empty left part and a non-empty right part.

The cut earns a score: count the `'0'` characters in the left part and
the `'1'` characters in the right part; their sum is the score. Different
cuts generally score differently.

Return the highest score any cut of `s` can earn.

### Example 1

```text
Input: s = "00110"
Output: 4
Explanation:
Every way of cutting s, with its score:
left = "0" and right = "0110", score = 1 + 2 = 3
left = "00" and right = "110", score = 2 + 2 = 4
left = "001" and right = "10", score = 2 + 1 = 3
left = "0011" and right = "0", score = 2 + 0 = 2
The best cut is "00" | "110".
```

### Example 2

```text
Input: s = "10100"
Output: 2
Explanation: The cut "1" | "0100" and the cut "10" | "100" both score
0 + 2 = 2 and 1 + 1 = 2; nothing does better.
```

### Example 3

```text
Input: s = "000"
Output: 2
Explanation: With no ones anywhere, a cut scores just the size of the
right part, which peaks when only the last character sits on the right.
```

### Constraints

- `2 <= s.length <= 500`
- `s` consists only of the characters `'0'` and `'1'`.

## Hints

### Hint 1

Know up front how many `'1'`s the whole string holds; that is exactly
what the right part starts with.

### Hint 2

Sweep the cut once from left to right, moving one character per step:
a `'0'` entering the left half raises the zero count, a `'1'` leaving
the right half lowers the one count. Track the best running sum.
