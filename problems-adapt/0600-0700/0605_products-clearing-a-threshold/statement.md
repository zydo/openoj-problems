# Products Clearing a Threshold

## Description

You are given two arrays of positive integers, `factors` (length `n`) and
`values` (length `m`), together with an integer `threshold`.

Pair an entry of `factors` with an entry of `values` and multiply them;
the pair clears the threshold when the product is at least `threshold`.

Return an array `counts` of length `n` in which `counts[i]` is the number
of entries in `values` whose product with `factors[i]` clears the
threshold.

### Example 1

```text
Input: factors = [4,2,6], values = [3,1,2,5], threshold = 12
Output: [2,0,3]
Explanation:
- factor 4: products are 12, 4, 8, 20 — two of them clear 12.
- factor 2: products are 6, 2, 4, 10 — none clears 12.
- factor 6: products are 18, 6, 12, 30 — three of them clear 12.
```

### Example 2

```text
Input: factors = [5], values = [3,3,3], threshold = 15
Output: [3]
Explanation: Every product is exactly 15, and "at least" includes
equality, so all three pairs clear the threshold.
```

### Example 3

```text
Input: factors = [2,10], values = [7,3], threshold = 21
Output: [0,2]
Explanation:
- factor 2: products are 14 and 6 — neither clears 21.
- factor 10: products are 70 and 30 — both clear 21.
```

### Constraints

- `n == factors.length`
- `m == values.length`
- `1 <= n, m <= 10^5`
- `1 <= factors[i], values[i] <= 10^5`
- `1 <= threshold <= 10^10`

## Hints

### Hint 1

Fix one factor. If a value pairs with it to clear the threshold, what
does that say about every larger value?

### Hint 2

Per factor, all you need is the smallest value that still clears —
everything at or above it clears too.

### Hint 3

Sort `values` once, then locate that boundary by binary search for each
factor.
