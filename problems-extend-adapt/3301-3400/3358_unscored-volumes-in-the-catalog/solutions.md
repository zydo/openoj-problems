# Solutions — Unscored Volumes In The Catalog

## Direct NULL predicate with an ascending id sort

The whole task is one filtered scan. A score that was never entered is
stored as SQL `NULL`, and the only comparison that detects it is the
dedicated `IS NULL` test — any equality against `NULL` evaluates to
unknown, so a query like `score = NULL` (or its negation) silently
matches nothing.

`WHERE score IS NULL` therefore keeps exactly the unscored volumes
while every scored row — including scores of zero — drops out. The
projection returns the four requested columns without the score itself,
and the final sort by `volume_id` yields the required ascending order
regardless of how the dataset happened to be inserted.

**Complexity:** `O(n log n)` time, `O(n)` space.
