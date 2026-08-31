# Balance the Equation

## Description

You are given a linear equation in a single variable `x`, written as one
string `equation`. Every term is either a bare integer or an integer
coefficient directly followed by `'x'` (a lone `'x'` means coefficient
`1`), terms are joined by `'+'` or `'-'`, and the two sides of the
equation are separated by exactly one `'='`.

Solve for `x` and report it as the string `"x=#value"`, where `#value`
is the resolved integer (for example `"x=2"`). Two special outcomes are
possible instead: report `"No solution"` if no value of `x` satisfies
the equation, and `"Infinite solutions"` if every value of `x` does.

Whenever the equation resolves to exactly one value, that value is
guaranteed to be an integer.

### Example 1

```text
Input: equation = "4x-1-2x=x+8-3x-1"
Output: "x=2"
```

### Example 2

```text
Input: equation = "2x+1=2x+5"
Output: "No solution"
```

### Example 3

```text
Input: equation = "x-x=0"
Output: "Infinite solutions"
```

### Constraints

- `3 <= equation.length <= 1000`
- `equation` contains exactly one `'='`.
- Every integer appearing in `equation` has absolute value at most `100`
  and no leading zero.
- If the equation has a single solution, that solution is an integer.
