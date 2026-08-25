# Solutions — Previous Permutation With One Swap

## Rightmost descent, then leftmost tie among the best replacement

Scanning `arr` from the right, everything past the first index `i` with
`arr[i] > arr[i + 1]` is non-decreasing — the smallest possible arrangement
of that tail — so no swap confined to it can shrink the array further.
That means `i` is the rightmost position whose value can still decrease
while the prefix before it stays fixed; if no such `i` exists, `arr` is
already its own smallest permutation and is returned unchanged.

To shrink `arr[i]` as little as possible (keeping the result as large as
possible while still smaller than the original), the method looks for the
value in the non-decreasing suffix that is the largest one still strictly
below `arr[i]`. Because the suffix is sorted, scanning it from the right
while its values stay `>= arr[i]` lands exactly on that value, but on its
rightmost occurrence. When that value repeats, placing `arr[i]` at the
rightmost tied position leaves the earlier, equal-valued copies in place
ahead of it; placing `arr[i]` at the leftmost tied position instead pushes
the larger value as early as possible, which is what maximizes the result,
so the method walks left across equal values before committing to the
swap. Swapping `arr[i]` with that position produces the answer.

**Complexity:** `O(n)` time, `O(1)` extra space.
