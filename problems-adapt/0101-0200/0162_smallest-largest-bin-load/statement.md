# Smallest Largest Bin Load

## Description

You are given an integer `n` — the number of available bins — and an
integer array `piles`, where `piles[i]` counts the items in the `i`-th
pile.

Place every item into a bin under two rules:

- each bin receives items from **at most one** pile (any amount of it);
- the loads must respect nothing else — a bin may stay empty.

Let `x` be the largest load held by any bin after all items are placed.
Return the smallest `x` achievable.

### Example 1

```text
Input: n = 5, piles = [9,7]
Output: 4
Explanation: Cap the loads at 4. The pile of 9 fills three bins (4, 4, 1)
and the pile of 7 fills two (4, 3) — five bins, no load above 4. A cap of
3 would need ceil(9/3) + ceil(7/3) = 3 + 3 = 6 bins, one too many.
```

### Example 2

```text
Input: n = 7, piles = [6,6,6]
Output: 3
Explanation: Each pile of 6 splits into two bins of 3, using six of the
seven bins; the seventh stays empty. Capping at 2 would need three bins
per pile.
```

### Example 3

```text
Input: n = 1, piles = [5000]
Output: 5000
Explanation: With a single bin the whole pile lands in it.
```

### Constraints

- `m == piles.length`
- `1 <= m <= n <= 10⁵`
- `1 <= piles[i] <= 10⁵`

## Hints

### Hint 1

Ask the yes/no question instead: given a cap `x`, can all items be placed
with no bin holding more? What happens to the answer as `x` shrinks?

### Hint 2

Under a cap `x`, a pile of `q` items needs at least `ceil(q / x)` bins —
and that few suffice. Summing over the piles gives the smallest bin count
the cap allows.

### Hint 3

The cap works exactly when that total fits within `n`. Binary-search the
smallest workable cap between `1` and the largest pile.
