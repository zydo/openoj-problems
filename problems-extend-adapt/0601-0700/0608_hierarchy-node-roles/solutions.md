# Solutions — Hierarchy Node Roles

## Classify with parent membership

A null `parent_node_id` identifies the root immediately. For every other
node, the query asks whether its `node_id` appears as a non-null
`parent_node_id` elsewhere in `ReportingTree`: absence means `Leaf`, and
presence means `Inner`.

The subquery explicitly filters null parent values. Without that filter,
`NOT IN` would compare against a set containing `NULL`, producing unknown
rather than true for every potential leaf. The root test comes first because
a one-node tree's root has no children as well.

The parent identifier set is built once and membership is checked for each
of `n` rows.

**Complexity:** `O(n)` time, `O(n)` space.
