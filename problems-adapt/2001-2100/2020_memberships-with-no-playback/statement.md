# Memberships With No Playback

## Description

Table: `Memberships`

| Column Name | Type |
| ----------- | ---- |
| member_id   | int  |
| active_from | date |
| active_to   | date |

`member_id` is the primary key column for this table. Each row records the
span of one member's paid membership. `active_from` is always earlier than
`active_to`.

Table: `Playbacks`

| Column Name | Type |
| ----------- | ---- |
| playback_id | int  |
| member_id   | int  |
| played_on   | date |

`playback_id` is the primary key column for this table. `member_id` is a
foreign key referencing the `Memberships` table. Each row logs one viewing
session: which member watched and on what date.

Write a query that counts the members who held a membership at some point in
2021 yet never played anything during that year. A membership counts as
covering 2021 when its date span overlaps the year, including memberships
that begin or end exactly on January 1 or December 31.

Each testcase supplies its own `dataset`, whose statements insert all rows for
both tables before your query runs. The query must always return one row with
a single column named `member_count`, including when the count is zero. The
query result format is shown in the following example.

### Example 1

```text
Input:
Memberships table:
member_id  active_from  active_to
4          2021-02-14   2021-08-30
7          2020-11-05   2021-03-19
2          2019-05-01   2020-09-09
5          2021-06-30   2022-02-01
8          2020-01-01   2020-12-31
Playbacks table:
playback_id  member_id  played_on
31           7          2021-03-02
32           7          2020-07-07
33           8          2020-06-01
34           5          2022-01-15
Output:
member_count
2
Explanation: Members 4 and 5 are counted. Member 4 never played anything at
all, and member 5's only playback falls in 2022. Member 7 watched in 2021,
while members 2 and 8 held no membership that overlapped 2021.
```

### Example 2

```text
Input:
Memberships table:
member_id  active_from  active_to
1          2021-12-31   2022-01-02
3          2020-12-31   2021-01-01
Playbacks table:
playback_id  member_id  played_on
41           1          2021-12-31
Output:
member_count
1
Explanation: Member 1's membership starts on the final day of 2021, but they
played something that very day, so only member 3 — whose membership ends on
the first day of 2021 without any playback — is counted.
```
