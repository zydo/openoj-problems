# Solutions — Fewest Fibonacci Summands

## Greedy largest-Fibonacci subtraction

At every step take the largest Fibonacci number that does not exceed what is
left of `k`, subtract it, and continue until nothing remains. For `k = 33` this
takes 21, then 8, then 3, then 1 — four terms.

Optimality is Zeckendorf's theorem. Every positive integer splits uniquely into
Fibonacci numbers no two of which are consecutive in the sequence, and that
split uses the fewest terms of any representation. The greedy produces exactly
it: after taking the largest fitting `F`, the remainder is smaller than the
Fibonacci number one step below `F` — if it were not, that pair would merge
into the next Fibonacci number, which would have fit in place of `F`. So the
sweep never emits consecutive terms and, a fortiori, never repeats one. Any
representation using fewer terms would have to merge some pair of its terms
into a single larger Fibonacci number somewhere, and one that can be merged is
one the greedy would have taken whole at that scale.

The implementation builds the roughly 45 Fibonacci numbers up to `k` (the
sequence grows exponentially, so the list is tiny), then scans an index
downward: skip entries larger than the remainder, subtract the first that fits,
count it. The index never rises, so the whole subtraction phase is one pass
down the short list, ending at 0 because the list bottoms out at 1. A `k` that
is itself a Fibonacci number, such as 89, is consumed in a single step.

**Complexity:** `O(log k)` time, `O(log k)` space.
