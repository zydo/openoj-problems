# The Winery Podium by Nation

## Description

Table: `Estates`

| Column Name | Type    |
| ----------- | ------- |
| estate_id   | int     |
| nation      | varchar |
| rating      | int     |
| winery      | varchar |

`estate_id` is the unique key of this table. Each row is one rated wine
from a winery, recorded with the nation the estate sits in and the score
that wine was given.

A winery competes within one nation: its total is the sum of the
`rating` values of all its rows in that nation, and the same winery name
under two different nations counts as two independent competitors. Build
each nation's podium: rank the nation's wineries by total score
descending, breaking ties by winery name ascending, and take the first
three. Each podium slot holds the winery name followed by its total in
parentheses, like `CasaVigna (179)`. When a nation has no second or
third winery, that slot holds the exact text `'No second winery'` or
`'No third winery'` instead.

Return the columns `nation`, `top_winery`, `second_winery`, and
`third_winery` — exactly one row per nation present in the table,
ordered by `nation` in ascending order.

Every testcase carries its own `dataset`: the DDL loads the `Estates`
table with that testcase's rows. The example below shows the result
format.

### Example 1

```text
Input:
Estates table:
+-----------+----------+--------+-------------+
| estate_id | nation   | rating | winery      |
+-----------+----------+--------+-------------+
| 31        | Italy    | 88     | CasaVigna   |
| 32        | Italy    | 91     | CasaVigna   |
| 33        | Italy    | 84     | LunaColina  |
| 34        | Italy    | 90     | TerraAlta   |
| 35        | Italy    | 90     | AuroraFarms |
| 41        | Peru     | 77     | SoloSol     |
| 51        | Chile    | 70     | ValleVerde  |
| 52        | Chile    | 70     | ValleVerde  |
+-----------+----------+--------+-------------+
Output:
+-----------+-----------------+-----------------+-----------------+
| nation    | top_winery      | second_winery   | third_winery    |
+-----------+-----------------+-----------------+-----------------+
| Chile     | ValleVerde (140)| No second winery| No third winery |
| Italy     | CasaVigna (179) | AuroraFarms (90)| TerraAlta (90)  |
| Peru      | SoloSol (77)    | No second winery| No third winery |
+-----------+-----------------+-----------------+-----------------+
Explanation
For Italy
 - CasaVigna totals 88 + 91 = 179 points, the nation's highest.
 - AuroraFarms and TerraAlta tie on 90 points; the tie is broken by
name, so AuroraFarms takes second place and TerraAlta third.
 - LunaColina, with 84 points, misses the podium in fourth.
For Chile
 - ValleVerde's two rows total 70 + 70 = 140 points, making it the
only winery in the nation, so the second and third slots hold the
placeholder text.
For Peru
 - SoloSol is the sole winery, earning 77 points, so it takes the top
slot alone.
The output table is ordered by nation in ascending order.
```

The podium renders three labeled slots, not peer groups: a tie is always
resolved into distinct positions by the name order, so the second and
third slots never merge or stay empty for a nation with three or more
wineries. Write your solution as a single `SELECT` query.
