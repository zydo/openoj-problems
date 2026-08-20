# Solutions — Distinct Three-Letter Palindromes

## First and Last Occurrence per Letter

Choosing the two equal outer letters and the single middle letter determines
a three-letter palindrome outright, so nothing beyond 26 × 26 strings can
ever answer the question. Better still, the palindrome `x y x` hides inside
`s` exactly when some `y` appears strictly between the first and the last
`x`: given such a `y`, that leading `x`, the `y`, and the trailing `x` line
up in order; conversely, anchoring the outers at the outermost `x` positions
is the roomiest arrangement possible, so if no `y` fits there, no tighter
pair could work either. Take `s = "bacabab"`: between the first and last `b`
sit `a`, `c`, and `b` themselves, donating `bab`, `bcb`, `bbb`, and the span
between the outer `a`s donates another three.

Since the count is over distinct palindromes, repeats must collapse — several
copies of one middle letter, or several usable pairs of `x`, still produce a
single string. So for each letter `x` the code opens the interval between its
first and last index and measures `len(set(...))` of the characters inside —
a set, never a tally of positions — summing over the alphabet. A letter that
is absent, or whose two extreme occurrences touch or overlap
(`last - first < 2`, no room for a middle), adds nothing; that is why
`"aabb"` answers 0 even though both letters double up.

The work per letter is one `find`, one `rfind`, and one slice-to-set pass,
each linear in `n` — comfortable at `n = 10⁵`. The slice and set can
temporarily hold the whole string, which dominates memory.

**Complexity:** `O(26·n)` time, `O(n)` space.
