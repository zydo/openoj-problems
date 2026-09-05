# Invitation Acceptance Rate

## Description

Table: `Invitation`

| Column Name  | Type |
| ------------ | ---- |
| sender_id    | int  |
| recipient_id | int  |
| request_date | date |

Table: `Acceptance`

| Column Name  | Type |
| ------------ | ---- |
| requester_id | int  |
| accepter_id  | int  |
| accept_date  | date |

Neither table has a primary key, so both may carry duplicate rows. An
`Invitation` row records that `sender_id` asked `recipient_id` to connect;
an `Acceptance` row records that `accepter_id` accepted `requester_id`'s
invitation.

Report the overall acceptance rate — accepted invitations divided by
invitations — rounded to two decimals. Three rules pin the arithmetic:

- Count every accepted pair, whether or not a matching invitation exists.
- Duplicate requests and duplicate acceptances of the same pair count once
  each.
- With no invitations at all, return `0.00`.

Each test case supplies its own `dataset`: the DDL seeds both tables with
that test case's rows. The result format is shown in the following example.

### Example 1

```text
Input: the Invitation and Acceptance tables from the dataset below.
Invitation rows: (1,2), (1,3), (1,4), (2,3), (3,4)
Acceptance rows: (1,2), (1,3), (2,3), (3,4), (3,4)
Output:
accept_rate
0.8
Explanation: Five distinct pairs were invited and four distinct pairs
accepted — the two (3,4) acceptances are one pair — so the rate is 4/5.
```

Answer with a single `SELECT` whose only output column is `accept_rate`.

Follow-up: could you also report the rate per month, and the cumulative rate
per day?

## Hints

### Hint 1

Reduce each table to its distinct ordered user pairs first, then `COUNT(*)`
each set.

### Hint 2

Multiply by `1.0` before dividing to avoid integer truncation, and map the
zero-invitation case to `0.00` with `COALESCE`/`NULLIF` (or a `CASE`).
