# One Row Per Address

## Description

Table: `Subscribers`

| Column Name     | Type    |
| --------------- | ------- |
| signup_id       | int     |
| subscriber_name | varchar |
| address         | varchar |

Each row holds one signup for a mailing list: the subscriber's id and
name, together with the address they signed up with. Some addresses were
used for more than one signup.

Trim the list so it holds one row per address: keep each address's first
occurrence and drop every later signup that reused it. Each testcase
supplies its own `dataset`: the script seeds the `Subscribers` table
with that testcase's rows before your query runs. Every `signup_id` in a
dataset is distinct, so an address's first occurrence is precisely its
row with the smallest `signup_id`. Addresses count as the same only when
they match exactly — the comparison is case-sensitive.

The result format is in the following example.

### Example 1

```text
Input:
Subscribers table:
+-----------+-----------------+--------------------+
| signup_id | subscriber_name | address            |
+-----------+-----------------+--------------------+
| 1         | Rosa            | rosa@postbox.io    |
| 2         | Milo            | milo@postbox.io    |
| 3         | Ada             | ada@quillnest.net  |
| 4         | Josh            | milo@postbox.io    |
| 5         | Lena            | lena@driftmail.org |
| 6         | Ivy             | ada@quillnest.net  |
+-----------+-----------------+--------------------+
Output:
+-----------+-----------------+--------------------+
| signup_id | subscriber_name | address            |
+-----------+-----------------+--------------------+
| 1         | Rosa            | rosa@postbox.io    |
| 2         | Milo            | milo@postbox.io    |
| 3         | Ada             | ada@quillnest.net  |
| 5         | Lena            | lena@driftmail.org |
+-----------+-----------------+--------------------+
Explanation:
Josh (signup_id = 4) reused Milo's address and Ivy (signup_id = 6)
reused Ada's, so those later signups are dropped and each address keeps
its earliest row.
```

### Example 2

```text
Input:
Subscribers table:
+-----------+-----------------+-----------------+
| signup_id | subscriber_name | address         |
+-----------+-----------------+-----------------+
| 1         | Per             | per@sunmail.co  |
| 2         | Elsa            | Per@sunmail.co  |
| 3         | Nino            | nino@sunmail.co |
+-----------+-----------------+-----------------+
Output:
+-----------+-----------------+-----------------+
| signup_id | subscriber_name | address         |
+-----------+-----------------+-----------------+
| 1         | Per             | per@sunmail.co  |
| 2         | Elsa            | Per@sunmail.co  |
| 3         | Nino            | nino@sunmail.co |
+-----------+-----------------+-----------------+
Explanation:
Nothing is dropped here: `per@sunmail.co` and `Per@sunmail.co` differ
in case, and since addresses compare exactly, they are two different
addresses and every signup survives.
```

Write your solution as a single `SELECT` query returning all three
columns, `signup_id`, `subscriber_name`, `address`, holding exactly the
rows that remain once each reused address has been trimmed to its first
occurrence, ordered by `signup_id` ascending.

## Hints

### Hint 1

Group the rows by `address`: within each group, `MIN(signup_id)` is the
earliest signup that address ever had. The rows to keep are then exactly
the rows whose `signup_id` appears among those per-address minima.
