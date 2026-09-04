# Matching Every Donation

## Description

Table: `Donations`

| Column Name   | Type    |
| ------------- | ------- |
| donation_slot | int     |
| donor         | varchar |
| amount        | int     |

donation_slot is the primary key for this table.
Each row holds one gift in a fundraiser's ledger: the donor's name and
the amount given, together with the gift's 1-based place in the ledger.

A matching partner has promised to double the drive: every gift is
matched with an equal contribution, so each donation effectively raises
twice its `amount`.

Report the matched ledger: return each donation's `donor` and `amount`
together with a third output column, `match_amount`, holding twice the
donation's `amount`. Each testcase supplies its own `dataset`: the
script seeds the `Donations` table with that testcase's gifts before
your query runs. The result format is in the following example.

### Example 1

```text
Input:
Donations table:
+---------------+----------+--------+
| donation_slot | donor    | amount |
+---------------+----------+--------+
| 1             | Hana     | 120    |
| 2             | Luis     | 45     |
| 3             | Petra    | 300    |
| 4             | Sami     | 8      |
+---------------+----------+--------+
Output:
+----------+--------+--------------+
| donor    | amount | match_amount |
+----------+--------+--------------+
| Hana     | 120    | 240          |
| Luis     | 45     | 90           |
| Petra    | 300    | 600          |
| Sami     | 8      | 16           |
+----------+--------+--------------+
Explanation:
Each gift is joined by an equal match: Hana's 120 becomes 240 in total,
Luis's 45 becomes 90, and so on down the ledger.
```

Write your solution as a single `SELECT` query returning exactly three
columns, `donor` then `amount` then `match_amount`, one row per
donation, ordered by ascending `donation_slot` — that is, in the ledger's
own order.

## Hints

### Hint 1

The matched total is not stored anywhere — it has to be computed on the
way out. A SELECT list may hold any expression, so adding
`amount * 2 AS match_amount` produces the doubled value row by row and
gives the new output column its name, without touching the stored rows.
