# Strip Trailing Zeros

## Description

A positive integer arrives as a string of decimal digits. Peel off every
zero that hangs off its right end and return whatever is left, also as a
string. Zeros sitting between non-zero digits are not at the right end, so
they stay exactly where they are.

### Example 1

```text
Input: num = "9902400"
Output: "99024"
Explanation: Two zero digits sit at the right end. Removing both leaves
"99024", whose last digit is non-zero.
```

### Example 2

```text
Input: num = "10200"
Output: "102"
Explanation: The zero between 1 and 2 is interior and survives; only the
two zeros after the 2 are stripped.
```

### Example 3

```text
Input: num = "7"
Output: "7"
Explanation: The last digit is already non-zero, so the string is returned
untouched.
```

### Constraints

- `1 <= num.length <= 1000`
- `num` is made up of digit characters only.
- `num` is the decimal form of a positive integer, so it never starts with
  a zero.

## Hints

### Hint 1

Locate the rightmost digit that is not zero; the answer is the prefix that
ends there.
