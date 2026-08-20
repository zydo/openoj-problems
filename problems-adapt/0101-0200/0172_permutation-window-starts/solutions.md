# Solutions — Permutation Window Starts

## Sliding Window with Mismatch Count

Store `target[c] - window[c]` for each letter and count how many slots are
nonzero. A completed window is a permutation of `p` exactly when that mismatch
count is zero.

Initialize the differences from `p`. As each character of `s` enters, decrease
its slot; once the window would exceed `p.length`, increase the slot of the
departing character. Before either change, note whether the slot is zero, then
update the mismatch total according to whether the new value becomes or ceases
to be zero. This makes both boundary updates constant time.

After the first full window is present, record its start whenever no frequency
slot differs. If `s` is shorter than `p`, no full window is ever formed.

**Complexity:** `O(n)` time for `n = s.length` and `O(1)` auxiliary space for
the fixed alphabet.
