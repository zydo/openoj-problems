# Equal-Ones Three-Way Splits

## Description

You are given a binary string `s`. Place two cut points inside it so
that `s` falls into three non-empty pieces `s1`, `s2`, and `s3`,
concatenated back in order (`s1 + s2 + s3 = s`). A placement is valid
when all three pieces contain the same number of `'1'` characters.
Count the valid placements and report the total modulo `10⁹ + 7`,
since it can grow very large.

### Example 1

```text
Input: s = "1001001"
Output: 9
Explanation: The ones occupy indices 0, 3, and 6, so every piece must
hold exactly one. The first cut may land on any of the three gaps
between the first and second one, the second cut on any of the three
gaps between the second and third one: 3 × 3 = 9 placements.
```

### Example 2

```text
Input: s = "10111"
Output: 0
Explanation: The string holds four ones in total, and four cannot be
shared equally among three pieces.
```

### Example 3

```text
Input: s = "00000"
Output: 6
Explanation: With no ones anywhere, every pair of distinct cut points
qualifies, and there are C(4, 2) = 6 such pairs:
"0|0|000"
"0|00|00"
"0|000|0"
"00|0|00"
"00|00|0"
"000|0|0"
```

### Constraints

- `3 <= s.length <= 10⁵`
- `s[i]` is either `'0'` or `'1'`.

## Hints

### Hint 1

If the total number of ones is not a multiple of three, no placement
can balance the pieces — the answer is immediately `0`.

### Hint 2

When the string contains no ones at all, the two cuts range freely
over the `n - 1` gaps between characters, so any pair of distinct gaps
works.

### Hint 3

Otherwise each piece must take exactly `total / 3` ones. The first cut
may slide anywhere across the zeros that follow the `k`-th one (where
`k = total / 3`), and the second cut across the zeros that follow the
`2k`-th one; multiply the two slide widths together.
