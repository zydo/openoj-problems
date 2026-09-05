# Solutions — Count Subarrays With K Odd Numbers

Both counters turn "exactly `k`" into a contract one sweep can keep true.
The prefix tally remembers every odd-count a prefix has reached and closes
each element against the count `k` smaller — one lookup per element, paid
for with an `n + 1` slot table of history. The at-most windows remember
nothing: they count the subarrays holding at most `cap` odds — a contract
a window can always repair by retiring elements from the left — and read
exactly `k` off as `atMost(k) - atMost(k - 1)`, trading the table for a
second sweep and constant extra space.

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

## At-most windows by subtraction

Exactly `k` is an awkward contract for a window: a single odd arrival can
push it over, and there is no symmetric way back. At most `cap` is the
accommodating form — grow while the budget holds, and when an odd breaks
it, retire elements from the left until it holds again. Counting subarrays
with at most `cap` odds is therefore a textbook shrinking window, and the
exact count falls out of two of them: `atMost(k)` covers every window with
`k` or fewer odds, `atMost(k - 1)` the ones with strictly fewer, and their
difference is precisely the windows holding exactly `k`.

The helper sweeps once per cap holding a single invariant: `[left, right]`
carries at most `cap` odds, and `left` is the smallest start for which it
still does. Each step extends `right`; an odd that pushes the count over
`cap` forces the left end forward until the budget is restored, and since
both ends only ever advance the sweep stays linear. With the invariant in
hand, every subarray ending at `right` and opening at `left` or later also
fits the budget, so `right - left + 1` joins the total. The `cap < 0`
guard is never taken under the statement's `k >= 1`; it merely lets the
helper answer on its own terms.

The second sweep replaces the tally table entirely: the whole state is
three integers, and the extra memory no longer grows with `n`. Example 1
makes the subtraction concrete — `atMost(2)` over `[3, 8, 3, 3]` counts 9
windows, `atMost(1)` counts 6, and their difference is the expected 3.

**Complexity:** `O(n)` time, `O(1)` space.
