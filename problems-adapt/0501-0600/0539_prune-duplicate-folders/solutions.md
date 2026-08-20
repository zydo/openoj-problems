# Solutions — Prune Duplicate Folders

## Trie with Deduplicated Subtree Signatures

Folders are twins when their subtrees are isomorphic down to the names, so
the paths naturally form a trie and twin-detection becomes
subtree-identity detection. The classical device hands every node an
integer signature computed in post-order: a node's signature is the sorted
tuple of `(child name, child signature)` pairs, and two nodes land on the
same signature id if and only if their child maps coincide. The sort
strips out ordering, and because children are keyed by name the comparison
reaches all the way to the leaves.

Concretely, the code grows the trie from `paths`, rounds up every node with
a stack, and walks them in reverse collection order — parents are always
collected ahead of their children, so the reversal is a legitimate
post-order in which each child owns a signature before its parent looks for
one. A `sig_counts` tally records how many nodes carry each signature, and
marking follows one rule: a node with at least one child whose signature
occurs twice or more is a duplicate, and its whole subtree is marked.
Leaf folders are exempt by design — the definition demands a *non-empty*
matching set of subfolders — which is why the test requires
`node["children"]` to be non-empty. Identical leaves still vanish in
Example 1, but only because their parents were marked, never on their own
account.

Both subtleties of the task are honored to the letter. Marking runs
entirely on the original tree, so folders that would only become twins
after the sweep — Example 2's `/p` and `/q` — survive, a consequence of
finishing every signature before deleting anything. And because deleting a
folder takes its descendants too, the stack-based subtree marking covers
the cascade. Survivors are gathered by DFS carrying the running path as a
prefix, then sorted for a deterministic answer.

**Complexity:** `O(P log P)` time where `P` is the total number of path
components, `O(P)` space.
