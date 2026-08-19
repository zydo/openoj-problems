# Solutions — Best k Picks for Profit and Variety

## Greedy Exchange over Sorted Profits

Begin with the obvious candidate: rank items by profit, descending, and keep
the top `k`. That choice maximizes the profit term, though possibly at the
cost of category variety. Any better choice differs from it by exchanging
some kept items for poorer ones that carry fresh categories — with the score
adding a squared variety term, one more category frequently outweighs the
profit surrendered.

Walk the leftovers in descending profit order. An item merits a look only when
its category is absent from the current choice — inserting a category that is
already there cannot help. To keep the size at `k`, release the smallest-profit
kept item whose category occurs at least twice among the chosen; that is the
cheapest eviction that holds the size while raising the distinct count by one.
Every exchange updates the running profit sum, bumps the variety count, and
records a candidate score; the initial top-`k` score is also a candidate, so
inputs where no exchange ever pays (or where the top `k` already covers `k`
distinct categories) are covered.

The implementation swaps the customary min-heap of duplicate-category items
for a pre-sorted ascending list of `(profit, category)` pairs drawn from
duplicated categories. Nothing is ever pushed after that list is built, so a
moving pointer replays heap-pop order; entries whose category count has since
fallen to one are skipped, since evicting one would undo the variety just
gained. The loop also stops as soon as no duplicate-category victim remains —
further fresh categories could not be accommodated. Note each exchange is
merely recorded, never re-ranked: later items are judged against the evolving
choice, and the maximum over all recorded states is returned.

**Complexity:** `O(n log n)` time, `O(n)` space.
