# Town Rosters By Region

## Description

Table: `Towns`

| Column Name | Type    |
| ----------- | ------- |
| region      | varchar |
| town        | varchar |

(`region`, `town`) is the primary key (combination of columns with unique
values) for this table.
Each row of this table contains a region name and the name of a town within
that region.

Write a solution to gather all the towns of each region and combine them
into a single comma-separated string.

Return the result table ordered by region and town in ascending order.

Every test case ships its own `dataset`: the statements inside it populate
`Towns` before your query executes. The comma-separated string joins each
region's towns in ascending order, separated by a comma and a space —
exactly as in the examples below — and names are compared by their ordinary
character order (no diacritics appear in any dataset). The result format is
in the following examples.

### Example 1

```text
Input:
Towns table:
+-----------+-----------+
| region    | town      |
+-----------+-----------+
| Northgate | Ashford   |
| Northgate | Brookvale |
| Northgate | Capel     |
| Eastmere  | Dunlow    |
| Eastmere  | Ardley    |
| Southbay  | Corwick   |
+-----------+-----------+
Output:
+-----------+---------------------------+
| region    | roster                    |
+-----------+---------------------------+
| Eastmere  | Ardley, Dunlow            |
| Northgate | Ashford, Brookvale, Capel |
| Southbay  | Corwick                   |
+-----------+---------------------------+
Explanation: Eastmere's two towns join as "Ardley, Dunlow" — Ardley comes
first by character order even though Dunlow was inserted first. Northgate's
three towns join in ascending order, and Southbay's single town needs no
commas at all.
```

### Example 2

```text
Input:
Towns table:
+------------+-----------+
| region     | town      |
+------------+-----------+
| Westhollow | Kirkwall  |
| Westhollow | Kirkby    |
| Westhollow | Kirkham   |
| Midvale    | Langford  |
| Midvale    | Langley   |
| Midvale    | Langholm  |
| Oakreach   | Pinecrest |
+------------+-----------+
Output:
+------------+-----------------------------+
| region     | roster                      |
+------------+-----------------------------+
| Midvale    | Langford, Langholm, Langley |
| Oakreach   | Pinecrest                   |
| Westhollow | Kirkby, Kirkham, Kirkwall   |
+------------+-----------------------------+
Explanation: Inside Midvale, the shared Lang- prefix is not enough:
Langholm precedes Langley because 'h' sorts before 'l' at the first
differing character. Westhollow's three Kirk- towns sort by their
suffixes, and each region's row appears in ascending region order.
```

Write your solution as a single `SELECT` query returning two columns —
`region` and `roster` — one row per region with its towns joined in
ascending order into the comma-separated string, ordered by `region` in
ascending order. Return the result table in that order.
