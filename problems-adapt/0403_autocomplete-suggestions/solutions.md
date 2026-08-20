# Solutions — Autocomplete Suggestions

## Sort and Binary Search

Sorting the catalog in dictionary order is what makes each keystroke cheap:
all words beginning with a given prefix end up adjacent, so the suggestions
for that prefix are just the first three entries of one contiguous block. The
whole task reduces to locating the block's left end.

So: sort once, then walk the query one character at a time while holding the
prefix typed so far. For each prefix, find the leftmost position where it
could be inserted without breaking the order (`bisect_left` in Python, a
hand-rolled lower-bound loop in Java, `sort.SearchStrings` in Go). From that
position, take up to three consecutive words and stop as soon as one fails to
start with the prefix. Stopping there is what keeps a keystroke cheap: a
prefix matched by a single word costs one comparison, and so does a prefix
matched by the entire catalog.

Because each prefix is the previous one plus a character, growing a single
string across the loop reuses all earlier work, and every keystroke yields
exactly one suggestion list — shorter, never longer, than the last.

Let `n` be the number of words, `m` the length of the query, and `L` the
longest word length. Sorting costs `O(n · L · log n)`, since a comparison may
read up to `L` characters. Each of the `m` prefixes then pays `O(L · log n)`
for the search plus `O(L)` for the few prefix checks.

**Complexity:** `O((n + m) · L · log n)` time, `O(n · L + m)` space, with `n`
words, query length `m`, and maximum word length `L`.
