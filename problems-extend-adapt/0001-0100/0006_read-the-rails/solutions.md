# Solutions — Read The Rails

## Row-by-row walk

The pen only ever moves down or up, and it switches direction exactly on the top and bottom rails. So the transformation never needs the two-dimensional grid the statement draws: keep one buffer per rail, walk `s` a single time while remembering the current rail and the walking direction, and drop each character into the buffer of the rail it lands in. Reading those buffers top to bottom afterwards is the transformed string.

The method returns `s` unchanged when `numRows` is 1 or at least the length of `s`. The first half of that guard is load-bearing: with a single rail the walk sits on the top and the bottom rail at once, the flag settles on +1 and the index leaves the one buffer that exists on the very next step. A grid at least as tall as the text is the other degenerate shape — the pen goes straight down, one character per rail, without ever bouncing, so the rail-by-rail reading order is the original string and returning it directly just skips the ceremony.

Otherwise the walk keeps an `index` into the rails and a `step` of +1 or -1. Each character is appended to `rows[index]` first; then, if the walk has arrived at rail 0 or rail `numRows - 1`, `step` is reversed, and `index` finally moves. Flipping the direction at the boundary rather than before it is what makes the corner character belong to the turning rail, matching the pattern in the statement. At the end every buffer is joined in rail order and concatenated.

**Complexity:** `O(n)` time, `O(n)` space.
