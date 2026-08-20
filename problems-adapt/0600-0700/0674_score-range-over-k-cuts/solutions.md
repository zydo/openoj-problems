# Solutions — Score Range Over K Cuts

## Sorting Adjacent-Pair Sums

Every piece is a run of consecutive positions and scores the sum of its two
end values, so a cutting into `k` pieces is nothing but a choice of `k - 1`
cut positions. The two outer elements `weights[0]` and `weights[n-1]` are
ends exactly once in every cutting, so in a best-minus-worst comparison they
cancel. The only terms that vary are the cuts: cutting between positions `i`
and `i + 1` turns those two elements into the right end of one piece and the
left end of the next, adding `weights[i] + weights[i + 1]` to the score.

So a cutting's score is `weights[0] + weights[n-1]` plus the sum of the
`k - 1` adjacent-pair values at its cuts. The best cutting takes the `k - 1`
largest pair values, the worst takes the `k - 1` smallest, and the answer is
the difference of those two sums — reachable by sorting the `n - 1`
adjacent-pair values once and summing the top and bottom slices.

The `k == 1` early return is a correctness guard, not an optimization: with
one piece there are no cuts, and the top/bottom slicing degenerates (the
bottom slice of size 0 would misbehave) — the difference is `0`. For
`k = n` every adjacent pair is a cut, both slices cover the whole list, and
the answer is again `0`. With values up to `10⁹` and `n` up to `10⁵`, sums
reach into the tens of trillions; Python's integers absorb that natively,
and the fixed-width ports use 64-bit accumulation.

Worked on Example 2, `weights = [5,1,1,5]`, `k = 3`: the adjacent-pair values
are `6, 2, 6`; the two largest sum to `12`, the two smallest to `8`, and the
answer is `12 - 8 = 4`.

**Complexity:** `O(n log n)` time, `O(n)` space.
