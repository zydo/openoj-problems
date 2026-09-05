# Product Spend Momentum

## Description

Table: `sales_log`

| Column Name | Type     |
| ----------- | -------- |
| entry_id    | integer  |
| item_id     | integer  |
| amount      | decimal  |
| logged_at   | datetime |

`entry_id` uniquely identifies each row of this table.
Each row records one sale: its entry id, the item sold, the amount the
sale brought in, and the moment it was logged.

Write a query that measures how each item's total spend moves from one
year to the next.

The result table should carry these columns:

- `year`: the year the sales happened.
- `item_id`: the id of the item.
- `year_total`: everything the item brought in that year.
- `prior_total`: what the item brought in during its previous sales
  year.
- `growth_pct`: the percent change between the two years, rounded to 2
  decimal places.

Return the result table ordered by `item_id`, then `year`, both
ascending.

Each testcase supplies its own `dataset`: the script seeds the
`sales_log` table with that testcase's rows, timestamps in ISO
`YYYY-MM-DD HH:MM:SS` form. A result row exists for every item-year
with at least one sale, and for no other pair. An item's previous year
is its closest earlier year that has sales — years in between are
skipped and the comparison spans the gap. When an item has no earlier
sales year at all, both `prior_total` and `growth_pct` are null; when
the previous year's total is zero the rate has no defined value and is
null as well. Only the year of `logged_at` matters — the time of day
never influences any grouping. The result format is in the following
examples.

### Example 1

```text
Input: sales_log table from the dataset below.
Output:
year  item_id  year_total  prior_total  growth_pct
2020  84       400         null         null
2022  84       550         400          37.5
Explanation: item 84 sold in 2020 and then not again until 2022. The
2020 row has no earlier sales year, so prior_total and growth_pct are
null. For 2022 the closest earlier year is 2020 — 2021 is skipped — and
((550 - 400) / 400) * 100 = 37.5%.
```

### Example 2

```text
Input: sales_log table from the dataset below.
Output:
year  item_id  year_total  prior_total  growth_pct
2019  12       150         null         null
2020  12       120         150          -20.0
2021  45       99.99       null         null
Explanation: item 12 brought in 80 + 70 = 150 in 2019 and 120 in 2020,
so its 2020 rate is ((120 - 150) / 150) * 100 = -20.0%. Item 45 has a
single sales year, so its only row reports null for both prior columns.
```

Write your solution as a single `SELECT` query returning five columns —
`year`, `item_id`, `year_total`, `prior_total`, `growth_pct` — one row
per item-year with sales, ordered by `item_id` then `year`.
