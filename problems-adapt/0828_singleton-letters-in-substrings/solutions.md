# Solutions — Singleton Letters In Substrings

## Charge the total to individual positions

The sum ranges over quadratically many substrings, so it has to be rearranged
before it can be computed. Every term of the sum is really a pair — a substring
together with one of its singleton letters — and the same pairs can be gathered
by position instead of by substring. Fix an occurrence of a letter and ask how
many substrings it is a singleton of; adding that count over all `n` occurrences
visits each pair once and reproduces the same total.

The count is a rectangle. An occurrence at index `i` is a singleton of a
substring precisely when that substring covers `i` and covers no other copy of
the same letter. Let `p` be the index of the nearest copy on the left and `q` the
nearest on the right. The substring's start may be any of `p + 1 … i`, and its
end any of `i … q - 1`, independently, giving `(i - p) * (q - i)` substrings.

The implementation puts the positions of each of the 26 letters into its own
bucket during a single scan, so the two neighbours of any occurrence are simply
its neighbours inside a bucket. Each bucket is then wrapped with `-1` in front
and the length of `s` behind, which is what lets the first and last copies of a
letter use the same formula as every other copy rather than a special case, and
the products are added along the bucket.

Reading the buckets makes the arithmetic concrete. In `"PEEP"` the P bucket is
`0, 3` and the E bucket is `1, 2`. The first P scores `(0 - (-1)) * (1 - 0) = 1`,
the last P scores `(3 - 0) * (4 - 3) = 3`, and each E scores 1 — four rectangles
totalling 10, agreeing with the direct enumeration in the statement. The repeats
are what keep the rectangles small: a letter appearing once has the whole
`i + 1` by `n - i` rectangle to itself.

One pass fills the buckets and one pass drains them, and the buckets together
hold each index once.

**Complexity:** `O(n)` time, `O(n)` space.
