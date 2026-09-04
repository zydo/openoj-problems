# Solutions — Round-Trip Gift Loops

The table is a pile of directed hand-off edges, and a round-trip loop is
a cycle in it: a set of presents that gives every member exactly one to
pass along and exactly one to take in, closing back on itself. Two
questions decide the whole answer — which coworkers can be loop members
at all, and how to gather each loop's size and combined price once the
candidates are known.

## Filter by exchange counts, then walk each loop

Membership first. A coworker on a closed loop passes along exactly one
present and receives exactly one present over the whole table, so
intersecting the
`sender_id`s that appear once with the `recipient_id`s that appear once
names the only possible loop members — anyone giving twice, receiving
twice, or standing at a dead end drops out, and with them every row that
touches a non-member. What survives is exactly the loops.

Reading each loop off the survivors is a closure. Starting from every
surviving row, a recursive walk follows the loop edge-to-edge, carrying
three accumulators: the gift total, the step count, and `low`, the
smallest coworker id passed so far. The walk expands only while its head
differs from its start, so it halts precisely when the loop closes — a
row count and total arrive per starting member, and broken paths simply
run out of edges and never report. Grouping the closed walks by `low`
collapses each loop's members into one row (every walk around the same
loop sees the same length, total, and minimum id), which yields
`loop_size` and `loop_total` directly.

Numbering is presentation: `ROW_NUMBER()` over `loop_size DESC,
loop_total DESC, low ASC` assigns `loop_id` 1, 2, ... in the
required order, with the smallest member id settling the tie the
statement's two sort keys cannot. The trailing `ORDER BY loop_id` lays
the rows out readably, though the judge compares them as an unordered
multiset. The walk is the cost center: a loop of length `L` is traced
from all `L` of its members, so over `N` rows the query emits at most
`N²` walk rows — quadratic in the worst case of one giant loop, and
linear in the common case of many short ones.

**Complexity:** `O(N²)` time and `O(N²)` space worst case for `N` gift
rows (a single loop of `N` coworkers), `O(N)` for tables of short loops.
