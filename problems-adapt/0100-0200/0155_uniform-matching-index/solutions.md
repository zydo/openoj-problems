# Solutions — Uniform Matching Index

## Index Buckets

During construction, append each array index to a list keyed by the value at
that position. The list for a target then contains exactly its valid answers.
A uniform random offset into that list gives every matching index probability
`1 / m` and can never return an invalid position.

Preprocessing avoids scanning the full array for every call. It also preserves
duplicate positions separately, which matters because uniformity is over
indices rather than distinct values.

**Complexity:** `O(n)` construction time and space, with expected `O(1)` time
per draw.

## Reservoir Sampling Follow-Up

When storing matching positions is not allowed, scan the stream while counting
matches. On the `j`-th match, replace the current candidate with probability
`1 / j`. A position survives its own selection and every later replacement
test with total probability `1 / m`, so all `m` matching positions are equally
likely at the end.

This form retains only a counter and one candidate, but a new draw requires a
new pass through the data.

**Complexity:** `O(n)` time per draw and `O(1)` auxiliary space.
