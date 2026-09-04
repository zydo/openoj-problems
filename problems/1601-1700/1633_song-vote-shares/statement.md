# Song Vote Shares

## Description

A music site runs listener polls for its songs. Two tables hold the
data: who is registered, and who voted for what.

Table: `Listeners`

| Column Name   | Type    |
| ------------- | ------- |
| listener_id   | int     |
| listener_name | varchar |

`listener_id` is the column with unique values for this table. Each
row records the id and the name of one registered listener.

Table: `Votes`

| Column Name | Type |
| ----------- | ---- |
| song_id     | int  |
| listener_id | int  |

`(song_id, listener_id)` is the primary key (combination of columns
with unique values) for this table. Each row records one vote: the
song that received it and the listener who cast it.

For every song that received at least one vote, report the percentage
of the registered listeners who voted for it, rounded to two decimal
places.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Listeners` and `Votes` rows before your query runs. Return
the result table ordered by `share` in descending order; in case of a
tie, order it by `song_id` in ascending order. The result format is in
the following example.

### Example 1

```text
Input:
Listeners
+-------------+---------------+
| listener_id | listener_name |
+-------------+---------------+
| 31          | Ivo           |
| 32          | Jas           |
| 33          | Kai           |
| 34          | Lena          |
| 35          | Mona          |
+-------------+---------------+
Votes
+---------+-------------+
| song_id | listener_id |
+---------+-------------+
| 900     | 31          |
| 901     | 31          |
| 902     | 31          |
| 900     | 32          |
| 901     | 32          |
| 903     | 32          |
| 900     | 33          |
| 901     | 33          |
| 904     | 33          |
| 900     | 34          |
| 901     | 34          |
| 904     | 34          |
| 901     | 35          |
| 902     | 35          |
+---------+-------------+
Output:
+---------+-------+
| song_id | share |
+---------+-------+
| 901     | 100.0 |
| 900     | 80.0  |
| 902     | 40.0  |
| 904     | 40.0  |
| 903     | 20.0  |
+---------+-------+
Explanation:
All five listeners voted for song 901, so its share is 100.0%. Song
900 collected four of the five votes: (4 / 5) * 100 = 80.0%. Songs
902 (Ivo and Mona) and 904 (Kai and Lena) tie at (2 / 5) * 100 =
40.0%, so 902 is listed first. Song 903 has Jas's vote alone:
(1 / 5) * 100 = 20.0%.
```

### Example 2

```text
Input:
Listeners
+-------------+---------------+
| listener_id | listener_name |
+-------------+---------------+
| 41          | Nils          |
| 42          | Oke           |
| 43          | Pia           |
+-------------+---------------+
Votes
+---------+-------------+
| song_id | listener_id |
+---------+-------------+
| 700     | 41          |
| 700     | 42          |
| 700     | 43          |
| 701     | 41          |
| 701     | 42          |
| 702     | 43          |
+---------+-------------+
Output:
+---------+-------+
| song_id | share |
+---------+-------+
| 700     | 100.0 |
| 701     | 66.67 |
| 702     | 33.33 |
+---------+-------+
Explanation:
Everyone voted for song 700, so 100.0%. Songs 701 and 702 draw two
and one of the three votes: (2 / 3) * 100 = 66.67% and
(1 / 3) * 100 = 33.33%.
```

Write your solution as a single `SELECT` query returning `song_id` and
`share` — the share, rounded to two decimal places, of every listener
in `Listeners` who voted for that song — one row per `song_id` that
appears in `Votes`. Order the result by `share` descending, then by
`song_id` ascending. The ordering is judged — the query must emit the
rows in precisely this order.
