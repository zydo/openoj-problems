# Latest Three Parcels per Sender

## Description

Table: `Senders`

| Column    | Type    |
| --------- | ------- |
| sender_id | int     |
| name      | varchar |

`sender_id` is the column with unique values for this table. Each row
describes one sender registered at the depot.

Table: `Parcels`

| Column    | Type |
| --------- | ---- |
| parcel_id | int  |
| ship_date | date |
| sender_id | int  |
| postage   | int  |

`parcel_id` is the column with unique values for this table. Each row
records one parcel handed in by `sender_id`. Each sender hands in at
most one parcel per day.

Report the most recent three parcels of each sender. If a sender
handed in fewer than three parcels, report all of them. A sender with
no parcels at all contributes no row to the result.

If, beyond the one-parcel-per-day guarantee above, a testcase's data
ever places two of a sender's parcels on the same `ship_date`, break
the tie by preferring the parcel with the larger `parcel_id` when
deciding which parcels count among that sender's most recent three.

Return the result table ordered by `sender_name` in ascending order
and, in case of a tie, by `sender_id` in ascending order. If there is
still a tie, order the rows by `ship_date` in descending order.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Senders` rows and `Parcels` rows before your query runs —
either table may hold no rows for a testcase. The result format is in
the following example.

### Example 1

```text
Input: the Senders and Parcels tables from the dataset below.
Senders rows:
sender_id | name
1         | Rosa
2         | Milo
3         | Ines
4         | Tarek
5         | Bao
Parcels rows:
parcel_id | ship_date  | sender_id | postage
1         | 2021-03-04 | 1         | 12
2         | 2021-03-01 | 2         | 7
3         | 2021-03-05 | 3         | 20
4         | 2021-02-27 | 4         | 9
5         | 2021-01-18 | 1         | 15
6         | 2021-03-09 | 2         | 11
7         | 2021-03-09 | 3         | 30
8         | 2021-03-12 | 1         | 8
9         | 2021-03-15 | 2         | 5
10        | 2021-02-20 | 1         | 22
Output:
sender_name | sender_id | parcel_id | ship_date
Ines        | 3         | 7         | 2021-03-09
Ines        | 3         | 3         | 2021-03-05
Milo        | 2         | 9         | 2021-03-15
Milo        | 2         | 6         | 2021-03-09
Milo        | 2         | 2         | 2021-03-01
Rosa        | 1         | 8         | 2021-03-12
Rosa        | 1         | 1         | 2021-03-04
Rosa        | 1         | 10        | 2021-02-20
Tarek       | 4         | 4         | 2021-02-27
Explanation: Rosa handed in 4 parcels; the one on 2021-01-18 is dropped as the oldest. Milo has exactly 3, all kept. Ines has 2, Tarek has 1, and Bao has none, so no row for Bao appears.
```

### Example 2

```text
Input: the Senders and Parcels tables from the dataset below.
Senders rows:
sender_id | name
6         | Noor
7         | Pete
8         | Noor
Parcels rows:
parcel_id | ship_date  | sender_id | postage
11        | 2021-06-01 | 6         | 3
12        | 2021-06-01 | 6         | 3
13        | 2021-06-01 | 6         | 3
14        | 2021-05-20 | 6         | 3
15        | 2021-06-02 | 7         | 4
16        | 2021-06-03 | 8         | 4
Output:
sender_name | sender_id | parcel_id | ship_date
Noor        | 6         | 11        | 2021-06-01
Noor        | 6         | 12        | 2021-06-01
Noor        | 6         | 13        | 2021-06-01
Noor        | 8         | 16        | 2021-06-03
Pete        | 7         | 15        | 2021-06-02
Explanation: Sender 6 has 4 parcels, all but one on the same day, so three of the 2021-06-01 parcels fill the quota and the 2021-05-20 parcel is dropped. The two senders named Noor are ordered by sender_id, 6 before 8.
```

Write your solution as a single `SELECT` query returning four
columns — `sender_name`, `sender_id`, `parcel_id`, and `ship_date` —
one row for each of a sender's most recent three parcels (or fewer, if
a sender handed in fewer than three).

### Follow up

Could you write a general solution for the most recent `n` parcels of
each sender?
