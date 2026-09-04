# Solutions — Top K Frequent Words

The order the answer must carry is a total order: frequency from highest to
lowest, and words of equal frequency in lexicographical order. Every
approach therefore opens with the same counting pass — a hash map from word
to occurrences in one sweep over `words` — and then selects the first `k`
of the unique words under that order.

## Counting Pass, Size-k Min-Heap

Keep a min-heap of only `k` words keyed so the root is the weakest keeper:
the smallest count, and among equal counts the lexicographically largest
word — exactly the final ranking turned inside out. Each unique word
streams through: while the heap holds fewer than `k` words it is pushed
outright; afterwards the newcomer evicts the root only when it outranks it,
meaning a higher count, or an equal count with a lexicographically smaller
word. Because eviction order mirrors the ranking, the `k` survivors are
precisely the top `k` under the statement's order.

The one subtlety is the tie key. The guard that decides eviction inverts
frequency but not the lexicographic order: a newcomer outranks the root on
a higher count, or on an equal count with a smaller word. The heap key must
encode exactly that — root = smallest count, and among equal counts the
largest word — since a plain `(count, word)` min-heap would evict the
lexicographically smallest word of the lowest count and keep the wrong one.
After the sweep, sorting the survivors by (count descending, word
ascending) emits the answer.

**Complexity:** `O(n log k)` time, `O(n)` space.
