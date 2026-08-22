# Solutions — Longest Frequency-Qualified Substring

Both solutions buy tractability from the same corner. The rule "every
present letter reaches `k`" moves in neither direction with window size —
extending can drag in a fresh letter sitting below `k`, shrinking can starve
one that had arrived — so the condition resists greedy scans and a lone
sliding window alike. The 26-letter alphabet is the way out. The divide and
conquer eliminates at least one letter per recursion level, so at most 26
levels ever run. The sliding window pins the letter variety itself: a valid
window holds between 1 and 26 distinct letters, and with that count fixed as
a budget the rule becomes one two pointers can maintain.

## Divide and Conquer on Underrepresented Letters

Count the letters in the current region. If each present letter reaches `k`,
the entire region qualifies. Otherwise, every letter below the threshold is
unusable anywhere inside this region: taking a shorter substring cannot
increase its count. Such letters split the region into independent pieces.

Scan through the region and recursively evaluate each nonempty piece between
splitters. The best child length is the answer for the parent. An empty piece
contributes zero, which also handles the case where every position is a
splitter.

At one recursion depth the pieces are disjoint, so their total scanning work
is linear in `s.length`. Moving to a child removes at least one letter that
was present in its parent. With only 26 lowercase letters, recursion has at
most 26 meaningful levels. If `k` exceeds a region's length, the same rule
naturally splits it until no nonempty candidate remains.

**Complexity:** `O(26n)` time and `O(n)` auxiliary space.

## Sliding Window over Distinct-Letter Budgets

A qualifying window is pinned down by two counts: how many distinct letters
it holds, and how many of those have reached `k`. The first count is a
handle the divide and conquer leaves free — and it ranges over just 26
values. Fix it as a budget `t` and the question shrinks to: the longest
window holding at most `t` distinct letters, each at count `k` or more.

With `t` pinned, the window rule becomes directional. Extending a window to
the right can only add letters, never remove them, so its letter variety
never falls: once a window holds more than `t` distinct letters, no further
extension repairs it and only shrinking from the left can. That is the shape
a two-pointer sweep needs. The right edge walks the string once; whenever
the variety busts the budget, the left edge advances — dropping letters
until the window is legal again — and never backtracks. Alongside the
counts, the sweep tracks `qualified`, the number of letters whose in-window
count has reached `k`, and records a length when `qualified` hits `t`:
`qualified` can never exceed the variety, and the variety never exceeds the
budget, so reaching `t` means exactly `t` letters are present and every one
of them has arrived at `k` — the definition, verbatim. A letter rarer than
`k` across the whole string simply never joins `qualified`; windows leaning
on it are never recorded, and no special casing is needed.

The optimum cannot slip through. Take any valid substring with `d` distinct
letters and run the budget `t = d`: when the right edge reaches its last
position, the window is the longest one ending there with at most `d`
varieties, so it contains that substring — which already supplies `d`
distinct letters — and cannot exceed `d` either. The window therefore holds
exactly the same `d` letters, at counts at least as large, and records a
length at least as long. Recording only ever fires on windows that satisfy
the definition, so the maximum is exact.

**Complexity:** `O(26n)` time, `O(26)` space.
