# Solutions — Desk Swap

## Move each desk id by parity, protecting the unpaired tail

The exchange is a permutation of desk ids, not a relocation of learner
names. For every complete pair, the odd desk id moves one step right and
the even desk id moves one step left: id 1 becomes 2 while id 2 becomes
1, then 3 becomes 4 while 4 becomes 3, and so on. A `CASE` can therefore
compute the new id independently for each row, passing `learner` through
unchanged.

There is one boundary condition: an odd final desk id in an odd-sized
table has no even partner. The scalar subquery `(SELECT MAX(desk_id) FROM
DeskAssignment)` identifies that final id once for the whole table. An
odd id strictly below it is paired and becomes `desk_id + 1`; an odd id
equal to it is the unpaired tail and remains `desk_id`; every even id is
the other member of a complete pair and becomes `desk_id - 1`. Because
the ids are continuous beginning at 1, `MAX(desk_id)` is also the learner
count and makes this test exact.

The final `ORDER BY desk_id ASC` presents the recomputed ids in their
requested order. The judge compares an unordered multiset, so ordering
is a display requirement rather than a correctness aid, but the new ids
are a permutation of 1 through n and yield a total order.

One scan maps the `n` rows after obtaining the scalar maximum, followed
by a sort of the output rows for presentation.

**Complexity:** `O(n log n)` time, `O(n)` space.
