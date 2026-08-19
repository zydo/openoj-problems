# Solutions — Subarrays With At Least K Equal Pairs

## Two Pointers on a Running Pair Count

Richness is a number, not a shape: a window qualifies when its count of equal
pairs reaches `k`, and that count moves predictably with the window's edges.
Admitting a value that already sits inside `c` times creates exactly `c` new
pairs; releasing a value that leaves `c'` copies behind destroys exactly `c'`.
A hash map of in-window multiplicities plus one running total therefore keeps
the pair count exact through any slide, with no rescans.

![Three windows of [5,7,3,5,8,8,3] with k = 2: [0..5] adds 2, then after shrinking [1..6] and [2..6] each add 1, totalling 4.](figures/solution-sliding-window.svg)

The sweep advances the right end one entry at a time, banking the newcomer's
pair contribution. The moment the running count reaches `k`, the window is
rich — and so is every stretch that starts at the current left edge or later
and ends here, because lengthening only adds pairs. Exactly `n - right`
stretches share that right endpoint; bank them in one addition, then shrink
from the left — paying the departure cost of each ejected value — until the
count dips below `k` again. Batching by right endpoint is what keeps the
sweep linear while the answer itself can reach quadratic size.

Values as large as 10⁹ rule out indexing counts by value, hence the hash map.
At the extremes: a demand exceeding the whole array's pair supply never opens
the shrink loop, while Example 1's four 2s supply exactly six pairs — the
full array alone qualifies, on the very last step of the sweep. In Example 2
the loop opens once at right = 5 (+2) and twice more at right = 6 (+1 each)
for the total of 4.

**Complexity:** `O(n)` time, `O(n)` space.
