# Solutions — Tree Paths That Rearrange to Palindromes

## Root Parity Masks with Hash Counting

A bag of letters reshuffles into a palindrome exactly when at most one letter
has odd multiplicity, so parity carries the entire content of a path. Encode
each letter as one bit and store on every node `v` the value `mask[v]`, the
XOR of the letters along the root-to-`v` route. The letters of the path
between `u` and `v` then have parity `mask[u] XOR mask[v]`: whatever the two
routes share above their meeting point appears in both masks and cancels. The
pair counts precisely when that XOR is zero (every letter even) or a lone set
bit (exactly one odd).

The tree arrives as a parent array, so the code builds child lists and
produces every mask in one ordered walk out of node 0, deriving each child's
mask from its parent's by XOR-ing the child's edge letter. `s[0]` never
enters the computation because the root has no incoming edge.

Counting pairs reduces to accumulating mask frequencies in a hash map: for
each mask `m`, add the frequency of `m` itself plus the frequency of
`m XOR (1 << b)` for all 26 one-bit variants, and only then record `m`.
Reading the map before inserting the current mask is what guarantees each
unordered pair is counted once.

**Complexity:** `O(26n)` time, `O(n)` space.
