# Solutions — Count Constrained Vowel Strings

## Rolling counters on the ending vowel

Whether a prefix can be extended depends on exactly one thing: its last
letter. So the state worth carrying forward is not the string but a
five-entry table — for each vowel, how many valid strings of the current
length end there. Five numbers summarize a whole layer of the construction.

![The allowed-successor graph on a, e, i, o, u; each arrow is a legal adjacency.](figures/solution-vowel-graph.svg)

All five entries begin at 1, standing for the five one-letter strings. A
transition then reads the table *before* writing it: strings of the next
length ending in `a` come from old strings ending in `e`, `i`, or `u`;
those ending in `e` from old `a` or `i`; `i` from `e` or `o`; `o` only from
`i`; and `u` from `i` or `o`. Binding the five new values in one
simultaneous assignment keeps the right-hand sides free of this step's own
outputs.

Every edge of the graph crosses between distinct vowels, so no prefix is
ever credited to two endings — each new count is a plain sum of disjoint
old counts. The reduction modulo `10^9 + 7` happens per entry as it is
formed, which holds every intermediate value below twice the modulus even
though the unreduced counts double-ish each step (Example 3 crosses the
modulus between `n = 30` and `n = 31`). After `n - 1` transitions the
answer is the five entries summed and reduced once more; when `n = 1` the
loop body never runs and the sum is the opening 5.

**Complexity:** `O(n)` time, `O(1)` space.
