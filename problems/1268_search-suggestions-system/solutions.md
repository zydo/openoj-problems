# Solutions — Search Suggestions System

## Sort and Binary Search

Once the products are sorted lexicographically, every set of products sharing a given prefix forms a contiguous run in the array, and the three lexicographically smallest suggestions are simply the first three entries of that run. This turns each typed character into a pure array-lookup question: extend the prefix by one character, locate where that prefix would be inserted to keep the array sorted, and read off up to three consecutive words.

The solution uses `bisect_left` (a hand-rolled lower-bound binary search in the Java version) to find the insertion point of the growing prefix. It then walks forward over at most the next three words, keeping those that still start with the prefix and stopping at the first that does not. Stopping early is what makes the per-step cost independent of how many products match: a prefix with zero matches costs one failed `startsWith`, and a prefix with thousands of matches still only examines three.

Because each prefix extends the previous one by a single character, the scan over `searchWord` naturally produces one suggestion list per typed character. Fewer than three matches (or none) yield shorter or empty lists, exactly as the problem requires; the prefix string is grown incrementally so no character of `searchWord` is reprocessed.

With `n` products, search-word length `m`, and maximum product length `L`, sorting costs `O(n · L · log n)` (each comparison may inspect up to `L` characters), and each of the `m` prefixes costs `O(L · log n)` for the binary search plus `O(L)` for the few prefix checks.

**Complexity:** `O((n + m) · L · log n)` time, `O(n · L + m)` space, where `n` is the number of products, `m` is the length of `searchWord`, and `L` is the maximum product length.
