# Checkout With Periodic Discount

## Description

A register tracks a fixed catalog of products, each with its own price,
and rewards loyalty: every `n`-th customer at the register pays a
percentage off their bill.

Implement the `DiscountRegister` class:

- `DiscountRegister(int n, int discount, int[] products, int[] prices)`
  initializes the register with the loyalty stride `n`, the discount
  `discount` in percent, and the catalog: `products[i]` costs
  `prices[i]`. Product ids are unique.
- `float getBill(int[] product, int[] amount)` totals one customer's
  order — the sum of `prices[product[i]] * amount[i]` over all purchased
  items — and returns what the customer actually pays: the full bill,
  unless this customer is the register's `n`-th customer (its 3rd, 6th,
  … for `n = 3`), in which case the bill is reduced by `discount`
  percent. The counter includes every customer served, discounted or not.

### Example 1

```text
Input:
["DiscountRegister","getBill","getBill","getBill","getBill"]
[[],[3,25,[10,11,12],[90,80,70]],[[10],[1]],[[11,12],[2,1]],[[10],[2]],[[12],[3]]]
Output: [null,90.0,230.0,135.0,210.0]
Explanation: The catalog prices product 10 at 90, product 11 at 80, and
product 12 at 70, with every 3rd customer receiving 25% off. Customers
one and two pay full price: 90.0, then 80*2 + 70 = 230.0. Customer three
buys two of product 10 — 180.0 — and pays 25% less: 135.0. Customer four
pays full price again: 70*3 = 210.0.
```

### Constraints

- `1 <= n <= 10⁴`
- `0 <= discount <= 100`
- `1 <= products.length <= 200`
- `prices.length == products.length`
- `1 <= products[i] <= 200`
- `1 <= prices[i] <= 1000`
- The elements of `products` are unique.
- `1 <= product.length <= products.length`
- `amount.length == product.length`
- `1 <= amount[i] <= 200`
- At most 1000 customers are served.

## Hints

### Hint 1

A dictionary from product id to price answers each bill in one pass.

### Hint 2

Keep one counter of served customers; the discount fires exactly when the
counter is divisible by `n`.
