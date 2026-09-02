# The Bidding Board

## Description

A bidding board tracks bids from many users in real time. Every bid
names a user, an item, and an amount.

Implement the `BidBoard` class:

- `BidBoard()` initializes the board with no bids.
- `void addBid(int userId, int itemId, int bidAmount)` records a bid of
  `bidAmount` by `userId` on `itemId`. If that user already has a bid
  on that item, the new amount replaces the old one.
- `void updateBid(int userId, int itemId, int newAmount)` changes the
  user's existing bid on the item to `newAmount`. The bid is
  guaranteed to exist.
- `void removeBid(int userId, int itemId)` deletes the user's bid on
  the item. The bid is guaranteed to exist.
- `int getHighestBidder(int itemId)` returns the user holding the
  highest bid on `itemId`. If several users share the highest amount,
  return the one with the largest user id. If the item has no bids,
  return `-1`.

### Example 1

```text
Input:
["BidBoard", "addBid", "addBid", "getHighestBidder", "updateBid", "getHighestBidder", "removeBid", "getHighestBidder", "getHighestBidder"]
[[], [3, 10, 40], [5, 10, 55], [10], [3, 10, 60], [10], [5, 10], [10], [11]]
Output: [null, null, null, 5, null, 3, null, 3, -1]
Explanation:
BidBoard board = new BidBoard();
board.addBid(3, 10, 40);       // user 3 bids 40 on item 10.
board.addBid(5, 10, 55);       // user 5 bids 55 on item 10.
board.getHighestBidder(10);    // 5 — the highest bid on item 10.
board.updateBid(3, 10, 60);    // user 3 raises their bid to 60.
board.getHighestBidder(10);    // 3 — user 3 now leads.
board.removeBid(5, 10);        // user 5's bid is withdrawn.
board.getHighestBidder(10);    // 3 — user 3 is the only bidder left.
board.getHighestBidder(11);    // -1 — item 11 has no bids.
```

### Example 2

```text
Input:
["BidBoard", "addBid", "addBid", "getHighestBidder", "addBid", "getHighestBidder", "removeBid", "getHighestBidder"]
[[], [4, 20, 30], [9, 20, 30], [20], [2, 20, 90], [20], [2, 20], [20]]
Output: [null, null, null, 9, null, 2, null, 9]
Explanation:
BidBoard board = new BidBoard();
board.addBid(4, 20, 30);    // user 4 bids 30 on item 20.
board.addBid(9, 20, 30);    // user 9 also bids 30 on item 20.
board.getHighestBidder(20); // 9 — tied at 30, the larger user id wins.
board.addBid(2, 20, 90);    // user 2 bids 90 on item 20.
board.getHighestBidder(20); // 2 — the outright highest bid.
board.removeBid(2, 20);     // user 2's bid is withdrawn.
board.getHighestBidder(20); // 9 — back to the tie, larger user id wins.
```

### Constraints

- `1 <= userId, itemId <= 5 * 10⁴`
- `1 <= bidAmount, newAmount <= 10⁹`
- At most `5 * 10⁴` calls in total are made to `addBid`, `updateBid`,
  `removeBid`, and `getHighestBidder`.
- The input guarantees that every `updateBid` and `removeBid` names a
  bid that currently exists.

## Hints

### Hint 1

Keep a map from each item to the bids currently standing on it.

### Hint 2

Within an item, order entries by `(amount, userId)` so the leader is
always at the front.

### Hint 3

An add or update can simply supersede the bidder's earlier entry rather
than rewriting it in place.

### Hint 4

A removal can mark the entry gone and let the leader query skip it.
