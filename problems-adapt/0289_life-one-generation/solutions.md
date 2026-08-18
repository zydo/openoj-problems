# Solutions — Life, One Generation

Both variants turn on the same difficulty: a cell's next state must be decided
from the *old* states of its neighbours, yet the answer has to end up in the
same board. Each walks every cell, counts live neighbours among the eight
surroundings with bounds checks (off-board cells are dead), applies the
survival test — alive with 2 or 3 live neighbours stays alive — and the birth
test — dead with exactly 3 comes alive. They part ways only in how the old
generation stays readable while the new one is being written.

The odd shapes need no special handling in either: a single-row board simply
has most neighbours off-board, a lone live cell counts zero live neighbours and
dies, and a 2x2 block of live cells survives because each of its cells sees
exactly three.

## Copy

Freeze the old generation first — one snapshot of the whole board — then count
every neighbourhood against the snapshot and write the results straight into
the board. The generations cannot interfere: reads only ever see time `t`,
writes only ever lay down final `0`/`1` values for time `t + 1`, and no cleanup
pass exists to forget.

The price is the snapshot itself, a full second board of `O(m·n)` cells. As the
most literal reading of "decide everything, then change everything" it is the
natural default, and the follow-up's tighter budget is what the next variant
answers.

**Complexity:** `O(m·n)` time, `O(m·n)` space.

## State bits

The in-place answer to the follow-up: let one cell carry both generations. Two
markers cover the two transitions — `2` reads "was alive, will die", `3` reads
"was dead, will be born" — and in both the low bit is already the next state,
so odd values end the run alive. During the first pass the old state stays
recoverable everywhere: `1` and `2` both meant alive, `0` and `3` both meant
dead. A live cell outside the 2-or-3 band becomes `2`, a dead cell with exactly
3 live neighbours becomes `3`, and cells not changing are left alone. Neighbour
counting looks for `1` or `2` only, which is why a cell already rewritten to
`3` still correctly reads as "was dead" to any later scan in the same pass.

A second pass collapses the markers: `1` and `3` become `1`, everything else
becomes `0`. The board now holds exactly the next generation and is returned.
Beyond the two loop variables the method uses nothing, and since only integer
values are involved the encoding would carry over unchanged to bigger or
sparser boards.

**Complexity:** `O(m·n)` time, `O(1)` space.
