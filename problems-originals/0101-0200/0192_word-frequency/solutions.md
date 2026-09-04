# Solutions — Word Frequency

## Count in a hash map, sort by descending frequency

Splitting the text on runs of whitespace yields every word exactly once per occurrence — the statement's "one or more whitespace characters" rule is precisely what a whitespace split implements, and leading or trailing separators produce no empty words. A hash map then turns that stream into one counter per distinct word, so the counting pass is linear in the size of the file.

The ranking pass sorts the distinct `(word, count)` pairs by count descending, with the word in ascending lexicographic order as the tiebreaker, and renders each pair as a `word count` line — the exact line form the original script prints. Different counts are ordered by the sort; equal counts are pinned by the tiebreaker, so the returned list is fully determined by the input.

**Complexity:** `O(n log d)` time for `n` words with `d` distinct among them, `O(d)` space.
