# Ranked Fraction from a Prime List

## Description

`values` is a strictly increasing array whose first element is `1` and whose
remaining elements are prime. For every pair of indices `i < j`, form the
proper fraction `values[i] / values[j]`.

Sort all such fractions by numeric value. Return the numerator and denominator
of the fraction at the one-based position `rank` as `[numerator, denominator]`.

### Example 1

```text
Input: values = [1,2,5,11], rank = 5
Output: [5,11]
Explanation: The ordered fractions are 1/11, 2/11, 1/5, 2/5, 5/11, and
1/2.
```

### Example 2

```text
Input: values = [1,3,7,13], rank = 6
Output: [7,13]
```

### Constraints

- `2 <= values.length <= 1000`
- `1 <= values[i] <= 3 * 10^4`
- `values[0] == 1`
- Every later value is prime.
- Values are distinct and strictly increasing.
- `1 <= rank <= values.length * (values.length - 1) / 2`

### Follow-up

Can you avoid explicitly generating all quadratic-many fractions?

## Hints

### Hint 1

Binary-search a fraction value between zero and one.

### Hint 2

For a fixed bound, two pointers can count in linear time how many candidate
fractions do not exceed it.

### Hint 3

While counting, retain the greatest actual fraction under the bound as the
candidate answer.
