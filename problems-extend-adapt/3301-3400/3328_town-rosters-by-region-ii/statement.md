# Town Rosters By Region II

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

Where the first roster report simply joined every region's towns into one
string, this pass grades the rosters as well. Write a solution that
analyzes the towns of each region under the following requirements:

- Combine all the towns of a region into one comma-separated string.
- Keep only regions holding at least 3 towns.
- Keep only regions where at least one town begins with the same letter
  the region name begins with.
- Count, for every kept region, how many of its towns begin with that
  same letter.

Return the result table ordered by that count in descending order, then
by region name in ascending order.

Every test case ships its own `dataset`: the statements inside it populate
`Towns` before your query executes. Inside each kept row the towns are
joined in ascending order — comparing names case-insensitively with
spaces ignored, so `Elm shade` precedes `Ember` — and separated by a
comma and a space, exactly as in the examples below. The result format is
in the following examples.

### Example 1

```text
Input:
Towns table:
+----------+----------+
| region   | town     |
+----------+----------+
| Dunmarr  | Dapple   |
| Dunmarr  | Coten    |
| Dunmarr  | Deverill |
| Dunmarr  | Dray     |
| Eastport | Embry    |
| Eastport | Fenwick  |
| Eastport | Easley   |
| Eastport | Crowe    |
| Wycliffe | Amble    |
| Wycliffe | Corfe    |
| Wycliffe | Tarring  |
| Oxley    | Otley    |
| Oxley    | Osmote   |
+----------+----------+
Output:
+----------+--------------------------------+----------------+
| region   | roster                         | letter_matches |
+----------+--------------------------------+----------------+
| Dunmarr  | Coten, Dapple, Deverill, Dray  | 3              |
| Eastport | Crowe, Easley, Embry, Fenwick  | 2              |
+----------+--------------------------------+----------------+
Explanation: Dunmarr's four towns join in ascending order, and three of
them — Dapple, Deverill, and Dray — start with D, so its letter count is
3. Eastport keeps two E-towns, Embry and Easley, out of four. Wycliffe
has three towns but none starts with W, so it is dropped; Oxley has two
matching towns but only two towns in total, short of the minimum of
three, so it is dropped as well. Dunmarr's higher count lists it first.
```

### Example 2

```text
Input:
Towns table:
+-----------+-----------+
| region    | town      |
+-----------+-----------+
| Fairholt  | Fair haven|
| Fairholt  | Fable     |
| Fairholt  | Cranloe   |
| Ellsworth | Elm shade |
| Ellsworth | Ember     |
| Ellsworth | Dorley    |
+-----------+-----------+
Output:
+-----------+--------------------------+----------------+
| region    | roster                   | letter_matches |
+-----------+--------------------------+----------------+
| Ellsworth | Dorley, Elm shade, Ember | 2              |
| Fairholt  | Cranloe, Fable, Fair haven | 2            |
+-----------+--------------------------+----------------+
Explanation: Both regions keep two towns that share their region's
first letter — Elm shade and Ember for Ellsworth, Fable and Fair haven
for Fairholt — so the tie is settled by region name, Ellsworth first.
The roster order ignores spaces: with spaces stripped, Elm shade sorts
ahead of Ember, and Fair haven closes Fairholt's roster even though it
starts with F.
```

Write your solution as a single `SELECT` query returning three columns —
`region`, `roster`, and `letter_matches`, in that order — one row per
qualifying region, where `roster` joins the region's towns in ascending
order (case-insensitive, spaces ignored) into one comma-separated
string, and `letter_matches` counts the region's towns beginning with
the same letter as the region name. Rows come back ordered by
`letter_matches` descending, then `region` ascending.
