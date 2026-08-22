# Solutions — Largest Star Sum in a Graph

## Greedy per Center

Once a star's center is fixed, what remains is a small selection question:
which of that node's incident edges are worth using, at most `k` of them. Node
values contribute additively, so the answer is greedy without any search —
sort the neighbor values from largest to smallest, then keep taking while two
conditions hold: fewer than `k` edges have been used, and the next value is
still above zero. A neighbor worth 0 or less can only drag the total down, so
the first non-positive value ends the scan; and taking zero edges is always
permitted, which is why the running answer is seeded with `max(vals)` rather
than 0 — an all-negative graph must stay negative, as the lone `-8` node shows.

The pass over the input builds adjacency lists that hold neighbor *values*
directly, so the greedy never looks nodes up again. Each list is sorted in
descending order, its helpful prefix of length at most `k` is added to the
node's own value, and the largest total across all centers wins.

Example 1's best center is node 3, worth 6, whose neighbors carry 8, 3, -7 and
-2: the budget of two edges admits 8 and 3, both positive, for 17. Example 3
shows the budget binding rather than the signs — node 0 has three neighbors
worth 9, 7 and -1, `k` allows two, and the -1 would fail the sign test anyway,
so the star totals 18.

When `k` is 0 or every neighborhood is non-positive, each center contributes
exactly its own value and the seeding max already covers the result; with no
edges at all, every node is its own star. Sorting does the heavy lifting: the
adjacency lists together hold `2|E|` values.

**Complexity:** `O(n + E log E)` time, `O(n + E)` space.
