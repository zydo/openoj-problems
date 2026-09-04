# Solutions — Maximum Subarray Score

## Monotonic stack with prefix sums

Choose which index supplies the minimum. For each index, the widest subarray
in which it stays the minimum runs from just past the nearest smaller value
on its left to just before the nearest smaller value on its right — and
because every element is positive, widening never lowers the sum, so the
widest window is that index's best shot. Scanning these canonical windows
is enough: whatever subarray is optimal overall, its own minimum reaches at
least its score through the canonical window around it. Prefix sums turn
any window's sum into one subtraction.

Both nearest-smaller boundaries fall out of a single left-to-right pass with
a stack of indices whose values are kept strictly increasing. Whenever the
current value `cur` is less than or equal to the top's value, the top can no
longer extend rightward as a minimum and pops; its right boundary is the
current index `i`, its left boundary the index left on the stack beneath it
(the nearest strictly smaller value), or `-1` at the array's edge. The
candidate `value × (prefix[i] − prefix[left + 1])` updates the running best.
Running the loop to `n + 1` with a sentinel value of 0 flushes the indices
still on the stack at the end.

![The example histogram 2, 3, 5, 3: the final 3 pops at the sentinel, its
nearest smaller left neighbour is the 2 at index 0, so its window spans
indices 1 to 3 with minimum 3 and sum 11 for the winning score 33; stack
snapshots show the strictly increasing stack [0, 1, 2] before the cur 3
pops.](figures/solution-stack-spans.svg)

The `>=` in the pop condition lets equal values evict one another, so the
last element of a run of equals claims the window spanning the whole run —
correct, because the earlier copies would only record the same product over
a narrower window. Each index is pushed and popped at most once, and the
modulo is applied only after the maximum is settled, so the comparison runs
on true 64-bit products.

**Complexity:** `O(n)` time, `O(n)` space.
