# Solutions — Riders Carried by Each Ferry II

Capacity is what separates this from a running-count problem: a full ferry
leaves travelers behind, so how many a ferry boards depends on how many
earlier ferries failed to clear the queue — a chain the plain per-ferry
arrival count cannot see. The trick is to chase one aggregate instead of
per-ferry decisions: the _total_ number boarded so far.

## Running minimum of waiting minus cumulative capacity

Walk the ferries in arrival order and track two cumulative quantities:
`waiting(k)`, the travelers who have reached the pier by ferry `k`'s time
(travelers sort before a ferry at the same timestamp, matching
`t_traveler <= t_ferry`), and `capacity_sum(k)`, the spots offered so far.
The total boarded through ferry `k` obeys
`S(k) = min(waiting(k), capacity_sum(k) + S(k - 1))` — either the queue
runs dry or the spots do. Unrolling that recurrence collapses it to

`S(k) = capacity_sum(k) + min(0, min(j <= k) of waiting(j) - capacity_sum(j))`,

a running minimum over a per-row slack. Each ferry's own count is then
`S(k) - S(k - 1)`, retrieved with `LAG` over the same arrival order, and
the outer `ORDER BY ferry_id` restores the required output ordering
independently of chronology.

Each quantity is one window function over the ferry rows; the waiting
counts come from the same merged traveler/ferry event stream the
capacity-free variant uses (`SUM` of traveler deltas, travelers
first on ties). Ferries dock at distinct times, so every window's
`ORDER BY arrival_time` is a total order — no ties to disambiguate.

**Complexity:** `O((F + T) log(F + T))` time and `O(F + T)` space.
