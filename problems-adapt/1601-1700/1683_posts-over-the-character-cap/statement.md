# Posts Over the Character Cap

## Description

Table: `Posts`

| Column Name | Type    |
| ----------- | ------- |
| post_id     | int     |
| body        | varchar |

`post_id` is the primary key (column with unique values) for this table.
`body` consists of alphanumeric characters, `'!'`, or `' '` and no other
special characters. This table holds every message posted to a community
board.

The board enforces a strict character cap of 15: a post is over the cap
exactly when its body runs strictly longer than 15 characters.

Find the IDs of the posts that are over the cap.

Return the result table in any order.

Each testcase's `dataset` seeds the `Posts` table: its script inserts the
testcase's `Posts` rows before your query runs. The result format is in
the following examples.

### Example 1

```text
Input:
Posts table:
+---------+-------------------------------+
| post_id | body                          |
+---------+-------------------------------+
| 1       | the quick browns              |
| 2       | the quick brown               |
| 3       | hello there                   |
| 4       | this line is way past the cap |
+---------+-------------------------------+
Output:
+---------+
| post_id |
+---------+
| 1       |
| 4       |
+---------+
Explanation:
Post 1 uses 16 characters — one past the cap — and post 4 uses 29, so
both are over it. Post 2 counts exactly 15 characters and post 3 only
11, so both stay within the cap.
```

### Example 2

```text
Input:
Posts table:
+---------+------------------------------------------+
| post_id | body                                     |
+---------+------------------------------------------+
| 7       | code all night!                          |
| 8       | coding all night!                        |
| 9       | 9 of 10 stars!                           |
| 10      | way too long for one line of this board  |
+---------+------------------------------------------+
Output:
+---------+
| post_id |
+---------+
| 8       |
| 10      |
+---------+
Explanation:
Post 8 counts 17 characters and post 10 counts 39, so both are over the
cap, while posts 7 and 9 count exactly 15 and 14 and stay within it.
```

Write your solution as a single `SELECT` query returning the `post_id`
of every post whose `body` uses strictly more than 15 characters, in any
order.
