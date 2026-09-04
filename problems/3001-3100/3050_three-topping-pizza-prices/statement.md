# Three-Topping Pizza Prices

## Description

Table: `Menu`

| Column Name | Type    |
| ----------- | ------- |
| item        | varchar |
| price       | decimal |

`item` is the primary key for this table.
Each row names one topping the shop sells and the price of adding it.

A pizza is any choice of three different toppings from the menu. Price
every pizza the shop can build: add up the three chosen toppings'
prices and round the total to 2 decimal places.

Note:

- A pizza never repeats a topping — 'Ricotta, Ricotta, Hot Honey' is
  not a real pizza.
- The three names are listed alphabetically. 'Hot Honey, Ricotta,
  Truffle Oil' is the listing; 'Ricotta, Truffle Oil, Hot Honey' is
  not.

Return the result table ordered by total price in descending order and
by the topping combination in ascending order.

Every test case ships its own `dataset`: the statements inside it
populate `Menu` before your query executes. The result format is in
the following example.

### Example 1

```text
Input:
Menu table:
+--------------+-------+
| item         | price |
+--------------+-------+
| Hot Honey    | 0.45  |
| Prosciutto   | 1.30  |
| Ricotta      | 0.60  |
| Truffle Oil  | 1.10  |
+--------------+-------+
Output:
+----------------------------------+-------------+
| pizza                            | total_price |
+----------------------------------+-------------+
| Prosciutto,Ricotta,Truffle Oil   | 3.00        |
| Hot Honey,Prosciutto,Truffle Oil | 2.85        |
| Hot Honey,Prosciutto,Ricotta     | 2.35        |
| Hot Honey,Ricotta,Truffle Oil    | 2.15        |
+----------------------------------+-------------+
Explanation: Four toppings on the menu make exactly four three-topping
pizzas. The priciest builds on Prosciutto, Ricotta, and Truffle Oil
(1.30 + 0.60 + 1.10 = 3.00); the cheapest pairs Hot Honey with
Ricotta and Truffle Oil (0.45 + 0.60 + 1.10 = 2.15). Each combination
is written with its names sorted, and the rows run from most to least
expensive.
```

Write your solution as a single `SELECT` query returning two columns —
`pizza`, the three chosen topping names joined with `,` (a comma with
no spaces, exactly as the example's output shows) and listed
alphabetically, and `total_price`, their combined price rounded to 2
decimal places — with one row for every combination of three distinct
toppings. Alphabetical means SQLite's default binary comparison of the
stored names, so an uppercase letter sorts before a lowercase one.
Order the result table by `total_price` descending and then `pizza`
ascending.
