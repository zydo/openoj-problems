# Solutions — Substrings Spanning All Three Letters

## Counting per right endpoint via last-seen indices

Attribute each substring to where it ends. The piece `s[l..i]` holds all
three letters exactly when the stretch reaching back from `i` covers the
most recent appearance of each one — so while sweeping left to right, carry
`last[0..2]`, the latest index where `a`, `b`, and `c` have shown up,
starting at `-1`. After step `i`, the substring ending at `i` qualifies
precisely when its left endpoint `l` sits at or before the oldest of the
three, that is `l <= min(last)`.

Each legal `l` in `[0, min(last)]` names one qualifying substring ending
at `i`, so every step adds `min(last) + 1` to the running total. Summed
over the whole scan this counts each substring once, since every substring
is booked to its own right endpoint; until all three letters have shown up,
`min(last)` is `-1` and the contribution is zero, as it should be.

An update is one array slot per character (the alphabet is exactly
`a`/`b`/`c`), and the minimum of three values is constant work, keeping the
pass linear. Beyond the input, storage is a fixed three-slot array.

Walking `"abcab"`: the contributions begin at the third letter with `+1`
(`"abc"`), then `+2` at the second `a` (`"bca"`, `"abca"`), and `+3` at the
second `b` (`"cab"`, `"bcab"`, `"abcab"`) — six in all. Strings missing a
letter never leave the `-1` state and contribute nothing.

**Complexity:** `O(n)` time, `O(1)` space.
