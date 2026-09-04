# Desk Swap

## Description

Table: `DeskAssignment`

| Column Name | Type    |
| ----------- | ------- |
| desk_id     | int     |
| learner     | varchar |

`desk_id` is the primary key (column with unique values) for this table.
Each row indicates a learner's name and assigned desk id. The id sequence
always starts from 1 and increments continuously.

Write a solution to swap the desk id of every two consecutive learners.
If the number of learners is odd, the id of the final learner is not
swapped.

Return the result table ordered by `desk_id` in ascending order.

Each testcase supplies its own `dataset`: the DDL seeds the
`DeskAssignment` table with that testcase's rows. The result format is in
the following example.

### Example 1

```text
Input: DeskAssignment table from the dataset below.
DeskAssignment rows:
desk_id  learner
1        Aria
2        Ben
3        Cora
4        Dev
5        Emi
Output:
desk_id  learner
1        Ben
2        Aria
3        Dev
4        Cora
5        Emi
Explanation: consecutive pairs trade desk ids — Ben takes 1 and Aria
takes 2, Dev takes 3 and Cora takes 4 — and the count is odd, so the
final learner, Emi, has no partner and keeps desk id 5.
```

Write your solution as a single `SELECT` query returning two columns —
`desk_id` and `learner` — the same learners under their exchanged desk
ids, one row per learner.

## Hints

### Hint 1

The exchange moves desk ids, not learners: every name rides through
unchanged and only the desk id column mutates. An even desk id steps down
to its left neighbor (`desk_id - 1`) and an odd desk id steps up to its
right neighbor (`desk_id + 1`) — the pairing (1, 2), (3, 4), ... is
exactly this two-way trade, so one parity test per row decides the
direction.

### Hint 2

The odd id's step up has one exception: when the learner count is odd,
the final desk id has no right neighbor and stays put. No single row can
know it is last, so the table's extent must come from outside the row —
a scalar subquery such as `(SELECT MAX(desk_id) FROM DeskAssignment)`
names the final desk, and comparing each odd id against it separates the
paired odds from the unpaired tail.

### Hint 3

One `CASE` spells all three arms — odd and not final gives `desk_id + 1`,
odd and final gives `desk_id`, even gives `desk_id - 1` — and the closing
`ORDER BY desk_id` returns the demanded ascending order. The judge
compares result rows as an unordered multiset, so the sort dresses the
answer rather than deciding it, and the exchanged ids are a permutation
of 1..n, which makes the demanded order total: no two rows ever contend
for a position.
