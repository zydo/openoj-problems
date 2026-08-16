# Solutions — Counting Bits

## DP on the shifted index and parity

The popcount of `i` can be derived from a smaller index already computed: right-shifting `i` by one bit drops the least significant bit, so `ans[i >> 1]` is the count of 1-bits in everything except that final bit. Adding back `i & 1` — which is 1 exactly when the dropped bit was set — gives `ans[i] = ans[i >> 1] + (i & 1)`. Since `i >> 1 < i` for every `i >= 1`, filling the array in ascending order guarantees the needed value is always ready, turning the whole computation into one linear pass.

Equivalently: an even number `i` has the same number of set bits as `i / 2` (its low bit is 0), and an odd number has one more than `(i - 1) / 2`. The formula captures both cases with a shift and a mask, and each is a machine-level operation.

The only edge case is `n = 0`, handled by initializing `ans[0] = 0` and letting the loop body never run, returning `[0]`. No per-number bit-twiddling loop (which would give the easy `O(n log n)` solution) is ever needed.

**Complexity:** `O(n)` time, `O(n)` space for the output array (`O(1)` extra).
