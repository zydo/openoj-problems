# Counting Printed Separator Marks II

## Description

You are given an integer `n`.

As in the first version, imagine writing down every integer from 1 through
`n` in standard number formatting: digits are grouped in threes from the
right and a comma — a separator mark — sits between neighboring groups, so
1000 prints as "1,000" and 1234567 as "1,234,567". The bound is far larger
now, and numbers with many digits print several marks each.

Return how many separator marks the whole write-out from 1 to `n` uses.

### Example 1

```text
Input: n = 87500
Output: 86501
Explanation: Every integer from 1000 through 87500 prints exactly one
mark and nothing smaller prints any, so the total is 87500 - 999 = 86501.
```

### Example 2

```text
Input: n = 3250000
Output: 5499002
Explanation: The integers 1000 through 999999 each show one mark — 999000
of them. The integers 1000000 through 3250000 each show two marks —
2250001 of them, contributing 4500002. The total is 999000 + 4500002 =
5499002.
```

### Example 3

```text
Input: n = 48000000000000
Output: 190998998999004
Explanation: The write-out crosses four groups: 999000 one-mark integers,
999000000 two-mark integers, 998000000000 three-mark integers, and
47000000000001 four-mark integers. Adding each group's size times its mark
count gives 190998998999004.
```

### Constraints

- `1 <= n <= 10¹⁵`

## Hints

### Hint 1

A number with `d` digits shows `(d - 1) / 3` marks, and the numbers with a
given digit length form a contiguous block, so the write-out splits into
blocks of equal mark counts.

### Hint 2

Walk the blocks `[10^(3k), 10^(3k+3) - 1]` starting at 1000; each whole
block contributes its size times its mark count, and the block containing
`n` is cut short there. The answer exceeds 32 bits, so 64-bit arithmetic
is required.
