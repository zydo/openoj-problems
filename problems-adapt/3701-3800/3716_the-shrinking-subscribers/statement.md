# The Shrinking Subscribers

## Description

Table: `plan_history`

| Column Name   | Type    |
| ------------- | ------- |
| entry_id      | int     |
| member_id     | int     |
| logged_on     | date    |
| change_kind   | varchar |
| tier_name     | varchar |
| monthly_price | decimal |

`entry_id` is the unique ID for this table. Each row logs one turn of a
member's subscription: `change_kind` is `'start'`, `'upgrade'`,
`'downgrade'` or `'cancel'`; `tier_name` is `'basic'`, `'standard'` or
`'premium'`, and is NULL precisely when the row is a `'cancel'`;
`monthly_price` is the per-month cost in force once this row takes
effect, and is 0 on `'cancel'` rows.

A member is a _shrinking subscriber_ when all four of these are true:

- The subscription is still live — the member's newest row is not a
  `'cancel'`.
- Somewhere in the history at least one `'downgrade'` row appears.
- The member's current monthly price is under half of their all-time
  peak: the `monthly_price` on the newest row is strictly below 50% of
  the highest `monthly_price` across that member's rows. Landing on
  exactly half does not count.
- The membership has run for at least 60 days.

That span runs from a member's earliest `logged_on` to their latest, as
a plain day difference; all of one member's rows fall on different
dates, so the two endpoints are never ambiguous.

For every shrinking subscriber, report:

- `current_tier`, the `tier_name` on their newest row;
- `current_monthly_price`, that row's `monthly_price`;
- `peak_monthly_price`, the highest `monthly_price` they ever carried;
- `days_enrolled`, the span described above.

Order the output by `days_enrolled` from largest to smallest, breaking
ties by `member_id` from smallest to largest.

Each testcase supplies its own `dataset`: its statements fill the table
before your query runs. The result format is shown in the following
example.

### Example 1

```text
Input: the plan_history table from the dataset below.
entry_id | member_id | logged_on  | change_kind | tier_name | monthly_price
1        | 601       | 2025-01-06 | start       | premium   | 24.50
2        | 601       | 2025-02-10 | downgrade   | standard  | 15.75
3        | 601       | 2025-03-14 | downgrade   | basic     | 8.25
4        | 602       | 2025-01-03 | start       | standard  | 15.75
5        | 602       | 2025-02-07 | upgrade     | premium   | 24.50
6        | 602       | 2025-04-01 | downgrade   | basic     | 8.25
7        | 603       | 2025-01-08 | start       | premium   | 24.50
8        | 603       | 2025-03-01 | downgrade   | standard  | 15.75
9        | 604       | 2024-11-15 | start       | standard  | 19.00
10       | 604       | 2025-02-01 | downgrade   | basic     | 9.50
11       | 605       | 2025-01-02 | start       | premium   | 24.50
12       | 605       | 2025-03-05 | downgrade   | basic     | 8.25
13       | 605       | 2025-03-20 | cancel      | NULL      | 0.00
14       | 606       | 2025-01-25 | start       | basic     | 8.25
15       | 606       | 2025-03-10 | upgrade     | standard  | 15.75
16       | 607       | 2025-02-20 | start       | premium   | 24.50
17       | 607       | 2025-03-25 | downgrade   | basic     | 8.25
Output:
member_id | current_tier | current_monthly_price | peak_monthly_price | days_enrolled
602       | basic        | 8.25                  | 24.50              | 88
601       | basic        | 8.25                  | 24.50              | 67
Explanation: Member 602 climbed to premium before sliding all the way
to basic: the 8.25 they now pay is far under half of their 24.50 peak,
no cancel ends the record, and Jan 3 to Apr 1 spans 88 days. Member 601
only ever moved down, landing on basic at 8.25 against the same 24.50
high-water mark over a 67-day span, so both members report. Member 603
stepped down too, but 15.75 is more than half of 24.50, so their
revenue never collapsed enough. Member 604 shows the exact-half edge:
9.50 is precisely half of the 19.00 peak, and "strictly under" keeps
them out. Member 605's newest row is a cancel, closing the
subscription. Member 606 never downgraded a single tier. Member 607
clears every revenue test but Feb 20 to Mar 25 is only 33 days, short
of the 60-day floor.
```

Answer with one `SELECT` whose output columns are `member_id`,
`current_tier`, `current_monthly_price`, `peak_monthly_price` and
`days_enrolled`, in that order.
