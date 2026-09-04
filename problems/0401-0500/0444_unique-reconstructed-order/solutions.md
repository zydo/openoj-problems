# Solutions — Unique Reconstructed Order

## Pinned adjacencies

Every value of `[1, n]` must occur in a supersequence of `sequences`, so
none is shorter than `n`, and a supersequence of length `n` uses each value
exactly once — it is a permutation. A permutation embeds every
`sequences[i]` exactly when it keeps each consecutive pair of each sequence
in order, so all the sequences really pin is a set of pairwise precedences,
and the shortest supersequences are precisely the permutations that respect
them all.

Swapping two adjacent values of such a permutation changes nothing unless a
pinned pair orders them, so whenever some adjacent pair of `nums` is not
itself pinned — not seen as a consecutive pair inside some `sequences[i]` —
flipping it produces a second shortest supersequence. `nums` is therefore
the only shortest supersequence exactly when every one of its `n - 1`
adjacent pairs is pinned; an unpinned adjacency always means an alternative
order of the same length. For `n == 1` there are no adjacencies to pin and
the answer is trivially true.

The code scans each sequence once. A value outside `[1, n]`, or a pair that
runs backwards in `nums`, means its sequence never embeds in `nums` at
all — `nums` is then not even a supersequence — so the scan stops with
`false`. A pair may also skip ahead (`v` later than `u` but not immediately
after); that pins nothing new but stays consistent, while a pair with `v`
directly after `u` pins the adjacency slot between them. The method
finishes by checking that all `n - 1` slots were pinned.

**Complexity:** `O(total sequence length + n)` time, `O(n)` space.
