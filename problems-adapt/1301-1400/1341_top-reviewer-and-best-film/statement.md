# Top Reviewer and Best Film

## Description

Table: `Films`

| Column Name | Type    |
| ----------- | ------- |
| film_id     | int     |
| title       | varchar |

`film_id` is the primary key (column with unique values) for this table.
`title` is the film's name, and no two films share a title.

Table: `Viewers`

| Column Name | Type    |
| ----------- | ------- |
| viewer_id   | int     |
| name        | varchar |

`viewer_id` is the primary key (column with unique values) for this table.
The `name` column also holds unique values.

Table: `Reviews`

| Column Name | Type |
| ----------- | ---- |
| film_id     | int  |
| viewer_id   | int  |
| rating      | int  |
| reviewed_on | date |

`(film_id, viewer_id)` is the primary key (combination of columns with
unique values) for this table. Each row is one viewer's rating of one film,
recorded on the date they wrote it (`reviewed_on`).

Write a query that answers two questions and returns the two answers as two
rows, in this order:

- The name of the viewer who wrote the most reviews. If several viewers
  tie, take the name that comes first alphabetically.
- The title of the film with the highest average rating among reviews
  written in February 2020. If several films tie, take the title that comes
  first alphabetically.

### Example 1

```text
Input:
Films table:
+---------+----------------+
| film_id | title          |
+---------+----------------+
| 1       | Northlight     |
| 2       | The Paper Kite |
| 3       | Harbor Season  |
| 4       | Salt and Cedar |
+---------+----------------+
Viewers table:
+-----------+--------+
| viewer_id | name   |
+-----------+--------+
| 1         | Priya  |
| 2         | Marcus |
| 3         | Elena  |
| 4         | Tomas  |
+-----------+--------+
Reviews table:
+---------+-----------+--------+-------------+
| film_id | viewer_id | rating | reviewed_on |
+---------+-----------+--------+-------------+
| 1       | 1         | 4      | 2020-01-05  |
| 2       | 1         | 5      | 2020-02-03  |
| 3       | 1         | 4      | 2020-02-14  |
| 1       | 3         | 5      | 2020-02-09  |
| 3       | 3         | 5      | 2020-02-21  |
| 2       | 3         | 1      | 2020-03-08  |
| 1       | 2         | 4      | 2020-02-11  |
| 2       | 4         | 2      | 2020-02-19  |
| 4       | 4         | 5      | 2020-01-19  |
+---------+-----------+--------+-------------+
Output:
+---------------+
| results       |
+---------------+
| Elena         |
| Harbor Season |
+---------------+
Explanation: Elena and Priya have each reviewed three films, and Elena is
the alphabetically smaller name. In February 2020, Northlight averages
(5 + 4) / 2 = 4.5 and Harbor Season averages (4 + 5) / 2 = 4.5 — a tie
that Harbor Season wins alphabetically; The Paper Kite trails at 3.5, and
Salt and Cedar's only review is from January.
```
