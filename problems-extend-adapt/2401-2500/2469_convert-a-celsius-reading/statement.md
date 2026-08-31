# Convert a Celsius Reading

## Description

You are given a non-negative Celsius temperature `celsius` as a floating
point number rounded to two decimal places.

Convert it into its Kelvin and Fahrenheit equivalents and return them as a
two-element array `[kelvin, fahrenheit]`, in that order.

Answers within `10⁻⁵` of the expected values are accepted.

The two conversions are:

- Kelvin = Celsius + 273.15
- Fahrenheit = Celsius * 1.80 + 32.00

### Example 1

```text
Input: celsius = 0.0
Output: [273.15, 32.0]
Explanation: 0 °C is the freezing point: 0 + 273.15 = 273.15 K and
0 * 1.80 + 32.00 = 32.0 °F.
```

### Example 2

```text
Input: celsius = 100.0
Output: [373.15, 212.0]
Explanation: 100 °C is the boiling point: 100 + 273.15 = 373.15 K and
100 * 1.80 + 32.00 = 212.0 °F.
```

### Example 3

```text
Input: celsius = 25.5
Output: [298.65, 77.9]
Explanation: 25.5 + 273.15 = 298.65 K and
25.5 * 1.80 + 32.00 = 45.90 + 32.00 = 77.90 °F.
```

### Constraints

- `0 <= celsius <= 1000`

## Hints

### Hint 1

Apply the two conversion formulas from the statement directly, once each.

### Hint 2

Pack the Kelvin result first and the Fahrenheit result second into the
returned array.
