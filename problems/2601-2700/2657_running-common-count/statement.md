# Running Common Count

## Description

You are given two integer permutations `A` and `B`, both of length `n`.
A sequence is a permutation when it holds every value from `1` through
`n` exactly once.

For each index `i`, look at the values appearing in `A[0..i]` and in
`B[0..i]` and count how many values belong to both slices. Stack those
counts into an array `C`, where `C[i]` is the count for index `i`, and
return `C`.

### Example 1

```text
Input: A = [2,1,3], B = [1,2,3]
Output: [0,2,3]
Explanation: At i = 0 the prefixes hold 2 and 1, with nothing shared, so
C[0] = 0. At i = 1 both prefixes hold 1 and 2, so C[1] = 2. At i = 2 the
value 3 joins them, so C[2] = 3.
```

### Example 2

```text
Input: A = [1,2,3,4], B = [4,3,2,1]
Output: [0,0,2,4]
Explanation: The arrays meet in opposite orders: the first two prefixes
share nothing, i = 2 shares 2 and 3, and by i = 3 all four values are
common.
```

### Example 3

```text
Input: A = [1], B = [1]
Output: [1]
Explanation: A single shared value makes C[0] = 1 immediately.
```

### Constraints

- `1 <= A.length == B.length == n <= 50`
- `1 <= A[i], B[i] <= n`
- `A` and `B` are each guaranteed to be a permutation of `n` integers.

## Hints

### Hint 1

Track, for every value seen so far, how many of the two arrays it has
shown up in.

### Hint 2

Because both arrays are permutations, a value can only reach a count of
two by appearing once in each — and that moment is exactly when it
becomes common.
