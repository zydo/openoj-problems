# The Kth Term Of The Lucky Sequence

## Description

The two lucky digits are 4 and 7, and a **lucky number** is a positive
integer written using nothing but them — 4, 7, 44, 47, 74, 77, and so on.
Ordering all lucky numbers by numeric value produces an infinite sequence
that starts 4, 7, 44, 47, 74, 77, 444, ...

Given an integer `k`, return the `k`th term of this sequence as a string.

### Example 1

```text
Input: k = 5
Output: "74"
Explanation: The sequence opens with 4, 7, 44, 47, 74, so the fifth term is
74.
```

### Example 2

```text
Input: k = 6
Output: "77"
Explanation: The two-digit block runs 44, 47, 74, 77 and finishes at the
sixth term.
```

### Example 3

```text
Input: k = 85
Output: "474774"
Explanation: Sixty-two lucky numbers have five or fewer digits, so the 85th
term is the 23rd six-digit entry; that entry is 474774.
```

### Constraints

- `1 <= k <= 10⁹`

## Hints

### Hint 1

There are exactly 2ⁿ lucky numbers with `n` digits, so the first `c` length
blocks together hold 2^(c+1) − 2 terms — enough to locate which block holds
term `k`.

### Hint 2

Once you know the term has `c` digits, subtract everything shorter to get
its zero-based rank `x` within that block.

### Hint 3

Within a block, increasing rank is just binary counting: pad `x` out to `c`
binary places, keeping any leading zeros.

### Hint 4

Read the padded binary string as digits — every 0 becomes a 4 and every 1
becomes a 7 — and the term falls out directly.
