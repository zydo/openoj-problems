# Permutation Behind the XOR Chain

## Description

Take some ordering `perm` of the integers `1` through `n` (with `n`
always odd) and collapse every adjacent pair into one value, producing
an array `encoded` of length `n - 1` where `encoded[i] = perm[i] XOR
perm[i + 1]`. The first element of the ordering never appears on the
wire directly — only these pairwise combinations do. Reconstruct the
original ordering from `encoded`. Every input is built from an actual
ordering, and that ordering is the only one consistent with the data.

### Example 1

```text
Input: encoded = [5,2,1,7]
Output: [4,1,3,2,5]
Explanation: Pairing the output neighbors gives
[4 XOR 1, 1 XOR 3, 3 XOR 2, 2 XOR 5] = [5,2,1,7]
```

### Example 2

```text
Input: encoded = [5,6,2,7,4,6]
Output: [7,2,4,6,1,5,3]
```

### Example 3

```text
Input: encoded = [11,6,4,7,4,5,3,13]
Output: [8,3,5,1,6,2,7,4,9]
```

### Constraints

- `3 <= n < 10⁵`
- `n` is odd.
- `encoded.length == n - 1`

## Hints

### Hint 1

XOR together all values from `1` to `n`. Call the result `x` — you know
it without seeing any of the data.

### Hint 2

The odd length of the ordering matters. Consider what you get when you
XOR the entries of `encoded` at odd indices only.

### Hint 3

Those odd-index entries cover every element of the ordering except the
first one, so `perm[0] = x XOR encoded[1] XOR encoded[3] XOR
encoded[5] ...`.

### Hint 4

Once the head is known, each next element follows from the previous:
`perm[i] = perm[i - 1] XOR encoded[i - 1]`.
