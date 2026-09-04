# Solutions — Each Shopper's Total Spend

## Price every line, pool per shopper, sort

The answer lives at the shopper grain, and each shopper's number is
built from rows at the checkout-line grain: `Baskets` joins `Catalog`
on `sku_id` to put each line's unit `price` beside its `quantity`, and
`GROUP BY s.shopper_id` collapses all of a shopper's rows into one
carrying `SUM(quantity * price)` as `total`. Pooling before reporting
is what makes the number right — several modest lines weigh exactly as
much as one flashy order, because the sum never looks at how the spend
was split across rows or items.

The statement's presentation contract is one `ORDER BY`: `total DESC`
puts the biggest spenders on top and `shopper_id ASC` breaks ties by
id. Shoppers exist in the answer only through `Baskets`, so an empty
baskets table forms no groups and reports nothing, while untaken items
join to no rows and cost nothing. (The judge compares result rows as
an unordered multiset, so that ordering is contract rather than
correctness.)

The join touches each of the n basket rows once; the aggregation sweeps
those n joined rows linearly, and the final sort orders the k ≤ n
shopper groups.

**Complexity:** `O(n log n)` time, `O(n)` space.
