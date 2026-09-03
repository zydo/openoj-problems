# Counting Printed Separator Marks

## Description

You are given an integer `n`.

Imagine writing down every integer from 1 through `n` in standard number
formatting, where the digits are grouped in threes from the right and a
comma is placed between groups — so 1000 prints as "1,000" and 1234567 as
"1,234,567". Each of those commas is a separator mark.

Return how many separator marks the whole write-out from 1 to `n` uses.

### Example 1

```text
Input: n = 4711
Output: 3712
Explanation: Every integer from 1000 through 4711 has four digits and
prints with exactly one comma; nothing smaller prints any. That is
4711 - 999 = 3712 marked numbers, so 3712 marks in total.
```

### Example 2

```text
Input: n = 876
Output: 0
Explanation: No integer up to 876 reaches four digits, so no separator
mark is ever printed.
```

### Example 3

```text
Input: n = 25600
Output: 24601
Explanation: The marked integers are exactly 1000 through 25600, which is
25600 - 999 = 24601 integers, one mark each.
```

### Constraints

- `1 <= n <= 10⁵`

## Hints

### Hint 1

At this bound no integer ever needs two marks: a number shows a mark
exactly when it has four or more digits, and then it shows exactly one.

### Hint 2

So the answer is simply the count of integers in `[1000, n]` — a
subtraction that clamps at zero for small `n`.
