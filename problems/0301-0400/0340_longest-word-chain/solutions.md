# Solutions — Longest Word Chain

## DP by Shortening One Letter

The productive move is to invert the relation. Lengthening a word asks "which
letter, inserted where?" — a branching search. Shortening asks something a
hash map can answer: drop the letter at each position and check whether the
result is a word we have already solved. Since a word's shorter neighbours
are always exactly one letter shorter, visiting the words in length order
guarantees those neighbours are all behind us, and one pass replaces any
explicit graph construction.

The table `dp` keeps, per word, the longest chain that terminates there. A
word of length L contributes L shortened variants; its entry is one above
the largest entry among variants found in the table, defaulting to 1 because
a word on its own is a legitimate chain. The overall answer is the largest
entry ever recorded. Testing every deletion position is what makes the
letter-order condition automatic — a shortened variant preserves the order
of everything it keeps, which is precisely the growth relation.

Two loose ends: duplicates are collapsed up front (a word cannot grow into
itself, so repeated words never extend anything), and a list with no related
pair simply leaves every entry at 1. Each word costs L slice-and-join
operations on strings of length L plus L dictionary probes.

**Complexity:** `O(N log N + N·L²)` time, `O(N·L)` space, for N words of
maximum length L.
