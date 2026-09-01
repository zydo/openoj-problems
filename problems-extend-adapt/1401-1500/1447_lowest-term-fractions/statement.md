# Lowest-Term Fractions

## Description

Given an integer `n`, list every fraction strictly between 0 and 1
whose denominator is at most `n` and that is already in lowest terms —
no integer greater than 1 divides both its numerator and its
denominator.

The list may be produced in any order. For a deterministic judge, the
expected output enumerates the numerator in the outer loop and the
denominator in the inner one, exactly as the examples show.

### Example 1

```text
Input: n = 1
Output: []
Explanation: No fraction strictly between 0 and 1 can have a
denominator that small, so the list is empty.
```

### Example 2

```text
Input: n = 5
Output: ["1/2","1/3","1/4","1/5","2/3","2/5","3/4","3/5","4/5"]
```

### Example 3

```text
Input: n = 6
Output: ["1/2","1/3","1/4","1/5","1/6","2/3","2/5","3/4","3/5","4/5","5/6"]
Explanation: "2/4" and "3/6" are absent because each reduces to "1/2",
and "2/6" reduces to "1/3" — none of them is in lowest terms.
```

### Constraints

- `1 <= n <= 100`

## Hints

### Hint 1

A fraction is in lowest terms exactly when no integer greater than 1
divides both its numerator and its denominator.

### Hint 2

Pair every numerator with every larger denominator up to `n`, and keep
the pair when its greatest common divisor is 1.
