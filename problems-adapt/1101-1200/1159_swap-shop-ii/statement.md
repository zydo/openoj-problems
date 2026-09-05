# Swap Shop II

## Description

A swap-shop app lets its members trade secondhand gear: anyone can list
an item for sale, and any member can buy someone else's listing.

Table: `Members`

| Column Name     | Type    |
| --------------- | ------- |
| member_id       | int     |
| joined_on       | date    |
| preferred_brand | varchar |

`member_id` is the primary key (column with unique values) of this
table.
Each row describes one community member: when they joined and which
brand they favor.

Table: `Trades`

| Column Name | Type |
| ----------- | ---- |
| trade_id    | int  |
| trade_date  | date |
| listing_id  | int  |
| buyer_id    | int  |
| seller_id   | int  |

`trade_id` is the primary key (column with unique values) of this
table.
`listing_id` is a foreign key (reference column) to the Listings table.
`buyer_id` and `seller_id` are foreign keys to the Members table.

Table: `Listings`

| Column Name   | Type    |
| ------------- | ------- |
| listing_id    | int     |
| listing_brand | varchar |

`listing_id` is the primary key (column with unique values) of this
table.

For each member who sells, order their sales by trade date and look at
the second one: report `yes` if that sale's listing carries the
member's preferred brand, and `no` otherwise. A member with fewer than
two sales is reported as `no`. No member sells more than one listing on
the same day.

Return the result table in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Members table:
+-----------+------------+-----------------+
| member_id | joined_on  | preferred_brand |
+-----------+------------+-----------------+
| 1         | 2018-02-11 | Nikon           |
| 2         | 2018-05-03 | Canon           |
| 3         | 2019-01-25 | Fuji            |
| 4         | 2019-03-14 | Sony            |
+-----------+------------+-----------------+
Trades table:
+----------+------------+------------+----------+-----------+
| trade_id | trade_date | listing_id | buyer_id | seller_id |
+----------+------------+------------+----------+-----------+
| 1        | 2019-06-15 | 1          | 5        | 2         |
| 2        | 2019-04-01 | 3          | 4        | 2         |
| 3        | 2019-07-04 | 2          | 2        | 4         |
| 4        | 2019-08-11 | 3          | 3        | 4         |
| 5        | 2019-05-20 | 2          | 1        | 3         |
+----------+------------+------------+----------+-----------+
Listings table:
+------------+---------------+
| listing_id | listing_brand |
+------------+---------------+
| 1          | Canon         |
| 2          | Nikon         |
| 3          | Fuji          |
| 4          | Sony          |
+------------+---------------+
Output:
+-----------+------------------+
| seller_id | second_trade_fav |
+-----------+------------------+
| 1         | no               |
| 2         | yes              |
| 3         | no               |
| 4         | no               |
+-----------+------------------+
Explanation: Member 1 never sold anything. Member 2's sales, ordered by
date, are the April Fuji listing and then the June Canon listing — the
second matches their preferred brand. Member 3 sold only once. Member
4's second sale is the Fuji listing, not the Sony they prefer.
```

Write your solution as a single `SELECT` query returning `seller_id`
and `second_trade_fav`.
