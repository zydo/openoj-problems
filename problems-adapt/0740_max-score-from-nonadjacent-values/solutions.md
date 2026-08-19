# Solutions — Maximum Score from Nonadjacent Values

## Dynamic Programming over Weighted Values

First count each distinct value. Selecting a value contributes its value
multiplied by its frequency, so the original array becomes a sorted list of
weighted labels. The only conflict is between consecutive labels.

Maintain two rolling totals while visiting labels in increasing order:
`take` includes the previous label, and `skip` excludes it. If the current
label immediately follows the previous one, its take state may extend only
`skip`. If there is a gap, it may extend the better of both states because no
conflict crosses the gap. The new skip state is always the better previous
total.

After the last label, the better rolling state is the maximum feasible score.

**Complexity:** `O(n + V log V)` time and `O(V)` space, where `V` is the
number of distinct values.
