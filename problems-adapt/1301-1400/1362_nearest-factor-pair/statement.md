# Nearest Factor Pair

## Description

Given an integer `num`, examine the two neighboring products `num + 1`
and `num + 2`. Each one splits into pairs of whole-number factors.
Return the pair of factors — from either product — whose two members
differ by the smallest amount.

The two integers may be reported in either order.

### Example 1

```text
Input: num = 12
Output: [2,7]
Explanation: `num + 1 = 13` is prime, splitting only as `1 & 13`, while
`num + 2 = 14` splits as `2 & 7`; the gap of 5 beats the gap of 12.
```

### Example 2

```text
Input: num = 1
Output: [1,2]
Explanation: `num + 1 = 2` splits as `1 & 2` and `num + 2 = 3` as
`1 & 3`; the tighter pair wins.
```

### Example 3

```text
Input: num = 1000000000
Output: [23658,42269]
```

### Constraints

- `1 <= num <= 10⁹`

## Hints

### Hint 1

Hunt for factors of `num + 1` and of `num + 2`, then keep the better
pair.

### Hint 2

A number's factors pair up around its square root, so a search that
stops at the square root finds every pair.
