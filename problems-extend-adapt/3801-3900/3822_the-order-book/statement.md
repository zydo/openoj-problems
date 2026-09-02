# The Order Book

## Description

An order book tracks the orders of a trading platform. Every order
carries an id, a type (`"buy"` or `"sell"`), and a price. An order
stays active until it is canceled.

Implement the `OrderBook` class:

- `OrderBook()` initializes the book with no orders.
- `void addOrder(int orderId, String orderType, int price)` records a
  new active order with the given attributes. Order ids are unique.
- `void modifyOrder(int orderId, int newPrice)` changes the price of
  the named active order. The order is guaranteed to exist and be
  active.
- `void cancelOrder(int orderId)` cancels the named active order. The
  order is guaranteed to exist and be active.
- `int[] getOrdersAtPrice(String orderType, int price)` returns the ids
  of all active orders matching both the type and the price, in any
  order. If none match, return an empty list.

### Example 1

```text
Input:
["OrderBook", "addOrder", "addOrder", "addOrder", "getOrdersAtPrice", "modifyOrder", "getOrdersAtPrice", "getOrdersAtPrice", "cancelOrder", "getOrdersAtPrice"]
[[], [7, "buy", 50], [2, "buy", 50], [9, "sell", 60], ["buy", 50], [7, 55], ["buy", 50], ["buy", 55], [9], ["sell", 60]]
Output: [null, null, null, null, [2, 7], null, [2], [7], null, []]
Explanation:
OrderBook book = new OrderBook();
book.addOrder(7, "buy", 50);      // buy order 7 at price 50.
book.addOrder(2, "buy", 50);      // buy order 2 at price 50.
book.addOrder(9, "sell", 60);     // sell order 9 at price 60.
book.getOrdersAtPrice("buy", 50); // both buy orders sit at 50: [2, 7].
book.modifyOrder(7, 55);          // order 7 moves to price 55.
book.getOrdersAtPrice("buy", 50); // only order 2 remains at 50: [2].
book.getOrdersAtPrice("buy", 55); // order 7 now lives here: [7].
book.cancelOrder(9);              // sell order 9 is withdrawn.
book.getOrdersAtPrice("sell", 60); // nothing left: [].
```

### Example 2

```text
Input:
["OrderBook", "addOrder", "addOrder", "addOrder", "getOrdersAtPrice", "getOrdersAtPrice", "cancelOrder", "getOrdersAtPrice"]
[[], [4, "sell", 20], [6, "sell", 20], [8, "buy", 20], ["sell", 20], ["buy", 20], [4], ["sell", 20]]
Output: [null, null, null, null, [4, 6], [8], null, [6]]
Explanation:
OrderBook book = new OrderBook();
book.addOrder(4, "sell", 20);      // sell order 4 at price 20.
book.addOrder(6, "sell", 20);      // sell order 6 at price 20.
book.addOrder(8, "buy", 20);       // buy order 8 at price 20.
book.getOrdersAtPrice("sell", 20); // the two sells: [4, 6].
book.getOrdersAtPrice("buy", 20);  // types are kept apart: [8].
book.cancelOrder(4);               // sell order 4 is withdrawn.
book.getOrdersAtPrice("sell", 20); // only order 6 remains: [6].
```

### Constraints

- `1 <= orderId <= 2000`, and order ids are unique.
- `orderType` is either `"buy"` or `"sell"`.
- `1 <= price <= 10⁹`
- At most `2000` calls in total are made to `addOrder`,
  `modifyOrder`, `cancelOrder`, and `getOrdersAtPrice`.
- Every `modifyOrder` and `cancelOrder` names an order that exists and
  is active.

## Hints

### Hint 1

Index orders by id so a modify or cancel finds its row in one lookup.

### Hint 2

Group the active orders by `(type, price)` as well, so each query reads
exactly its own bucket; keep the two structures in step on every move.
