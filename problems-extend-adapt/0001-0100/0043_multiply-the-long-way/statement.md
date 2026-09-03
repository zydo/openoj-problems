# Multiply The Long Way

## Description

Two non-negative numbers arrive as digit strings, `num1` and `num2`. Work out
their product and return it as a digit string of the same kind.

The twist is what makes the task interesting: at up to 200 digits per operand,
the values dwarf every fixed-width integer type, and the rules forbid both
big-integer libraries and converting the inputs to numbers directly. The
multiplication has to be carried out digit by digit, the way it is done with
pencil and paper.

### Example 1

```text
Input: num1 = "77", num2 = "23"
Output: "1771"
```

Seventy-seven times twenty-three is one thousand seven hundred seventy-one.

### Example 2

```text
Input: num1 = "99999", num2 = "0"
Output: "0"
```

Anything times zero is zero, reported as the single digit `"0"` — never an
empty string or a padded run of zeros.

### Example 3

```text
Input: num1 = "123456789", num2 = "987654321"
Output: "121932631112635269"
```

Both operands are nine digits here and the product runs to eighteen; at the
constraint limit of 200 digits per operand, a product reaches 400 digits.

### Constraints

- `1 <= num1.length, num2.length <= 200`
- `num1` and `num2` contain only the digits `0` through `9`.
- Neither string starts with a zero; the sole exception is the string `"0"`
  on its own.
