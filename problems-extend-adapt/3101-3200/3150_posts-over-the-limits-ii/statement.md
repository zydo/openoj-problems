# Posts Over the Limits II

## Description

Table: `Posts`

| Column Name | Type    |
| ----------- | ------- |
| post_id     | int     |
| body        | varchar |

`post_id` is the primary key (column with unique values) for this
table. The table holds every post on a microblogging platform.

The moderation sweep flags any post that breaks the house rules. A
post is over the limits when at least one of these holds:

- Its text is longer than 140 characters.
- It mentions more than 3 accounts.
- It carries more than 3 hashtags.

Return the result table ordered by `post_id` in ascending order.

The judge hands your query a `Posts` table already loaded with the
testcase's rows — each case runs against its own `dataset`. In every
dataset each `'@'` inside `body` opens a mention and each `'#'` opens
a hashtag, so a post's mention (hashtag) count is simply how many
`'@'` (`'#'`) characters its text contains; no body is empty or holds
quote characters. The result format is in the following examples.

### Example 1

```text
Input:
Posts table:
+---------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| post_id | body                                                                                                                                                                  |
+---------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 1       | Quiet Sunday walk in the park with no tags at all                                                                                                                     |
| 2       | Big drop tomorrow, set your alarms! #Launch #Sale #Deals #Shop                                                                                                        |
| 3       | Heading to the con with @MiaTorres @RenWorks @DevOnAir @SamSpeaks today                                                                                               |
| 4       | Another long update about the weekend cleanup project, the garage sale, the donation boxes, and the small errands that quietly filled every hour of the whole weekend |
+---------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+
Output:
+---------+
| post_id |
+---------+
| 2       |
| 3       |
| 4       |
+---------+
Explanation:
Post 2 carries four hashtags and post 3 mentions four accounts — both
cross the counting limits. Post 4 runs to 165 characters, past the
140-character cap. Post 1 breaks no rule and stays out of the output.
```

### Example 2

```text
Input:
Posts table:
+---------+----------------------------------------------------------------------------------------------------------------------------------------------+
| post_id | body                                                                                                                                         |
+---------+----------------------------------------------------------------------------------------------------------------------------------------------+
| 6       | Edge case one @a @b @c #x #y #z                                                                                                              |
| 7       | Boundary check: this post is exactly one hundred and forty characters long, sitting right at the cap, and must stay valid.xxxxxxxxxxxxxxxxxx |
| 8       | Overflow on mentions alone @ana @ben @cy @dee thanks all                                                                                     |
| 9       | Overflow on hashtags alone #aa #bb #cc #dd done                                                                                              |
+---------+----------------------------------------------------------------------------------------------------------------------------------------------+
Output:
+---------+
| post_id |
+---------+
| 8       |
| 9       |
+---------+
Explanation:
Post 6 sits exactly at three mentions and three hashtags — "more than
3" needs a fourth, so it is fine. Post 7 is precisely 140 characters,
not longer, so the length rule leaves it alone. Posts 8 and 9 each tip
one counter to four and are flagged.
```

Write your solution as a single `SELECT` query returning one column —
`post_id` — holding exactly the ids of the posts that break at least
one limit, in ascending order. Return the result table in that order.
