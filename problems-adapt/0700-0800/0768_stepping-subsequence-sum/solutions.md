# Solutions — Stepping Subsequence Sum

## Per-Value Count and Sum, Folded as Batches Are Born

Enumerating stepping subsequences is hopeless — there can be
exponentially many — but summing them does not require listing them. All
that matters about a partial subsequence is the value it ends on: the
next element may join exactly when it is one off that value. So keep two
tables keyed by ending value, `cnt[v]` for how many partial stepping
subsequences end at `v`, and `sm[v]` for the total of their elements.

When the scan reaches a value `v`, the batches of subsequences newly
ending at `v` are easy to name: the singleton `[v]`, and every recorded
partial ending at `v - 1` or `v + 1` with `v` appended. The batch size
is `1 + cnt[v-1] + cnt[v+1]`; its element total is
`v · batch + sm[v-1] + sm[v+1]`, since the inherited elements bring
their sums along and each member of the batch gains one `v`. The batch
joins the tables (later equal values may extend it), and its total is
added to the grand answer immediately.

Charging each subsequence's sum at the instant its final element closes
it is what keeps the count exact: no subsequence is ever summed twice,
and none is missed, because every subsequence has a last element. Since
only additions and multiplications by `v` occur, the running modular
total equals the true total reduced mod `10⁹ + 7`.

Watch `[2,1,2]`: the first `2` and the `1` each seed a table entry; the
final `2` then closes `[2]`-extended (`[2,1,2]`), `[1]`-extended
(`[1,2]`), and its own singleton — three batches whose totals, with the
earlier ones, bring the answer to `16`. Elements far apart in value
never meet: in `[5,7,6]` the `5` and `7` differ by `2`, so no
subsequence contains both, and the answer is built purely from the
singles plus `[5,6]` and `[7,6]`.

**Complexity:** one dictionary probe per element and neighbor:
`O(n)` time and `O(n)` space.
