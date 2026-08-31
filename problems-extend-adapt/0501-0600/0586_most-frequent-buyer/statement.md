# Most Frequent Buyer

## Description

Table: `Purchases`

| Column Name     | Type |
| --------------- | ---- |
| order_number    | int  |
| customer_number | int  |

`order_number` is the primary key. Each row records one order and the
customer who placed it.

Find the `customer_number` of the customer who placed the most orders. The
test data guarantees a unique leader.

Each test case supplies its own `dataset`: the DDL seeds the `Purchases`
table with that test case's rows. The result format is shown in the
following example.

### Example 1

```text
Input: the Purchases table from the dataset below.
Purchases rows:
order_number | customer_number
1            | 7
2            | 3
3            | 3
4            | 9
5            | 7
6            | 7
Output:
customer_number
7
Explanation: Customer 7 placed three orders, ahead of customer 3's two and
customer 9's one.
```

Answer with a single `SELECT` returning exactly one row: the winning
`customer_number`.

Follow-up: what would change if several customers could tie for the lead?

## Hints

### Hint 1

`GROUP BY customer_number` collapses each customer's rows into one group
whose `COUNT(*)` is their order total.

### Hint 2

`ORDER BY COUNT(*) DESC LIMIT 1` keeps the largest group, whose
`customer_number` is the answer.
