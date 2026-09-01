# Swap Shop I

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

Report, for every member, the date they joined and how many trades they
took part in as the buyer during 2019.

Return the result table in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Members table:
+-----------+------------+-----------------+
| member_id | joined_on  | preferred_brand |
+-----------+------------+-----------------+
| 1         | 2017-03-04 | Canon           |
| 2         | 2018-06-15 | Nikon           |
| 3         | 2018-09-30 | Sony            |
| 4         | 2019-01-12 | Fuji            |
| 5         | 2019-04-22 | Canon           |
+-----------+------------+-----------------+
Trades table:
+----------+------------+------------+----------+-----------+
| trade_id | trade_date | listing_id | buyer_id | seller_id |
+----------+------------+------------+----------+-----------+
| 1        | 2019-02-10 | 1          | 2        | 1         |
| 2        | 2018-11-05 | 2          | 1        | 3         |
| 3        | 2019-07-21 | 3          | 4        | 2         |
| 4        | 2019-12-31 | 1          | 5        | 3         |
| 5        | 2020-02-14 | 2          | 2        | 4         |
| 6        | 2019-05-18 | 4          | 1        | 2         |
| 7        | 2019-08-09 | 3          | 2        | 5         |
+----------+------------+------------+----------+-----------+
Listings table:
+------------+---------------+
| listing_id | listing_brand |
+------------+---------------+
| 1          | Canon         |
| 2          | Nikon         |
| 3          | Sony          |
| 4          | Fuji          |
+------------+---------------+
Output:
+----------+------------+----------------+
| buyer_id | joined_on  | trades_in_2019 |
+----------+------------+----------------+
| 1        | 2017-03-04 | 1              |
| 2        | 2018-06-15 | 2              |
| 3        | 2018-09-30 | 0              |
| 4        | 2019-01-12 | 1              |
| 5        | 2019-04-22 | 1              |
+----------+------------+----------------+
Explanation: Member 2 bought twice in 2019 (trades 1 and 7). Trades 2
and 5 fall outside 2019, so member 1's late-2018 purchase and member
2's 2020 purchase do not count. Member 3 only ever sold, so their
buying tally is 0.
```

Write your solution as a single `SELECT` query returning `buyer_id`,
`joined_on`, and `trades_in_2019`.
