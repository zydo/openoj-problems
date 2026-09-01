# Solutions — Most-Borrowed Tools per Borrower

## Compare each borrower-tool count against that borrower's own maximum

Grouping `Loans` by `borrower_id, tool_id` collapses each borrower's
rows into one count per tool they ever took out. A correlated
subquery, `SELECT MAX(loan_count) FROM (... GROUP BY tool_id ...)
WHERE borrower_id = t.borrower_id`, recomputes the highest count
reached by whichever borrower the outer row `t` belongs to. Keeping
only the rows where a tool's count equals that maximum keeps every
tool tied for most-borrowed — one when a single tool pulls ahead,
several when two or more share the top count, and none for a borrower
who never took anything out, since they never supply an outer row to
compare against.

The filtered rows join `Tools` to attach the display name, giving the
required `borrower_id`, `tool_id`, `tool_name` columns; the statement
accepts the result in any order, so no final sort is needed.

**Complexity:** `O(n log n)` time and `O(n)` space, where `n` is the
number of loans — grouping and the correlated subquery's per-borrower
aggregation dominate the otherwise-linear join and projection.
