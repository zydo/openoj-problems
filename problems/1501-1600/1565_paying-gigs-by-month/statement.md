# Paying Gigs by Month

## Description

Table: `Gigs`

| Column    | Type |
| --------- | ---- |
| gig_id    | int  |
| gig_date  | date |
| client_id | int  |
| fee       | int  |

`gig_id` is the column with unique values for this table. Each row is
one gig that `client_id` booked, billed on `gig_date` for a fee.

Tally the well-paid work: for each calendar month that appears in
`Gigs`, report the number of gigs whose `fee` is greater than $20 that
were booked that month, and the number of distinct clients who booked
at least one of them. A month in which no gig clears the $20 line
contributes no row to the result — only months with at least one
qualifying gig appear.

Each testcase's `dataset` seeds the `Gigs` table before your query
runs; the table may hold no rows at all for a testcase. Return the
result table sorted in any order. The result format is in the
following examples.

### Example 1

```text
Input: the Gigs table from the dataset below.
gig_id | gig_date   | client_id | fee
1      | 2023-03-02 | 1         | 120
2      | 2023-03-14 | 2         | 45
3      | 2023-03-14 | 1         | 20
4      | 2023-04-01 | 3         | 200
5      | 2023-04-19 | 3         | 60
6      | 2023-04-25 | 1         | 15
7      | 2023-05-05 | 2         | 75
Output:
month   | gig_count | client_count
2023-03 | 2         | 2
2023-04 | 2         | 1
2023-05 | 1         | 1
Explanation: March 2023 has two gigs from two different clients above
the line — gig 3 sits exactly at $20, which does not qualify. April
2023 has two qualifying gigs, but both were booked by client 3, so the
month counts two gigs and one client; gig 6 is below the line. May
2023 has a single qualifying gig.
```

### Example 2

```text
Input: the Gigs table from the dataset below.
gig_id | gig_date   | client_id | fee
1      | 2023-07-01 | 1         | 20
2      | 2023-07-08 | 2         | 19
3      | 2023-07-21 | 2         | 21
4      | 2023-07-29 | 2         | 300
Output:
month   | gig_count | client_count
2023-07 | 2         | 1
Explanation: Two of July's gigs miss the cutoff — one at exactly $20,
one at $19 — while the other two, both booked by client 2, qualify. So
July reports two gigs but only one distinct client.
```

Write your solution as a single `SELECT` query returning three columns
— `month` (formatted `YYYY-MM`), `gig_count`, and `client_count` — one
row for every month with at least one gig whose `fee` is above 20.
