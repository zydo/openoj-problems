# Solutions — Grid Exit Walk Count

## Layered Path Dynamic Programming

Let the previous table store, for every starting cell, how many walks leave
the grid within the move budget processed so far. Initially every value is
zero because no walk exits without moving.

For each additional allowed move, build a fresh table. From a cell, each of
the four directions contributes one when it immediately crosses the boundary;
otherwise it contributes the previous table value of the neighboring cell.
Reducing each sum modulo `10^9 + 7` produces the next layer.

A walk is counted exactly when its first out-of-grid step is taken and is never
extended afterward. Repeating the transition `maxMove` times therefore counts
all successful walks within the limit. Only two grid-sized tables are needed.

**Complexity:** `O(maxMove * m * n)` time and `O(m * n)` auxiliary space.
