# Complex Number Product

## Description

A complex number is written as a string in the form `"real+imaginaryi"`,
where:

- `real` is an integer in `[-100, 100]`.
- `imaginary` is an integer in `[-100, 100]`.
- `i² == -1`.

You are given two complex numbers, `num1` and `num2`, each in that string
form. Return their product, formatted the same way.

### Example 1

```text
Input: num1 = "3+2i", num2 = "1+-4i"
Output: "11+-10i"
Explanation: (3 + 2i) * (1 - 4i) = 3 - 12i + 2i - 8i² = (3 + 8) + (2 - 12)i =
11 - 10i, printed as 11+-10i.
```

### Example 2

```text
Input: num1 = "-5+7i", num2 = "2+2i"
Output: "-24+4i"
Explanation: (-5 + 7i) * (2 + 2i) = -10 - 10i + 14i + 14i² = (-10 - 14) +
(-10 + 14)i = -24 + 4i.
```

### Constraints

- `num1` and `num2` are each valid complex-number strings in the format
  above.
