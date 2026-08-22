# Solutions — Minimum Splits to Sort the Array

## Greedy Right-to-Left with an Even Split Ceiling

A split replaces one value by two smaller ones, so it can only pull numbers
down — which settles the first question immediately: the last element should
never be split, because any disorder involving it can be fixed by breaking
the element to its left instead. Walk right to left carrying `bound`, the
largest value the current position may hold given that everything after it
already runs non-decreasing (it starts as the final element). A value at or
under `bound` costs nothing and drags the bound down to itself.

A value `x` above `bound` has to come apart into `k` pieces summing to `x`
with no piece above `bound`, at a cost of `k - 1` splits. The least such
`k` is `ceil(x / bound)`, and it is always achievable: spread `x` across the
`k` pieces as evenly as arithmetic allows and the largest piece comes to
`ceil(x / k) <= bound`. Evenness is also what the left neighbor wants — the
new bound for the next position is the smallest piece of the split, and
even splitting makes that `floor(x / k)`, the largest it can be. Writing the
pieces in ascending order inside the vacated slot keeps the whole run
non-decreasing without further work.

Each element needs one subtraction and one division — the pieces are never
materialized, so values near `10⁹` cost nothing extra. An already sorted
array collects zero splits, equal values merely lower the bound, and a
steeply descending prefix spends one `k - 1` term per element. On
`nums = [11,3,9,6]`: the 9 splits once into 4 and 5 (bound drops to 4), the
3 fits and drops the bound to 3, and the 11 needs
`k = ceil(11/3) = 4` pieces — three more splits — for a total of 4.

**Complexity:** `O(n)` time, `O(1)` extra space.
