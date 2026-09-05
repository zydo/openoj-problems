# Split Brackets into Two Shallow Groups

## Description

A string made up only of `(` and `)` characters is called balanced when it
follows these rules:

- the empty string is balanced;
- whenever `A` and `B` are balanced, their concatenation `AB` is balanced;
- whenever `A` is balanced, the wrapped string `(A)` is balanced.

Every balanced string also has a nesting depth, defined in the same spirit:

- `depth("") = 0`
- `depth(AB) = max(depth(A), depth(B))` for balanced `A` and `B`
- `depth((A)) = 1 + depth(A)` for balanced `A`

You are given a balanced string `seq`. Deal its characters into two groups
`A` and `B`: each character of `seq` goes to exactly one group, each group
keeps the relative order its characters had in `seq`, and each group must
itself be balanced. Choose the split that makes the larger of `depth(A)`
and `depth(B)` as small as possible.

Report your split as an array whose length matches `seq`: write `0` in
every position whose character was dealt into `A`, and `1` in every
position whose character went into `B`. When several splits reach the same
minimum, you may return any of them.

### Example 1

```text
Input: seq = "(())()"
Output: [0,1,1,0,1,1]
Explanation: Positions 0 and 3 land in group A and spell `()`, while the
remaining positions land in group B and spell `()()`. Both groups have
depth 1, and no split of a string with nesting depth 2 can do better.
```

### Example 2

```text
Input: seq = "()(())(())"
Output: [0,0,0,1,1,0,1,0,0,1]
```

### Constraints

- `1 <= seq.length <= 10000`
