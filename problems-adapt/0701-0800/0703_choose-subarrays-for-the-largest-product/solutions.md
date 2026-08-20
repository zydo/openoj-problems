# Solutions — Choose Subarrays for the Largest Product

## Prime Counts, Monotonic Stack, and Fast Exponentiation

A move multiplies by `nums[i]` exactly when the chosen subarray's richest
element, by prime count with leftmost tie-breaking, is `i`. So forget moves
and count per index the subarrays it would win: if `left[i]` is the nearest
position to its left holding an equal or larger prime count, and `right[i]`
the nearest to its right with a strictly larger one, then
`ranges[i] = (i - left[i]) * (right[i] - i)` is that count. The asymmetric
comparisons realize the tie rule — equal counts are awarded to the earlier
index — so every subarray is credited to one element only. Both boundary
arrays fall out of monotonic stacks in linear time.

Prime counts themselves — distinct prime divisors — come from a
smallest-prime-factor sieve built once up to `max(nums)`; repeatedly dividing
each value by its smallest prime tallies the distinct primes without trial
division per element.

Spending the moves is then greedy: to push a product as high as possible
under at most `k` factors, keep taking the biggest value that still has
subarrays left. Sorting `(value, count)` pairs by value descending, each
element is used `min(count, remaining)` times — never more often than it can
win, and never past the remaining budget. Fast modular exponentiation folds
each element into the product with a single `pow(val, use, MOD)`, however
many times it is used. The loop ends when the budget runs out; `k` can exceed
the subarray total by a wide margin, which is why the count is capped rather
than iterated.

**Complexity:** `O(n log n + V log log V)` time, `O(n + V)` space, with
`V = max(nums)`.
