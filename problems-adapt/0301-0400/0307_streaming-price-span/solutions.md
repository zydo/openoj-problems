# Solutions — Streaming Price Span

## Monotonic Stack with Compressed Suffixes

Keep a stack of pairs containing a price and the suffix length already
compressed into that price. Prices decrease strictly from the bottom of the
stack to the top.

For `record(price)`, begin with length one. While the top price is at most the
new price, pop that pair and add its stored length. Every observation inside a
popped pair belongs to the new suffix, and future calls may safely encounter
the new pair in its place. Once a larger top remains, it is exactly the value
that prevents the suffix from extending farther. Push the new pair and return
its accumulated length.

Although one call can remove many pairs, each recorded price is pushed once
and popped at most once.

**Complexity:** `O(1)` amortized time per call and `O(n)` space after `n`
calls.
