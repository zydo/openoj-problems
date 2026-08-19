# Growing Interval Union

## Description

Start with no intervals at all. A stream of closed integer ranges arrives,
one at a time, and each range joins the ones already there. You must always
know how many distinct integers the accumulated ranges cover.

Implement the `IntervalUnion` class:

- `IntervalUnion()` — begins with an empty union.
- `void add(int left, int right)` — joins the range `[left, right]` into
  the union.
- `int size()` — reports how many integers currently lie in at least one
  range of the union.

A range `[left, right]` means every integer `x` with `left <= x <= right`.

### Example 1

```text
Input:
["IntervalUnion", "add", "add", "size", "add", "size"]
[[], [4,6], [9,12], [], [6,10], []]
Output: [null, null, null, 7, null, 9]
Explanation:
IntervalUnion union = new IntervalUnion(); // nothing covered yet.
union.add(4, 6); // covers 4, 5, 6.
union.add(9, 12); // covers 9, 10, 11, 12.
union.size();     // 7 — three integers plus four.
union.add(6, 10); // bridges the two ranges: the union is [4, 12].
union.size();     // 9 — every integer from 4 through 12.
```

### Example 2

```text
Input:
["IntervalUnion", "add", "add", "add", "size", "add", "size"]
[[], [1,3], [7,9], [13,15], [], [2,14], []]
Output: [null, null, null, null, 9, null, 15]
Explanation: Three separate ranges cover 3 + 3 + 3 = 9 integers. The
range [2, 14] then overlaps all of them, so the whole union collapses to
the single range [1, 15] — 15 integers.
```

### Constraints

- `1 <= left <= right <= 10⁹`
- At most `10⁵` calls to `add` and `size` in total.
- `size` is called at least once.

### Follow-up

One `add` can swallow many stored ranges at once — why does the total
number of ranges ever swallowed, across the whole run, stay bounded by the
number of `add` calls?

## Hints

### Hint 1

Keep the stored ranges pairwise disjoint and ordered by their starts, and
`size` never needs a walk: carry the covered total along, correcting it by
whatever each mutation takes away or puts back.

### Hint 2

In a disjoint family ordered by start, the ends are ordered too, so every
range meeting `[left, right]` sits in one contiguous run — those with
start `<= right` among those with end `>= left`. Binary search on the two
boundaries finds it.

### Hint 3

Splice out that run and put its hull with the newcomer in its place —
from the least of the starts to the greatest of the ends — adjusting the
running total by the sizes removed and the size inserted. An ordered map
keyed by start does the search and splice in logarithmic time.
