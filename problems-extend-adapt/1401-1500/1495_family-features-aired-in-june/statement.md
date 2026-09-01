# Family Features Aired in June

## Description

A streaming service keeps two records: a schedule of every airing and a
catalog describing each title it owns.

Table: `Showings`

| Column Name | Type     |
| ----------- | -------- |
| shown_at    | datetime |
| title_id    | int      |
| station     | varchar  |

`(shown_at, title_id)` is the primary key of this table. Each row is
one airing: the moment `title_id` went out over `station`.

Table: `Library`

| Column Name | Type    |
| ----------- | ------- |
| title_id    | int     |
| name        | varchar |
| for_kids    | enum    |
| kind        | varchar |

`title_id` is the primary key of this table. `for_kids` is `'Y'` when
the title is made for kids and `'N'` otherwise. `kind` is the category
of the title — movies, series, and so on.

Report the distinct names of the kid-friendly movies that aired in June 2020.

Return the result table in any order.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Showings` and `Library` rows before your query runs. The
result format is in the following example.

### Example 1

```text
Input:
Showings table:
+------------------+----------+-----------+
| shown_at         | title_id | station   |
+------------------+----------+-----------+
| 2020-06-06 10:00 | 1        | Star KID  |
| 2020-05-09 12:00 | 2        | Star KID  |
| 2020-06-21 15:30 | 3        | Star KID  |
| 2020-06-14 09:00 | 4        | Reel Good |
| 2020-07-04 20:00 | 4        | Reel Good |
| 2020-06-27 13:00 | 4        | Star KID  |
| 2020-05-30 11:00 | 5        | Reel Good |
+------------------+----------+-----------+
Library table:
+----------+----------------+----------+--------+
| title_id | name           | for_kids | kind   |
+----------+----------------+----------+--------+
| 1        | Sky Pirates    | Y        | Movies |
| 2        | Detective Owls | Y        | Series |
| 3        | Harbor Lights  | N        | Movies |
| 4        | Puzzle Planet  | Y        | Movies |
| 5        | Meadow Race    | Y        | Movies |
+----------+----------------+----------+--------+
Output:
+---------------+
| name          |
+---------------+
| Sky Pirates   |
| Puzzle Planet |
+---------------+
Explanation: "Sky Pirates" is a movie made for kids and aired on
2020-06-06, so it qualifies. "Puzzle Planet" qualifies too — it aired
twice inside June (2020-06-14 and 2020-06-27), and the duplicates
collapse to a single row. "Detective Owls" is a series, not a movie.
"Harbor Lights" is not made for kids. "Meadow Race" never aired in June
2020 — its only airing was in May.
```
