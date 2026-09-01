# Depot Storage Volume

## Description

Table: `Depot`

| Column   | Type    |
| -------- | ------- |
| name     | varchar |
| crate_id | int     |
| quantity | int     |

`(name, crate_id)` is the combination of columns with unique values
for this table. Each row is one stock line: the depot holding it and
how many units of that crate are on hand there.

Table: `Crates`

| Column     | Type    |
| ---------- | ------- |
| crate_id   | int     |
| crate_name | varchar |
| width      | int     |
| length     | int     |
| height     | int     |

`crate_id` is the column with unique values for this table. Each row
gives one crate's name and its exterior dimensions (`width`, `length`,
and `height`), all in feet.

A logistics team wants to know how much room its inventory really
takes up. One unit of a crate occupies that crate's
`width * length * height` cubic feet, so a stock line's footprint is
its `quantity` times that product. Report the total cubic footage of
stock held in each depot.

Return the result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds `Depot` and
`Crates` with that testcase's rows before your query runs. The result
format is in the following example.

### Example 1

```text
Input: the Depot and Crates tables from the dataset below.
Depot rows:
name     | crate_id | quantity
Dockside | 11       | 3
Dockside | 12       | 1
Uptown   | 13       | 2
Uptown   | 14       | 5
Harbor   | 15       | 2
Crates rows:
crate_id | crate_name | width | length | height
11       | Tile       | 2     | 3      | 4
12       | Lamp       | 1     | 1      | 5
13       | Chair      | 3     | 3      | 6
14       | Desk       | 5     | 4      | 2
15       | Rug        | 9     | 9      | 1
Output:
depot_name | cubic_feet
Dockside   | 77
Harbor     | 162
Uptown     | 308
Explanation: Tile occupies 2 x 3 x 4 = 24 cubic feet per unit and
Lamp occupies 1 x 1 x 5 = 5, so Dockside holds 3 x 24 + 1 x 5 = 77.
Chair occupies 3 x 3 x 6 = 54 and Desk occupies 5 x 4 x 2 = 40, so
Uptown holds 2 x 54 + 5 x 40 = 308. Rug occupies 9 x 9 x 1 = 81, so
Harbor holds 2 x 81 = 162.
```

### Example 2

```text
Input: the Depot and Crates tables from the dataset below.
Depot rows:
name | crate_id | quantity
Alpha | 21      | 4
Beta  | 22      | 2
Crates rows:
crate_id | crate_name | width | length | height
21       | Box        | 2     | 2      | 2
22       | Bin        | 3     | 5      | 7
Output:
depot_name | cubic_feet
Alpha      | 32
Beta       | 210
Explanation: Box occupies 2 x 2 x 2 = 8 cubic feet per unit, so Alpha
holds 4 x 8 = 32. Bin occupies 3 x 5 x 7 = 105, so Beta holds
2 x 105 = 210.
```

Write your solution as a single `SELECT` query returning `depot_name`
and `cubic_feet`, one row for every depot that appears in `Depot`. A
depot's cubic footage is the sum, over its stock lines, of `quantity`
times the crate's `width * length * height`.
