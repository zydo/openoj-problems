# Solutions — Clean Up the Scan Log

## Canonicalize name and month first, then count inside the groups

The messy name and the precise date both need folding to a canonical
form before any counting happens, and the two folds are independent.
`LOWER(TRIM(item_name))` removes padding around the name and lowercases
what is left, so `'FieldNotes'`, `' fieldnotes'`, and `'FIELDNOTES '`
all become `fieldnotes`; `strftime('%Y-%m', scan_date)` keeps just the
year and month of a sale, so two scans of one item ten days apart share
a group. Neither fold edits the inside of the string, which is exactly
why `'Tape Dispenser'` and `'Tape  Dispenser'` survive as two items —
the rule only promises the outside of the name is cleaned up.

The `GROUP BY` lists both folded expressions rather than either raw
column, so every scan whose canonical name and month agree collects
into a single row and `COUNT(*)` delivers that row's `units`. The
`ORDER BY` reuses the same two expressions — `item_name` ascending,
then `scan_date` ascending — which both satisfies the required order
and keeps it independent of whatever row order the grouping happened
to produce.

**Complexity:** `O(n log n)` time for `n` rows in `Scans` (grouping and
the final sort), `O(n)` auxiliary space for the intermediate groups.
