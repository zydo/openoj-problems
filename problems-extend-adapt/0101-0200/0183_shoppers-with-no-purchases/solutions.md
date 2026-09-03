# Solutions — Shoppers With No Purchases

## Left anti-join onto Purchases

The wanted set is a difference: every `Shoppers` row minus those that have a match in `Purchases`. `Shoppers c LEFT JOIN Purchases o ON c.shopperId = o.shopperId` keeps every shopper; a matching purchase fills the `Purchases` columns, and a shopper with no purchase at all comes back once with null in them. `WHERE o.purchaseId IS NULL` keeps exactly those unmatched rows and `SELECT c.name AS NonBuyer` reports their names — a left join filtered on the null side of the join is the anti-join, stated inline.

The choice of marker column matters more than it looks: `o.purchaseId` is `Purchases`' primary key, null precisely on the unmatched rows, while a payload column could be null on a real match and break the filter. Because `shopperId` is unique in `Shoppers`, each purchase matches at most one shopper, so a shopper with several purchases produces several matched rows — all of them non-null, all filtered out — and repeats never leak into the answer. Purchases whose `shopperId` has no `Shoppers` row match nothing and vanish on their own, and when every shopper buys (or the tables are empty) the filter keeps nothing, which is the correct zero-row answer.

With the join key resolved through an index or hash lookup, each of the `C` shoppers costs one probe into `Purchases`, so the anti-join runs in `O(C + P)` time over `P` purchase rows, and only the result itself — at most `C` names — is materialized.

**Complexity:** `O(C + P)` time, `O(C)` space.
