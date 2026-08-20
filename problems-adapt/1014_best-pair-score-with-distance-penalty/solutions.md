# Solutions — Best Pair Score With Distance Penalty

## Running maximum of values[i] + i

Rewrite the score `values[i] + values[j] + i - j`, `i < j`, as
`(values[i] + i) + (values[j] - j)` and the two halves come apart: the second
mentions only `j`, the first only some earlier position. So once `j` is fixed,
every candidate partner collapses to one question — what is the largest
`values[i] + i` among positions before `j`? No inner scan is needed to answer
it if the sweep remembers the answer so far.

That memory is `best_prefix`, seeded with `values[0]` (which is
`values[0] + 0`). For each later `j` the code forms
`best_prefix + values[j] - j`, offers it to the answer `best`, and only then
folds `values[j] + j` into `best_prefix` — folding after the scoring step is
what keeps the partner strictly earlier than `j`. The statement promises at
least two entries, so `best` always holds a genuine pair score by the end.

On `[7, 2, 10, 4, 8]`: at `j = 2` the prefix maximum is `7 + 0 = 7` and the
score `7 + 10 - 2 = 15` leads; at `j = 4` the maximum has grown to
`10 + 2 = 12`, and `12 + 8 - 4 = 16` wins. Viewed this way the algorithm is the
`O(n²)` double loop with its inner maximum hoisted out and maintained
incrementally — nothing about the pairs is lost, only the repeated rescanning.

**Complexity:** `O(n)` time, `O(1)` space.
