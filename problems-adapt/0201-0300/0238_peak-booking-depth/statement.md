# Peak Booking Depth

## Description

A reservation occupies the half-open span `[start, end)`: it holds every
instant from `start` onwards but lets go of `end` itself. Reservations are
never turned away — they simply pile up, and at any instant some number of
them are live at once. The *depth* of a calendar is the largest such number
over all instants.

Implement the `BookingDepth` class:

- `BookingDepth()` — a calendar with nothing in it.
- `int add(int start, int end)` — record the span `[start, end)` and return
  the depth of the calendar including that span.

Because the right endpoint is excluded, two spans that merely meet at a number
— `[4, 8)` and `[8, 12)` — are never live together, and a calendar of such
spans has depth `1`.

### Example 1

```text
Input:
["BookingDepth", "add", "add", "add", "add", "add", "add"]
[[], [3, 9], [20, 26], [6, 15], [12, 22], [7, 13], [9, 20]]
Output: [null, 1, 1, 2, 2, 3, 4]
Explanation:
BookingDepth calendar = new BookingDepth();
calendar.add(3, 9);    // one span, depth 1
calendar.add(20, 26);  // nowhere near the first, still depth 1
calendar.add(6, 15);   // meets [3, 9) on [6, 9), depth 2
calendar.add(12, 22);  // meets [6, 15) on [12, 15), still depth 2
calendar.add(7, 13);   // [6, 15), [12, 22) and [7, 13) share [12, 13), depth 3
calendar.add(9, 20);   // that instant now carries a fourth span, depth 4
```

### Example 2

```text
Input:
["BookingDepth", "add", "add", "add", "add"]
[[], [0, 100], [10, 90], [20, 80], [200, 300]]
Output: [null, 1, 2, 3, 3]
Explanation:
BookingDepth calendar = new BookingDepth();
calendar.add(0, 100);    // depth 1
calendar.add(10, 90);    // sits inside the first, depth 2
calendar.add(20, 80);    // sits inside both, depth 3
calendar.add(200, 300);  // disjoint from everything, so the deepest instant is unchanged
```

### Example 3

```text
Input:
["BookingDepth", "add", "add", "add", "add"]
[[], [4, 8], [8, 12], [12, 16], [7, 13]]
Output: [null, 1, 1, 1, 2]
Explanation:
BookingDepth calendar = new BookingDepth();
calendar.add(4, 8);   // depth 1
calendar.add(8, 12);  // begins where the first lets go, depth 1
calendar.add(12, 16); // likewise, depth 1
calendar.add(7, 13);  // straddles all three, but each of them alone, depth 2
```

### Constraints

- Each span satisfies `0 <= start < end <= 10⁹`
- `add` is called no more than `400` times

### Follow-up

Can each `add` be answered in `O(n log n)` by walking the endpoints in order,
with no balanced tree and no segment tree behind it?

## Hints

### Hint 1

The depth only ever changes where a span opens or closes, so the whole timeline
collapses to the list of endpoints. Between two consecutive endpoints the set
of live spans is constant.

### Hint 2

Attach `+1` to every left endpoint and `-1` to every right endpoint, and add up
the attachments in increasing order of position. The total after a position is
exactly how many spans cover the stretch that begins there; the answer is the
largest total the walk ever reaches.

### Hint 3

Endpoints that coincide must be summed together before the total is read, which
is what makes the half-open rule come out right for free: a `-1` and a `+1` at
the same number cancel, so a span closing where another opens never lifts the
count. Keeping the attachments in one map keyed by position does this
automatically.

### Hint 4

There is no need to be clever about incremental updates. With at most 400 calls
there are at most 800 endpoints, so re-walking the whole map on every call costs
a few hundred thousand steps in total — well inside the limit.
