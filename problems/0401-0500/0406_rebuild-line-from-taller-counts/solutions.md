# Solutions — Rebuild Line From Taller Counts

## Greedy Insert from Tallest to Shortest

Everything turns on what a count can and cannot see. The number attached to a
person tallies only people who reach that person's height, so anyone strictly
shorter is invisible to it — dropping a shorter person into the line anywhere
leaves every taller person's tally exactly as it was. That asymmetry is what
makes a one-pass construction possible.

Work through the input from tallest to shortest, keeping a partial line that
holds everyone processed so far. When the next person arrives, every occupant of
that partial line reaches their height, so "how many at-least-as-tall people
stand ahead of me" and "what index do I sit at" are the same question. Inserting
them at their own count therefore satisfies them immediately, and because
everyone still to come is shorter, no later insertion can spoil it.

Equal heights are the one place the order within a height matters, and the fix
is to break the tie by taking the smaller count first. Consider two people of
height 5 with counts 0 and 1. Inserting the 0 first puts it at the front of what
exists; the 1 then lands one slot behind it and finds precisely one
equal-height person ahead. Reversing that order would have the 1 inserted while
its peer was still absent, and the peer would arrive in front of it and inflate
the tally.

Mechanically it is a sort followed by `n` insertions: sort by height descending
with the count ascending inside a height, then splice each person into the
growing line at index `count`. The insert shifts the tail, which is what the
quadratic term comes from, and at 2000 people that is comfortable. The guarantee
that the input describes a real line means an index is never out of range, so no
placement can fail.

Worked on Example 1, the sorted order is `[8,0] [8,1] [6,1] [5,3] [4,3] [3,0]`
and the line grows as `[8,0]`, then `[8,0] [8,1]`, then `[8,0] [6,1] [8,1]`,
and so on until the 3 is inserted at the very front to give
`[3,0] [8,0] [6,1] [8,1] [4,3] [5,3]`.

**Complexity:** `O(n^2)` time — the sort is `O(n log n)`, but each of the `n`
insertions may shift up to `n` entries — and `O(n)` space.
