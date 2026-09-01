# Each Lot's Latest Bids

## Description

Table: `Buyers`

| Column   | Type    |
| -------- | ------- |
| buyer_id | int     |
| name     | varchar |

`buyer_id` is the column with unique values for this table. Each row
describes one bidder registered with the auction house.

Table: `Bids`

| Column   | Type |
| -------- | ---- |
| bid_id   | int  |
| bid_date | date |
| buyer_id | int  |
| lot_id   | int  |

`bid_id` is the column with unique values for this table. Each row is
one bid left by `buyer_id` on `lot_id`. No buyer bids on the same lot
more than once on the same day.

Table: `Lots`

| Column   | Type    |
| -------- | ------- |
| lot_id   | int     |
| lot_name | varchar |
| estimate | int     |

`lot_id` is the column with unique values for this table. Each row
describes one lot in the sale, together with the house's pre-sale
estimate for it.

Report the latest bid or bids on every lot. A lot's latest bid date is
the newest `bid_date` among its rows in `Bids`; when several bids on
that lot land on that date, every one of them counts, whoever placed
them. A lot that drew no bids at all contributes no row to the result.

Return the result table ordered by `lot_name` in ascending order. Rows
that share a `lot_name` break the tie by `lot_id` in ascending order,
and rows that still tie break by `bid_id` in ascending order.

Each testcase's `dataset` seeds all three tables: its script inserts
the testcase's `Buyers`, `Bids`, and `Lots` rows before your query
runs — any of the three may hold no rows for a testcase. The result
format is in the following examples.

### Example 1

```text
Input: the Buyers, Bids, and Lots tables from the dataset below.
Buyers rows:
buyer_id | name
1        | Nadia
2        | Felix
3        | Priya
4        | Tomo
Bids rows:
bid_id | bid_date   | buyer_id | lot_id
1      | 2021-05-02 | 1        | 1
2      | 2021-05-03 | 2        | 2
3      | 2021-05-03 | 3        | 1
4      | 2021-05-10 | 1        | 3
5      | 2021-04-28 | 4        | 2
6      | 2021-05-11 | 2        | 1
7      | 2021-05-11 | 3        | 1
8      | 2021-05-20 | 4        | 3
Lots rows:
lot_id | lot_name      | estimate
1      | Brass Compass | 90
2      | Oak Desk      | 400
3      | Wall Clock    | 120
4      | Tin Robot     | 60
Output:
lot_name      | lot_id | bid_id | bid_date
Brass Compass | 1      | 6      | 2021-05-11
Brass Compass | 1      | 7      | 2021-05-11
Oak Desk      | 2      | 2      | 2021-05-03
Wall Clock    | 3      | 8      | 2021-05-20
Explanation: Brass Compass was bid on last on 2021-05-11, by two
different buyers, so both of that day's bids are returned. Oak Desk's
latest bid is the 2021-05-03 one; its earlier 2021-04-28 bid is
dropped. Wall Clock's latest is the single 2021-05-20 bid. Tin Robot
never received a bid, so it contributes no row.
```

### Example 2

```text
Input: the Buyers, Bids, and Lots tables from the dataset below.
Buyers rows:
buyer_id | name
1        | Ines
2        | Bao
Bids rows: (none)
Lots rows:
lot_id | lot_name | estimate
1      | Quilt    | 30
Output: (no rows)
Explanation: No bid was placed on anything, so the result is empty
even though a buyer and a lot exist.
```

Write your solution as a single `SELECT` query returning four columns
— `lot_name`, `lot_id`, `bid_id`, and `bid_date` — one row for every
bid that reaches its lot's latest bid date.
