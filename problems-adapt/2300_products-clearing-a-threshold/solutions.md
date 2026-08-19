# Solutions — Products Clearing a Threshold

## Sort + per-factor binary search

Fix a factor `f`. A value `v` pairs with it to clear the threshold
exactly when `f * v >= threshold`, that is when `v >= threshold / f` —
so the dividing line depends only on `v` itself. The values that clear
are therefore the largest suffix of the whole multiset: if some value
clears, every value at least as big clears too. Monotonicity of that
kind turns "how many clear?" into counting a range of a sorted array.

Sort `values` once, up front. For each factor the smallest clearing
value is `need = ceil(threshold / f)`, computed in integers as
`(threshold + f - 1) // f` — no floating point, which matters because
`threshold` reaches `10^10` and float rounding there can flip a
comparison. `bisect_left(values, need)` then reports how many values
fall strictly below the requirement, and `m - bisect_left(...)` is the
count that clears. Results are appended in the original factor order.

The boundary cases drop out of the formula. A big factor can push `need`
down to 1, below every possible value, and the whole array counts; a
tiny factor can push `need` past the largest value, and the count is
zero — as with factor 2 against `[7, 3]` at threshold 21, where even
`2 * 7 = 14` falls short while factor 10 clears with both. Since
`threshold >= 1` and all entries are positive, `need` never drops below
1 and the division is always well defined. Sorting happens exactly once
no matter how many factors arrive.

**Complexity:** `O((n + m) log m)` time, `O(m)` space (the sorted copy
of `values`, excluding the output array).
