# Solutions — Client Revenue per Agent

## Left-join the chain, sum with a zero fallback

The money path runs agent -> client -> purchase, and the report needs
every agent row even when that path is empty — so the joins must be
LEFT joins. Starting from `Agent`, joining `Client` on
`agent_id` keeps agents without clients (their client
columns go NULL), and the second LEFT join to `Purchases` on `client_id`
keeps clients who never bought anything the same way. A chain of inner
joins would silently delete exactly the rows the statement insists on
reporting.

With each agent's rows gathered, `GROUP BY` collapses them to one
line per agent and `SUM(price)` totals their clients' purchases.
NULL handling is the last detail: for Noor-style rows every joined
`price` is NULL, and plain `SUM` returns NULL rather than 0, so
`COALESCE(SUM(price), 0)` substitutes the required zero.

Joining and grouping sweep the tables once against their keys; sorting is
unnecessary because the comparison accepts any row order.

**Complexity:** `O(A + C + L)` rows processed (agents, clients,
purchase lines), `O(C)` space for the join hash of clients.
