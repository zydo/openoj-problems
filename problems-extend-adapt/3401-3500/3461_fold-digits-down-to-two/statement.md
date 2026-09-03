# Fold Digits Down To Two

## Description

You are given a string `s` made entirely of digits. Fold it by repeating
the following step until only two digits remain:

- Read `s` as consecutive overlapping pairs — the first and second digits,
  the second and third, and so on.
- Each pair `(a, b)` produces the single digit `(a + b) mod 10`.
- `s` becomes the sequence of produced digits, in the order the pairs were
  read, so each fold shortens the string by exactly one.

Report whether the two digits that remain at the end are equal.

### Example 1

```text
Input: s = "777"
Output: true
Explanation: One fold turns "777" into "44" (each pair sums to 14, and
14 mod 10 is 4). The final two digits are equal.
```

### Example 2

```text
Input: s = "1829"
Output: false
Explanation: The first fold gives "901": (1+8) mod 10 = 9, (8+2) mod 10
= 0, (2+9) mod 10 = 1. The second fold gives "91": (9+0) mod 10 = 9,
(0+1) mod 10 = 1. Since 9 != 1, the answer is false.
```

### Example 3

```text
Input: s = "52137"
Output: false
Explanation: The folds run "52137" -> "7340" -> "074" -> "71", and the
final digits 7 and 1 differ.
```

### Constraints

- `3 <= s.length <= 100`
- `s` consists of digit characters only.

## Hints

### Hint 1

Each fold is a purely local rule over adjacent pairs, so applying it
straight from the definition — n - 2 folds at most — is already fast
enough.
