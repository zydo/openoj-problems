# Solutions — Flattening the Price Grid Into Rows

## Discover the seller columns, then expand every row

The seller columns change from testcase to testcase, so the submission starts with a discovery `SELECT` over SQLite's table-valued pragma `pragma_table_info('PriceGrid')`, which yields one row per column of the seeded table in declaration order. Filtering out `item_id`, it renders each remaining column twice — `quote(name)` as a string literal and `replace(name, '"', '""')` wrapped in double quotes as a column reference — and `group_concat` fuses the pairs into one comma-separated list. The judge substitutes that list into every `__COLUMNS__` of the following statements.

The answer `SELECT` unpivots through JSON expansion: `json_object(__COLUMNS__)` builds, for each row of `PriceGrid`, a JSON object mapping every seller's name to that row's column value, and the lateral `json_each` join explodes that object into one (key, value) pair per seller — so `PriceGrid CROSS JOIN json_each` multiplies each stored row into n candidate rows carrying `json_each.key` as the seller name and `json_each.value` as the offer. A SQL `NULL` cell becomes a JSON `null` and reads back as SQL `NULL`, so `WHERE json_each.value IS NOT NULL` drops exactly the pairs where the seller does not carry the item, while a genuine `0` offer is a JSON number and survives. The output exposes the three judged column names via aliases, ordered by `item_id` then `seller` as the canonical form.

The discovery is one catalog scan; the answer streams the cross product of n stored rows with their s ≤ 30 seller columns — each row of `PriceGrid` is visited once and expanded s times.

**Complexity:** O(n·s) time over n items and s ≤ 30 sellers, O(n·s) space for the result.
