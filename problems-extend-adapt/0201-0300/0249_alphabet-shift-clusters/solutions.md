# Solutions — Alphabet Shift Clusters

## Anchored-offset hash key

Every shift cluster contains exactly one string whose first letter is
`'a'`: shift backward and within 25 steps the leading letter arrives
there. That member is the cluster's anchored form, and computing it is
the same as measuring the offset from the first letter to every letter,
taken mod 26 so the wrap past `'z'` cancels — `"bcd"`, `"cde"`, and
`"xyz"` all anchor to `"abc"`. Two strings land in the same cluster
exactly when their anchored forms match, which makes the anchored form
a perfect hash key: shifted copies collide by construction, unrelated
strings never do.

The algorithm makes a single pass over the input. For each string it
computes the anchored key and appends the original string to the
bucket stored under that key, so cluster membership accumulates
automatically — every string lands in exactly one bucket, alongside
precisely its shifts. Because each append happens in input order,
buckets come out ordered by their key's first appearance, with members
in input order, exactly the output the statement pins. Python hashes
the offset tuple directly; the other six languages encode the same
tuple as a string, mapping each offset onto `'a'`-`'z'` — the anchored
member itself.

One scan of each string builds its key, so over `N` strings of maximum
length `L` the pass does `O(N * L)` work, and the map holds every
string once under a key of its own length, `O(N * L)` space — the size
of the output, which no algorithm can avoid. No special cases are
needed: single-letter strings all anchor to `"a"` and share one
cluster, duplicates of a string land beside it, and strings of
different lengths never collide because the key preserves the string's
length.

**Complexity:** `O(N * L)` time, `O(N * L)` space.
