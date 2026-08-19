# Solutions — Minimum Bookcase Height

## Partition DP over Shelf Breaks

With the order of the books frozen, a shelving plan is fully described by
where the breaks between shelves fall. The cost of one shelf is the tallest
book it carries, so the plan's cost is a sum of run-maxima, and the task is
to cut the sequence into runs — each fitting the width — minimizing that
sum. That is a textbook linear partition, solved from the suffix inward.

Define `dp(i)` as the least height for shelving books `i..` to the end,
with `dp(n) = 0` as the empty tail. The first shelf of that suffix takes
some run `i..j-1`: its width sum must stay within `shelfWidth` and it adds
`max(height[i..j-1])` to `dp(j)`. Every legal `j` is a candidate, and the
smallest wins. Since run widths only grow as `j` decreases, the scan over
`j` stops the moment the width limit is crossed — each book is visited at
most as far back as one shelf can reach.

Worked on Example 1 (`books = [[2,2],[2,5],[2,5],[1,4],[1,5],[1,4],[1,5]]`,
`shelfWidth = 4`): the first shelf can hold book 0 alone (height 2) or
books 0–1 (height 5). The widening run past book 1 is already 6 thick, so
the choice is exactly those two. Continuing the same way, the optimum
breaks after book 0 and after book 2 for `2 + 5 + 5 = 12`; promoting book 1
onto the first shelf is legal but turns its 2 into a 5 and costs more. A
book exactly as thick as the shelf always forms a valid shelf by itself,
since no thickness exceeds `shelfWidth`.

**Complexity:** `O(n²)` time worst case (thin books), `O(n)` space.
