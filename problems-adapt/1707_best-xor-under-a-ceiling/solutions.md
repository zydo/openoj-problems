# Solutions — Best XOR Under a Ceiling

## Offline Queries with a Binary Trie

Making an XOR large is a greedy walk down the bits: from the most significant
bit to the least, prefer a candidate whose bit disagrees with `x`'s, because
the disagreement is what lights that bit of the result up. A binary trie over
the candidate values performs that walk — at every level take the child holding
the opposite bit when it exists, and otherwise fall back to the matching child.

The per-query ceiling is what gets in the way, and it dissolves under an offline
pass: sort `nums` and sort the queries by their limits. Walk the queries in
increasing limit order, inserting `nums` elements into the trie as their values
come under the running limit. By the time a query is answered, the trie holds
exactly the values its ceiling admits, so the filter costs nothing at query
time.

The trie needs 30 levels (bits 29 down to 0) because every input fits below
2^30. Insertion creates child nodes on demand while walking a value down. A
query whose limit has admitted nothing yet (`ptr == 0`) answers `-1`; every
other query descends greedily, setting `best |= 1 << bit` whenever the wanted
complement child is present.

Since queries arrive in limit order, the insertion pointer only moves forward
and each element enters the trie once. The total work is a constant 30 node
visits per inserted element and per query, on top of the two sorts. Duplicate
values simply retrace existing paths, and each answer is written back through
the original query index carried along in the sorted tuple.

**Complexity:** `O(N log N + Q log Q + 30 (N + Q))` time, `O(30 N)` space.
