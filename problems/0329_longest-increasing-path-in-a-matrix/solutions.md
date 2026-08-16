# Solutions — Longest Increasing Path in a Matrix

## Value-Ordered DP over the Cell DAG

Since a path must strictly increase at every step, following any path always moves to a strictly larger value — the matrix cells form a directed acyclic graph whose edges point from each cell to its larger four-directional neighbors. Acyclicity means the longest-path problem on this DAG can be solved by evaluating cells in topological order, and here a valid topological order is simply ascending value order.

The solution sorts all cells by value and allocates `dp[i][j]`, the length of the longest increasing path starting at cell `(i, j)`, initialized to 1 for the single-cell path. It then visits cells from smallest value to largest; when a cell is processed, every strictly smaller neighbor is guaranteed already final (it appears earlier in the sorted order), so `dp[i][j]` is just 1 plus the maximum `dp` over those smaller neighbors, and the running best is updated. Because the transition requires `matrix[ni][nj] < matrix[i][j]` strictly, equal-valued neighbors never link, which enforces strict increase and also makes the relative order of equal-valued cells in the sort irrelevant — none of them reads the others.

This bottom-up formulation replaces the memoized DFS one often sees: the sort plays the role of the recursion's memo, but with no recursion depth and no visited bookkeeping. It also handles plateaus and saddles of equal values correctly, since a plateau contributes no edges at all.

Edge cases: a 1×1 matrix returns 1 (the sort visits the one cell, `dp` stays 1); an empty guard returns 0 up front. Sorting `m · n` cells dominates the two linear sweeps over the grid, and the DP table plus sorted list account for the space.

**Complexity:** `O(mn log(mn))` time, `O(mn)` space.
