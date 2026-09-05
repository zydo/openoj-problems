# Solutions — Longest String Border

## KMP prefix function

A border — a proper prefix that doubles as a suffix — is precisely the object
the Knuth-Morris-Pratt prefix function measures. After the table `pi` is
built, `pi[i]` gives the length of the longest proper prefix of the stretch
`s[0..i]` that also ends it, so the whole question is answered by the final
cell: slice `s[:pi[n - 1]]`, which is `""` when the length is zero.

The table fills in one left-to-right sweep with a helper `j`, the length of
the prefix currently matched against the tail. Agreement (`s[i] == s[j]`)
grows the match by one. A mismatch does not restart anything: the match of
length `j` has its own border of length `pi[j - 1]`, and that border is the
next-longest candidate that could possibly extend, so `j` drops to it and the
comparison retries — repeatedly, until some candidate agrees or the candidate
is empty. Each position raises `j` by at most one and every fallback strictly
lowers it, which caps the total fallback work at the total growth, hence
linear overall.

Because `pi[n - 1]` is a _proper_ border, it can never equal `n`, and the
"other than `s` itself" rule enforces itself. Overlap comes free as well: for
`"abcabcabc"` the table ends at 6, six being both a prefix length and the
tail's length, with the two copies sharing their middle three characters. A
string like `"mississippi"` simply ends the sweep at 0.

Nothing beyond the table is allocated, and a length-1 input has no proper
prefix at all — its table is a lone zero.

**Complexity:** `O(n)` time, `O(n)` space.
