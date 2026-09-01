# Friend Shelf Picks II

## Description

Table: `Buddies`

| Column Name | Type |
| ----------- | ---- |
| buddy_a     | int  |
| buddy_b     | int  |

`(buddy_a, buddy_b)` is the primary key (combination of columns with
unique values) for this table.
Each row records that two readers are buddies. The relation is
symmetric and may be stored from either side: a row `(a, b)` and a row
`(b, a)` both mean the same pair.

Table: `Shelved`

| Column Name | Type |
| ----------- | ---- |
| reader_id   | int  |
| book_id     | int  |

`(reader_id, book_id)` is the primary key (combination of columns with
unique values) for this table.
Each row records that `reader_id` has `book_id` on their shelf.

You are building a book-shelf recommendation system for a reading
community. The system recommends a book to a reader when at least one
of their buddies has it on their shelf and the reader does not have it
on their own.

Build every possible recommendation, for every reader. Each
recommendation is one row of the result table with these columns:

- `reader_id`: the reader the system is recommending to.
- `book_id`: the book being recommended to that reader.
- `buddies_shelved`: how many of the reader's buddies have the book on
  their shelf.

The result table may be returned in any order.

Each testcase's `dataset` seeds the `Buddies` and `Shelved` tables with
that testcase's rows. The result format is in the following example.

### Example 1

```text
Input:
Buddies table:
+---------+---------+
| buddy_a | buddy_b |
+---------+---------+
| 3       | 5       |
| 5       | 8       |
| 11      | 3       |
| 9       | 5       |
| 5       | 9       |
| 14      | 8       |
| 3       | 20      |
+---------+---------+
Shelved table:
+-----------+---------+
| reader_id | book_id |
+-----------+---------+
| 3         | 101     |
| 3         | 105     |
| 5         | 102     |
| 5         | 101     |
| 8         | 103     |
| 9         | 101     |
| 9         | 106     |
| 11        | 105     |
| 14        | 104     |
| 14        | 101     |
| 20        | 101     |
| 20        | 105     |
+-----------+---------+
Output:
+-----------+---------+-----------------+
| reader_id | book_id | buddies_shelved |
+-----------+---------+-----------------+
| 3         | 102     | 1               |
| 5         | 103     | 1               |
| 5         | 105     | 1               |
| 5         | 106     | 1               |
| 8         | 101     | 2               |
| 8         | 102     | 1               |
| 8         | 104     | 1               |
| 9         | 102     | 1               |
| 11        | 101     | 1               |
| 14        | 103     | 1               |
+-----------+---------+-----------------+
Explanation:
Take reader 8 as an example:
- Reader 8 is buddies with readers 5 and 14.
- Reader 5 shelves books 102 and 101; reader 14 shelves 104 and 101.
- Book 101 is recommended with `buddies_shelved = 2` because both
  buddies have it; books 102 and 104 are recommended with a count of
  1 each.
- Reader 8's own shelf holds only book 103, which none of their
  buddies has, so nothing the buddies shelf is filtered out for
  reader 8.

Reader 20 shows the empty case:
- Reader 20 is buddies only with reader 3, whose shelf holds books 101
  and 105 — but reader 20 already shelves both. Hence reader 20 gets
  no recommendations at all.

The pair (9, 5) appears twice in `Buddies` — once from each side.
Readers 5 and 9 are still a single buddy pair: reader 5 receives book
106 from reader 9 with a count of 1, not 2.

Readers 3, 5, 9, 11, and 14 are handled by the same process.
```
