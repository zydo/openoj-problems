# Solutions — Ratings Below Sixty Percent

## Compare the ratio by cross multiplication

The strict threshold `upvotes / (upvotes + downvotes) < 3 / 5` can be tested
exactly as `5 * upvotes < 3 * (upvotes + downvotes)`. This avoids integer-division
truncation and floating-point rounding, and the strict inequality correctly
excludes a puzzle at exactly 60%.

Filter by that integer predicate, project `puzzle_id`, and order the surviving
rows numerically in ascending order as required. No grouping is needed because
`puzzle_id` is the table's primary key.

**Complexity:** `O(n log n)` time and `O(n)` space for ordering the qualifying rows.
