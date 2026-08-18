# Solutions — Merge Contact Records

## Union-Find over Emails

The addresses are the vertices worth tracking. Everything the input says is of
the form "these addresses belong to one person", and the answer asks for the
resulting clusters, which is precisely what a disjoint-set structure keyed by
the address strings maintains. No pre-numbering is needed: `find` inserts a
string the first time it sees it, and it flattens as it climbs, pointing each
visited node at its grandparent so later climbs stay short.

Linking an entry does not require every pair inside it. Attaching each address
to the entry's first address puts them all under one representative, and if any
of them already belonged to an earlier cluster, that cluster is dragged in with
it — which is how a chain of entries that only touch pairwise ends up fused.
The same sweep records, for each address, the name written beside it. All
entries of a cluster carry the same person's name, so whichever one survives on
the representative is the right one to print.

Order is the part it would be easy to get wrong, and the fix is to make a
second pass over the input rather than over the structure. Walking the entries
in their original sequence and each entry's addresses left to right, the first
time a representative appears it is appended to a list of clusters in
first-sighting order; every address is dropped into its representative's set,
which quietly absorbs the duplicates the input may contain. Emitting the
clusters in that recorded order, each as its name followed by its sorted set,
matches what the judge compares against.

Two people who happen to share a name never meet in the structure, since
nothing but a shared address ever links anything. Writing `A` for the total
number of addresses, the set operations are near-linear and the sorting of the
clusters dominates.

**Complexity:** `O(A log A)` time, `O(A)` space.
