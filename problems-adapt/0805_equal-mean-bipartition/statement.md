# Equal-Mean Bipartition

## Description

Given an integer array `values`, determine whether its elements can be divided
between two non-empty groups whose arithmetic means are equal. Every element
must belong to exactly one group.

The arithmetic mean of a group is its sum divided by its number of elements.

### Example 1

```text
Input: values = [2,3,5,7,8,9]
Output: true
Explanation: [2,7,8] and [3,5,9] both have mean 17/3.
```

### Example 2

```text
Input: values = [2,3,7,14,18]
Output: false
Explanation: No proper non-empty selection has the mean 44/5.
```

### Constraints

- `1 <= values.length <= 30`
- `0 <= values[i] <= 10⁴`

## Hints

### Hint 1

If both groups have the same mean, that value must also be the mean of the
entire array.

### Hint 2

For a selection of size `count`, its required sum is
`total * count / values.length`. Ignore sizes for which this is not an integer.

### Hint 3

At most 30 elements suggests splitting the input into two halves and
enumerating the subsets of each half.

### Hint 4

Group the sums from each half by subset size, then look for two sums that
combine to the required total for a candidate selection size.
