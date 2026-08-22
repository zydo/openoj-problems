# Solutions — Longest Ascending Subsequence

Two ways to measure the longest strictly climbing subsequence: the quadratic
dynamic program that defines the problem by endings, and the patience method
that swaps the inner scan for a binary search over a tails array. Both return
the same number; only the second meets the follow-up's bound.

## dp_quadratic

The definition, transcribed. Let `dp[i]` be the length of the longest climbing
chain that ends exactly at `nums[i]`; since every chain ends somewhere, the
answer is the largest entry in the table. A chain ending at `i` is either the
lone entry `nums[i]` (length 1, the seed) or it continues an earlier chain: any
`nums[j] < nums[i]` with `j < i` may stand immediately before `nums[i]`, so
`dp[i]` is one plus the best `dp[j]` among those predecessors.

Each position therefore scans everything to its left, and that `j < i` double
loop is the quadratic cost. At `n <= 2500` it is about three million
comparisons, well inside the limits here, and the table makes the correctness
argument plain: `dp[i]` is filled only from positions strictly earlier, whose
values are already final when read.

Strictness lives in the guard `nums[j] < nums[i]` — not `<=` — so an equal
entry is no predecessor and `[5, 5, 5]` leaves every slot at 1. Descending
inputs never find a predecessor either, and a lone entry returns its seed
unchanged.

**Complexity:** `O(n²)` time, `O(n)` space.

## patience

Keep `tails`, where `tails[k]` is the smallest value seen so far that can end a
climbing chain of length `k + 1`. The array stays sorted — trading a tail for a
smaller but equally valid one cannot disturb the order — and that is precisely
what licenses the search.

Each arriving entry `x` is located with `bisect_left`, which lands on the first
tail greater than or equal to `x`. Running past the end means `x` tops every
recorded ending, so it is appended and the best length grows by one. Otherwise
`x` overwrites that tail: it cannot lengthen anything (it fails to beat all the
tails), but it closes a chain of the same length at a smaller value, which
leaves the most room for later entries to build on. `bisect_left` rather than
`bisect_right` is what carries the strictness — an equal value lands on its own
tail and overwrites it instead of extending, which is why `[5, 5, 5]` comes out
as length 1.

One point deserves care: `tails` is usually not itself a climbing subsequence
of the input. Only its length is honest. Overwrites can splice together endings
that no single chain realizes, and that is fine, because the invariant being
maintained is *existence* — for every slot `k`, some ascending chain of length
`k + 1` ends at `tails[k]` — and the answer reads off the length alone. Trace
`[6, 1, 3, 9, 4, 2, 11]`:

1. `6` opens the table: `tails = [6]`.
2. `1` beats nothing but undercuts everything, so it takes 6's slot:
   `tails = [1]`.
3. `3` tops the only tail and appends: `tails = [1, 3]`; `9` appends again:
   `tails = [1, 3, 9]`.
4. `4` cannot top 9, so it takes 9's slot — same length, cheaper ending:
   `tails = [1, 3, 4]`.
5. `2` cannot top 3, so it takes 3's slot: `tails = [1, 2, 4]`.
6. `11` tops everything and appends: `tails = [1, 2, 4, 11]`, of length 4.

The final table happens to be a real chain here, but steps 4 and 5 already
mixed endings that never coexist in one subsequence — `4` was recorded while
3 was still standing, and `2` arrived after 4. Length 4 is honest either way,
matching `1, 3, 4, 11`.

At `n` up to 2500 this replaces ~3 million comparisons with 2500 binary
searches. A single-entry array returns 1 from the first append, and a strictly
descending input never appends after the first element.

**Complexity:** `O(n log n)` time, `O(n)` space.
