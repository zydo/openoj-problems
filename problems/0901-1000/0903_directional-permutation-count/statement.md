# Directional Permutation Count

## Description

Let `s` be a string of length `n` containing only `'I'` and `'D'`. Consider
permutations `perm` of every integer from `0` through `n`.

A permutation follows the direction pattern when each neighboring pair agrees
with the corresponding character:

- `'I'` at `s[i]` requires `perm[i] < perm[i + 1]`.
- `'D'` at `s[i]` requires `perm[i] > perm[i + 1]`.

Return the number of permutations that follow the pattern. Since the count
can be large, return it modulo `10⁹ + 7`.

### Example 1

```text
Input: s = "ID"
Output: 2
Explanation: The valid permutations of (0, 1, 2) are (0, 2, 1) and
(1, 2, 0).
```

### Example 2

```text
Input: s = "IID"
Output: 3
```

### Constraints

- `n == s.length`
- `1 <= n <= 200`
- `s[i]` is either `'I'` or `'D'`.
