# The Month-By-City Temperature Grid

## Description

Table: `Readings`

| Column Name | Type |
| ----------- | ---- |
| city_name   | text |
| month_name  | text |
| temp        | int  |

Each row of this table is one temperature reading: the city it was
taken in, the month it belongs to, and the reading itself.

Write a query that turns the rows into a grid: one row per month, with
the month in the first column and every city folded into a column of
its own, each cell holding that city's reading for that month.

Each testcase supplies its own `dataset`: the script seeds the
`Readings` table with that testcase's rows before your query runs, and
the city set differs from testcase to testcase, so the grid's column
list must be discovered from the seeded data. The submission is several
SQLite statements: a discovery `SELECT` returning exactly one row and
one column — the comma-separated pivot column expressions for the
testcase's cities, in lexicographical order, each expression doing its
own quoting — followed by the answer `SELECT` in which every
`__COLUMNS__` placeholder is replaced by that discovered list before
execution. Column names are judged: `month_name` comes first and the
city columns follow in lexicographical order, with null in a cell whose
(month, city) reading is absent from the seed. Rows compare in
lexicographical `month_name` order, the order the example shows.

The result format is in the following example.

### Example 1

```text
Input:
Readings table:
+-----------+------------+------+
| city_name | month_name | temp |
+-----------+------------+------+
| Riverton  | June       | 27   |
| Ashvale   | March      | 9    |
| Riverton  | March      | 14   |
| Ashvale   | May        | 18   |
| Riverton  | May        | 22   |
+-----------+------------+------+
Output:
+------------+---------+----------+
| month_name | Ashvale | Riverton |
+------------+---------+----------+
| June       | null    | 27       |
| March      | 9       | 14       |
| May        | 18      | 22       |
+------------+---------+----------+
Explanation:
The grid has one row per month and one column per city. Riverton
recorded June, March, and May readings while Ashvale recorded only
March and May, so Ashvale's June cell is null. Months come out in
lexicographical order, which puts June before March and May.
```

Write your solution as the two-statement pair described above: a
discovery `SELECT` that renders the cities into pivot column
expressions, then an answer `SELECT` shaped `SELECT month_name,
__COLUMNS__ FROM Readings ...` that aggregates one row per month, in
lexicographical `month_name` order.

## Hints

### Hint 1

SQLite has no dynamic SQL, so let the judge substitute the city list:
render each city as a pivot expression — `max(CASE WHEN city_name =
'...' THEN temp END) AS "..."` — with `quote()` escaping the string
match and `replace(city_name, '"', '""')` escaping the double-quoted
alias, then fuse the expressions with `group_concat(... ORDER BY
city_name)` into the list the placeholder expects.
