# Counting Coprime Arrangements

## Description

Take the values `1` through `n` and place them into an array `a` of `n`
slots, each value used exactly once. An arrangement is acceptable when
every value lands in a slot it is coprime with — using 1-based indexing,
`gcd(a[i], i) == 1` must hold for every `i` from `1` to `n`.

Return how many acceptable arrangements of the `n` values exist.

### Example 1

```text
Input: n = 4
Output: 4
Explanation: Slots 2 and 4 only tolerate the odd values 1 and 3, so the
two even values are pushed into slots 1 and 3 — and both of those slots
accept either even value. That gives 2! x 2! = 4 acceptable arrangements
in total.
```

### Example 2

```text
Input: n = 5
Output: 28
Explanation: Slots 2 and 4 again tolerate only odd values, and the new
slot 5 gets along with 1, 2, 3, and 4 but rejects 5 itself — so the
value 5 can never sit in its own slot. Counting the placements that
respect all five gcds gives 28.
```

### Example 3

```text
Input: n = 6
Output: 16
Explanation: No even value survives an even slot — each shares a factor
of 2 with its index — so the values 2, 4, and 6 must occupy the three
odd slots. Slot 6 additionally accepts only the values 1 and 5. Working
through the placements that satisfy every remaining gcd leaves 16.
```

### Constraints

- `1 <= n <= 12`

## Hints

### Hint 1

`n` never exceeds 12, which invites counting over subsets of values
rather than over permutations.

### Hint 2

Let `dp[mask]` be the number of ways to fill the first `popcount(mask)`
slots using exactly the values collected in `mask`. The slot a state fills
is read straight off the mask.

### Hint 3

To extend a state, precompute once which values each slot accepts, then
sum `dp[mask without v]` over every value `v` still in `mask` that the
next slot tolerates.

### Hint 4

The answer is the full-set state. Precomputing the compatibility grid
keeps the transition loop to plain table lookups, and the counts fit in a
machine word even at `n = 12`.
