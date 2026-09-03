# Co-Purchased Item Pairs

## Description

Table: `PurchaseLog`

| Column Name | Type |
| ----------- | ---- |
| buyer_id    | int  |
| item_id     | int  |
| units       | int  |

`(buyer_id, item_id)` is the unique key for this table. Each row records
one item a shopper bought and how many units of it they took.

Table: `ItemCatalog`

| Column Name | Type    |
| ----------- | ------- |
| item_id     | int     |
| section     | varchar |
| price       | decimal |

`item_id` is the primary key for this table. Each row gives an item's
section and price.

A store wants to surface items that tend to end up in the same basket. Two
items form a co-purchased pair whenever some shopper bought both, and a
pair earns a recommendation slot once at least 3 distinct shoppers have
bought both of its items. Write a solution to:

- list every pair of distinct items with `item1_id < item2_id` that clears
  that threshold;
- for each such pair, report how many distinct shoppers bought both items.

Return the result ordered by `shopper_count` in descending order, breaking
ties by `item1_id` ascending and then `item2_id` ascending.

Every testcase supplies its own `dataset`: the DDL seeds both tables with
that testcase's rows. The result format is in the following example.

### Example 1

```text
Input:

PurchaseLog table:

+----------+---------+-------+
| buyer_id | item_id | units |
+----------+---------+-------+
| 1        | 11      | 2     |
| 1        | 12      | 1     |
| 1        | 13      | 3     |
| 2        | 11      | 1     |
| 2        | 12      | 2     |
| 2        | 13      | 1     |
| 2        | 14      | 4     |
| 3        | 11      | 5     |
| 3        | 13      | 2     |
| 4        | 12      | 3     |
| 4        | 13      | 1     |
| 4        | 14      | 2     |
| 5        | 12      | 1     |
| 5        | 14      | 3     |
| 6        | 12      | 4     |
| 6        | 13      | 2     |
| 7        | 11      | 2     |
| 7        | 12      | 1     |
+----------+---------+-------+

ItemCatalog table:

+---------+-------------+-------+
| item_id | section     | price |
+---------+-------------+-------+
| 11      | Electronics | 120   |
| 12      | Books       | 18    |
| 13      | Electronics | 60    |
| 14      | Kitchen     | 33    |
+---------+-------------+-------+

Output:

+----------+----------+---------------+---------------+---------------+
| item1_id | item2_id | item1_section | item2_section | shopper_count |
+----------+----------+---------------+---------------+---------------+
| 12       | 13       | Books         | Electronics   | 4             |
| 11       | 12       | Electronics   | Books         | 3             |
| 11       | 13       | Electronics   | Electronics   | 3             |
| 12       | 14       | Books         | Kitchen       | 3             |
+----------+----------+---------------+---------------+---------------+

Explanation:

    Pair (11, 12): bought by shoppers 1, 2, and 7 (3 shoppers).
    Pair (11, 13): bought by shoppers 1, 2, and 3 (3 shoppers).
    Pair (12, 13): bought by shoppers 1, 2, 4, and 6 (4 shoppers).
    Pair (12, 14): bought by shoppers 2, 4, and 5 (3 shoppers).

    Pair (13, 14) was bought by only shoppers 2 and 4, so it falls short
    of the threshold and is left out.

The pair with 4 shoppers comes first; the remaining pairs all sit at 3
shoppers and follow ordered by item1_id, then item2_id.
```

Write one `SELECT` query that returns one row per qualifying pair — the
two item ids, their sections, and the shopper count.

## Hints

### Hint 1

An item pair exists whenever the same `buyer_id` shows up on rows for two
different items, so self-joining `PurchaseLog` on `buyer_id` with
`l1.item_id < l2.item_id` enumerates each pair exactly once.

### Hint 2

Join `ItemCatalog` twice, once for each side of the pair, to bring in the
two section names.

### Hint 3

Group by the two item ids (and their sections), keep the groups whose
distinct-buyer count reaches 3 with `HAVING`, and apply the required
ordering at the end.
