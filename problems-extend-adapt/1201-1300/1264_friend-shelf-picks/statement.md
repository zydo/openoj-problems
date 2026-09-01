# Friend-Shelf Picks

## Description

Table: `Buddies`

| Column Name | Type |
| ----------- | ---- |
| buddy_a     | int  |
| buddy_b     | int  |

`(buddy_a, buddy_b)` is the primary key (combination of columns with unique
values) for this table.
Each row records that two readers are buddies. The relation is symmetric and
may be stored from either side: a row `(a, b)` and a row `(b, a)` both mean
the same pair.

Table: `Shelved`

| Column Name | Type |
| ----------- | ---- |
| reader_id   | int  |
| book_id     | int  |

`(reader_id, book_id)` is the primary key (combination of columns with
unique values) for this table.
Each row records that `reader_id` has `book_id` on their shelf.

Write a query that builds shelf picks for the reader with `reader_id = 1`:
every book that at least one of their buddies has shelved and that reader 1
does not already have on their own shelf. A book shelved by someone who is
not reader 1's buddy is never a pick.

Return the result table in any order, without duplicates.

The result format is in the following example.

### Example 1

```text
Input:
Buddies table:
+---------+---------+
| buddy_a | buddy_b |
+---------+---------+
| 1       | 2       |
| 1       | 3       |
| 4       | 1       |
| 2       | 5       |
+---------+---------+
Shelved table:
+-----------+---------+
| reader_id | book_id |
+-----------+---------+
| 1         | 12      |
| 2         | 31      |
| 2         | 44      |
| 3         | 44      |
| 3         | 7       |
| 4         | 12      |
| 5         | 99      |
+-----------+---------+
Output:
+------------------+
| recommended_book |
+------------------+
| 31               |
| 44               |
| 7                |
+------------------+
Explanation: Reader 1's buddies are 2, 3 and 4 — reader 4 counts because the
pair is stored as (4, 1). Buddy 2 contributes books 31 and 44, buddy 3
contributes 44 again and book 7, so 44 stays one pick despite being shelved
by two buddies. Buddy 4 has book 12, but reader 1 already shelved it, so it
is dropped. Reader 5 is not a buddy of reader 1, so book 99 is never
considered.
```
