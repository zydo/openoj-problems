# Solutions — The Rising Price Of Refills

The total price depends only on how many refills the sweep ends up needing.

## Cumulative supply accounting

After any prefix of the array has been consumed, the machine's stock equals
the starting `k`, plus `k` for every refill so far, minus the prefix sum.
So the number of refills needed to finish the whole array is the smallest
`m` for which `k + m * k` covers `sum(nums)`; intermediate shortfalls can
never demand more, because every demand is positive.

With `m` refills, the prices are exactly `1` through `m`, summing to
`m(m + 1) / 2`. Compute the count and the triangular sum in wide integers,
then reduce the answer modulo `10^9 + 7`.

**Complexity:** `O(n)` time and `O(1)` space.
