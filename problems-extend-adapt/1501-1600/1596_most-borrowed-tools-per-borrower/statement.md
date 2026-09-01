# Most-Borrowed Tools per Borrower

## Description

Table: `Borrowers`

| Column      | Type    |
| ----------- | ------- |
| borrower_id | int     |
| name        | varchar |

`borrower_id` is the column with unique values for this table. This
table contains information about the members of a tool-lending shop.

Table: `Loans`

| Column      | Type |
| ----------- | ---- |
| loan_id     | int  |
| loan_date   | date |
| borrower_id | int  |
| tool_id     | int  |

`loan_id` is the column with unique values for this table. This table
contains information about the loans placed by `borrower_id`. No
borrower takes out the same tool more than once on the same day.

Table: `Tools`

| Column    | Type    |
| --------- | ------- |
| tool_id   | int     |
| tool_name | varchar |
| price     | int     |

`tool_id` is the column with unique values for this table. This table
contains information about the tools in the shop's inventory.

Write a solution to find the most frequently borrowed tool(s) for each
borrower. A borrower's loan count for a tool is the number of rows
that borrower contributes to `Loans` for that tool; the most
frequently borrowed tool(s) are whichever tool(s) reach that
borrower's highest count. When two or more tools share the highest
count, every one of them belongs in the result. A borrower who took
out nothing at all contributes no row to the result.

Each testcase supplies its own `dataset`: the DDL seeds `Borrowers`,
`Loans`, and `Tools` with that testcase's rows before your query runs
— any of the three may hold no rows for a testcase. Return the result
table with columns `borrower_id`, `tool_id`, and `tool_name`, in any
order. The result format is in the following example.

### Example 1

```text
Input: the Borrowers, Loans, and Tools tables from the dataset below.
Borrowers rows:
borrower_id | name
1           | Ada
2           | Ben
3           | Cleo
4           | Dev
5           | Ed
Loans rows:
loan_id | loan_date  | borrower_id | tool_id
1       | 2020-07-31 | 1           | 1
2       | 2020-07-30 | 2           | 2
3       | 2020-08-29 | 3           | 3
4       | 2020-07-29 | 4           | 1
5       | 2020-06-10 | 1           | 2
6       | 2020-08-01 | 2           | 1
7       | 2020-08-01 | 3           | 3
8       | 2020-08-03 | 1           | 2
9       | 2020-08-07 | 2           | 3
10      | 2020-07-15 | 1           | 2
Tools rows:
tool_id | tool_name | price
1       | drill     | 120
2       | ladder    | 80
3       | sander    | 600
4       | workbench | 450
Output:
borrower_id | tool_id | tool_name
1           | 2       | ladder
2           | 1       | drill
2           | 2       | ladder
2           | 3       | sander
3           | 3       | sander
4           | 1       | drill
Explanation: Ada (borrower 1) took out the ladder three times and the
drill one time, so the ladder is the most frequently borrowed tool
for them. Ben (borrower 2) took out the drill, the ladder, and the
sander one time each, so all three tie for most frequently borrowed.
Cleo (borrower 3) took out only the sander (two times), so that is
the most frequently borrowed tool for them. Dev (borrower 4) took out
only the drill (one time), so that is the most frequently borrowed
tool for them. Ed (borrower 5) did not take anything out, so he is
excluded from the result table.
```

### Example 2

```text
Input: the Borrowers, Loans, and Tools tables from the dataset below.
Borrowers rows:
borrower_id | name
7           | Fay
8           | Gus
Tools rows:
tool_id | tool_name | price
10      | trowel    | 20
11      | mallet    | 15
Loans rows:
loan_id | loan_date  | borrower_id | tool_id
101     | 2020-01-01 | 7           | 10
102     | 2020-01-02 | 7           | 11
103     | 2020-01-03 | 7           | 10
104     | 2020-01-04 | 7           | 11
Output:
borrower_id | tool_id | tool_name
7           | 10      | trowel
7           | 11      | mallet
Explanation: Fay took out the trowel two times and the mallet two
times, an exact tie, so both tools belong in the result. Gus took out
nothing, so he is excluded.
```

Write your solution as a single `SELECT` query returning
`borrower_id`, `tool_id`, and `tool_name` — one row for every
borrower-tool pair whose loan count equals that borrower's highest
count over all tools they ever borrowed.
