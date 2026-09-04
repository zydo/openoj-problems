# Most Connected Member

## Description

Table: `ConfirmedLinks`

| Column Name  | Type |
| ------------ | ---- |
| sender_id    | int  |
| recipient_id | int  |
| confirmed_on | date |

`(sender_id, recipient_id)` is unique. A row says that two members formed a
confirmed connection on `confirmed_on`. Connections count for both members.

Find the one member with more connections than every other member. Return
`member_id` and that member's `connection_total`. Test data guarantees a
unique leader.

### Example 1

```text
Input: ConfirmedLinks
sender_id  recipient_id  confirmed_on
7          8             2022-09-01
8          9             2022-09-02
10         8             2022-09-04
11         7             2022-09-07

Output:
member_id  connection_total
8          3
```

Member 8 occurs in three connections, while member 7 occurs twice and every
other member occurs once.

Write one `SELECT` query returning exactly one row.

### Constraints

- Every connection contributes once to each endpoint.
- Exactly one member has the largest connection total.

## Hints

### Hint 1

Turn each endpoint column into a single column with `UNION ALL`.

### Hint 2

Count each member's occurrences, then retain the largest count.
