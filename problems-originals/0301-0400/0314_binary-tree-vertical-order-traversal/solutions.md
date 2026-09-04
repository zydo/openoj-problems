# Solutions — Binary Tree Vertical Order Traversal

## Breadth-first search with column indices

Give every node a column: the root sits at column 0, a left child one column
left of its parent, a right child one column right. A breadth-first queue that
carries (node, column) pairs then visits nodes exactly in the order the answer
needs — top to bottom, and within a row left to right — so each node's value is
simply appended to its column's list as it is dequeued. That dequeue order is
also what settles ties: two nodes sharing a row and a column enter the queue
with the left one first, because siblings are enqueued left before right.

As the traversal runs, the values accumulate in a map from column to its list,
and the smallest and largest column seen are tracked on the side. The visited
columns form one contiguous range — a column is only ever reached by a step of
one from a neighboring column — so the answer is just each column's list from
the minimum column to the maximum, with no sorting and no gaps to fill.

Depth-first search would not do: visiting a left subtree completely before the
right one dequeues a deep node in some column ahead of a shallower node in the
same column, which breaks the top-to-bottom rule the row/column sort would
otherwise have to restore. Breadth-first order makes the ordering rule a
property of the traversal itself rather than something to re-derive.

**Complexity:** `O(n)` time — each node is enqueued and dequeued once, and the
final pass walks the column range once — and `O(n)` space for the queue and the
column lists.
