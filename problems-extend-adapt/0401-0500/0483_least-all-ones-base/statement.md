# Least All-Ones Base

## Description

A positive integer `k >= 2` is an all-ones base for `n` when `n`, written in
base `k`, consists entirely of the digit `1`. For example, 15 in base 2 is
`1111`.

The integer `n` is supplied as a string, since it can be as large as `10¹⁸`.
Find the smallest base `k` for which `n` has an all-ones representation, and
return it as a string.

Every `n` has at least one such base: writing `n` as `11` in base `n - 1`
always works.

### Example 1

```text
Input: n = "15"
Output: "2"
Explanation: 15 in base 2 is `1111`, and no smaller base exists.
```

### Example 2

```text
Input: n = "121"
Output: "3"
Explanation: 121 in base 3 is `11111`, since 1 + 3 + 9 + 27 + 81 = 121.
```

### Constraints

- `n` is an integer in the range `[3, 10¹⁸]`.
- `n` has no leading zeros.