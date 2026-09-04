# Count Meals and Drinks

## Description

A restaurant totals up what its tickets cover. `Tickets` holds one row
per ticket; `Combos` describes the fixed meal-and-drink packages a
ticket can be paired with.

Table: `Tickets`

| Column Name | Type |
| ----------- | ---- |
| ticket_id   | int  |
| combo_id    | int  |
| meal_count  | int  |
| drink_count | int  |

`ticket_id` is the column with unique values for this table. `combo_id`
is a foreign key (reference column) of the `Combos` table. Each row
lists how many meals and drinks the ticket covers on its own; a ticket
may be paired with a combo, whose meals and drinks are served to that
ticket as well.

Table: `Combos`

| Column Name | Type |
| ----------- | ---- |
| combo_id    | int  |
| meal_count  | int  |
| drink_count | int  |

`combo_id` is the column with unique values for this table. Each row
lists the meals and drinks the combo adds for any ticket paired with it
— when several tickets share a combo, its meals and drinks count for
each of them.

Write a solution to count the total meals and drinks covered by all the
tickets. If a ticket is paired with a combo, include the combo's meals
and drinks too.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Tickets` and `Combos` rows (whichever are present) before
your query runs. The result format is in the following example.

### Example 1

```text
Input:
Tickets table:
+-----------+----------+------------+-------------+
| ticket_id | combo_id | meal_count | drink_count |
+-----------+----------+------------+-------------+
| 2         | null     | 3          | 7           |
| 11        | 4        | 5          | 2           |
| 15        | 9        | 1          | 6           |
| 12        | 4        | 8          | 3           |
| 20        | null     | 6          | 1           |
| 7         | 9        | 2          | 5           |
+-----------+----------+------------+-------------+
Combos table:
+----------+------------+-------------+
| combo_id | meal_count | drink_count |
+----------+------------+-------------+
| 4        | 6          | 3           |
| 9        | 5          | 8           |
| 13       | 2          | 2           |
+----------+------------+-------------+
Output:
+------------+-------------+
| meal_count | drink_count |
+------------+-------------+
| 47         | 46          |
+------------+-------------+
Explanation:
ticket 2 covers 3 meals and 7 drinks on its own.
ticket 11 covers 5 + 6 (from the combo) = 11 meals and 2 + 3 (from the combo) = 5 drinks.
ticket 15 covers 1 + 5 (from the combo) = 6 meals and 6 + 8 (from the combo) = 14 drinks.
ticket 12 covers 8 + 6 (from the combo) = 14 meals and 3 + 3 (from the combo) = 6 drinks.
ticket 20 covers 6 meals and 1 drink on its own.
ticket 7 covers 2 + 5 (from the combo) = 7 meals and 5 + 8 (from the combo) = 13 drinks.
Total meals = 3 + 11 + 6 + 14 + 6 + 7 = 47
Total drinks = 7 + 5 + 14 + 6 + 1 + 13 = 46
```

Write your solution as a single `SELECT` query returning one row with
`meal_count` and `drink_count` — the total meals and drinks across all
tickets, with each ticket's combo included when it has one.
