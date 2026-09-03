# Co-Purchased Section Pairs

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

`item_id` is the unique key for this table. Each row assigns a section
and price to an item.

The store's analytics team wants to understand how demand flows between
the catalog's sections. Write a solution to:

- find every pair of distinct sections with `section1 < section2`
  (compared lexicographically);
- for each section pair, count the distinct shoppers who bought items from
  both sections.

A section pair is reportable when at least 3 different shoppers have bought
from both of its sections.

Return the reportable section pairs ordered by `shopper_count` in
descending order; on ties, order by `section1` ascending lexicographically,
then by `section2` ascending.

Every testcase supplies its own `dataset`: the DDL seeds the `PurchaseLog`
and `ItemCatalog` tables with that testcase's rows. Every `item_id` in
`PurchaseLog` also appears in `ItemCatalog`, while items that were never
bought still occupy their catalog row and belong to no section pair. A
shopper who bought several items of the same section counts for that
section exactly once. Write your solution as a single `SELECT` query
returning three columns — `section1`, `section2`, and `shopper_count`.
The result format is in the following example.

### Example 1

```text
Input:

PurchaseLog table:

+----------+---------+-------+
| buyer_id | item_id | units |
+----------+---------+-------+
| 1        | 21      | 1     |
| 1        | 23      | 2     |
| 1        | 26      | 1     |
| 2        | 21      | 3     |
| 2        | 22      | 1     |
| 2        | 24      | 2     |
| 3        | 22      | 2     |
| 3        | 24      | 1     |
| 3        | 25      | 4     |
| 4        | 23      | 1     |
| 4        | 26      | 3     |
| 4        | 27      | 2     |
| 5        | 24      | 2     |
| 5        | 26      | 1     |
| 5        | 27      | 5     |
+----------+---------+-------+

ItemCatalog table:

+---------+---------+-------+
| item_id | section | price |
+---------+---------+-------+
| 21      | Bakery  | 4     |
| 22      | Bakery  | 6     |
| 23      | Dairy   | 3     |
| 24      | Dairy   | 5     |
| 25      | Frozen  | 8     |
| 26      | Pantry  | 7     |
| 27      | Produce | 2     |
+---------+---------+-------+

Output:

+----------+----------+---------------+
| section1 | section2 | shopper_count |
+----------+----------+---------------+
| Bakery   | Dairy    | 3             |
| Dairy    | Pantry   | 3             |
+----------+----------+---------------+

Explanation:

Bakery-Dairy:
    Shopper 1 bought Bakery (21) and Dairy (23)
    Shopper 2 bought Bakery (21, 22) and Dairy (24)
    Shopper 3 bought Bakery (22) and Dairy (24)
    Total: 3 shoppers bought from both sections

Dairy-Pantry:
    Shopper 1 bought Dairy (23) and Pantry (26)
    Shopper 4 bought Dairy (23) and Pantry (26)
    Shopper 5 bought Dairy (24) and Pantry (26)
    Total: 3 shoppers bought from both sections

Dairy-Produce and Pantry-Produce each draw only 2 shared shoppers
(shoppers 4 and 5), and Bakery's pairs with Frozen and Pantry have just
one each, so none of them clear the threshold. The two reportable pairs
tie at 3 shoppers and are ordered by section1, then section2.
```
