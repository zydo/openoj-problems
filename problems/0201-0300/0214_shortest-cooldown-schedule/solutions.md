# Solutions — Shortest Cooldown Schedule

Both solutions take their shape from the same bottleneck: the most frequent
label, whose forced gaps dictate the whole timetable. The simulation feels its
way to the answer slot by slot — a max-heap hands each slot the label with the
largest remaining count while a cooldown queue holds labels back until they may
run again — and the number of slots used is simply where the clock stops. The
closed form never starts the clock: two statistics of the label counts pin the
length outright, and the timetable is never built at all.

## Max-Heap Greedy Simulation

Instead of deriving the length, build the timetable one slot at a time and let
a max-heap hand out the work: at every slot, run one job of the label with the
largest remaining count. That choice is what keeps the timetable tight. The
busiest label is the one whose runs must sit farthest apart, so taking its
runs at every earliest opportunity is exactly what the cooldown rule demands;
a thinner label run in its place would leave the forced gaps to be paid for
later.

The bookkeeping needs nothing but counts, because the cooldown rule treats
every label alike — which letter occupies a slot never changes the length,
only how many runs of each label remain and when each becomes runnable again.
A max-heap of remaining counts holds the labels free right now. When a label
runs, its count drops by one, and if anything is left the label joins a
cooldown queue stamped with the slot at which it may run again — the current
slot plus `n + 1`. That queue is a plain FIFO: a run at slot `t` frees at
`t + n + 1`, so entries leave in exactly the order they entered. Each tick of
the clock releases every expired entry back into the heap, runs the largest
count, and steps one slot.

Idle slots cost no loop iterations. When the heap empties, every remaining
label is still cooling, and the clock jumps straight to the earliest release:
the slots in between are forced empty no matter what, so ticking through them
one at a time buys nothing. In example 1 the clock runs `C`, `D`, `E`, then
jumps `3 → 6 → 9` for the last three `C` runs, landing on 10 without ever
counting the six empty slots individually. Example 3 fills more of the gaps —
`G H J K G H`, then a single jump to slot 8 for the last `G` — and lands on 9.

The greedy always finishes in the provably smallest number of slots, which is
why it agrees with the closed form below on every input: the fill order
described there — labels in decreasing order of what remains — is precisely
the rule this heap applies, so the simulation reaches the same length while
never having to know the formula. The price of not knowing is the heap: every
one of the `T` runs pays a push and a pop over at most 26 counts.

**Complexity:** `O(T log 26)` time, `O(1)` space — heap and cooldown queue
never hold more than one entry per letter.

## Closed Form From The Label Counts

There is no need to build a timetable at all: its length can be read off two
numbers taken from the label counts.

Start with the busiest label, the one occurring `max_freq` times. Two of its
runs must be `n + 1` slots apart or more, so between the first and the last
there are at least `max_freq - 1` stretches of `n + 1` slots. After the last
stretch comes a tail holding the final run of the busiest label — and also the
final run of every other label tied with it at `max_freq`, since those labels
are just as tightly spaced and have nowhere earlier to go. With `num_max` labels
tied, the timetable cannot be shorter than
`(max_freq - 1) * (n + 1) + num_max`.

The other bound is trivial: a slot runs at most one job, so the length is at
least the number of jobs. Neither bound alone is the answer. The first ignores
that a rich enough mix of labels leaves no idle slot; the second ignores forced
idling. Taking the larger of the two settles it, and the larger one is always
attainable — fill the stretches by taking labels in decreasing order of what
remains, and either the gaps run out of jobs (the first bound, with the leftover
slots idle) or the jobs overflow into extra stretches that stay full (the
second).

The three examples cover both regimes. In `["C","C","C","C","D","E"]` with
`n = 2`, `max_freq` is 4 and only `C` attains it, so the formula gives
`3 * 3 + 1 = 10` against 6 jobs — idling dominates. In
`["P","Q","P","R","Q","S"]` with `n = 1`, `max_freq` is 2 and two labels tie, so
the formula gives `1 * 2 + 2 = 4`, well under the 6 jobs, and 6 wins with a
schedule that never pauses. The third sits in between: `2 * 4 + 1 = 9` beats 7
jobs, and only two slots end up empty.

Getting the two statistics is one pass to tally the labels and one scan over the
tally — at most 26 entries, one per letter — for the largest count and how many
labels reach it. A cooldown of `0` needs no special case: the formula degenerates
to `max_freq - 1 + num_max`, which never exceeds the job count, so the second
bound takes over exactly as it should.

**Complexity:** `O(T)` time and `O(1)` space for `T` jobs — the tally is bounded
by the size of the alphabet, not by the input.
