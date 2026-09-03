# Shoppers With No Purchases

## Description

Table: `Shoppers`

| Column Name | Type    |
| ----------- | ------- |
| shopperId   | int     |
| name        | varchar |

`shopperId` is the primary key (column with unique values) for this
table. Each row gives the id and name of one shopper.

Table: `Purchases`

| Column Name | Type |
| ----------- | ---- |
| purchaseId  | int  |
| shopperId   | int  |

`purchaseId` is the primary key (column with unique values) for this
table. `shopperId` is a foreign key referencing the `shopperId` of the
`Shoppers` table. Each row records one purchase and the shopper who
made it.

Find every shopper who has never made a purchase.

Return the result table in any order.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Shoppers` rows and, when present, its `Purchases` rows
before your query runs. The result format is in the following example.

### Example 1

```text
Input: Shoppers and Purchases tables from the dataset below.
Output:
NonBuyer
Nilo
Quentin
Rosa
Explanation: Maja and Petra both appear in Purchases; Nilo, Quentin,
and Rosa never do, so exactly their names are reported.
```

Write your solution as a single `SELECT` query returning one column —
`NonBuyer`, the name of every shopper who never makes a purchase.

## Hints

### Hint 1

A shopper who never buys is a `Shoppers` row with no match in
`Purchases` — `Shoppers c LEFT JOIN Purchases o ON c.shopperId =
o.shopperId` keeps every shopper, and the unmatched ones come back
with null in the `Purchases` columns.

### Hint 2

Keep the unmatched rows with `WHERE o.purchaseId IS NULL`:
`Purchases.purchaseId` is that table's primary key, so it is null
exactly when the join found no purchase for that shopper.

### Hint 3

No deduplication and no empty-case handling anywhere: a shopper with
several purchases produces several matched rows, every one of them
non-null and filtered out, and when every shopper buys the filter
keeps nothing — zero rows is the answer.
