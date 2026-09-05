# Largest Odd Prefix

## Description

The digits of one enormous number reach you as the string `num`.

Reading any contiguous run of those digits spells out an integer. Among
all the odd integers that can be read this way, return the one with the
greatest value, handed back as a string. If no run of digits ever reads
odd, return the empty string `""`.

### Example 1

```text
Input: num = "5148"
Output: "51"
Explanation: The only odd digit in the string is the `1`, so an odd run
must end there — the candidates are "5" and "51", and "51" is larger.
```

### Example 2

```text
Input: num = "24680"
Output: ""
Explanation: Every digit is even, so every run spells an even number.
```

### Example 3

```text
Input: num = "1000"
Output: "1"
Explanation: Any run that keeps the trailing zeros ends on an even
digit; cutting right after the `1` leaves the odd "1".
```

### Constraints

- `1 <= num.length <= 10⁵`
- Every character of `num` is a digit, and the string never starts
  with `0`.

## Hints

### Hint 1

With no leading zero ever present, a longer digit string always
outvalues a shorter one — that pins down where the winning run has to
begin.

### Hint 2

A number is odd exactly when its last digit is, so the whole search
collapses into finding one particular digit.
