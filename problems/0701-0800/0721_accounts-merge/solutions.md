# Solutions — Accounts Merge

## Union-Find over Emails

Treat every email address as a node in a union-find structure. For each account, every email is unioned with the account's first email, so all emails of one account — and, transitively, of any chain of accounts sharing emails — end up under a single root. `find` compresses paths by halving as it walks, keeping later lookups effectively constant-time.

A second pass over the accounts, in input order, groups emails by root: each email is looked up and added to its root's set, and the first time a root is seen it is appended to an order list. This preserves exactly the output ordering the judge requires — merged accounts appear in the order of the earliest-appearing email of each component. The name attached to each merged account is the owner recorded for the root email; every account in a component belongs to the same person, so any member's name works.

Each component's emails are sorted before being appended to the name, duplicate emails within one account are absorbed by the set, and same-named people whose emails never coincide stay in separate components, as the problem demands. With `A` the total number of emails, the union-find operations are near-linear and the per-component sorts dominate the running time.

**Complexity:** `O(A log A)` time, `O(A)` space.
