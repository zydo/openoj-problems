# Round-Trip Gift Loops

## Description

Table: `GiftSwap`

| Column Name  | Type |
| ------------ | ---- |
| sender_id    | int  |
| recipient_id | int  |
| gift_price   | int  |

(`sender_id`, `recipient_id`) is the unique key for this table.
Every row logs one present handed over during an office gift draw:
`sender_id` is the coworker who gave the present, `recipient_id` is the
coworker who got it, and `gift_price` is what the present cost.

A round-trip loop is a group of hand-offs that closes back on itself:

- every coworker in the group hands a present to exactly one other
  member,
- every coworker in the group receives a present from exactly one other
  member,
- and following the hand-offs from any member walks through the whole
  group and arrives back at the start (for instance, X hands to Y, Y
  hands to Z, and Z hands back to X).

For every round-trip loop in the table, report the number of presents
that travel around it and their combined price. Return the result
ordered by loop size first and combined price second, both descending.

The result format is in the following example.

### Example 1

```text
Input:
GiftSwap table:
+-----------+--------------+------------+
| sender_id | recipient_id | gift_price |
+-----------+--------------+------------+
| 6         | 7            | 9          |
| 7         | 8            | 22         |
| 8         | 9            | 31         |
| 9         | 6            | 14         |
| 1         | 2            | 18         |
| 2         | 4            | 33         |
| 4         | 1            | 27         |
| 3         | 5            | 40         |
| 5         | 3            | 16         |
+-----------+--------------+------------+
Output:
+---------+-----------+------------+
| loop_id | loop_size | loop_total |
+---------+-----------+------------+
| 1       | 4         | 76         |
| 2       | 3         | 78         |
| 3       | 2         | 56         |
+---------+-----------+------------+
Explanation: The largest loop runs 6 -> 7 -> 8 -> 9 -> 6 and carries four
presents worth 9 + 22 + 31 + 14 = 76 in total. The next loop runs
1 -> 2 -> 4 -> 1 with three presents worth 18 + 33 + 27 = 78. The
shortest loop swaps between 3 and 5: two presents worth 40 + 16 = 56.
Rows are numbered by loop size, largest first, with the combined price
breaking ties.
```

Write your solution as a single `SELECT` query returning three columns —
`loop_id`, `loop_size`, and `loop_total` — one row per round-trip loop,
with loops numbered `1, 2, ...` in that order (if two loops tie on both
loop size and combined price, the one containing the smaller coworker id
gets the smaller `loop_id`). A coworker belongs to a round-trip loop
exactly when they hand off exactly one present and receive exactly one
present over the whole table. Each testcase supplies its own `dataset`:
the script seeds the `GiftSwap` table before your query runs.
