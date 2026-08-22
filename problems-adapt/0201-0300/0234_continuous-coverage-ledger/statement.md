# Continuous Coverage Ledger

## Description

Build a ledger that maintains which real-number positions are covered. Every
operation uses a half-open span `[start, end)`, containing positions `x` with
`start <= x < end`.

Implement the `CoverageLedger` class:

- `CoverageLedger()` creates an empty ledger.
- `void addSpan(int start, int end)` marks the entire span as covered.
  Previously covered portions remain covered.
- `boolean coversSpan(int start, int end)` reports whether every position in
  the span is currently covered.
- `void removeSpan(int start, int end)` clears coverage throughout the span.
  Coverage outside it is unchanged.

### Example 1

```text
Input:
["CoverageLedger", "addSpan", "addSpan", "addSpan", "coversSpan",
 "removeSpan", "coversSpan", "coversSpan", "removeSpan", "coversSpan"]
[[], [4,10], [12,18], [8,14], [5,17], [9,13], [8,10], [13,18],
 [3,5], [4,5]]
Output: [null, null, null, null, true, null, false, true, null, false]
Explanation: The first three additions merge into [4,18). Removing [9,13)
splits that coverage into [4,9) and [13,18). The last removal trims the
first piece to [5,9).
```

### Constraints

- `1 <= start < end <= 10^9`
- The three methods receive at most `10^4` calls in total.

## Hints

### Hint 1

Store the covered set as sorted, disjoint spans instead of representing
individual real-number positions.

### Hint 2

Adding a span coalesces every stored span that overlaps or touches it.
Removing one replaces its overlapping run with at most two surviving edge
pieces.

### Hint 3

In a normalized collection, a requested span is fully covered exactly when
one stored span contains both of its boundaries.

### Follow-up

The array-backed representation makes queries logarithmic but may shift many
stored spans during updates. How would a balanced search tree change that
tradeoff?
