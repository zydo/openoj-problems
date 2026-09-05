# Scanning for Summits

## Description

A 0-indexed array mountain traces an elevation profile. Position i
counts as a summit when it sits strictly above both of its neighbors —
mountain[i] > mountain[i - 1] and mountain[i] > mountain[i + 1] — with
the added rule that the first and last positions of the array can never
be one.

Report the index of every summit. Any order is accepted; the judge here
lists them in increasing order.

### Example 1

```text
Input: mountain = [6, 2, 8, 8, 3]
Output: []
Explanation: The ends are excluded, index 1 sinks instead of rising,
and indices 2 and 3 tie at 8 — a tied high point does not stand strictly
above its right neighbor, so no position qualifies.
```

### Example 2

```text
Input: mountain = [1, 9, 2]
Output: [1]
Explanation: Index 1 is the only interior position, and its value 9
stands strictly above the 1 and the 2 on either side of it.
```

### Example 3

```text
Input: mountain = [4, 6, 4, 6, 4]
Output: [1, 3]
Explanation: Indices 1 and 3 each rise strictly above the values on
both sides of them.
```

### Constraints

- `3 <= mountain.length <= 100`
- `1 <= mountain[i] <= 100`

## Hints

### Hint 1

A single left-to-right pass over the interior indices suffices: position
i is a summit exactly when mountain[i] beats mountain[i - 1] and
mountain[i + 1] in the same breath.
