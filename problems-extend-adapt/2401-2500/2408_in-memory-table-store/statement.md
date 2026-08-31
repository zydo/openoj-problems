# In-Memory Table Store

## Description

Build a tiny in-memory database. The constructor declares several named
tables, each with a fixed number of columns. A row inserted into a table is
assigned a unique numeric id: the first inserted row in that table gets id `1`,
and each later insertion takes the previous id plus one, whether or not that
earlier row was later deleted. A failed insertion neither inserts nor consumes
an id.

Implement the `TableStore` class:

- `TableStore(String[] names, int[] columns)` creates one table per name; the
  `i`-th table has `columns[i]` columns.
- `boolean insertRow(String name, String[] row)` stores `row` under the next
  id of `name` and returns `true`, or returns `false` (without inserting) when
  the name is unknown or `row.length` mismatches the table's column count.
- `void deleteRow(String name, int rowId)` removes that row; unknown tables and
  absent ids are silently ignored.
- `String readCell(String name, int rowId, int columnId)` returns the requested
  cell, or the literal `"<null>"` when the name, id, or column is invalid.
- `String[] exportRows(String name)` returns one comma-joined string per live
  row, ordered by ascending id, each starting with the row's id — for example
  `"1,red,7"`. Unknown tables yield an empty array.

### Example 1

```text
Input:
["TableStore", "insertRow", "insertRow", "readCell", "exportRows", "insertRow", "deleteRow", "readCell", "exportRows"]
[[["alpha","beta"],[2,3]], ["beta",["x","y","z"]], ["alpha",["p","q"]], ["beta",1,2], ["alpha"], ["beta",["u","v","w"]], ["beta",1], ["beta",2,1], ["beta"]]
Output: [null, true, true, "y", ["1,p,q"], true, null, "u", ["2,u,v,w"]]
Explanation: The beta table's second row keeps id 2 even though its first row
was removed, so the final export is ["2,u,v,w"].
```

### Example 2

```text
Input:
["TableStore", "insertRow", "insertRow", "insertRow", "readCell", "deleteRow", "readCell", "exportRows"]
[[["alpha","beta"],[2,3]], ["gamma",["a","b"]], ["beta",["short"]], ["beta",["1","2","3"]], ["beta",1,4], ["beta",7], ["beta",1,1], ["beta"]]
Output: [null, false, false, true, "<null>", null, "1", ["1,1,2,3"]]
Explanation: The first two insertions fail (unknown table, wrong width), so the
third gets id 1; column 4 and row 7 are out of range.
```

### Constraints

- `n == names.length == columns.length`
- `1 <= n <= 10⁴`
- `1 <= columns[i] <= 10`
- Table names, row cells, and table arguments are lowercase English strings of
  length at most 10; all declared names are distinct.
- At most `2 × 10³` calls to `insertRow` and `deleteRow`, `10⁴` to `readCell`,
  and `5 × 10²` to `exportRows`.

### Follow-up

If heavy deletion makes a table sparse, would you change the row store, and
why? Consider memory and the cost of a full export.

## Hints

### Hint 1

Store one record per table: the column count, a row map keyed by id, and the
next id to issue.

### Hint 2

Validate the table name and row width before touching the id counter.
