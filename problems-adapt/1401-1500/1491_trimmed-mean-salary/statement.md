# Trimmed Mean Salary

## Description

A payroll arrives as an array `salary` of distinct integers, where
`salary[i]` is what the `i`-th employee earns. Set aside the single
smallest and the single largest figure, and report the mean of everyone
who remains. An answer within `10⁻⁵` of the true value is accepted.

### Example 1

```text
Input: salary = [8500, 9200, 7300]
Output: 8500.00000
Explanation: The smallest and largest paychecks are 7300 and 9200, so
the mean is 8500 / 1 = 8500.
```

### Example 2

```text
Input: salary = [61000, 58000, 72000, 66000, 54000]
Output: 61666.66667
Explanation: Removing the extremes 54000 and 72000 leaves 61000, 58000
and 66000, whose mean is 185000 / 3 ≈ 61666.66667.
```

### Example 3

```text
Input: salary = [120000, 98000, 145000, 111000]
Output: 115500.00000
Explanation: Dropping 98000 and 145000 leaves 120000 and 111000, whose
mean is 231000 / 2 = 115500.
```

### Constraints

- `3 <= salary.length <= 100`
- `1000 <= salary[i] <= 10⁶`
- The values in `salary` are pairwise distinct.

## Hints

### Hint 1

One scan yields everything: the running total plus the smallest and
largest values seen. Subtract both extremes from the total and divide
by `n - 2`.
