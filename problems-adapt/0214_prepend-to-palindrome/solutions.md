# Solutions — Prepend To Palindrome

## KMP Prefix Function

With additions allowed only at the front, the answer is `s` preceded by the
reverse of its unpalindromic tail — put differently, locate the longest
prefix of `s` that is a palindrome by itself and mirror only what follows
it. The prefix already reads identically from either direction, so it needs
no patching, and any weaker cutoff would force a longer prepend than
necessary.

A KMP trick pins down that prefix in linear time: a prefix of `s` is a
palindrome precisely when it also appears as a suffix of `reversed(s)`, so
the question becomes the longest string serving as both a prefix and a
suffix of `combined = s + "#" + rev`. Running the standard KMP prefix
function over `combined` leaves that length in the final entry — the
longest proper border — and the `#` sentinel, a character `s` cannot
contain, bars the border from spanning the join and outgrowing `len(s)`,
which makes it exactly the palindromic prefix length.

The prefix-function scan carries `j`, the border length at the previous
position, contracting through `lps[j-1]` on a mismatch and advancing by one
on a match; the amortization keeps the whole pass linear in spite of the
inner `while`. The returned string is `rev[: len(s) - pal_len] + s` — the
tail beyond the palindromic prefix, reversed, glued on the front. An empty
input comes back empty, and an input already palindromic prepends nothing.

**Complexity:** `O(n)` time, `O(n)` space.
