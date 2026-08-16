# Solutions — Minimum Window Substring

## Sliding Window with a Deficit Counter

The window is managed with two quantities: `need[c]`, how many more copies
of character `c` the window still owes (initialized to `t`'s counts), and
`missing`, the total number of owed character instances across all letters.
The pair makes coverage testable in `O(1)`: when `missing` reaches `0`, every
character of `t`, duplicates included, is inside the window. As `right`
admits a character, `need[ch] > 0` means this occurrence is genuinely still
required, so `missing` decrements; then `need[ch]` decrements regardless,
which drives unneeded letters and surplus copies negative without ever
touching `missing`. Characters absent from `t` simply slide through with a
negative entry.

Each time `missing` hits `0`, the window `[left, right]` is valid, and the
code shrinks it from the left while `need[s[left]] < 0` — that is, while the
leftmost character is surplus — returning each released copy to the budget.
The shrink stops at the first position whose character sits at exactly its
quota, which is the tightest valid window ending at this `right`; it is
recorded if it beats the best seen. Then the code deliberately evicts that
leftmost required character (`need[s[left]] += 1`, `missing += 1`,
`left += 1`), leaving the search owing exactly one instance so scanning can
continue for the next completion. `left` and `right` each only move forward,
so all growing and shrinking across the whole run telescopes to linear work
on top of the `O(n)` tally of `t`.

Degenerate inputs are handled up front: an empty `t`, or a `t` longer than
`s`, returns `""` immediately, and if no window ever reaches `missing == 0`
the sentinel `best_len` stays infinite and `""` is returned at the end. The
counter dictionary is bounded by the alphabet of the two strings (at most 52
distinct English letters), so it never grows with input size.

**Complexity:** `O(m + n)` time, `O(1)` space.
