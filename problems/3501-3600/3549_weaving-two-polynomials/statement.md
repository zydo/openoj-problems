# Weaving Two Polynomials

## Description

Two integer arrays `poly1` and `poly2` each encode a polynomial: the entry
at index `i` is the coefficient sitting on `xⁱ`. Name the polynomials they
describe `A(x)` and `B(x)`.

Weave the two into their product. Return an integer array `result` of
length `poly1.length + poly2.length - 1` holding the coefficients of
`R(x) = A(x) * B(x)`, where `result[i]` is the coefficient of `xⁱ` in
`R(x)`.

### Example 1

```text
Input: poly1 = [2,0,1], poly2 = [3,1]
Output: [6,2,3,1]
Explanation: A(x) = 2 + x² and B(x) = 3 + x. Their product spreads each
term of A across the terms of B:
R(x) = (2 + x²) * (3 + x)
R(x) = 2 * 3 + 2 * x + x² * 3 + x² * x
R(x) = 6 + 2x + 3x² + x³
Thus, result = [6, 2, 3, 1].
```

### Example 2

```text
Input: poly1 = [-2,4], poly2 = [5,-1,3]
Output: [-10,22,-10,12]
Explanation: A(x) = -2 + 4x and B(x) = 5 - x + 3x².
R(x) = -2 * 5 + (-2 * -1 + 4 * 5)x + (4 * -1 + -2 * 3)x² + 4 * 3x³
R(x) = -10 + 22x - 10x² + 12x³
Thus, result = [-10, 22, -10, 12].
```

### Example 3

```text
Input: poly1 = [7], poly2 = [0,0,9]
Output: [0,0,63]
Explanation: A(x) is the constant 7, so multiplying shifts nothing and
scales every coefficient of B by 7: R(x) = 63x². Zero coefficients keep
their places, giving result = [0, 0, 63].
```

### Constraints

- `1 <= poly1.length, poly2.length <= 5 * 10⁴`
- `-10³ <= poly1[i], poly2[i] <= 10³`
- Each of `poly1` and `poly2` contains at least one non-zero coefficient.

## Hints

### Hint 1

The coefficient of `xᵏ` in the product collects one term from every pair
of indices `(i, j)` with `i + j = k` — in other words, the two arrays
convolve.

### Hint 2

Convolution done directly needs `poly1.length * poly2.length` pair
products, up to `2.5 * 10⁹` at these limits — too many.

### Hint 3

An FFT swaps convolution for pointwise multiplication: pad both arrays
with zeros to a common power-of-two length, transform each, multiply the
two spectra entry by entry, then transform back.

### Hint 4

Rounding the inverse transform is safe here — coefficients are bounded by
`10³` and lengths by `5 * 10⁴`, so the transform's floating-point error
stays far below the half-integer threshold.
