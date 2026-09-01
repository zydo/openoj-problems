# Parcel Value Lookups

## Description

A county assessor's office tracks what each parcel of land was worth
in each year. Two tables carry the records: the assessed values
themselves, and a list of value requests that arrived at the counter.

Table: `Valuations`

| Column Name | Type |
| ----------- | ---- |
| parcel_id   | int  |
| year        | int  |
| value       | int  |

`(parcel_id, year)` is the primary key (combination of columns with
unique values) of this table. Each row holds the assessed `value` of
the parcel with id `parcel_id` in `year`.

Table: `Lookups`

| Column Name | Type |
| ----------- | ---- |
| parcel_id   | int  |
| year        | int  |

`(parcel_id, year)` is the primary key (combination of columns with
unique values) of this table. Each row is one request: someone at the
counter asks what the parcel with id `parcel_id` was worth in `year`.

Answer every request. Report the `parcel_id`, the `year`, and the
assessed value for each row of `Lookups`; a request whose
`(parcel_id, year)` has no row in `Valuations` is answered with a
value of `0`.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Valuations` rows and `Lookups` rows before your query
runs. Return the result table in any order. The result format is in
the following example.

### Example 1

```text
Input:
Valuations
+-----------+------+-------+
| parcel_id | year | value |
+-----------+------+-------+
| 4         | 2021 | 180   |
| 4         | 2023 | 240   |
| 9         | 2022 | 150   |
| 9         | 2021 | 0     |
| 12        | 2023 | 95    |
+-----------+------+-------+
Lookups
+-----------+------+
| parcel_id | year |
+-----------+------+
| 4         | 2021 |
| 4         | 2022 |
| 9         | 2021 |
| 9         | 2024 |
| 12        | 2023 |
| 12        | 2022 |
+-----------+------+
Output:
+-----------+------+-------+
| parcel_id | year | value |
+-----------+------+-------+
| 4         | 2021 | 180   |
| 4         | 2022 | 0     |
| 9         | 2021 | 0     |
| 9         | 2024 | 0     |
| 12        | 2023 | 95    |
| 12        | 2022 | 0     |
+-----------+------+-------+
Explanation: The office holds a 2021 value of 180 for parcel 4, so
that request is answered with 180. Parcel 4 was never assessed in
2022, so that request gets 0. Parcel 9 was assessed in 2021 with a
stored value of exactly 0 — the answer reports that stored 0 — while
its 2024 request finds no assessment at all and also reports 0.
Parcel 12's 2023 request finds 95, and its 2022 request finds nothing
and reports 0.
```

Write your solution as a single `SELECT` query returning three
columns — `parcel_id`, `year`, and `value` — one row per `Lookups`
row.

## Hints

### Hint 1

No request may be dropped, matched or not — begin from `Lookups` and
`LEFT JOIN` `Valuations` on both key columns at once.

### Hint 2

A request with no match carries a null in the joined value column;
`COALESCE(..., 0)` replaces just that null with the required 0, and a
stored 0 in `Valuations` flows through unchanged.
