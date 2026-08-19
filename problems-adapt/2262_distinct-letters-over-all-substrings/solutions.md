# Solutions — Distinct Letters Over All Substrings

## Last-occurrence contribution

Adding up variety over all `n(n+1)/2` substrings directly is quadratic, so
turn the accounting inside out: rather than asking each substring how many
letters it holds, ask each letter how many substrings hold it, and total over
letters. Group by the substring's right endpoint `i`: a letter `c` is present
in exactly those substrings ending at `i` that begin after `c`'s latest
earlier occurrence — `i - last[c]` of them, where `last[c]` is that
occurrence's index (defaulting to `-1`, which correctly produces `i + 1`, every
legal start).

Let `current` be the variety-sum of all substrings ending at `i`. Moving `i`
forward changes exactly one letter's contribution — the new letter `s[i]`,
whose last-occurrence gap updates — so `current` survives with the one
adjustment `current += i - last.get(c, -1)` instead of a 26-counter re-sum.
Each substring is thereby charged once for every letter it contains, which is
precisely its variety, and the grand total collects `current` over all `i`.

On `"sees"`, the pass carries `current` through 1, 3, 4, 7 — at the final `s`,
the letter contributes `3 - 0 = 3` because its previous sighting at index 0
leaves starts 1 through 3 — totalling 15.

One sweep, one dictionary of at most 26 entries, no auxiliary arrays.

**Complexity:** `O(n)` time, `O(1)` space.
