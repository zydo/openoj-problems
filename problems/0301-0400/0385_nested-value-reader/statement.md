# Nested Value Reader

## Description

A string `s` encodes either one integer or a list whose entries can themselves
be integers or recursively encoded lists. Decode `s` and return the matching
`NestedInteger` value.

Commas separate adjacent entries, and square brackets delimit each list.

### Example 1

```text
Input: s = "[7,-2,[5]]"
Output: [7,-2,[5]]
```

### Example 2

```text
Input: s = "-42"
Output: -42
```

### Example 3

```text
Input: s = "[[1],[2,3]]"
Output: [[1],[2,3]]
```

### Constraints

- `1 <= s.length <= 5 * 10⁴`
- `s` consists of digits, square brackets `[]`, the negative sign `-`, and
  commas `,`.
- `s` is a valid serialization of a `NestedInteger`.
- Every integer in `s` is in the range `[-10⁶, 10⁶]`.
