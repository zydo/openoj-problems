# Solutions — Most Apples Before Rot

## Greedy Min-Heap by Spoil Day

The rule that never loses: when several batches are fresh together,
eat from whichever spoils earliest. Exchange argument: picture a
schedule that eats a later-spoiling apple while an earlier-spoiling one
sits fresh and is destined to spoil uneaten or be eaten later — swap
the two meals and nothing is lost, because the earlier-spoiling apple
was not going to outlast the other anyway. A min-heap keyed by spoil
day, holding `(spoil_day, count)` pairs, hands you that batch in
constant peek time.

Through the first `n` days, day `i` does three things: if the tree
dropped apples, push `(i + days[i], apples[i])`; purge every batch whose
spoil day has arrived (`spoil_day <= i`, since day `i + days[i]` is the
first inedible morning); then eat one apple off the earliest-spoiling
batch, pushing it back with one fewer apple if any survive in it.

Once day `n` passes, drops stop but meals need not: a second loop runs
the same purge-and-eat step under its own day counter, one day per
apple, until the heap empties. On Example 2, the day-0 batch feeds days
0 and 1, days 2 through 4 purge and find nothing, then the day-4 batch
— three apples, fresh through day 7 — feeds days 4, 5 and 6 for a
total of five. Termination is guaranteed because every spoil day is
finite; the `days[i] == 0` iff `apples[i] == 0` constraint means an
empty batch never enters the heap; and the simulated span, `n` plus the
last spoil day, stays linear in `n`.

**Complexity:** `O(n log n)` time, `O(n)` space.
