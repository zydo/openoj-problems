# Unscored Volumes In The Catalog

## Description

Table: `Catalog`

| Column Name  | Type    |
| ------------ | ------- |
| volume_id    | int     |
| title        | varchar |
| author       | varchar |
| printed_year | int     |
| score        | decimal |

`volume_id` is the unique key for this table. Each row describes one
volume in a book catalog: its unique id, title, author, year of
printing, and review score. `score` can be NULL, meaning no reviewer
has scored that volume yet.

Write a solution to report every volume that is still waiting for a
score — that is, every volume whose `score` is NULL.

Return the result table ordered by `volume_id` in ascending order.

Each testcase supplies its own `dataset`: the script seeds the
`Catalog` table with that testcase's rows. The result format is shown
in the following examples.

### Example 1

```text
Input:
Catalog table:
+-----------+--------------------+--------------+--------------+-------+
| volume_id | title              | author       | printed_year | score |
+-----------+--------------------+--------------+--------------+-------+
| 7         | Saltmer Row        | Iris Camber  | 1988         | 3.9   |
| 8         | The Paper Orchard  | Tomas Reyes  | 2001         | NULL  |
| 12        | Winter in Ardennes | M. Larkin    | 1975         | 0.0   |
| 13        | The Glass Ferry    | Nora Vane    | 1993         | NULL  |
| 15        | Hollow Creek       | P. Ostrander | 1846         | 4.75  |
+-----------+--------------------+--------------+--------------+-------+
Output:
+-----------+-------------------+--------------+--------------+
| volume_id | title             | author       | printed_year |
+-----------+-------------------+--------------+--------------+
| 8         | The Paper Orchard | Tomas Reyes  | 2001         |
| 13        | The Glass Ferry   | Nora Vane    | 1993         |
+-----------+-------------------+--------------+--------------+
Explanation: Volumes 8 and 13 carry a NULL score, so they are the ones
reported. Volume 12 shows why a score of 0.0 is different: it is a
real, if harsh, score, so Winter in Ardennes counts as reviewed and
stays out of the result.
```

### Example 2

```text
Input:
Catalog table:
+-----------+-----------------+-------------+--------------+-------+
| volume_id | title           | author      | printed_year | score |
+-----------+-----------------+-------------+--------------+-------+
| 21        | Midnight Ledger | A. Wick     | 2010         | NULL  |
| 22        | The Quiet Kiln  | R. Sandover | 2016         | NULL  |
+-----------+-----------------+-------------+--------------+-------+
Output:
+-----------+-----------------+-------------+--------------+
| volume_id | title           | author      | printed_year |
+-----------+-----------------+-------------+--------------+
| 21        | Midnight Ledger | A. Wick     | 2010         |
| 22        | The Quiet Kiln  | R. Sandover | 2016         |
+-----------+-----------------+-------------+--------------+
Explanation: Nothing in the catalog has been scored yet, so every
volume qualifies and the output lists them all in ascending
`volume_id` order.
```

Write your solution as a single `SELECT` query returning four columns —
`volume_id`, `title`, `author`, and `printed_year`, in that order — one
row per unscored volume. A score of zero still counts as a score; only
a true NULL qualifies. Rows come back ordered by `volume_id` ascending.
