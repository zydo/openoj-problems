# Solutions — Clients With Two Strong Months

## Two conditional sums answer both months in one aggregation pass

Pricing a month's spend needs `Merch`, and naming the spender needs
`Clients`, so the working set is `Invoices` joined to `Merch` on `sku`
and to `Clients` on `client_id` — one row per invoice line, already
carrying its unit price and the client's name. Grouping that join by
client puts each client's lines into one bucket, and inside the bucket
two conditional sums split the lines by month: each
`SUM(CASE WHEN ... THEN quantity * price ELSE 0 END)` keeps its month's
lines at their value and counts every other line as `0`, so a single
`GROUP BY` produces both totals without a second pass over the data.

The gate is the `HAVING` clause demanding both sums reach $100 — a
client who spent heavily in June but nothing in July fails the second
conjunct, and a July-only spender fails the first. Because
`invoice_date` is stored in ISO `YYYY-MM-DD` form, comparing it against
the literal month bounds with `BETWEEN` sorts correctly as plain text,
so no date-parsing functions are needed.

Every invoice line is visited once by the joins and once by the
aggregation, and the result holds at most one row per client.

**Complexity:** `O(n)` time, `O(n)` space, for `n` invoice lines.
