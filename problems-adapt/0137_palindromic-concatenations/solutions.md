# Solutions — Palindromic Concatenations

## Hash Map Over Every Split

Testing all ordered couples is `O(n^2)` string builds, which the input sizes
rule out. The way around it is to stop asking "does this couple work?" and
start asking "what would complete this string?", because that question has a
constant-time answer once every string sits in a hash map keyed by itself.

Fix a string `w` at index `j` and cut it at each of the `len(w) + 1` positions
into a front and a back. Suppose `w` will be the right-hand half of the result.
Then everything after the partner is `w` itself, and the concatenation is a
palindrome exactly when the front of `w` is a palindrome and the partner equals
the reversal of the back — the partner mirrors the tail, and what remains in
the middle mirrors itself. Symmetrically, when `w` is the left-hand half, the
back of `w` must be a palindrome and the partner must equal the reversal of the
front. Each case is one map lookup, so a string of length `L` is fully resolved
in `L + 1` lookups.

Two guards keep the output honest. A lookup that lands on `j` itself is
discarded, since an index may not pair with itself. And the cut that leaves the
back empty describes the same couple as the partner's cut that leaves its front
empty, so one of the two branches skips that position; without the guard every
reversed couple would be reported twice. Collecting into a set and sorting at
the end makes the result canonical, which costs nothing next to the scan.

The rules fall out for the awkward inputs on their own. An entry of length zero
has a palindromic front and a palindromic back, so it partners with every
palindromic string in both directions. A palindromic string partners with any
other palindromic string in both directions for the same reason.

**Complexity:** `O(Σ|w|^2)` time over the strings — `L + 1` cuts of cost `O(L)`
each for the slice, reversal and palindrome test — plus the sort of the
reported pairs, and `O(n + P)` space for the map and the `P` pairs returned.
