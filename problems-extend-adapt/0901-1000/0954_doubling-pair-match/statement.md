# Doubling Pair Match

## Description

The array `arr` holds an even number of integers. Your task is to decide
whether its entries can be rearranged so that, read as consecutive pairs,
every pair `(x, y)` satisfies `y = 2 * x`: the second entry is exactly
twice the first. Return `true` if some ordering achieves this, and
`false` otherwise.

The relation is sign-aware — doubling moves away from zero without
crossing it, so `-2` must be paired with `-4`, and a positive value can
never pair with a negative one. Zero is its own double, so zeros can only
pair with other zeros.

### Example 1

```text
Input: arr = [2,4,1,2]
Output: true
Explanation: One 2 pairs with the 1, and the other 2 pairs with the 4:
arranged as [1,2,2,4] every pair reads (x, 2 * x).
```

### Example 2

```text
Input: arr = [-4,-2,-2,6]
Output: false
Explanation: Each -2 needs a -4 as its double, but only one -4 exists, so
a -2 is left over; the 6 likewise has no 3 or 12 to pair with.
```

### Example 3

```text
Input: arr = [0,0,5,10]
Output: true
Explanation: The two zeros pair with each other and 5 doubles to 10,
giving [0,0,5,10].
```

### Example 4

```text
Input: arr = [4,4,8,16]
Output: false
Explanation: Both 4s would need an 8 to double into, but the array holds
only one 8, so no complete pairing exists.
```

### Constraints

- `2 <= arr.length <= 3 * 10⁴`
- `arr.length` is even.
- `-10⁵ <= arr[i] <= 10⁵`
