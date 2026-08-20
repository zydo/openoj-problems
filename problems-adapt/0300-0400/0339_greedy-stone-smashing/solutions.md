# Solutions — Greedy Stone Smashing

## Max-Heap Simulation

There is no search to run and no choice to optimise: the rules pick both
participants of every collision, so a correct program is simply a faithful
re-enactment. What the re-enactment needs is a container that answers "what is
the heaviest stone right now?" cheaply while stones keep leaving and fragments
keep arriving — precisely a binary max-heap. Python's `heapq` orders smallest
first, so the code stores each weight negated and reads the heap top as the
heaviest stone.

One `heapify` pass turns the input into a heap in linear time. Then the loop
runs while at least two stones remain: pop twice, flip the signs back, and
compare. A difference of zero means the two stones cancelled and the pile
simply shrank by two; any other difference is pushed back as a new stone. Since
each round consumes two stones and returns at most one, the loop terminates
after at most `n - 1` rounds.

Two boundaries deserve a look. A single input stone skips the loop entirely and
is returned untouched. At the other extreme the heap can drain completely —
this happens exactly when the weights cancel in pairs all the way down — and
the final read guards against that, answering `0` when nothing is left rather
than indexing an empty container.

Each round performs a constant number of heap operations at `O(log n)` apiece.

**Complexity:** `O(n log n)` time, `O(n)` space.
