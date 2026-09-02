# February's Top Tags

## Description

Table: `Chirps`

| Column Name | Type    |
| ----------- | ------- |
| member_id   | int     |
| chirp_id    | int     |
| chirp_date  | date    |
| body        | varchar |

`chirp_id` is the primary key (column with unique values) for this
table.
Each row holds one short post: who wrote it, its own id, the day it
was posted, and its text.

Every post carries exactly one hashtag — a `#` followed by the tag's
name. Rank the platform's three most-used hashtags of February 2024.

Return the result table ordered by tag count, then by the tag itself,
both descending.

Every test case ships its own `dataset`: the statements inside it
populate `Chirps` before your query executes. The result format is in
the following examples.

### Example 1

```text
Input:
Chirps table:
+-----------+----------+------------+-------------------------------------------+
| member_id | chirp_id | chirp_date | body                                      |
+-----------+----------+------------+-------------------------------------------+
| 401       | 21       | 2024-02-03 | Morning miles done. #SunriseRun           |
| 402       | 22       | 2024-02-04 | Espresso before anything else. #CoffeeFirst |
| 403       | 23       | 2024-02-06 | Beat the alarm again. #SunriseRun         |
| 404       | 24       | 2024-02-08 | Late chapter tonight. #BookClub           |
| 405       | 25       | 2024-02-11 | Two shots, no sugar. #CoffeeFirst         |
| 406       | 26       | 2024-02-14 | Trail was perfect today. #SunriseRun      |
| 407       | 27       | 2024-02-18 | Waiting for the weekend. #Weekend         |
| 408       | 28       | 2024-03-02 | March already? #SpringForward             |
+-----------+----------+------------+-------------------------------------------+
Output:
+-------------+-----------+
| tag         | tag_count |
+-------------+-----------+
| #SunriseRun | 3         |
| #CoffeeFirst| 2         |
| #Weekend    | 1         |
+-------------+-----------+
Explanation: #SunriseRun rode along in chirps 21, 23, and 26 — three
mentions. #CoffeeFirst appears in chirps 22 and 25, twice. #Weekend
and #BookClub tie with one mention each, and the tie is broken by
taking the larger tag text, so #Weekend claims the final row and
#BookClub is cut. #SpringForward was posted in March and never enters
the February count.
```

### Example 2

```text
Input:
Chirps table:
+-----------+----------+------------+---------------------------------+
| member_id | chirp_id | chirp_date | body                            |
+-----------+----------+------------+---------------------------------+
| 501       | 41       | 2024-02-01 | New month, new notebook. #Journaling |
| 502       | 42       | 2024-02-09 | Page one done. #Journaling      |
| 503       | 43       | 2024-02-20 | Slow commute, good playlist. #Commute |
+-----------+----------+------------+---------------------------------+
Output:
+-------------+-----------+
| tag         | tag_count |
+-------------+-----------+
| #Journaling | 2         |
| #Commute    | 1         |
+-------------+-----------+
Explanation: Two tags across the whole month, so the ranking holds
just two rows — the leaderboard is capped at three but never padded.
```

Write your solution as a single `SELECT` query returning two columns —
`tag`, the tag exactly as it appears in the post, starting at its `#`
and running to the next space or to the end of the text, and
`tag_count`, how many February 2024 posts carry it — with at most
three rows: the top three hashtags, ordered by `tag_count` descending
and then `tag` descending.
