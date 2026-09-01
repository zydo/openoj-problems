# Counting Watchers per Repo

## Description

A code-hosting platform lets its users watch repositories to follow
along with their changes. `Watchers` holds those subscriptions, one row
per repository-and-watcher pair.

Table: `Watchers`

| Column Name | Type |
| ----------- | ---- |
| repo_id     | int  |
| watcher_id  | int  |

(`repo_id`, `watcher_id`) is the primary key (combination of columns
with unique values) for this table. Each row names a repository and one
user who watches it.

For each repository, return how many users watch it.

Each testcase's `dataset` seeds the `Watchers` table: its script inserts
the testcase's `Watchers` rows (whichever are present) before your query
runs. Return the result table ordered by `repo_id` in ascending order.
The result format is in the following example.

### Example 1

```text
Input:
Watchers table:
+---------+------------+
| repo_id | watcher_id |
+---------+------------+
| 5       | 12         |
| 5       | 30         |
| 9       | 12         |
| 2       | 7          |
| 2       | 12         |
| 2       | 30         |
+---------+------------+
Output:
+---------+----------------+
| repo_id | watchers_count |
+---------+----------------+
| 2       | 3              |
| 5       | 2              |
| 9       | 1              |
+---------+----------------+
Explanation:
The watchers of 2 are {7, 12, 30}
The watchers of 5 are {12, 30}
The watchers of 9 are {12}
```

Write your solution as a single `SELECT` query returning `repo_id` and
`watchers_count` — the number of watchers — for every repository that
appears in `Watchers`, ordered by `repo_id` ascending.
