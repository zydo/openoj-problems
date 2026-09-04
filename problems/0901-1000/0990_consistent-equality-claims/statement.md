# Consistent Equality Claims

## Description

You are given a list `equations` of claims about 26 one-letter variables,
named `'a'` through `'z'`. Every claim is a 4-character string of one of
two shapes: `"xi==yi"`, asserting the two variables hold the same value,
or `"xi!=yi"`, asserting they hold different ones. Both positions may even
name the same variable.

Decide whether some assignment of integers to the variables can honor
every claim at once. Return `true` when such an assignment exists and
`false` when the claims contradict each other.

### Example 1

```text
Input: equations = ["c==d","d==e","e!=c"]
Output: false
Explanation: The two equalities force c, d, and e to share one value,
which the last claim forbids for c and e.
```

### Example 2

```text
Input: equations = ["a!=b","b!=c","c!=a"]
Output: true
Explanation: Assigning a = 1, b = 2, and c = 3 satisfies all three
inequalities.
```

### Example 3

```text
Input: equations = ["f==g","g==f","f!=h","h!=g"]
Output: true
Explanation: Taking f = g = 1 and h = 2 satisfies every claim.
```

### Constraints

- `1 <= equations.length <= 500`
- Every claim is exactly 4 characters long.
- Position `0` holds a lowercase letter and position `3` holds a lowercase
  letter.
- Position `1` is `'='` when the claim is an equality and `'!'` when it is
  an inequality.
- Position `2` is always `'='`.
