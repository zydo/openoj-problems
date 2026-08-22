# Solutions — Nearest Qualifying Room

## Offline requests with a growing sorted id list

Handling requests in order of decreasing `min_size` deletes the size filter
from each individual request: rooms sorted by decreasing size can be added
with a pointer as the threshold falls, and a room once added stays eligible
for every later request because later thresholds are only lower. Each room
enters the structure exactly once, so what remains per request is a
nearest-value lookup among the accumulated ids.

That lookup is `bisect_left` of the target into the sorted id list: the only
candidates are the entries on either side of the insertion point. They are
compared as `(distance, id)` pairs, so ordering them settles distance ties
toward the smaller id with no special case — for `rooms = [[4,5],[10,5],[6,2]]`
and the request `[7,5]`, ids 4 and 10 both sit at distance 3 from 7, and the
pair sort hands back 4. An empty id list means no room reached the request's
size, and the answer is `-1`. Each request's answer is written through its
saved index, so the returned array keeps the input order.

The insertion is `insort` on a plain Python list: a logarithmic search plus
element shifting, linear in the list length in the worst case. The searches
are `O(log n)` each, but shifting makes the worst-case total quadratic in
the number of rooms — tolerable here because shifting is a fast contiguous
memory move, and requests (`k` up to 10⁴) are an order of magnitude fewer
than rooms (`n` up to 10⁵). A balanced structure would restore
`O(n log n + k log n)` if the mix ever demanded it.

**Complexity:** `O(n² + k log n)` time, `O(n + k)` space.
