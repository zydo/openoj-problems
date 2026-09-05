# Backfill the Blank Rows

## Description

Table: `GroceryRun`

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| item        | varchar |

`id` is the primary key (column with unique values) for this table.

Each row is one line of a grocery run: the line's `id` and the item
noted on it. Some lines were left blank — their `item` is null.

Write a solution to fill every blank `item` with the item written on the
nearest earlier line that is not blank, where lines are ordered by
ascending `id`. It is guaranteed that the first line of the table is not
blank, so every blank has something to inherit from.

Return the result table in ascending `id` order — the same order as the
input.

The result format is shown in the following examples.

### Example 1

```text
Input:
GroceryRun table:
+----+------------+
| id | item       |
+----+------------+
| 4  | Oat Milk   |
| 1  | Bananas    |
| 7  | Rye Bread  |
| 2  | null       |
| 9  | null       |
| 5  | null       |
+----+------------+
Output:
+----+------------+
| id | item       |
+----+------------+
| 1  | Bananas    |
| 2  | Bananas    |
| 4  | Oat Milk   |
| 5  | Oat Milk   |
| 7  | Rye Bread  |
| 9  | Rye Bread  |
+----+------------+
Explanation: Line 2 is blank, and the nearest earlier filled line is
line 1, so it inherits "Bananas". Line 5 inherits "Oat Milk" from line
4, and line 9 inherits "Rye Bread" from line 7. The output is ordered
by ascending `id`.
```

### Example 2

```text
Input:
GroceryRun table:
+----+-------+
| id | item  |
+----+-------+
| 3  | Flour |
| 1  | Honey |
| 2  | Tea   |
+----+-------+
Output:
+----+-------+
| id | item  |
+----+-------+
| 1  | Honey |
| 2  | Tea   |
| 3  | Flour |
+----+-------+
Explanation: No line is blank, so every row keeps its own item.
```
