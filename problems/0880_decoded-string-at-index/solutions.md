# Solutions — Decoded String at Index

## Backward Reduction on the Tape Length

The decoded tape can be astronomically long — up to just under 2^63 letters — so it must never be materialized. But finding the k-th character only requires knowing the tape's length and how each encoding step transformed it. A forward pass computes that length with two rules: a letter adds 1, a digit `d` multiplies the running length by `d`.

The backward pass then walks `s` in reverse, undoing one operation per character while carrying `k` along. Meeting a digit `d` means the tape at that point was some prefix of length `length / d` repeated `d` times; the `k`-th letter of that repetition equals the `k`-th letter of the prefix itself, so the length is divided by `d` and `k` is remapped to `(k - 1) % length + 1`, which keeps it 1-indexed inside the prefix. Meeting a letter means the tape at that point ended with that letter: if `k` equals the current length, that letter is the answer; otherwise the target lies earlier and the length drops by one.

Both passes are linear in `n = len(s)`. Because `s` starts with a letter and `k` is guaranteed to be within the final length, the reduction always lands on some letter before the scan finishes — the trailing `return s[0]` is a never-reached safety net — and Python's arbitrary-precision integers absorb the huge intermediate lengths without any overflow handling.

**Complexity:** `O(n)` time, `O(1)` space.
