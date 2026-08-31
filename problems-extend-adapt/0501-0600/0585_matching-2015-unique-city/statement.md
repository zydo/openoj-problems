# Matching 2015, Unique City

## Description

Table: `Policy`

| Column Name | Type  |
| ----------- | ----- |
| policy_id   | int   |
| total_2015  | float |
| total_2016  | float |
| latitude    | float |
| longitude   | float |

`policy_id` is the primary key (column with unique values) for this table.
Each row of this table contains the insurance information of one policy
where policy_id is the policyholder's policy ID, total_2015 is the total
investment value in 2015 and total_2016 is the total investment value in
2016, and latitude is the latitude and longitude is the longitude of the
policyholder's city. It is guaranteed that latitude and longitude are not
NULL.

Write a solution to report the sum of all total investment values in 2016
`total_2016` for all policyholders who:

- have the same `total_2015` value as one or more other policyholders, and
- are not located in the same city as any other policyholder (i.e., the
  `(latitude, longitude)` attribute pairs must be unique).

Round `total_2016` to two decimal places.

Each testcase supplies its own `dataset`: its script inserts the testcase's
`Policy` rows before your query runs. The result format is in the following
example.

### Example 1

```text
Input: Policy table from the dataset below.
Output:
total_2016
600.00
Explanation: policy 11 and policy 12 share the 2015 value 100, which no
other policy carries, so both clear the first test. But policy 11 sits at
the same coordinates as policy 13, so its city is shared and it fails the
second test; policy 12's city is unique, so it qualifies. Policy 13's 2015
value 200 and policy 14's 300 each appear once, so neither clears the
first test. The result is the sum of the qualifying 2016 values, 600.
```

Write your solution as a single `SELECT` query returning one column —
`total_2016`, the total 2016 investment value summed over the qualifying
policyholders and rounded to two decimal places — as a single row.

## Hints

### Hint 1

Both conditions are properties of the whole table, not of any one row, so each becomes a grouped set: GROUP BY total_2015 with HAVING COUNT(_) > 1 names the 2015 values that two or more policyholders share, and GROUP BY latitude, longitude with HAVING COUNT(_) = 1 names the location pairs that belong to exactly one policyholder. Group the location as a pair — latitude is only half a city, and two policyholders at the same latitude but different longitudes are still in different cities.

### Hint 2

Both sets become membership filters on the surviving rows: a policyholder counts when its total_2015 is one of the shared values AND its (latitude, longitude) is one of the unique pairs. SQLite compares row values as a unit — total_2015 IN (SELECT ...) and (latitude, longitude) IN (SELECT latitude, longitude FROM ...) — or the two grouped sets can be built as CTEs and inner-joined onto Policy; either way each grouped set holds one row per value or pair, so every policyholder matches at most once and no row is double-counted in the sum.

### Hint 3

The answer is one aggregate over the survivors: ROUND(SUM(total_2016), 2). SUM adds the REAL column of the filtered rows and ROUND takes it to two decimals with ties going away from zero on the stored binary value — a sum of exactly 45.125 comes back 45.13, while a decimal 2.675 is stored just below the half and stays 2.67. When no policyholder qualifies the aggregate still emits its single row: the sum of no rows is null.
