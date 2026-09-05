# Solutions — Running Account Balances

## Partitioned running sum

Turn each movement into a signed change: a deposit contributes its
positive `amount`, while a withdrawal contributes the negated amount. A
windowed `SUM` partitioned by `account_id` and ordered by `moved_on` then
accumulates exactly the balance after each movement, restarting from zero
for every account.

The explicit `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` frame says
that every earlier movement of the account counts through the current row.
A final `ORDER BY account_id, moved_on` produces the ordering the
statement demands for the exact row comparison.

**Complexity:** `O(M log M)` time and `O(M)` engine space for partition
ordering, where `M` is the number of movements.
