# Solutions — Order Every Flight

## Hierholzer's Algorithm, Recorded In Postorder

Airports are vertices, flights are directed edges, and spending each edge once
from a fixed start vertex is an Eulerian path. Build an adjacency map from each
origin to its list of destinations and sort those lists. Because the reference
consumes destinations with `pop()` off the end, the lists are sorted downward,
which makes the alphabetically earliest destination the first one taken.

The tempting one-pass rule — always leave for the earliest airport still
available — breaks. That airport can be where the journey has to finish, and
walking into it early leaves edges elsewhere unreachable. Hierholzer's
algorithm sidesteps the choice entirely: descend along unused edges as far as
they go, and append an airport to the output only when its departure list has
run dry. An airport appended early is one the walk could not leave, so it
belongs at the end; appending in that order and reversing the finished list
places every such stop as late as it can go. Combined with always descending
into the earliest destination first, the reversed list is the alphabetically
smallest valid order — a competing order would have to leave for an earlier
airport at the first position where the two disagree, and the depth-first
descent has already taken that edge whenever taking it is legal.

Termination follows from the guarantee that some order exists: the start
airport has one more departure than arrival, every other airport is balanced,
so the recursion can only stall at the journey's last airport. With at most 300
flights the recursion stays shallow, and each flight is pushed and popped once.

**Complexity:** `O(E log E)` time, dominated by sorting the departure lists for
`E` flights, and `O(E)` space.
