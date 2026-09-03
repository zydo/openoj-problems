# Dominant Reaction Ratios

## Description

Table: `EmojiLog`

| Column Name | Type    |
| ----------- | ------- |
| member_id   | int     |
| post_id     | int     |
| emoji       | varchar |

(`member_id`, `post_id`) is the primary key (unique combination) for
this table. Each row is one emoji a member left on one post; a member
never reacts twice to the same post.

A member's emoji habits are worth reporting when all of the following
hold:

- The member has left at least 5 emojis in total.
- Those emojis span at least 5 different posts.
- One single emoji accounts for at least 60% of the member's rows.

For every such member, report the emoji that dominates their log and the
share of their rows it covers, rounded to 2 decimal places. No member
can have two emojis at 60% or more at once, so the dominant emoji is
always unique.

Return the result table ordered by `emoji_ratio` in descending order,
breaking ties by `member_id` in ascending order.

Each testcase's `dataset` seeds the `EmojiLog` table: its script inserts
the testcase's `EmojiLog` rows before your query runs. The result format
is in the following example.

### Example 1

```text
Input:
EmojiLog table:
+-----------+---------+-------+
| member_id | post_id | emoji |
+-----------+---------+-------+
| 7         | 401     | clap  |
| 7         | 402     | fire  |
| 7         | 403     | clap  |
| 7         | 404     | clap  |
| 7         | 405     | clap  |
| 7         | 406     | clap  |
| 7         | 407     | fire  |
| 7         | 408     | clap  |
| 11        | 501     | heart |
| 11        | 502     | care  |
| 11        | 503     | heart |
| 11        | 504     | care  |
| 11        | 505     | heart |
| 4         | 601     | sad   |
| 4         | 602     | angry |
| 4         | 603     | haha  |
| 4         | 604     | sad   |
| 4         | 605     | angry |
| 4         | 606     | haha  |
| 2         | 701     | love  |
| 2         | 702     | love  |
| 2         | 703     | love  |
| 2         | 704     | love  |
+-----------+---------+-------+
Output:
+-----------+----------------+-------------+
| member_id | dominant_emoji | emoji_ratio |
+-----------+----------------+-------------+
| 7         | clap           | 0.75        |
| 11        | heart          | 0.60        |
+-----------+----------------+-------------+
Explanation: Member 7 left 8 emojis over 8 posts and 'clap' accounts
for 6 of them, so emoji_ratio = 6 / 8 = 0.75. Member 11 sits exactly on
both thresholds: 5 emojis over 5 posts with 'heart' covering 3, giving
emoji_ratio = 3 / 5 = 0.60. Member 4 also cleared 5 posts, but no emoji
of theirs exceeds a third of the log, so they are left out. Member 2 is
uniform — every row is 'love' — yet only 4 posts total, which fails the
5-post span.
```

Write your solution as a single `SELECT` query returning `member_id`,
`dominant_emoji`, and `emoji_ratio` for every qualifying member, ordered
by `emoji_ratio` descending then `member_id` ascending.
