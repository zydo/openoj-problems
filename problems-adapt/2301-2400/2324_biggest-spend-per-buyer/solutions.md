# Solutions — Biggest Spend per Buyer

## Pool each buyer's spending per item, then keep the per-buyer maximum

The comparison the statement asks for lives at the (buyer, item)
grain, so the query builds that grain first: `Purchases` joins `Goods`
on `item_id` to put each purchase's `price` beside its `quantity`, and
`GROUP BY s.buyer_id, s.item_id` collapses a buyer's purchases of an
item into one row holding `SUM(quantity * price)`. Pooling before
comparing is what makes the answer right — the per-buyer winner is
chosen among whole items, never among individual purchase rows, so an
item bought in several modest orders can still outspend a single
flashier one.

With spending pooled, each buyer's best total is one grouped `MAX`
away: CTE `best` reduces `spent` to one row per buyer carrying that
buyer's winning spend. Joining `spent` back to `best` on buyer and on
the exact total keeps precisely the rows whose spend equals their
buyer's maximum. The shape absorbs the tie contract for free: a buyer
whose top was reached on k items contributes k surviving rows, which
is exactly "report all of them", while everyone else keeps one. Buyers
exist in the answer only through `Purchases`, so an empty purchases
table forms no groups and reports nothing. No `ORDER BY` is needed —
the judge compares result rows as an unordered multiset, and the
statement accepts any order.

The join touches each of the n purchase rows once; both aggregations
sweep their inputs linearly (n joined rows, then at most n buyer-item
groups), and the final join pairs those groups by buyer.

**Complexity:** `O(n log n)` time, `O(n)` space.
