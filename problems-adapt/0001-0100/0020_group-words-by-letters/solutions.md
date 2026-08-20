# Solutions — Group Words By Letters

## Sorted-String Hash Key

Belonging together is an equivalence relation, so the efficient move is to name
each class rather than to test pairs. A word's letters written in a fixed order
is such a name: two words that use the same letters equally often produce the
same string, and two words that do not cannot, because the written form
determines the letter counts and the counts determine it back.

One pass suffices. For each word, sort its characters into a key and append the
original word to the bucket filed under that key, creating the bucket the first
time the key is seen. Nothing has to be compared, merged or revisited — each
word joins its class as it arrives, and the buckets in the order they were
opened are the answer. Using a dictionary that preserves insertion order is
what makes the output deterministic: groups come out ordered by first
appearance and members in arrival order, which is what the statement promises.

Nothing needs a special case. The empty string sorts to the empty string and
files under a key of its own. A word nobody rearranges into leaves its bucket a
singleton. Two identical words obviously share a key, so a repeat lands beside
its twin rather than being deduplicated — as in `["pot","top","opt","pot"]`,
which comes out as a single group of four.

For `N` words of length at most `L`, the sort dominates each word at
`O(L log L)`, giving `O(N · L log L)` overall; the hashing and the append are
linear in `L`. The dictionary stores each word once plus a key no longer than
the word, which is `O(N · L)` — the same order as the output itself, so no
approach can do better on space. Counting letters into 26 slots and using the
counts as the key trades the `log L` away for a slightly bulkier key; the sort
is kept here because it is shorter to read.

**Complexity:** `O(N · L log L)` time, `O(N · L)` space.
