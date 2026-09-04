# Farthest Pair Across Arrays

## Description

You receive `m` integer arrays, each already sorted in ascending order.
Choose one number from one array and one number from a different array. The
distance of values `a` and `b` is `|a - b|`.

Return the greatest distance obtainable under the different-arrays rule.

### Example 1

```text
Input: arrays = [[-10,-2],[0,4],[7,9]]
Output: 19
Explanation: Choosing -10 from the first array and 9 from the third gives the
largest valid distance.
```

### Example 2

```text
Input: arrays = [[1,10],[2,3]]
Output: 8
Explanation: The two endpoints 1 and 10 belong to the same array and cannot
be paired. Choosing 10 and 2 is optimal.
```

### Constraints

- `m == arrays.length`
- `2 <= m <= 10⁵`
- `1 <= arrays[i].length <= 500`
- `-10⁴ <= arrays[i][j] <= 10⁴`
- Every `arrays[i]` is sorted in ascending order.
- There are at most `10⁵` integers across all arrays.
