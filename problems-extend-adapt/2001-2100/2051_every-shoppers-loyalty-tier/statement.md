# Every Shopper's Loyalty Tier

## Description

Table: `Shoppers`

| Column Name  | Type    |
| ------------ | ------- |
| shopper_id   | int     |
| shopper_name | varchar |

`shopper_id` is the column with unique values for this table. Each row
gives the ID and the name of one shopper.

Table: `Trips`

| Column Name | Type |
| ----------- | ---- |
| trip_id     | int  |
| shopper_id  | int  |
| trip_date   | date |

`trip_id` is the column with unique values for this table. `shopper_id` is
a foreign key referencing `shopper_id` from the `Shoppers` table. Each row
records one trip a shopper took to the market and the day it happened.

Table: `Orders`

| Column Name | Type |
| ----------- | ---- |
| trip_id     | int  |
| order_total | int  |

`trip_id` is the column with unique values for this table. `trip_id` is a
foreign key referencing `trip_id` from the `Trips` table. Each row records
the total charged on a trip that ended in a purchase.

The market sorts its shoppers into loyalty tiers by conversion:

- `"Diamond"`: the conversion rate is at least `80`.
- `"Gold"`: the conversion rate is at least `50` but below `80`.
- `"Silver"`: the conversion rate is below `50`.
- `"Bronze"`: the shopper never took a single trip.

A shopper's conversion rate is
`(100 * total number of orders for the shopper) / total number of trips for
the shopper`.

Each testcase supplies its own `dataset`, which seeds all three tables.
Write a single `SELECT` query returning `shopper_id`, `shopper_name`, and
`category` — one row for every shopper, in any order. The query result
format is shown in the following example.

### Example 1

```text
Input:
Shoppers table:
shopper_id  shopper_name
4           Amara
8           Boris
15          Chen
21          Dara
30          Elif
Trips table:
trip_id  shopper_id  trip_date
101      4           2022-04-02
102      8           2022-04-05
103      8           2022-05-11
104      15          2022-03-30
105      15          2022-04-14
106      15          2022-05-02
107      21          2022-04-21
Orders table:
trip_id  order_total
101      120
104      75
106      340
Output:
shopper_id  shopper_name  category
4           Amara         Diamond
8           Boris         Silver
15          Chen          Gold
21          Dara          Silver
30          Elif          Bronze
Explanation:
- Amara with id = 4 took one trip and it ended in an order. The conversion
  rate = (100 * 1) / 1 = 100, so she is a Diamond shopper.
- Boris with id = 8 took two trips but never bought anything. The
  conversion rate = (100 * 0) / 2 = 0, so he lands in Silver.
- Chen with id = 15 took three trips, two of which ended in orders. The
  conversion rate = (100 * 2) / 3 = 66.67, which earns Gold.
- Dara with id = 21 took one trip and bought nothing, so the rate is 0 and
  she is Silver too.
- Elif with id = 30 never visited the market at all, so she is Bronze.
```

### Example 2

```text
Input:
Shoppers table:
shopper_id  shopper_name
33          Farid
46          Greta
Trips table:
trip_id  shopper_id  trip_date
201      33          2023-01-09
202      33          2023-02-01
203      33          2023-02-18
204      33          2023-03-06
205      46          2023-01-15
206      46          2023-02-12
207      46          2023-03-03
208      46          2023-03-29
Orders table:
trip_id  order_total
202      60
204      15
205      80
206      10
207      25
208      5
Output:
shopper_id  shopper_name  category
33          Farid         Gold
46          Greta         Diamond
Explanation: Farid turned exactly two of his four trips into orders, so
his rate is (100 * 2) / 4 = 50 — just enough for Gold. Greta bought
something on every one of her four trips, a rate of 100, which puts her in
the Diamond tier.
```
