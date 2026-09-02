# Solutions — Most Containers Filled With Spare Units

## Sort by remaining need

Container i is short of full capacity by `capacity[i] - contents[i]` units;
containers with a remaining need of 0 are already full. Placing units into a
set of containers costs the sum of their remaining needs, so the containers
we complete should be the ones with the smallest needs: if an optimal
distribution fills some container while leaving a cheaper container
unfilled, moving those units to the cheaper container keeps every filled
container filled and never spends more, so filling needs in ascending order
loses nothing.

The code computes every need, sorts them ascending, and walks the sorted
list spending `spare` greedily. It stops at the first need that does not
fit — every later need is at least as large — counting each container it
completes, including the zero-need containers that cost nothing.

**Complexity:** `O(n log n)` time, `O(n)` space.
