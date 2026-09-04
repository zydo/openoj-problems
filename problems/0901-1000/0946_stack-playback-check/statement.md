# Stack Playback Check

## Description

Two arrays describe a possible use of a stack that begins empty. Values in
`pushed` must be pushed in their listed order, one at a time. At any point,
the current top may be popped. The values are distinct, and `popped` gives a
proposed order for those popped values.

Return `true` when some legal interleaving of these pushes and pops produces
exactly `popped`; otherwise return `false`.

### Example 1

```text
Input: pushed = [2,7,1,8], popped = [1,8,7,2]
Output: true
Explanation: Push 2, 7, and 1; pop 1; push and pop 8; then pop 7 and 2.
```

### Example 2

```text
Input: pushed = [2,7,1,8], popped = [1,2,8,7]
Output: false
Explanation: After popping 1, the 7 above 2 prevents 2 from being popped next.
```

### Constraints

- `1 <= pushed.length <= 1000`
- `0 <= pushed[i] <= 1000`
- All the elements of `pushed` are unique.
- `popped.length == pushed.length`
- `popped` is a permutation of `pushed`.
