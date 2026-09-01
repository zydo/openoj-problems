# Replies per Topic

## Description

Table: `Feedback`

| Column Name | Type |
| ----------- | ---- |
| entry_id    | int  |
| reply_to    | int  |

This table may contain duplicate rows.
Each row is one board entry: either a topic or a reply.

A topic row has `reply_to` set to null. A reply row carries the `entry_id`
of the topic it answers in `reply_to` — although that topic may itself have
no row left in the table.

Write a query that reports, for every topic, how many distinct replies it
has. The result table holds each `topic_id` with its `reply_count`.

Duplicates work in both directions and must both collapse: the same topic
row can appear several times but still counts as one topic, and the same
reply can be recorded several times but still counts as one reply. Replies
whose `reply_to` does not name a topic in the table count toward nothing,
and a topic with no replies at all reports a `reply_count` of zero.

Return the result table ordered by `topic_id` in ascending order.

The result format is in the following example.

### Example 1

```text
Input:
Feedback table:
+----------+----------+
| entry_id | reply_to |
+----------+----------+
| 1        | Null     |
| 2        | Null     |
| 1        | Null     |
| 9        | Null     |
| 3        | 1        |
| 3        | 1        |
| 4        | 1        |
| 8        | 1        |
| 5        | 2        |
| 6        | 2        |
| 7        | 8        |
+----------+----------+
Output:
+----------+-------------+
| topic_id | reply_count |
+----------+-------------+
| 1        | 3           |
| 2        | 2           |
| 9        | 0           |
+----------+-------------+
Explanation: Topic 1 collects the distinct replies 3, 4 and 8 — entry 3
appears twice but is one reply, and the repeated topic row for 1 is still a
single topic. Topic 2 collects replies 5 and 6. Topic 9 has no replies and
reports zero. Entry 7 answers entry 8, which is a reply rather than a topic,
so it is not counted anywhere.
```
