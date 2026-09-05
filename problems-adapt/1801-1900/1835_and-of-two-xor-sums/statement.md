# The AND Of Two XOR Sums

## Description

You are given two arrays of non-negative integers, `arr1` and `arr2`.

Form the collection of every pairwise bitwise `AND` — that is,
`arr1[i] & arr2[j]` for all index pairs `i` into `arr1` and `j` into
`arr2`. Return the XOR of the whole collection.

### Example 1

```text
Input: arr1 = [8,3,6], arr2 = [2,9]
Output: 9
Explanation: The XOR of arr2 is 2 ^ 9 = 11, so every pair value equals an
arr1 element ANDed with 11: 8, 3, 2. Their XOR is 8 ^ 3 ^ 2 = 9.
```

### Example 2

```text
Input: arr1 = [5,3], arr2 = [6,2]
Output: 4
Explanation: The pair values are 5&6 = 4, 5&2 = 0, 3&6 = 2, 3&2 = 2, and
4 ^ 0 ^ 2 ^ 2 = 4.
```

### Example 3

```text
Input: arr1 = [7], arr2 = [11]
Output: 3
Explanation: There is a single pair, 7 & 11 = 3.
```

### Constraints

- `1 <= arr1.length, arr2.length <= 10⁵`
- `0 <= arr1[i], arr2[j] <= 10⁹`

## Hints

### Hint 1

Bitwise `AND` distributes over XOR: check that `(x & y) ^ (x & z)`
equals `x & (y ^ z)` at every bit position.

### Hint 2

Apply that identity with one element of `arr1` fixed: all of its ANDs
against `arr2` fold into the single value `arr1[i] & (arr2[0] ^ arr2[1]
^ ...)`.

### Hint 3

Each remaining row now has the shape `arr1[i] & x`, where `x` is the XOR
of all of `arr2`. Folding the rows the same way collapses everything to
`x & (arr1[0] ^ arr1[1] ^ ...)` — the AND of the two arrays' XOR sums.
