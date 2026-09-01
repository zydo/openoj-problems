# Widest Pair Distance

## Description

You are given two integer arrays `arr1` and `arr2` of equal length. Read
each index `k` as the point `(arr1[k], arr2[k], k)`. The score of an index
pair `(i, j)` is

```text
|arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|
```

Return the largest score any pair reaches, with both indices ranging over
`0 <= i, j < arr1.length`.

### Example 1

```text
Input: arr1 = [3,-1,7], arr2 = [2,8,-4]
Output: 21
Explanation: The pair `(i, j) = (1, 2)` scores
`|-1 - 7| + |8 - (-4)| + |1 - 2| = 21`, and no pair scores higher.
```

### Example 2

```text
Input: arr1 = [-6,0,4,9,-3], arr2 = [5,-8,2,7,1]
Output: 26
```

### Example 3

```text
Input: arr1 = [4,4,4], arr2 = [-2,-2,-2]
Output: 2
Explanation: Both arrays are constant, so only the index term contributes;
the farthest apart indices `0` and `2` give `2`.
```

### Constraints

- `2 <= arr1.length == arr2.length <= 4 * 10⁴`
- `-10⁶ <= arr1[i], arr2[i] <= 10⁶`

## Hints

### Hint 1

Drop the absolute values by expansion: `|A|` is the larger of `A` and
`-A`, so the score of a fixed pair is the largest of the eight sums built
by choosing a sign independently for each of the three differences.

### Hint 2

Every one of those eight sums splits as `f(i) - f(j)` for a linear
function `f(k) = ±arr1[k] ± arr2[k] ± k`. For one fixed sign pattern the
best pair is just the maximum of `f` minus its minimum, and one scan finds
both.
