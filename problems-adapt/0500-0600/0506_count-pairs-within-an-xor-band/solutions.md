# Solutions — Count Pairs Within an XOR Band

## Binary Trie with Subtree Counts

Split the band into two thresholds first: the answer equals the number of
pairs whose XOR stays at most `high` minus the number whose XOR stays at most
`low - 1`. Everything interesting therefore lives in one helper that counts
pairs with XOR bounded by `k`.

The helper streams values through a binary trie of fixed width 16 (the
constraints keep every value under `2^16`). Each value is first queried
against the trie of all earlier values and only then inserted, which visits
every unordered pair exactly once. Nodes carry the number of values that
passed through, so a query can settle entire subtries in a single step.

The query descends from the most significant bit, keeping the invariant that
the XOR of `x` with anything below the current node still agrees with the
prefix of `k`. A `1` bit of `k` means the whole subtree in the direction
matching `x`'s bit yields XOR bit `0` — strictly below `k` at that position —
so its stored count is added at once and the walk turns to the opposite
child, where the prefix still ties. A `0` bit of `k` leaves only the same-bit
child able to keep pace, so the walk simply drops into it. Once the last bit
is done, the surviving node's count covers XOR exactly `k`.

Insertion and query both touch at most `B = 16` nodes per value. The final
subtraction copes with `low = 1` too: `low - 1 = 0` still counts the pairs of
equal values (XOR 0), and those belong outside the band.

**Complexity:** `O(nB)` time, `O(nB)` space.
