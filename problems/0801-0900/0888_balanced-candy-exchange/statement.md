# Balanced Candy Exchange

## Description

Alice and Bob each own boxes of candy. `aliceSizes[i]` and `bobSizes[j]` give
the number of candies in one box held by the corresponding person. They must
exchange exactly one box each so that their totals become equal afterward.

Return `[a, b]`, where Alice gives a box containing `a` candies and Bob gives
one containing `b` candies. At least one valid exchange exists. If several
pairs work, choose the one with the smallest Alice box; use the smallest Bob
box only to break an Alice-box tie.

### Example 1

```text
Input: aliceSizes = [3,8], bobSizes = [4,5,6]
Output: [3,5]
```

### Example 2

```text
Input: aliceSizes = [1,6,10], bobSizes = [2,4,8,9]
Output: [1,4]
```

Both `[1,4]` and `[6,9]` balance the totals, so the required tie rule selects
`[1,4]`.

### Example 3

```text
Input: aliceSizes = [2,6], bobSizes = [1,3,8]
Output: [6,8]
```

### Constraints

- `1 <= aliceSizes.length, bobSizes.length <= 10⁴`
- `1 <= aliceSizes[i], bobSizes[j] <= 10⁵`
- Alice and Bob initially have different total candy counts.
- At least one valid exchange exists.
