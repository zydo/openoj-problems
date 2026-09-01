# Prepaid Card Balances

## Description

Table: `Cards`

| Column  | Type    |
| ------- | ------- |
| card_no | int     |
| owner   | varchar |

`card_no` is the column with unique values for this table. Each row
holds the number of one prepaid card and its owner's name. No two
owners share a name.

Table: `Movements`

| Column   | Type |
| -------- | ---- |
| move_id  | int  |
| card_no  | int  |
| delta    | int  |
| moved_on | date |

`move_id` is the column with unique values for this table. Each row
records one value change on a card: `delta` is positive when the card
was loaded with money and negative when it was spent. Every card starts
at a balance of 0, so a card's current balance is the sum of `delta`
over all of its rows in `Movements`.

The issuer wants a list of heavily funded cards. Report the `owner`
and `balance` of every card whose balance is strictly greater than 10000.

Return the result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds `Cards` and
`Movements` with that testcase's rows before your query runs. The
result format is in the following example.

### Example 1

```text
Input: the Cards and Movements tables from the dataset below.
Cards rows:
card_no | owner
4001    | Iris
4002    | Jonas
4003    | Katya
Movements rows:
move_id | card_no | delta | moved_on
1       | 4001    | 9000  | 2022-04-02
2       | 4001    | 9000  | 2022-05-02
3       | 4001    | -3500 | 2022-05-03
4       | 4002    | 2500  | 2022-05-11
5       | 4003    | 7000  | 2022-04-06
6       | 4003    | 7000  | 2022-05-06
7       | 4003    | -2000 | 2022-05-09
Output:
owner | balance
Iris  | 14500
Katya | 12000
Explanation: Iris's balance is (9000 + 9000 - 3500) = 14500. Jonas's
balance is 2500. Katya's balance is (7000 + 7000 - 2000) = 12000.
Iris's and Katya's balances are strictly greater than 10000, so their
rows are returned.
```

### Example 2

```text
Input: the Cards and Movements tables from the dataset below.
Cards rows:
card_no | owner
5001    | Liam
5002    | Mona
Movements rows:
move_id | card_no | delta | moved_on
11      | 5002    | 6000  | 2022-06-01
12      | 5002    | 4000  | 2022-06-02
Output:
owner | balance
Explanation: Liam's card has no movements, so its balance is 0.
Mona's balance is (6000 + 4000) = 10000, which is not strictly greater
than 10000. No card qualifies, so the result is empty.
```

Write your solution as a single `SELECT` query returning `owner` and
`balance`, one row for every card whose summed `delta` exceeds 10000.
Cards with no matching rows in `Movements` have a balance of 0 and
never appear in the result.
