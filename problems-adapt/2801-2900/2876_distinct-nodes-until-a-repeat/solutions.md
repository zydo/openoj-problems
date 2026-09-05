# Solutions — Distinct Nodes Until a Repeat

## Functional-graph walking in one pass per piece

One outgoing edge per node makes this a _functional graph_: every walk is
deterministic, so it runs through some tail of fresh nodes and then loops a
cycle forever. The first repeat happens exactly when the walk closes the
cycle, which means the count for a start `x` is `tail(x) + cycle(x)` — the
number of steps before its piece's cycle plus that cycle's length. Nodes
already on a cycle have zero tail, so their answer is the cycle length
itself. In Example 1 the cycle `0 -> 1 -> 2 -> 3` has length 4, node `4`
sits one step outside it, node `5` two steps: answers 4, 5 and 6.

Simulating every start independently would be quadratic, because walks
share tails and cycles wholesale. Instead each node carries a state —
untouched, on the current walk, or resolved — and starts are skipped once
resolved. From an unresolved start, follow edges while nodes are untouched,
marking and recording them in walk order. The walk ends two ways:

- It lands on a node of the _current_ walk: a new cycle just closed. The
  recorded position of that node splits the walk into tail and cycle.
  Cycle members get the cycle length; each tail node gets the cycle length
  plus its distance to the cycle's entry.
- It lands on an already-resolved node: the whole new walk is a tail into a
  known piece, so node at walk depth `d` gets the resolved node's answer
  plus the number of fresh nodes after it. Example 2's node `4` resolves
  this way against cycle member `0`'s answer of 2, giving 3.

Every node is placed on a walk once and resolved once, so the sum of all
walk lengths is `n` — even the linear search for the cycle's entry inside
the recorded path is paid once per piece. The result is linear overall,
with an `O(n)` array of states as the only extra storage.

**Complexity:** `O(n)` time, `O(n)` space.
