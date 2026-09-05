# Average Cart Size

## Description

Table: `Carts`

| Column Name    | Type |
| -------------- | ---- |
| cart_id        | int  |
| items_per_cart | int  |
| cart_count     | int  |

`cart_id` is the unique key of this table. Each row carries an item
count and an occurrence count.

The rows are compressed: a row with `items_per_cart` `c` and
`cart_count` `k` stands for `k` shopping carts that each contain `c`
items.

Compute the average number of items a cart holds, rounded to 2 decimal
places. The result may be returned in any order.

Every testcase carries its own `dataset`: the DDL loads the `Carts`
table with that testcase's rows. The example below shows the result
format.

### Example 1

```text
Input:
Carts table:
+---------+----------------+------------+
| cart_id | items_per_cart | cart_count |
+---------+----------------+------------+
| 5       | 2              | 4          |
| 6       | 3              | 6          |
| 7       | 5              | 2          |
| 8       | 1              | 8          |
+---------+----------------+------------+
Output:
+----------------+
| mean_cart_size |
+----------------+
| 2.20           |
+----------------+
Explanation:
The calculation runs as follows:
 - Total items: (2 * 4) + (3 * 6) + (5 * 2) + (1 * 8) = 44
 - Total carts: 4 + 6 + 2 + 8 = 20
 - The average cart size is therefore 44 / 20 = 2.20
```

### Example 2

```text
Input:
Carts table:
+---------+----------------+------------+
| cart_id | items_per_cart | cart_count |
+---------+----------------+------------+
| 1       | 7              | 3          |
| 2       | 4              | 9          |
| 3       | 10             | 1          |
+---------+----------------+------------+
Output:
+----------------+
| mean_cart_size |
+----------------+
| 5.15           |
+----------------+
Explanation:
 - Total items: (7 * 3) + (4 * 9) + (10 * 1) = 67
 - Total carts: 3 + 9 + 1 = 13
 - The average cart size is therefore 67 / 13 = 5.15
```

The aggregate always emits exactly one row: the mean for a non-empty
table, and `null` when the dataset seeds no rows. Write your answer as
one `SELECT` query returning one row with one column:
`mean_cart_size`.
