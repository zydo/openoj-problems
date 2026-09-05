# Solutions — Merge Contact Records

Both solutions read the input as one graph whose vertices are the addresses
and whose edges say "written down together" — each person is a connected
component of it, and the answer reports the components in first-sighting
order, each as one name followed by its addresses in ascending order. The
traversal builds the graph in the open, then walks each component with an
explicit stack. The disjoint-set structure never writes an edge down at all:
`find` and `union` fold the same connectivity into a forest of parent
pointers, trading an explicit walk for climbs that stay near-constant
amortized.

## DFS over the Email Co-Occurrence Graph

The addresses themselves are the vertices worth tracking, and an entry is a
statement of adjacency: everything it lists was written down together. The
code builds that graph explicitly, but not wastefully — each entry
contributes star edges, its first address joined to each of the others,
which spans the entry with a linear number of edges and lets chains through
shared addresses carry reachability exactly as pairwise edges would.

Components then fall out of a traversal rather than of bookkeeping.
Sweeping the entries in reading order, address by address, the first address
not yet visited opens its component: an explicit stack pops an address,
records it, and stacks every neighbor not already visited, until the
component is exhausted. The stack is a stack and not recursion because one
address can sit in very many entries and the chain can run as deep as the
input is long. Marking on push, not on pop, is what lets each address enter
its component exactly once, so the collected list needs no duplicate pass
before sorting.

The sweep itself supplies both output disciplines. Components take their
numbers at first sighting — which is the judge's slot rule verbatim, each
person slotting where their earliest address turned up — and the name needs
no separate map: the entry being swept holds the address that opened the
component, so that entry belongs to the person and its wording seeds the
name. Entries of one person agree on the name; where two disagree, the
judge's answers print the later record's wording, so each entry re-stamps
the name of every component it touches and the most recent one through the
sweep gets the last word.

Two different people who go by one name never meet in the graph, since
nothing but a shared address ever joins two vertices. Writing `A` for the
total number of addresses, the traversal touches each vertex and each edge
once, and the sorting of the components dominates the work.

**Complexity:** `O(A log A)` time, `O(A)` space.

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
