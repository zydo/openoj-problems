# Quadratic Array Ordering

## Description

A nondecreasing integer array `nums` is given along with coefficients `a`,
`b`, and `c`. For each value `x` in `nums`, evaluate
`a * x² + b * x + c`, then return all resulting values in nondecreasing
order.

Use the fact that the input is already sorted. A quadratic bends upward when
`a` is positive, putting its largest values at the two outer ends of the
input; when `a` is negative, its smallest values lie at those ends instead.
Compare transformed values from both ends and write the appropriate extreme
to the output. If `a` is zero, the expression is linear and the same
end-to-end process still applies.

### Example 1

```text
Input: nums = [-3,-1,0,2,5], a = 1, b = -2, c = -3
Output: [-3,-3,0,12,12]
Explanation: Applying x² - 2x - 3 gives [12, 0, -3, -3, 12], which sorts to
the returned order.
```

### Example 2

```text
Input: nums = [-5,-2,1,4], a = -2, b = 3, c = 1
Output: [-64,-19,-13,2]
```

### Example 3

```text
Input: nums = [-3,0,2,6], a = 0, b = -3, c = 4
Output: [-14,-2,4,13]
Explanation: With no quadratic term, the transformed values come from a
linear expression.
```

### Constraints

- `1 <= nums.length <= 200`
- `-100 <= nums[i], a, b, c <= 100`
- `nums` is sorted in ascending order.

## Hints

### Hint 1

The transformed values trace a parabola when `a` is nonzero.

### Hint 2

The sign of `a` determines whether outer input values produce the largest
or the smallest transformed values.
