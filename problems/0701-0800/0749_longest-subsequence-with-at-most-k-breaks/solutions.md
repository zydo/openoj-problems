# Solutions — Longest Subsequence With at Most K Breaks

## Dynamic programming over values with per-transition maxima

Values first collapse to compact ids, since only equality between entries
carries information. The state dp[j][v] holds the longest pick ending in value
v that has spent exactly j breaks. An incoming element x can be attached in
three ways — after another x (nothing spent, dp[j][x] + 1), after any
different value (one break spent, the best over v != x at level j - 1, plus
1), or alone as a fresh length-1 pick, which only matters at j = 0 because the
cross-value term already covers length 1 for j > 0.

The costly piece is "best over v != x"; computing it per element would be
O(n·k·V). Instead each level j keeps the maximum of dp[j] across values
(best1), the value achieving it (val1), and the best of the rest (best2). The
top over v != x is best1[j-1] unless x itself is that argmax, in which case
best2[j-1] stands in — either way O(1). Writing the new candidate into
dp[j][x] then patches the bookkeeping: if x already owns best1 the record just
rises; otherwise a new champion pushes the old one down to best2.

Elements are consumed strictly left to right, so every read of level j - 1
sees the state as the previous element left it — exactly what the recurrence
requires. The result is the maximum of best1 across break counts 0 through k,
because any legal pick spends some exact number of breaks inside that range;
Example 3 lands at j = 2 with the pick [2, 9, 2, 2].

**Complexity:** `O(n · k)` time, `O(n · k)` space.
