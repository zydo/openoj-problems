# Leads With Well-Formed Addresses

## Description

Table: `Leads`

| Column Name | Type    |
| ----------- | ------- |
| lead_id     | int     |
| address     | varchar |

`lead_id` is the unique key for this table.
Each row is one signup captured by a newsletter's landing page:
`lead_id` identifies the lead and `address` is the contact address they
typed in.

Before any mail goes out, the addresses get screened. An address is
well-formed when it passes every one of these checks:

- It contains exactly one `@` symbol.
- It ends with `.com`.
- The part before the `@` symbol contains only alphanumeric characters
  and underscores.
- The part between the `@` symbol and the final `.com` is a domain made
  up of letters only.

Return the result ordered by `lead_id` in ascending order.

The result format is in the following example.

### Example 1

```text
Input:
Leads table:
+---------+------------------+
| lead_id | address          |
+---------+------------------+
| 1       | nora@quill.com   |
| 2       | nora#quill.com   |
| 3       | omar@quill.net   |
| 4       | t_ess@pine.io.com|
| 5       | sam_99@Cove.com  |
| 6       | @bravo.com       |
| 7       | liam@            |
| 8       | ivy@zephyr.com   |
+---------+------------------+
Output:
+---------+------------------+
| lead_id | address          |
+---------+------------------+
| 1       | nora@quill.com   |
| 5       | sam_99@Cove.com  |
| 8       | ivy@zephyr.com   |
+---------+------------------+
Explanation:
nora@quill.com is well-formed: one @, the local part nora is
alphanumeric, and quill.com is a letters-only domain ending in .com.
nora#quill.com has no @ at all.
omar@quill.net fails the .com ending.
t_ess@pine.io.com reaches .com, but the text in front of it, pine.io,
is not letters-only.
sam_99@Cove.com passes: underscores and digits are fine in the local
part, and the domain may mix letter cases.
@bravo.com has an empty local part and liam@ has nothing after the @.
ivy@zephyr.com is well-formed.

The result table is ordered by lead_id in ascending order.
```

Write your solution as a single `SELECT` query returning the `lead_id`
and `address` of every lead whose contact address satisfies all four
checks, ordered by `lead_id` in ascending order. Each testcase supplies
its own `dataset`: the script seeds the `Leads` table before your query
runs.
