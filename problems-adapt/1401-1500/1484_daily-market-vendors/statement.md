# Daily Market Vendors

## Description

A weekend market keeps a flat log of every stall that traded: one row
per appearance, with no primary key, so the same vendor can show up on
several lines on the same day.

Table: `Vendors`

| Column Name | Type    |
| ----------- | ------- |
| market_date | date    |
| vendor      | varchar |

This table may contain duplicate rows. Each row records that `vendor`
traded at the market on `market_date`.

For each day the market ran, report how many different vendors traded
and what they were called. The day's vendor names must be sorted
lexicographically and joined into one string separated by commas.

Return the result table ordered by `market_date`.

Each testcase's `dataset` seeds the table: its script inserts the
testcase's `Vendors` rows before your query runs. The result format is
in the following example.

### Example 1

```text
Input:
Vendors table:
+-------------+---------------+
| market_date | vendor        |
+-------------+---------------+
| 2024-09-07  | Honey Ridge   |
| 2024-09-08  | Blue Barn     |
| 2024-09-07  | Clay Kiln     |
| 2024-09-08  | Honey Ridge   |
| 2024-09-07  | Fern & Forage |
| 2024-09-08  | Clay Kiln     |
| 2024-09-08  | Blue Barn     |
| 2024-09-09  | Fern & Forage |
+-------------+---------------+
Output:
+-------------+--------------+-------------------------------------+
| market_date | vendor_count | vendors                             |
+-------------+--------------+-------------------------------------+
| 2024-09-07  | 3            | Clay Kiln,Fern & Forage,Honey Ridge |
| 2024-09-08  | 3            | Blue Barn,Clay Kiln,Honey Ridge     |
| 2024-09-09  | 1            | Fern & Forage                       |
+-------------+--------------+-------------------------------------+
Explanation: On 2024-09-07 the traders were Honey Ridge, Clay Kiln and
Fern & Forage; sorted lexicographically and comma-joined they give
`Clay Kiln,Fern & Forage,Honey Ridge`. On 2024-09-08 three distinct
stalls traded — Blue Barn, Clay Kiln and Honey Ridge — even though the
log holds five lines for that day (Blue Barn and Honey Ridge each
appear twice). On 2024-09-09 only Fern & Forage traded, so its name
stands alone.
```

## Hints

### Hint 1

`GROUP BY market_date` reduces each day to a single output row;
`COUNT` and `GROUP_CONCAT` over the distinct vendors finish the job.
