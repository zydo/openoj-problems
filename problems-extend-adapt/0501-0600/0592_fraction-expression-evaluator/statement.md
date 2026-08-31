# Fraction Expression Evaluator

## Description

Evaluate a string expression of fraction additions and subtractions and
return the result as a reduced fraction. An integer result is written with
denominator `1` (so `2` becomes `"2/1"`), and a positive leading term omits
its `+` sign.

### Example 1

```text
Input: expression = "-1/2+1/2"
Output: "0/1"
```

### Example 2

```text
Input: expression = "-1/2+1/2+1/3"
Output: "1/3"
```

### Example 3

```text
Input: expression = "1/3-1/2"
Output: "-1/6"
```

### Constraints

- Each fraction is `±numerator/denominator` with numerator and denominator
  in `[1, 10]`; the input holds between `1` and `10` fractions.
- The final numerator and denominator fit in a 32-bit signed integer.
