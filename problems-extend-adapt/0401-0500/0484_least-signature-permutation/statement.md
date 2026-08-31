# Least Signature Permutation

## Description

Every permutation `perm` of the integers `1..n` induces a signature: a string
`s` of length `n - 1` where `s[i]` is `'I'` when `perm[i] < perm[i + 1]` and
`'D'` when `perm[i] > perm[i + 1]`.

Given a signature `s`, reconstruct the lexicographically smallest permutation
of `1..(len(s) + 1)` whose signature is exactly `s`.

### Example 1

```text
Input: s = "DD"
Output: [3,2,1]
Explanation: The only permutation of 1..3 that descends at both steps is
[3,2,1].
```

### Example 2

```text
Input: s = "DID"
Output: [2,1,4,3]
Explanation: This arrangement satisfies D, I, D in order, and no smaller
permutation of 1..4 has that signature.
```

### Constraints

- `1 <= s.length <= 10⁵`
- Each `s[i]` is `'I'` or `'D'`.