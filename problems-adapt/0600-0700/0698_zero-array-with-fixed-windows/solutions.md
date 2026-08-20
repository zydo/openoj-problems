# Solutions — Zero the Array with Fixed Windows

## Difference Array Sweep

Order the moves left to right: the leftmost cell sitting above zero is reached
only by windows that start exactly there, and starting one there is always at
least as good, so every winning schedule has a left-to-right replay. Running
that replay move by move is quadratic, but the only quantity that matters at
each front cell is its residual — the value left once the windows already
opened are subtracted — and a difference array produces residuals one cell at
a time.

Walk the cells keeping `running`, the number of opened windows that still cover
the current cell, updated by adding `diff[i]` on arrival. The residual
`cur = nums[i] - running` decides everything. A negative residual means
earlier windows dug below zero here, and nothing later can fill the hole back,
so the answer is `false`. A positive residual forces exactly `cur` new windows
to open at `i` — nothing to the left can contribute anymore — so if
`i + k > n` they would overrun the array's end and the answer is again
`false`; otherwise `running` grows by `cur` and `diff[i + k] -= cur` retires
them exactly at the window's far edge. A zero residual opens nothing.

![The sweep over [1,1,3,2,2,0] with k = 3: one window opens at i = 0 and two
at i = 2, and the running coverage 1,1,3,2,2,0 lands exactly on nums.](figures/solution-difference-sweep.svg)

A single pass settles every input, including an all-zero array (trivially
`true`) and windows that no longer fit near the right edge. The difference
array of length `n + 1` is the only extra state.

**Complexity:** `O(n)` time, `O(n)` space.
