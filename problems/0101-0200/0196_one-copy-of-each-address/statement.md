# One Copy Of Each Address

## Description

Table: `MailingList`

| Column Name | Type    |
| ----------- | ------- |
| listId      | int     |
| address     | varchar |

`listId` is the primary key (column with unique values) for this
table. Each row is one entry on a mailing list: `address` holds the
entry's email address.

Duplicates have crept in — the same address can sit on the list many
times. Trim the list to one entry per distinct address, keeping the
copy with the smallest `listId`, and report what remains.

The judge's SQL executor runs a single `SELECT`; it cannot apply a
mutation to the table. So instead of deleting, your query returns the
rows the trimmed list keeps: one row per distinct address, the copy
with the smallest `listId`. Rows are compared as an unordered multiset,
so their final order is irrelevant.

Each testcase supplies its own `dataset`: the DDL seeds the
`MailingList` table with that testcase's rows. The result format is in
the following example.

### Example 1

```text
Input: MailingList table from the dataset below.
Output:
listId  address
1       nora@example.net
2       omar@example.net
4       petra@example.net
Explanation: nora@example.net and omar@example.net each appear twice.
One copy of each stays — always the entry with the smaller listId.
```

Write your solution as a single `SELECT` query returning the surviving
rows — for each distinct address, its one copy with the smallest
`listId`.

## Hints

### Hint 1

An entry survives the trim exactly when its `listId` is the smallest id
carrying its address. `(SELECT MIN(listId) FROM MailingList GROUP BY
address)` computes that survivor set: one id per distinct address.

### Hint 2

Keep the survivors with `listId IN (...)`: `listId` is the primary key,
so each id belongs to exactly one address's group, and the membership
test is true precisely for the smallest-id copy of every address.

### Hint 3

No ordering and no empty-table special case: the judge compares rows as
an unordered multiset, and zero returned rows is itself the correct
trimmed state of an empty list.
