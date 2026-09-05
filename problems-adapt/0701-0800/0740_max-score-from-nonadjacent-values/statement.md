# Maximum Score from Nonadjacent Values

## Description

You are given a nonempty integer array `values`. Choose any set of distinct
values under this restriction: if value `v` is chosen, neither `v - 1` nor
`v + 1` may be chosen.

Choosing `v` awards `v` points for every occurrence of `v` in the array.
Return the largest score possible.

### Example 1

```text
Input: values = [2,2,4,4,5]
Output: 12
Explanation: Choose 2 and 4. They are not consecutive values, and their
combined score is 2 * 2 + 4 * 2 = 12.
```

### Example 2

```text
Input: values = [6,6,7,8,8,8]
Output: 36
Explanation: Choosing 6 and 8 scores 6 * 2 + 8 * 3 = 36. Choosing 7 would
prevent both neighboring values from being selected.
```

### Constraints

- `1 <= values.length <= 2 * 10^4`
- `1 <= values[i] <= 10^4`

## Hints

### Hint 1

Combine equal entries first: value `v` has a total weight of
`v * frequency(v)`.

### Hint 2

Process distinct values in sorted order while tracking the best score that
includes or excludes the previous value.

### Hint 3

Only consecutive distinct values conflict. A gap allows either previous
state to carry forward.
