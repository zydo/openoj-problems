# Clients With Two Strong Months

## Description

Table: `Clients`

| Column    | Type    |
| --------- | ------- |
| client_id | int     |
| name      | varchar |
| country   | varchar |

`client_id` is the column with unique values for this table. Each row
describes one client of the shop.

Table: `Merch`

| Column | Type    |
| ------ | ------- |
| sku    | int     |
| label  | varchar |
| price  | int     |

`sku` is the column with unique values for this table. `label` is the
item's name and `price` is its unit cost.

Table: `Invoices`

| Column       | Type |
| ------------ | ---- |
| invoice_id   | int  |
| client_id    | int  |
| sku          | int  |
| invoice_date | date |
| quantity     | int  |

`invoice_id` is the column with unique values for this table.
`client_id` is the id of the client who bought `quantity` units of the
item with id `sku`. `invoice_date` is the date, formatted
`YYYY-MM-DD`, on which the invoice was issued.

Report the `client_id` and `name` of every client who spent at least
$100 in June 2020 and at least $100 in July 2020. A client's spend in
a month is the sum, over that month's invoice lines, of `quantity`
times the invoiced item's `price`.

Return the result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds `Clients`,
`Merch`, and `Invoices` with that testcase's rows before your query
runs. The result format is in the following example.

### Example 1

```text
Input: the Clients, Merch, and Invoices tables from the dataset below.
Clients rows:
client_id | name  | country
1         | Hana  | Norway
2         | Tomas | Chile
3         | Priya | India
Merch rows:
sku | label          | price
5   | Thermal Flask  | 12
8   | Trail Map      | 4
12  | Headlamp       | 25
Invoices rows:
invoice_id | client_id | sku | invoice_date | quantity
101        | 1         | 12  | 2020-06-03   | 4
102        | 1         | 5   | 2020-07-19   | 9
103        | 2         | 12  | 2020-06-11   | 6
104        | 3         | 5   | 2020-06-20   | 5
105        | 3         | 12  | 2020-07-02   | 4
Output:
client_id | name
1         | Hana
Explanation: Hana spent exactly $100 (25 * 4) in June and $108
(12 * 9) in July 2020. Tomas spent $150 (25 * 6) in June but nothing
in July, and Priya spent $20 (4 * 5) in June against $100 (25 * 4) in
July. Only Hana clears $100 in both months.
```

### Example 2

```text
Input: the Clients, Merch, and Invoices tables from the dataset below.
Clients rows:
client_id | name  | country
4         | Yara  | Peru
5         | Bo    | Ghana
6         | Elena | Italy
Merch rows:
sku | label          | price
21  | Desk Lamp      | 20
22  | Notebook Pack  | 6
Invoices rows:
invoice_id | client_id | sku | invoice_date | quantity
201        | 4         | 21  | 2020-06-05   | 5
202        | 4         | 22  | 2020-07-08   | 17
203        | 5         | 22  | 2020-06-09   | 18
204        | 5         | 21  | 2020-07-27   | 5
205        | 6         | 21  | 2020-07-30   | 6
Output:
client_id | name
4         | Yara
5         | Bo
Explanation: Yara spent $100 (20 * 5) in June and $102 (6 * 17) in
July; Bo spent $108 (6 * 18) in June and $100 (20 * 5) in July. Elena
billed only in July, so just Yara and Bo qualify.
```

Write your solution as a single `SELECT` query returning `client_id`
and `name`, one row for every client whose June 2020 spend and July
2020 spend are each at least $100.
