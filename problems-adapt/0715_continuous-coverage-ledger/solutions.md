# Solutions — Continuous Coverage Ledger

## Normalized Spans with Binary-Search Splicing

Represent the covered set with parallel arrays of starts and ends. Their
entries describe sorted spans that neither overlap nor touch. This normalized
form is maintained after every update.

For `addSpan`, binary search locates the full run whose members overlap or
touch the new span. Replace that run with one span whose boundaries are the
minimum start and maximum end. Including touching neighbors ensures that two
adjacent covered pieces never remain separate.

For `removeSpan`, locate only strictly overlapping entries. Everything in the
middle disappears, while the first entry may leave a prefix and the last may
leave a suffix. Thus one contiguous slice is replaced by zero, one, or two
pieces.

Normalization makes `coversSpan` a single containment check. Find the last
stored start no greater than the requested start and test whether its paired
end reaches the requested end.

The Python implementation uses `bisect` and slice assignment. Java supplies
equivalent lower- and upper-bound searches before updating its `ArrayList`
storage.

**Complexity:** `O(log n)` for `coversSpan`; `O(log n + n)` for either update
because an array splice may shift entries; and `O(n)` space for `n` stored
spans.
