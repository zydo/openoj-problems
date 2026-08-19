# Solutions — Split Into Letter-Exclusive Parts

## Greedy last-occurrence sweep

Fix the piece that begins at some index. Whatever letters it contains, it must
run at least as far as the final occurrence of each of them; a copy left outside
would put that letter into two pieces. So the first piece ends exactly at the
largest final occurrence among the letters it swallows — no earlier, and there
is no reason to go later. The very same reasoning then applies to whatever
remains of the string, which makes the boundaries forced rather than chosen, and
therefore makes greedy optimal: any legal split must respect these boundaries,
and skipping one merely fuses two pieces into one, reducing the count.

Turning that into code needs one preparatory pass, recording for every letter
the largest index at which it appears, and one sweep. The sweep carries two
positions: where the current piece opened, and the furthest final occurrence
among the letters met since it opened. At each index the second position is
raised to include the current letter's final occurrence. When the index and that
position coincide, everything opened inside the piece has also closed inside it,
so the piece is emitted with length `end - start + 1` and the next one opens at
the following index.

The degenerate inputs need no special handling. A string of a single repeated
letter never lets the index catch the mark until the end and yields one piece; a
string of pairwise distinct letters has every mark equal to the current index
and yields as many pieces as characters.

**Complexity:** `O(n)` time, `O(1)` space — the table of final occurrences never
exceeds the 26 lowercase letters.
