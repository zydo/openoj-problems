# Solutions — Ugly Number II

## Three-Pointer Merge

Every ugly number except 1 is a smaller ugly number multiplied by 2, 3, or 5. That self-referential structure means the sequence can be _generated_ in order rather than searched for: it is exactly `{1} ∪ {2·U} ∪ {3·U} ∪ {5·U}`, i.e. the merge of three sorted lists, each derived from the sequence built so far. There is no need to test arbitrary integers for ugliness, which would waste almost all the work.

The dp array is filled left to right, with three cursors `i2`, `i3`, `i5` into it. At each step the candidates are `ugly[i2]*2`, `ugly[i3]*3`, `ugly[i5]*5` — the smallest not-yet-emitted element of each virtual list — and the next ugly number is the minimum of the three. Every cursor whose candidate equals the minimum is then advanced, not just one of them: a value like 6 is reachable as both 2·3 and 3·2, and advancing all matching cursors keeps it from appearing twice. The cursors never lag because a candidate can only be consumed once it has become the minimum.

Starting from `ugly[0] = 1`, each of the `n` slots costs three multiplications, three comparisons, and a few increments, and the answer is the last slot filled (`ugly[n - 1]`, since the array is written with a leading 1). The table of `n + 1` values is the entire footprint; n ≤ 1690 keeps it tiny.

**Complexity:** `O(n)` time, `O(n)` space.
