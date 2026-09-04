# Solutions — Last-Digit Divisible Substrings

## One rolling remainder table per final digit

The divisor of a substring is fixed by its last character, which splits the
count cleanly: for each digit `d` from 1 to 9, count the substrings that end
in `d` and are multiples of `d`, then add the nine tallies. A substring
ending in `'0'` belongs to no pass, which is exactly the rule that `'0'`
never divides.

In the pass for `d`, scan left to right holding `cnt[r]` = how many suffixes
of the prefix processed so far have value congruent to `r` modulo `d` — at
most `d` entries, at most nine. Reading a new character `di` remaps the whole
table: a stored suffix with remainder `r` becomes one with remainder
`(10r + di) mod d`, because appending a digit shifts the number into the
tens place, and `di` alone enters as a fresh length-1 suffix. Build the
remapped table, add the fresh suffix, swap.

The counting step happens where `di == d`. Extending an earlier suffix of
remainder `r` produces `10r + d`, a multiple of `d` precisely when `10r` is —
a condition on `r` alone, fixed for the entire pass. So each such position
adds the entries of `cnt` sitting on that fixed remainder set, plus one for
the single-character substring `d` (every nonzero digit divides itself,
which is why Example 3's arithmetic works out to a plain count of substrings
ending in `'1'`).

Leading zeros need no special case: `"04"` contributes through its true value
4, and a zero-prefixed suffix ending in `d` lands in the table under its
real remainder. Digits larger than any character in `s` simply never trigger
their counting step.

**Complexity:** `O(45 * n)` time — nine passes whose table widths sum to 45 —
and `O(1)` working space.
