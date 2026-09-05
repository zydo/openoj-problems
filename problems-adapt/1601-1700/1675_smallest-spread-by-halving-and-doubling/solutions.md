# Solutions — Smallest Spread by Halving and Doubling

## Max-Heap Halving

An odd entry has exactly one upward move — one doubling, after which it
is even and can only shrink — so every entry's reachable set is a
descending chain once you start it from its top. Normalize accordingly:
double each odd entry once. Every reachable configuration still appears
downstream of this state, and from here on the sole move anywhere is
halving an even entry.

Hold the values in a max-heap (Python's min-heap stores negations) and
carry the running minimum in a variable, since a heap cannot answer for
it. Record the spread of the untouched state first, then loop: pop the
maximum, and while it is even, halve it, push the half back, lower the
running minimum if the half beats it, and compare the new spread. The
moment the maximum comes out odd the loop ends — no entry can grow
anymore, so the maximum has bottomed out and no later state can beat
the best spread seen.

On `nums = [4,12,7]` the normalized multiset is `{4, 12, 14}` with
spread `10`; halving `14` to `7` gives spread `8`; halving `12` to `6`
gives `{4, 6, 7}` and the winning spread `3`; further halvings only
widen the gap, and the loop quits when `7` tops the heap. Each halving
shrinks a value, and a value admits at most `log₂(M)` halvings for the
largest input `M`, so heap traffic is bounded by `n log M` operations.

**Complexity:** `O(n log M log n)` time, `O(n)` space, where `M` is the
largest input value.
