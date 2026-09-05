# Balanced-Digit Multiples in a Range

## Description

You are given positive integers `low`, `high`, and `k`.

Call a number **balanced** when its even digits are exactly as many as its odd
digits — zeros count as even. Count the integers in `[low, high]` that are
both balanced and divisible by `k`.

### Example 1

```text
Input: low = 20, high = 40, k = 4
Output: 2
Explanation: The multiples of 4 in the range are 20, 24, 28, 32, 36, 40. Of
those, only 32 and 36 carry one odd and one even digit; 20, 24, 28 and 40 are
built from even digits alone.
```

### Example 2

```text
Input: low = 1, high = 30, k = 1
Output: 11
Explanation: With k = 1 divisibility is automatic, so every balanced number
counts: 10, 12, 14, 16, 18, 21, 23, 25, 27, 29 and 30 — in each of them the
final even digit (0, 2, 4, 6 or 8) offsets the odd one.
```

### Example 3

```text
Input: low = 7, high = 7, k = 7
Output: 0
Explanation: The range holds only 7, which k divides — but its lone digit is
odd, so the even and odd digit counts can never match.
```

### Constraints

- `0 < low <= high <= 10⁹`
- `0 < k <= 20`

## Hints

### Hint 1

Testing each number of the range individually cannot finish in time at these
bounds; the count has to decompose into two prefix counts.

### Hint 2

Let f(n) be the number of qualifying values in `[1, n]`; the answer is
`f(high) - f(low - 1)`.

### Hint 3

Walk the decimal digits of n carrying (position, still tight?, started?,
even-minus-odd so far, value mod k) and memoize the loose subproblems.
