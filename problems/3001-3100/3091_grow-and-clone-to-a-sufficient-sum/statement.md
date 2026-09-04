# Grow And Clone To A Sufficient Sum

## Description

You start with the single-element array `nums = [1]` and are given a
positive integer `k`. As often as you like, you may perform either of
these moves:

- Pick one element and raise its value by 1.
- Pick one element and append an identical copy of it to the end of the
  array.

Return the fewest moves needed before the sum of the array's elements is
at least `k`.

### Example 1

```text
Input: k = 2
Output: 1
Explanation: one raise turns nums into [2], whose sum already meets the
target.
```

### Example 2

```text
Input: k = 7
Output: 4
Explanation: raise the element twice to reach [3], then clone it twice to
reach [3, 3, 3]. The sum 9 clears 7, and no three moves can build a sum
that large.
```

### Example 3

```text
Input: k = 24
Output: 8
Explanation: raise the element four times to [5], then clone it four
times to [5, 5, 5, 5, 5]. The sum 25 clears 24, and eight moves is the
best possible here.
```

### Constraints

- `1 <= k <= 10⁵`

## Hints

### Hint 1

Order the moves greedily: a raise performed after a clone can always be
moved before that clone without hurting anything, so some optimal plan
does every raise first and every clone last.

### Hint 2

Such a plan is described by just two numbers: the value `v` each element
ends at (costing `v - 1` raises) and how many copies `m` exist (costing
`m - 1` clones), for a sum of `m * v`. Try every `v` and count the clones
needed to clear `k`.
