# Solutions — Expanded String Letter

## Undo the Expansion Backwards

The finished result is allowed to run to just under `2^63` characters, so any
approach that writes it out is dead on arrival. What survives is arithmetic:
the only thing needed to locate position `k` is how long the result was after
each character of `s`, and how each character changed it.

One forward scan supplies that. Start at length 0; a letter raises the length
by 1, a digit `d` multiplies it by `d`. Fixed-width languages should saturate
this running length at some ceiling well above `10^9` — the true value can
overflow 64 bits even though the *final* length is promised not to — and
Python simply lets the integers grow.

The reverse scan then peels the construction apart while carrying `k` with it.
Arriving back at a digit `d`, the result at that moment was a prefix of length
`L / d` written out `d` times; the character at position `k` of `d` identical
copies is the character at position `(k - 1) mod (L / d) + 1` of one copy, so
divide the length and remap `k`. That single line is what collapses billions of
positions into a handful of steps. Arriving back at a letter, the result at
that moment ended with it, so if `k` equals the current length the search is
over and that letter is the answer; otherwise the target lies further left and
the length simply drops by one.

Because `s` begins with a letter and `k` is promised to fall inside the final
length, the reduction always terminates on a letter, and the reverse scan never
runs off the front.

Trace `s = "pq3r2"` with `k = 12`. The forward pass records lengths
1, 2, 6, 7, 14.

1. The trailing `2` halves the length to 7 and remaps `k` to
   `(12 - 1) mod 7 + 1 = 5`.
2. `r` sits at length 7, which is not 5, so the length falls to 6.
3. The `3` divides the length to 2 and remaps `k` to `(5 - 1) mod 2 + 1 = 1`.
4. `q` sits at length 2, not 1, so the length falls to 1.
5. `p` sits at length 1, which equals `k` — the twelfth character is `p`.

Both scans touch each character of `s` once, and the only storage is the
prefix-length array.

**Complexity:** `O(n)` time, `O(n)` space for the lengths (`O(1)` if the
forward pass is recomputed on the fly).
