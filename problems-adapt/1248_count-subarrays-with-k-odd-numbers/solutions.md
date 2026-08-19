# Solutions — Count Subarrays With K Odd Numbers

## Prefix tallies on the odd-count

Parity is the whole story: writing 1 for odd and 0 for even leaves the
array's exact structure irrelevant, and the question becomes the canonical
"subarrays summing to `k`". That problem has a one-pass answer built on the
observation that a subarray has `k` odds exactly when the odd-count at its
right end minus the odd-count at its left end is `k`.

The pass keeps `odds`, how many odd numbers the prefix ending here
contains, together with `counts[c]`, the number of earlier prefixes whose
odd-count was exactly `c`. Stepping over an element adds its parity bit to
`odds`; every earlier prefix with count `odds - k` then pairs with the
current one to close one qualifying subarray, so the tally at that index
joins the answer. Afterwards the current prefix's own count is recorded,
ready to pair with elements still to come. Seeding `counts[0] = 1` for the
empty prefix is what lets subarrays that open at index 0 be closed.

The index guard (`odds - k >= 0`) only protects against reading before
enough odds have appeared; once they have, every lookup lands inside the
tally, which needs just `n + 1` slots because a prefix can hold at most `n`
odds. An array with fewer than `k` odd numbers simply never produces a
valid index and returns 0. Example 2 makes the pairing concrete: the lone 3
raises every prefix after it to count 1, and each of the six windows around
it is closed against one of the count-0 prefixes.

**Complexity:** `O(n)` time, `O(n)` space.
