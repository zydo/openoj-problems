# Solutions — Fewest Transit Lines

## BFS over stops with route dedup

Create an inverted index that maps every stop to the line indices serving it.
This makes it possible to discover all boardable lines without comparing every
pair of lines.

Run breadth-first search over reached stops. A queue entry stores a stop and
the number of lines boarded to reach it. From that stop, consider each line in
the inverted index. Boarding an unused line costs one and exposes all stops on
that line, which are enqueued with the incremented count.

Maintain two visited sets. The first prevents a line from being expanded more
than once; expanding it later could only reproduce stops at an equal or larger
boarding count. The second prevents reached stops from being placed in the
queue repeatedly. These two guards ensure each line's stop list is scanned at
most once.

If the start and end are equal, the answer is zero even when no line serves
that stop. Otherwise, either endpoint missing from the inverted index makes
the trip impossible. During the search, finding the end while scanning a newly
boarded line returns the new count immediately. Breadth-first order guarantees
that this is the minimum.

**Complexity:** `O(S)` time and space, where `S` is the total number of stop
entries across all lines.
