# Solutions — Delete and Earn

## House-Robber DP over Counted Values

If you ever delete a value `v`, deleting every copy of `v` is free — the neighbors `v-1` and `v+1` vanish with the first deletion anyway — so a strategy is just a choice of which distinct values to take, scoring `v * count[v]` for each taken value. Taking `v` forbids taking `v-1` and `v+1`, which is precisely the house-robber constraint, so the DP walks the distinct values in sorted order with a take/skip pair of states.

The code keeps two rolling values: `take`, the best total when the previous distinct value was taken, and `skip`, the best when it was not. The carry-in for the current value is `skip` if the previous distinct value was exactly one less (adjacent, so the previous take conflicts) but `max(take, skip)` otherwise — this gap check is what makes missing values free: if no `v-1` exists in the input, taking `v` conflicts with nothing. The new states then become the carry-in plus `v * count[v]`, and the better of the old states.

Counting occurrences costs one pass over the input; iterating only the sorted distinct values avoids allocating a bucket for every value up to 10^4 when far fewer are present. With `V` the number of distinct values, the sort of those keys dominates the arithmetic.

**Complexity:** `O(n + V log V)` time, `O(V)` space.
