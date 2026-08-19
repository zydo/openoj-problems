# Nearest Sorted Window

## Description

From the ascending array `arr`, select the `k` values nearest to `x` and
return them in ascending order.

Value `a` ranks ahead of `b` when `|a - x|` is smaller, or when the distances
are equal and `a` is smaller.

### Example 1

```text
Input: arr = [-8,-3,0,4,9,13], k = 3, x = 5
Output: [0,4,9]
```

### Example 2

```text
Input: arr = [2,2,6,10], k = 2, x = 4
Output: [2,2]
Explanation: All of 2, 2, and 6 are equally distant, so the smaller values win.
```

### Constraints

- `1 <= k <= arr.length <= 10^4`
- `arr` is sorted in ascending order.
- `-10^4 <= arr[i], x <= 10^4`

## Hints

### Hint 1

The selected values always occupy one contiguous window of length `k`.

### Hint 2

Binary-search the window start by comparing `x - arr[mid]` with
`arr[mid + k] - x`.

### Hint 3

On equal distances, keep the earlier window to enforce the smaller-value tie
rule.
