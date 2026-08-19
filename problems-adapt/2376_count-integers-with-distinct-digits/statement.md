# Count Integers With Distinct Digits

## Description

Call a positive integer distinct-digit when no decimal digit of it appears
more than once — 7, 42, and 1309 qualify, while 33 and 505 do not.

Given a positive integer `n`, count the distinct-digit integers in the range
`1` to `n`.

### Example 1

```text
Input: n = 25
Output: 23
Explanation: Every integer from 1 to 25 is distinct-digit except 11 and 22,
so the count is 25 - 2 = 23.
```

### Example 2

```text
Input: n = 105
Output: 94
Explanation: The one- and two-digit numbers contribute 90: every one of them
qualifies. From 100 on, only 102, 103, 104, and 105 qualify — 100 and 101
repeat a 0 or a 1 — for 94 in all.
```

### Example 3

```text
Input: n = 1210
Output: 801
Explanation: All 738 numbers below 1000 with no repeated digit count, plus
the four-digit candidates up to 1210: those starting 10.. give 56, and those
starting 120 give 7, for a total of 801.
```

### Constraints

- `1 <= n <= 2 * 10⁹`

## Hints

### Hint 1

Separate the count by digit length: any number with fewer digits than `n`
is already below `n`.

### Hint 2

How many `k`-digit numbers use no digit twice? The first digit has nine
options, and each later digit is an ordered pick from what is left.

### Hint 3

For numbers with exactly as many digits as `n`, walk `n` from its leading
digit, keeping the prefix identical to `n`'s and remembering which digits
that prefix has consumed.
