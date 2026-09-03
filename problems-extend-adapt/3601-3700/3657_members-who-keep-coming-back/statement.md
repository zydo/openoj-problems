# Members Who Keep Coming Back

## Description

Table: `member_orders`

| Column Name | Type    |
| ----------- | ------- |
| order_id    | int     |
| member_id   | int     |
| order_date  | date    |
| amount      | decimal |
| order_type  | varchar |

`order_id` is the unique ID for this table. Each row records one order a
member placed with the co-op; `order_type` is either `'purchase'` or
`'refund'`.

A member is **steadfast** when all of the following criteria hold:

- They placed at least 3 purchase orders.
- They have been coming back for at least 30 days — the number of days
  between their earliest and latest order dates is at least 30.
- Their return rate is below 20%. The return rate is the proportion of
  orders that are refunds: the number of refund orders divided by the
  total number of orders, purchases and refunds alike.

Return the result table ordered by `member_id` in ascending order.

Each testcase supplies its own `dataset`: its statements fill the table
before your query runs. The result format is shown in the following
example.

### Example 1

```text
Input: the member_orders table from the dataset below.
order_id | member_id | order_date | amount | order_type
901      | 201       | 2025-02-03 | 42.00  | purchase
902      | 201       | 2025-02-14 | 18.50  | purchase
903      | 201       | 2025-03-06 | 66.00  | purchase
904      | 201       | 2025-03-18 | 27.25  | purchase
905      | 202       | 2025-02-10 | 50.00  | purchase
906      | 202       | 2025-02-11 | 30.00  | purchase
907      | 202       | 2025-02-12 | 20.00  | purchase
908      | 202       | 2025-02-12 | 12.00  | refund
909      | 202       | 2025-02-13 | 8.00   | refund
910      | 203       | 2025-03-01 | 90.00  | purchase
911      | 203       | 2025-03-03 | 80.00  | purchase
912      | 203       | 2025-03-05 | 70.00  | purchase
913      | 204       | 2025-02-01 | 25.00  | purchase
914      | 204       | 2025-02-20 | 45.00  | purchase
915      | 204       | 2025-03-01 | 35.00  | purchase
916      | 204       | 2025-03-12 | 55.00  | purchase
917      | 204       | 2025-03-20 | 15.00  | purchase
918      | 204       | 2025-03-21 | 9.00   | refund
919      | 205       | 2025-01-05 | 120.00 | purchase
920      | 205       | 2025-04-05 | 60.00  | purchase
Output:
member_id
201
204
Explanation: Member 201 placed 4 purchases and no refunds, so the
return rate is 0/4 = 0%, under the 20% bar, and their orders run from
Feb 3 to Mar 18 — 43 days, over the 30-day floor. All three criteria
hold, so 201 is steadfast. Member 202 placed 3 purchases and 2 refunds,
so the return rate is 2/5 = 40%, and they miss the rate test; their
whole burst of activity also spans only 3 days. Member 203 cleared the
rate test at 0/3 = 0% but ordered only from Mar 1 to Mar 5 — 4 days,
under the floor. Member 204 placed 5 purchases and 1 refund, so the
return rate is 1/6 = 16.67%, under 20%, and their orders run from Feb 1
to Mar 21 — 48 days. They qualify alongside 201. Member 205 spread two
purchases across 90 days but never reached the 3-purchase minimum.
```

Answer with one `SELECT` whose output column is `member_id`.
