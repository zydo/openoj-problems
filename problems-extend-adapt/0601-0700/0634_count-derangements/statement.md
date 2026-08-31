# Count Derangements

## Description

A derangement of a set is a permutation of its elements in which no
element ends up back in its own original position.

Start from the array `[1, 2, ..., n]`. Count how many derangements this
array has, and return that count modulo `10⁹ + 7` since it can grow very
large.

### Example 1

```text
Input: n = 4
Output: 9
Explanation: The array is [1,2,3,4]. One of its nine derangements is
[2,1,4,3], where every value has moved away from its original index.
```

### Example 2

```text
Input: n = 1
Output: 0
Explanation: The single element must always occupy its own position, so
there are no valid derangements.
```

### Constraints

- `1 <= n <= 10⁶`

## Hints

### Hint 1

Track where the first element ends up. It must land on one of the other
`n - 1` positions.

### Hint 2

Split on whether the element originally at that position swaps back into
the first slot, or moves somewhere else entirely — each case reduces to a
smaller derangement count.

### Hint 3

That split gives a recurrence connecting the count for `n` to the counts
for `n - 1` and `n - 2`, computable with a single pass and two running
values.
