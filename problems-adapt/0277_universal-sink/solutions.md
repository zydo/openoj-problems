# Solutions — Universal Sink

## Elimination Then Verification

The definition turns any single matrix entry into a two-way verdict. Look
at `graph[a][b]`: a `1` means `a` sends an edge, and a sink sends none, so
`a` is out; a `0` means `b` receives nothing from `a`, and a sink receives
from everyone, so `b` is out. Either way one lookup retires exactly one
vertex, which sets the floor for the whole problem at `n - 1` lookups to
dispose of `n - 1` suspects.

The elimination pass arranges those lookups as a walk. It carries one
survivor, starting at vertex 0, and for each later vertex `i` consults the
single entry `graph[survivor][i]`: on a `1` the survivor is retired and
`i` takes its place, on a `0` vertex `i` is retired on the spot. Every
vertex other than the final survivor left the contest by direct violation
of one of the two defining clauses, so the survivor is the only vertex
that can still be the sink — there is never a second candidate to check.

"Can still be" is weaker than "is", because the survivor was tested only
against vertices it met while alive. In `[[1,1,0],[0,1,1],[0,0,1]]` the
walk hands the crown to vertex 2 (0 sends to 1, 1 sends to 2), yet vertex
0 has no edge into 2, and the answer is `-1`. A verification pass is
therefore non-negotiable: the survivor's row must be clear of 1s (besides
the self-entry) and its column must be nothing but 1s, with the first
violation returning `-1`.

Each pass reads at most `n` entries beyond the diagonal bookkeeping, so
the matrix is touched `O(n)` times and nothing beyond two index variables
is stored — which is what makes the approach work unchanged when the
matrix is hidden behind a per-query oracle.

**Complexity:** `O(n)` time, `O(1)` space.
