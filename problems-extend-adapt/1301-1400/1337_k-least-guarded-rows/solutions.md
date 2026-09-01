# K Least-Guarded Rows

## Approach: Sum each row, sort (strength, index) pairs

A row's strength is its manned-post count — and because each row is all 1's
then all 0's, the count is also the index of the first 0, so summing the
row (or scanning to the first abandoned post) reads it directly. The weakness
order is exactly the lexicographic order of (manned-post count, row index)
pairs: fewer guards first, and on ties the smaller index first.

Sorting all m pairs and taking the first k answers the question; m ≤ 100
makes the heap/binary-search optimizations unnecessary, and sorting all
rows (not just k) keeps the tie rule trivially correct.

**Complexity:** O(m·n + m log m) time, O(m) space.
