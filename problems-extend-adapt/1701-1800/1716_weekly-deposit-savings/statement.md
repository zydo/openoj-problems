# Weekly Deposit Savings

## Description

A saver puts money into a jar every single day for `n` days, following one
fixed plan. The first day is a Monday and the deposit is `$1`; each
following day within the same week deposits `$1` more than the day before.
Every new Monday the ladder restarts, opening one dollar higher than the
previous Monday did — the second week therefore runs `$2` through `$8`, the
third `$3` through `$9`, and so on.

Return the total amount in the jar after the `n`-th day.

### Example 1

```text
Input: n = 3
Output: 6
Explanation: The first three deposits are 1, 2, and 3 dollars, and
1 + 2 + 3 = 6.
```

### Example 2

```text
Input: n = 12
Output: 48
Explanation: The first week deposits 1 + 2 + ... + 7 = 28. The remaining
five days of the second week deposit 2 + 3 + 4 + 5 + 6 = 20, giving 48.
```

### Example 3

```text
Input: n = 29
Output: 159
Explanation: Four complete weeks contribute 28 + 35 + 42 + 49 = 154, and
day 29 — the Monday of the fifth week — adds one deposit of 5, for 159.
```

### Constraints

- `1 <= n <= 1000`

## Hints

### Hint 1

Writing `n` as `7w + r` splits the job into `w` finished weeks plus `r`
days of the current week, and each piece is a short arithmetic sum.

### Hint 2

Week `k` deposits `7(k+1) + 21` in total, so the finished weeks collapse
into one closed formula; the trailing `r` days of week `w` add
`r·w + r·(r+1)/2`.
