# Solutions — Smallest Widest Pair Gap

## Binary Search on the Cap with Greedy Pairing

Order the values first. Any selection of disjoint pairs can be reconnected so
that every couple joins neighbours in sorted order without widening the
largest gap, so the search only has to consider neighbour pairs in the sorted
array.

That reframes the task as a threshold question: for a candidate cap `t`, can
`p` disjoint pairs each sit within `t`? The yes-set is upward closed —
loosening the cap never removes a feasible pairing — so the smallest workable
`t` can be located by binary search across the value span
`[0, max - min]`, starting from the fact that `p = 0` is satisfied even at 0.

The feasibility check is one sweep. Walk the sorted values and whenever a
value and its predecessor differ by at most `t`, pair them and jump past
both; otherwise step a single position. Greedy taking is safe: an exchange
argument shows that adopting each available neighbour pair in turn never
yields fewer pairs than holding out for a later match, so the sweep counts
the maximum number of pairs under the cap exactly.

For `nums = [8, 3, 1, 9, 5]` with `p = 2`, the sorted values are
`[1, 3, 5, 8, 9]`. A cap of 1 admits only the pair `(8, 9)` — one short.
A cap of 2 admits `(1, 3)` and `(8, 9)`, so the answer is 2. Duplicates such
as `[6, 2, 6, 9, 2]` pair up at cap 0 immediately.

**Complexity:** with value span `V`, `O(n log n)` for the sort plus
`O(n log V)` for the search, and `O(n)` space (or `O(1)` beyond the sort).
