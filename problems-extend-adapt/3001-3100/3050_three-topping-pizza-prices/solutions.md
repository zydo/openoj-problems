# Solutions — Three-Topping Pizza Prices

## Three-way self-join over strictly increasing names

Every pizza is an unordered triple of distinct toppings, and the two
requirements — no repeated topping, names listed alphabetically — are
the same statement twice: the three names must be pairwise different
and can then be reported sorted. A three-way self-join `FROM Menu
a, Menu b, Menu c` with strict inequalities
`b.item > a.item AND c.item > b.item` enumerates exactly those
triples: each unordered combination appears once, in its one sorted
arrangement, because only chains that increase under SQLite's default
binary collation survive. Nothing else is needed — no deduplication
pass, no post-sort — since the join order already encodes both rules.

Each surviving row is projected straight to the answer shape:
`||` concatenates the three names with a comma into `pizza`, and
`ROUND(a.price + b.price + c.price, 2)` produces `total_price`. The
rounding is honest about doubles: SQLite rounds the stored binary
value half away from zero, so a total landing exactly on a half-cent
(0.625) goes up to 0.63, while a literal like 1.005 sits below its tie
in binary and rounds down to 1.00; ordinary 2-decimal prices always
sum to an exact cent up to representation noise, so the rounding just
cleans that noise. `ORDER BY total_price DESC, pizza ASC` dresses the
rows as the statement demands — the judge compares result rows as an
unordered multiset, so ties between equal-cost pizzas are decided by
name for display rather than for acceptance.

**Complexity:** `O(n^3)` time, `O(1)` space beyond the result rows —
the join materializes one candidate row per unordered combination,
`n·(n−1)·(n−2)/6` of them for `n` menu items.
