# Solutions — Compound Words

## Segmentation DP over a hash set

Being compound is a segmentation property, so the whole list can be reduced to
a single membership structure and each candidate examined on its own. The code
first pours every string into a hash set, then asks of each candidate: can it be
cut into pieces that the set recognises, using more than one piece?

The per-candidate answer comes from a boolean array `dp` of length `n + 1`,
indexed by cut position. `dp[i]` records that the first `i` characters have
already been accounted for by recognised pieces, with `dp[0]` true because an
empty prefix costs nothing. Advancing to position `i` means finding a previous
position `j` that is already reachable and a chunk `word[j:i]` sitting in the
set; the first such `j` is enough, so the inner loop breaks the moment one is
found.

One line carries all the weight: the pair `j == 0, i == n` is skipped. That pair
is the cut that consumes the entire candidate in one piece, and every string in
the list would satisfy it — the candidate is in the set, after all. Removing it
means any surviving path through `dp` uses at least two chunks. It also removes
the need to filter the set by length: only proper substrings are ever looked up,
so a piece longer than the candidate can never be consulted, and pieces equal to
it are exactly what the skip forbids. On `["run","way","runway","runwayrunway"]`
the last entry reaches position 6 through "runway" and then position 12 through
"runway" again, while "runway" itself reaches position 3 via "run" and position
6 via "way" — never through the forbidden whole-span cut.

Candidates are tested in input order and the survivors collected as they come,
which is the order the answer wants. With `N` strings, a longest length `L` of
30, and `S` characters overall, one candidate costs `O(L^2)` position pairs and
an `O(L)` slice and hash apiece. The set holds every input string once and
dominates the memory; the `dp` array is rebuilt per candidate and never exceeds
31 cells.

**Complexity:** `O(N·L^3)` time, `O(S)` space.
