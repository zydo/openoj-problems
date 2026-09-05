# February's Top Tags II

## Description

Table: `Chirps`

| Column Name | Type    |
| ----------- | ------- |
| member_id   | int     |
| chirp_id    | int     |
| chirp_date  | date    |
| body        | varchar |

`chirp_id` is the primary key (column with unique values) for this
table. Each row holds one short post: who wrote it, its own id, the day
it went out, and its text. Every `chirp_date` falls in February 2024.

A post may carry any number of tags — each one is a `#` followed by the
tag's name, which runs to the next space or to the end of the text.
Rank the platform's three most-used tags for February 2024, counting
every appearance in every post separately.

Return the result table with the busiest tag first, ties settled by the
alphabetically larger tag, both counts and names descending.

The judge hands your query a `Chirps` table already loaded with the
testcase's rows — each case runs against its own `dataset`. The result
format is in the following examples.

### Example 1

```text
Input:
Chirps table:
+-----------+----------+------------+--------------------------------------------------------------+
| member_id | chirp_id | chirp_date | body                                                         |
+-----------+----------+------------+--------------------------------------------------------------+
| 1         | 1        | 2024-02-02 | Sunrise jog along the river. #MorningMove #RiverRun          |
| 2         | 2        | 2024-02-05 | Espresso and a good playlist. #CoffeeFirst #MorningMove      |
| 3         | 3        | 2024-02-07 | Half-built shelf, all hand tools. #Woodworking #WeekendBuild |
| 4         | 4        | 2024-02-11 | Second coat of oil on the shelf. #Woodworking #SlowCraft     |
| 5         | 5        | 2024-02-14 | Rainy commute playlist on repeat. #CoffeeFirst               |
| 6         | 6        | 2024-02-18 | Long walk to clear the head. #RiverRun                       |
| 7         | 7        | 2024-02-22 | New chisels arrived at last. #Woodworking #SlowCraft         |
+-----------+----------+------------+--------------------------------------------------------------+
Output:
+--------------+-----------+
| tag          | tag_count |
+--------------+-----------+
| #Woodworking | 3         |
| #SlowCraft   | 2         |
| #RiverRun    | 2         |
+--------------+-----------+
Explanation:
#Woodworking leads with three mentions. Four tags are tied at two, and
the descending-name tiebreak ranks #SlowCraft ahead of #RiverRun,
#MorningMove, and #CoffeeFirst, so those two fill the remaining seats.
```

### Example 2

```text
Input:
Chirps table:
+-----------+----------+------------+----------------------------------------------+
| member_id | chirp_id | chirp_date | body                                         |
+-----------+----------+------------+----------------------------------------------+
| 1         | 1        | 2024-02-03 | One track on repeat all week #OnLoop #OnLoop |
| 2         | 2        | 2024-02-08 | Different mood for tonight #NightDrive       |
| 3         | 3        | 2024-02-17 | Back to the same song #OnLoop                |
+-----------+----------+------------+----------------------------------------------+
Output:
+-------------+-----------+
| tag         | tag_count |
+-------------+-----------+
| #OnLoop     | 3         |
| #NightDrive | 1         |
+-------------+-----------+
Explanation:
The first post uses #OnLoop twice — both occurrences count — and the
third post adds one more, for a total of 3 against #NightDrive's single
mention.
```

Write your solution as a single `SELECT` query returning two columns —
`tag`, spelled exactly as it appears from its `#` up to the next space
or the end of the body, and `tag_count`, the number of mentions that
tag collects across all the February posts — and at most three rows:
the top three tags, ordered by `tag_count` descending and then by `tag`
descending. Return the result table in that order.
