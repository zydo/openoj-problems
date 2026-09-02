# Each Performer's Chart Count

## Description

Table: `Charts`

| Column Name | Type    |
| ----------- | ------- |
| entry_id    | int     |
| song_title  | varchar |
| performer   | varchar |

`entry_id` is the primary key (column with unique values) for this table.
Every row is one entry on the chart: the entry's id, the title of the song,
and the performer behind it.

Tally how many chart entries each performer has — a performer's count is
simply the number of rows carrying their name.

Return the result table with each performer's name next to their tally,
ordered by the tally from highest to lowest. Performers with equal counts
are listed alphabetically by name.

Every test case ships its own `dataset`: the statements inside it populate
`Charts` before your query executes. The result format is in the following
examples.

### Example 1

```text
Input:
Charts table:
+----------+---------------+--------------+
| entry_id | song_title    | performer    |
+----------+---------------+--------------+
| 5081     | Neon Rivers   | Velvet Hour  |
| 5082     | Paper Kites   | Driftwood    |
| 5083     | Static Bloom  | Velvet Hour  |
| 5084     | Harbor Lights | Driftwood    |
| 5085     | Cold Coffee   | Ash & Oak    |
| 5086     | Night Bus     | Ash & Oak    |
+----------+---------------+--------------+
Output:
+-------------+-------------+
| performer   | appearances |
+-------------+-------------+
| Ash & Oak   | 2           |
| Driftwood   | 2           |
| Velvet Hour | 2           |
+-------------+-------------+
Explanation: All three performers sit at two entries apiece, so the counts
tie and the names themselves decide the order: Ash & Oak, then Driftwood,
then Velvet Hour.
```

### Example 2

```text
Input:
Charts table:
+----------+------------+------------+
| entry_id | song_title | performer  |
+----------+------------+------------+
| 7001     | Lead       | Northwind  |
| 7002     | Follow     | Northwind  |
| 7003     | Third      | Northwind  |
| 7004     | Solo Act   | northwind  |
| 7005     | Duet       | Solstice   |
| 7006     | Reprise    | Solstice   |
+----------+------------+------------+
Output:
+-------------+-------------+
| performer   | appearances |
+-------------+-------------+
| Northwind   | 3           |
| Solstice    | 2           |
| northwind   | 1           |
+-------------+-------------+
Explanation: Names are matched exactly as written — `Northwind` and
`northwind` differ in case, so they are counted as two separate performers
(3 entries versus 1) rather than merged.
```
