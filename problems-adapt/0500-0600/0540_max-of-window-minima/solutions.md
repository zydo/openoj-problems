# Solutions — Max of Window Minima

## Stack Spans with a Suffix Maximum

Working window by window repeats enormous amounts of work; working element by
element does not. Say `nums[i]` is fenced in by `left[i]` and `right[i]`, the
nearest positions holding strictly smaller values on each side. Every window
that fits strictly between those fences has `nums[i]` as its minimum, so with
`span = right[i] - left[i] - 1` the value `nums[i]` is a legitimate candidate
for `answer[k - 1]` at every size `k` up to `span`. Both fences fall out of
monotonic stack sweeps that pop while the top is `>= nums[i]` — popping on
equality as well is deliberate, since it hands each member of a run of equal
values the sub-window where that member is the minimum.

Seeding only the maximal span of each element looks like it under-fills the
table, and it would, except that the answers are monotone: a window of size
`k + 1` always contains a size-`k` window whose minimum is at least as large,
so the output weakly decreases as the size grows. Write each element's value
into `answer[span - 1]` (keeping the larger value when spans collide), then a
single right-to-left running maximum propagates every long-span guarantee
down to the shorter sizes. In `[6,2,4,9]` the 9 seeds size 1, the 4 seeds
size 2, and the 2 seeds size 4; the suffix maximum then copies that 2 into
size 3, matching the brute-force output `[9,4,2,2]`.

Every phase — two stack sweeps, the seeding loop, the suffix pass — visits
each index a constant number of times, and the value seeded at the largest
span is always the global minimum because the whole array is a valid window
for its minimum element.

**Complexity:** `O(n)` time, `O(n)` space.
