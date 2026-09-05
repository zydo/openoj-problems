# Customers Not Referred by Two

## Description

Table: `Guest`

| Column Name | Type |
| ----------- | ---- |
| guest_id    | int  |
| guest_name  | text |
| referrer_id | int  |

`guest_id` is the primary key column for this table.
Each row of this table indicates the id of a guest, their name, and the id
of the guest who referred them.

Write a solution to find the names of the guests that are either:

- Referred by a guest whose `referrer_id` differs from 2.
- Not referred by any guest.

Return the result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds the `Guest` table
with that testcase's rows, `referrer_id` null where the guest was not
referred by anyone. The result format is in the following example.

### Example 1

```text
Input: Guest table from the dataset below.
Output:
guest_name
Anna
Cleo
Eli
Fay
Explanation: Anna and Eli have no referrer, so they were not referred by
anyone; Cleo was referred by guest 1 and Fay by guest 7, both of whom
differ from guest 2. Ben and Dan were both referred by guest 2, so they
are excluded.
```

Write your solution as a single `SELECT` query returning one column,
`guest_name`: the name of every guest who was referred by someone other
than guest 2, and of every guest who was not referred at all.

### Example 2

```text
Input: Guest table from the dataset below.
Output:
guest_name
Hana
Explanation: Gil and Ike were both referred by guest 2, so they are
excluded; Hana has no referrer at all, so she is kept.
```

## Hints

### Hint 1

Both qualifying populations live in one column, so a single two-branch filter settles it: `WHERE referrer_id IS NULL OR referrer_id != 2` keeps the not-referred-at-all, whose `referrer_id` is null, and the referred-by-someone-else, whose `referrer_id` is an integer other than 2.

### Hint 2

The trap is SQL's three-valued logic: on an unreferred row `null != 2` is unknown, not true, so `WHERE referrer_id != 2` alone silently drops exactly the guests the problem asks to keep. The `IS NULL` branch rescues them — or coalesce first, `IFNULL(referrer_id, 0) != 2`, so the null rows compare as 0 against 2 and pass.

### Hint 3

The boundary is `referrer_id` exactly 2: any guest referred by guest 2 is excluded, whatever their own `guest_id` — and a guest whose own id is 2 is an ordinary guest, kept or dropped purely by their `referrer_id`. The judge compares rows as an unordered multiset, so no `ORDER BY` is needed.
