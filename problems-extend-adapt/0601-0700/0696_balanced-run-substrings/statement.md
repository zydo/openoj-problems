# Balanced Run Substrings

## Description

You are given a binary string `s` made only of the characters `'0'` and
`'1'`. Count the non-empty substrings of `s` that consist of one solid run
of `0`'s and one solid run of `1`'s, back to back, whose lengths match
exactly — that is, every `0` in the substring sits together and every `1`
in the substring sits together, and the two runs are the same length.

A substring is counted once for every position it occurs at, so identical
substrings appearing at different offsets are each counted separately.

Return the total number of such substrings.

### Example 1

```text
Input: s = "001100"
Output: 4
Explanation: The 4 qualifying substrings are "01", "0011", "10", and "1100"
— each pairs an equal run of 0's against an equal run of 1's across one
boundary. "001100" itself does not count because it splits into three runs,
not two.
```

### Example 2

```text
Input: s = "00011000111"
Output: 7
Explanation: Reading the boundaries left to right: the "000"/"11" boundary
contributes "01" and "0011"; the "11"/"000" boundary contributes "10" and
"1100"; the "000"/"111" boundary contributes "01", "0011", and "000111".
That totals 2 + 2 + 3 = 7.
```

### Constraints

- `1 <= s.length <= 10⁵`
- Every character of `s` is `'0'` or `'1'`.

## Hints

### Hint 1

Work out how many valid substrings live inside `"111000"` alone, then inside
`"00111"` alone — then check whether their concatenation, `"11100000111"`,
just adds the two counts together.
