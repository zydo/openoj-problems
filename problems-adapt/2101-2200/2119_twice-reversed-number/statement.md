# Twice-Reversed Number

## Description

Reversing an integer means flipping the order of all of its digits.

For example, reversing 2021 gives 1202, while reversing 12300 gives 321 —
leading zeros simply do not survive.

Take an integer `num`, reverse it once to get `reversed1`, then reverse that
again to get `reversed2`. Return true when `reversed2` is equal to `num`,
and false otherwise.

### Example 1

```text
Input: num = 704
Output: true
Explanation: Reversing once gives 407; reversing again gives 704, back to
the original value.
```

### Example 2

```text
Input: num = 260
Output: false
Explanation: Reversing once gives 62 — the trailing zero is gone — and a
second reversal gives 26, which differs from 260.
```

### Example 3

```text
Input: num = 1000000
Output: false
Explanation: Reversing once leaves 1, and reversing again still leaves 1.
```

### Constraints

- `0 <= num <= 10⁶`

## Hints

### Hint 1

Aside from zero itself, any value that ends in 0 sheds digits on the first
reversal — those digits can never come back.
