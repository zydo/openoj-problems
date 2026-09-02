# Reporting Lines From The Top

## Description

Table: `staff`

| Column Name | Type    |
| ----------- | ------- |
| staff_id    | int     |
| staff_name  | varchar |
| reports_to  | int     |
| pay         | int     |

`staff_id` is the unique identifier for this table.
`reports_to` holds the `staff_id` of the person this row reports to. The
head of the organization is the one row whose `reports_to` is null.

Write a query that walks out from the head of the organization and lists
everyone below them — direct reports and anything further down — with
how far each person sits from the top and how their pay compares to the
head's.

The result columns are:

- `report_id`: the `staff_id` of the person below the head.
- `report_name`: that person's name.
- `depth`: how many reporting steps separate them from the head — 1 for
  direct reports, 2 for the direct reports of direct reports, and so on.
- `pay_gap`: the person's `pay` minus the head's `pay`.

Return the result table ordered by `depth` ascending, then by
`report_id` ascending.

Each testcase supplies its own `dataset`: the script seeds the `staff`
table with that testcase's rows, `reports_to` null on the head's row
alone. The result format is in the following examples.

### Example 1

```text
Input: staff table from the dataset below.
Output:
report_id  report_name  depth  pay_gap
2          Theo         1      -100000
3          Ines         1      -120000
4          Paulo        2      -160000
5          Zadie        2      -140000
6          Ren          3      -180000
Explanation: Mara is the head with pay 400000. Theo and Ines report
straight to her, so both sit at depth 1; Paulo reports to Theo and Zadie
to Ines, putting them at depth 2; Ren reports to Paulo and lands at
depth 3. Each pay_gap is measured against Mara's 400000 — for instance
Ren's 220000 gives 220000 - 400000 = -180000.
```

### Example 2

```text
Input: staff table from the dataset below.
Output:
report_id  report_name  depth  pay_gap
11         Otto         1      0
12         Pia          2      30000
Explanation: Otto reports directly to the head Nell and earns exactly
the same 200000, so his pay_gap is 0 — a gap can be zero or even
positive. Pia reports to Otto, sits at depth 2, and her 230000 tops the
head's pay by 30000.
```

Write your solution as a single `SELECT` query returning these four
columns — one row per person below the head, and none for the head
themself.
