# Monthly Rainfall Grid

## Description

A weather bureau logs precipitation at its stations one month at a
time. Table: `Stations`

| Column Name | Type    |
| ----------- | ------- |
| station_id  | int     |
| rainfall    | int     |
| month       | varchar |

`(station_id, month)` is the primary key of this table, so no station
ever has two rows for the same month.
`month` holds one of
`["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov",
"Dec"]`, and `rainfall` is the millimeters of precipitation the station
collected that month.

Lay the log out as a wide grid: one row per station, with a separate
rainfall column for each of the twelve months. A month a station has no
row for shows `null` in that station's row.

Return the result table in any order.

The result format is in the following example.

### Example 1

```text
Input:
Stations table:
+------------+----------+-------+
| station_id | rainfall | month |
+------------+----------+-------+
| 4          | 118      | Jan   |
| 9          | 63       | Jan   |
| 4          | 95       | Feb   |
| 4          | 140      | Mar   |
| 9          | 121      | Apr   |
| 4          | 30       | Nov   |
+------------+----------+-------+
Output:
+------------+--------------+--------------+--------------+-----+--------------+
| station_id | Jan_Rainfall | Feb_Rainfall | Mar_Rainfall | ... | Dec_Rainfall |
+------------+--------------+--------------+--------------+-----+--------------+
| 4          | 118          | 95           | 140          | ... | null         |
| 9          | 63           | null         | null         | ... | null         |
+------------+--------------+--------------+--------------+-----+--------------+
Explanation: Station 4 reported in Jan, Feb, Mar and Nov, so exactly
those four of its twelve rainfall columns hold numbers. Station 9's Apr
total lands in the fourth rainfall column and every other month of its
year reads null. The grid has 13 columns overall — the station id plus
one per month.
```

### Example 2

```text
Input:
Stations table:
+------------+----------+-------+
| station_id | rainfall | month |
+------------+----------+-------+
| 2          | 84       | Jan   |
| 2          | 71       | Feb   |
| 2          | 62       | Mar   |
| 2          | 45       | Apr   |
| 2          | 30       | May   |
| 2          | 12       | Jun   |
| 2          | 4        | Jul   |
| 2          | 9        | Aug   |
| 2          | 28       | Sep   |
| 2          | 66       | Oct   |
| 2          | 88       | Nov   |
| 2          | 91       | Dec   |
| 5          | 150      | Mar   |
| 5          | 2        | Jul   |
| 5          | 44       | Oct   |
| 8          | 0        | Feb   |
| 8          | 77       | Aug   |
| 8          | 23       | Dec   |
+------------+----------+-------+
Output:
+------------+--------------+--------------+--------------+-----+--------------+
| station_id | Jan_Rainfall | Feb_Rainfall | Mar_Rainfall | ... | Dec_Rainfall |
+------------+--------------+--------------+--------------+-----+--------------+
| 2          | 84           | 71           | 62           | ... | 91           |
| 5          | null         | null         | 150          | ... | null         |
| 8          | null         | 0            | null         | ... | 23           |
+------------+--------------+--------------+--------------+-----+--------------+
Explanation: Station 2 reported in all twelve months, so nothing in its
row is null. Station 8's February reading is 0 — a dry month still
counts as a reading, which is different from the nulls marking the
months it never logged.
```

Write your solution as a single `SELECT` query returning the 13 columns
`station_id, Jan_Rainfall, Feb_Rainfall, ..., Dec_Rainfall` (in that
column order; row order does not matter).
