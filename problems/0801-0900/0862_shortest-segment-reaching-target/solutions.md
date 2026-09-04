# Solutions — Shortest Segment Reaching Target

## Monotonic deque of prefix sums

Negative entries are what make this hard. When every entry is non-negative the
sum of a window rises as its right edge advances and falls as its left edge
advances, and two pointers settle the whole question in one pass. Here neither
is true, so a window that is currently too small might shrink after growing,
and the pointer walk has nothing to steer by.

Prefix totals restore the structure. Put `p[0] = 0` and `p[i] = nums[0] + ... +
nums[i-1]`. The segment from `j` to `i - 1` has sum `p[i] - p[j]`, so a right
end `i` is satisfied by exactly those left ends `j < i` with `p[j] <= p[i] -
target`, and the best of them is the largest such `j`. Sweeping `i` upward and
answering that query fast is the entire problem.

Two observations shrink the set of left ends worth remembering.

The first is about _retirement_. If `j` satisfies the threshold at the current
`i`, record the length `i - j` and then throw `j` away. It cannot help again:
any later right end pairs with the same `j` to give a strictly longer segment,
and a longer segment can never beat the one just recorded.

The second is about _domination_. Suppose `j < i` and `p[j] >= p[i]`. Then for
every future right end, `i` is both nearer (shorter segment) and no harder to
satisfy (smaller-or-equal prefix). Index `j` is useless from now on.

Together they say: keep the surviving left ends in a double-ended queue, in
increasing order of index, and the domination rule makes their prefix values
increase too. At each step, retire qualifying indices off the front — the front
holds the smallest prefix, so once it fails the threshold everything behind it
fails as well — then discard dominated indices off the back, then push the
current index. Each index is pushed once and removed once, so the two nested
loops still add up to linear work overall.

Take `nums = [5,-4,5]` with `target = 6`, whose prefix list is `[0, 5, 1, 6]`.

1. `i = 0`, `p = 0`. Empty queue; index 0 becomes the first candidate left end.
2. `i = 1`, `p = 5`. The threshold wants a prefix of at most `-1` and the front
   holds `0`, so nothing retires. Nothing is dominated either, and index 1 is
   appended: `[0, 1]`.
3. `i = 2`, `p = 1`. Still nothing qualifies at the front. At the back, index 1
   carries prefix `5 >= 1`, so it is dominated by the newcomer and dropped;
   index 2 is appended: `[0, 2]`.
4. `i = 3`, `p = 6`. Now the threshold wants a prefix of at most `0`, and the
   front holds exactly `0`. Index 0 retires, offering length `3 - 0 = 3`.
   Nothing else qualifies.
5. The best length seen is 3, which is a real segment length, so the answer is
   `3` rather than `-1`.

If the sweep never retires anything, no segment ever reached `target`; keep the
running best at a sentinel above `n` and translate that to `-1` at the end.

**Complexity:** `O(n)` time, `O(n)` space.
