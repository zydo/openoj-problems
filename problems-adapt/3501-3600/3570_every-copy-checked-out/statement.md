# Every Copy Checked Out

## Description

Table: `book_shelf`

| Column Name  | Type    |
| ------------ | ------- |
| volume_id    | int     |
| title        | varchar |
| author       | varchar |
| genre        | varchar |
| published_in | int     |
| copies_owned | int     |

`volume_id` is the unique key for this table. Each row describes one
volume the library holds, including how many physical copies it owns.

Table: `checkouts`

| Column Name  | Type    |
| ------------ | ------- |
| checkout_id  | int     |
| volume_id    | int     |
| reader_name  | varchar |
| taken_on     | date    |
| brought_back | date    |

`checkout_id` is the unique key for this table. Each row is one lending
transaction, and `brought_back` is NULL while the copy is still out with
its reader.

Write a solution to find every volume that is fully checked out — all of
its copies are currently in readers' hands.

- A volume is currently lent out if it has at least one checkout row with
  a NULL `brought_back`.
- A volume is fully checked out when the number of such open lendings
  equals its `copies_owned`, leaving nothing on the shelf.

Return the result table ordered by `active_readers` in descending order,
then by title in ascending order.

Every testcase supplies its own `dataset`: the DDL seeds both tables with
that testcase's rows. The result format is in the following example.

### Example 1

```text
Input:

book_shelf table:

+-----------+--------------------------+----------------+---------+--------------+--------------+
| volume_id | title                    | author         | genre   | published_in | copies_owned |
+-----------+--------------------------+----------------+---------+--------------+--------------+
| 11        | The Lighthouse Keeper    | Mara Voss      | Mystery | 1998         | 2            |
| 12        | Copper Skies             | Ilya Brandt    | Romance | 2011         | 3            |
| 13        | Field Notes From Nowhere | June Okafor    | Memoir  | 2019         | 1            |
| 14        | Winter Harbor            | Theo Lange     | Mystery | 2005         | 2            |
| 15        | A Study Of Ash           | Petra Lindt    | Thriller| 2016         | 1            |
+-----------+--------------------------+----------------+---------+--------------+--------------+

checkouts table:

+-------------+-----------+---------------+------------+--------------+
| checkout_id | volume_id | reader_name   | taken_on   | brought_back |
+-------------+-----------+---------------+------------+--------------+
| 1           | 11        | Ruth Calloway | 2025-03-01 | NULL         |
| 2           | 11        | Omar Haddad   | 2025-03-04 | NULL         |
| 3           | 12        | Lena Petrov   | 2025-02-20 | NULL         |
| 4           | 12        | Sam Ortiz     | 2025-02-25 | 2025-03-10   |
| 5           | 12        | Ada Nwosu     | 2025-03-12 | NULL         |
| 6           | 13        | Ben Aoki      | 2025-03-15 | NULL         |
| 7           | 14        | Chloe Renner  | 2025-01-10 | 2025-02-01   |
+-------------+-----------+---------------+------------+--------------+

Output:

+-----------+-----------------------+------------+---------+--------------+----------------+
| volume_id | title                 | author     | genre   | published_in | active_readers |
+-----------+-----------------------+------------+---------+--------------+----------------+
| 11        | The Lighthouse Keeper | Mara Voss  | Mystery | 1998         | 2              |
| 13        | Field Notes From Nowhere | June Okafor | Memoir  | 2019         | 1            |
+-----------+-----------------------+------------+---------+--------------+----------------+

Explanation:

    The Lighthouse Keeper (volume_id = 11):

        Copies owned: 2
        Open lendings: Ruth Calloway and Omar Haddad (2 readers)
        Available: 2 - 2 = 0 — fully checked out.

    Field Notes From Nowhere (volume_id = 13):

        Copies owned: 1
        Open lendings: Ben Aoki (1 reader)
        Available: 1 - 1 = 0 — fully checked out.

    Volumes not included:

        Copper Skies (volume_id = 12): 3 copies owned, 2 open lendings,
        1 copy still on the shelf.
        Winter Harbor (volume_id = 14): its only lending was returned,
        so no open lendings remain.
        A Study Of Ash (volume_id = 15): never borrowed at all.

Output table is ordered by active_readers in descending order, then by
title in ascending order.
```

Write your solution as a single `SELECT` query returning every fully
checked-out volume together with its `active_readers` count.
