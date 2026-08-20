# Fewest Rewrites to a Strided Order

## Description

You are given a 0-indexed array `arr` of `n` positive integers, and a positive
integer `k`.

Call the array **k-ordered** when `arr[i - k] <= arr[i]` holds at every index
`i` from `k` to `n - 1`: no element may fall below the one sitting `k` places
in front of it.

For instance, `arr = [3,7,4,8,6,9]` is k-ordered for `k = 2` — reading back in
twos gives `3 ≤ 4`, `7 ≤ 8`, `4 ≤ 6`, `8 ≤ 9` — but not for `k = 1`, where
`7 > 4` breaks the chain.

One rewrite selects an index and stores any positive integer there.

Return the least number of rewrites that makes `arr` k-ordered.

### Example 1

```text
Input: arr = [6,3,5,2,7], k = 1
Output: 2
Explanation: With k = 1 the array may never dip. The values 3, 5, 7 already
rise, so rewriting the other two entries — say to [3,3,5,5,7] — costs 2
rewrites, and no single rewrite can clear both descents.
```

### Example 2

```text
Input: arr = [2,9,4,9,6,11], k = 2
Output: 0
Explanation: Reading back in twos gives 2 ≤ 4 ≤ 6 and 9 ≤ 9 ≤ 11, so the
array is already k-ordered.
```

### Example 3

```text
Input: arr = [5,8,3,6,4,9], k = 3
Output: 1
Explanation: The pairs three apart are 5 ≤ 6, 8 > 4, and 3 ≤ 9. Raising the 4
to an 8 fixes the lone violation.
```

### Constraints

- `1 <= arr.length <= 10⁵`
- `1 <= arr[i] <= arr.length`
- `1 <= k <= arr.length`

## Hints

### Hint 1

The condition compares `i` only with `i - k`. Which pairs of indices does it
never bring into contact?

### Hint 2

Indices sharing a remainder modulo `k` form `k` separate chains, and the array
is k-ordered exactly when every chain fails to descend. Rewrites in one chain
say nothing about another.

### Hint 3

Inside a single chain, which entries can you afford to leave untouched? The
untouched ones must already be a non-descending subsequence.

### Hint 4

Keep a longest non-descending subsequence of each chain and rewrite the rest —
values are free, so any kept subsequence can be padded out. The answer is the
sum of the leftovers over all chains.
