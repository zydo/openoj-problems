# Solutions — Shortest Cooldown Schedule

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
