# Solutions — Count Strings Avoiding a Pattern

## Digit DP with a substring-automaton state

Enumerating length-`n` strings between two bounds is a digit DP whose digits
happen to be letters. Write the candidate left to right with two flags riding
along: `lo`, set while the prefix built so far still matches `s1` character
for character (so the next letter may go no lower than `s1[pos]`), and `hi`,
its counterpart against `s2`. Once a prefix pulls away from a boundary, that
flag clears permanently and the corresponding side is a free `a`..`z` range.
The recursion `dfs(pos, state, lo, hi)` sums over the admissible next letters.

The pattern ban joins the state as `state`, the length of the longest suffix
of the built prefix that begins `pattern` — the KMP automaton state. One
preprocessing pass builds `pattern`'s failure function; appending a letter
then walks failure links until the letter extends a prefix of `pattern` or the
state empties, and a walk that reaches `state == len(pattern)` has just
finished a forbidden occurrence, so that branch dies on the spot. Ordering the
guards matters at the far end: a string completing `pattern` with its final
letter must still count as zero, which is why the `state` check precedes the
`pos == n` acceptance.

Memoization on `(pos, state, lo, hi)` is valid because a state's future
depends on nothing else; there are `n * m * 4` of them (`m = len(pattern)`),
each expanding at most 26 letters whose failure walks cost at most `m`. In
Example 2 the walk from `state = 0` dies at every `a`-then-`b` step, and the
whole range contributes nothing; in Example 3 the flags stay pinned for the
string's full length and exactly one candidate is ever examined. A pattern
longer than `n` can simply never complete, and counts are reduced modulo
`10^9 + 7` as they are summed.

**Complexity:** `O(26 * n * m^2)` time, `O(n * m)` space.
