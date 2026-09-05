# Solutions — Most Connected Member

## Combine both endpoints before counting

Every confirmed link contributes one connection to both its sender and its
recipient. The common table expression uses `UNION ALL` to make one
`member_id` stream from `sender_id` and `recipient_id`; `UNION ALL` is
important because repeated appearances represent distinct connections.

Grouping the stream counts each member's connections. Sorting those groups
by `connection_total` and taking one row returns the unique leader guaranteed
by the input.

For `N` links and `P` distinct members, creating the endpoint stream is
linear, while ordering the `P` aggregated groups dominates afterward.

**Complexity:** `O(N + P log P)` time, `O(P)` space.
