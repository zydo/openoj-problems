# Solutions — Rear-End Collision Times

## Monotonic Stack of Still-Free Cars

Speeds only ever drop: joining traffic costs a car the difference between its
own speed and the slower speed it inherits. So when car `i` looks for its
first rendezvous, the only traffic that matters is whatever will still be
moving at its original pace by the time `i` gets there. Sweeping from the last
car back to the first, keep exactly those cars on a stack. Anything on the
stack at least as fast as the current car can never be caught, so it is popped
straight away.

For the car `j` left on top, the naive meeting time is
`t = (pos_j - pos_i) / (speed_i - speed_j)`. That plan is only real if `j` is
still unwedded at moment `t`: when `answer[j]` is positive and does not exceed
`t`, `j` will already have merged and slowed, so it is useless as a target —
for `i` and for every car further back, which is what makes popping it
permanent. Otherwise `t` settles `answer[i]`, and `i` joins the stack as a
candidate of its own. A car whose `answer` is `-1` never slows and remains a
valid target indefinitely.

Every index enters the stack once and leaves at most once, so the two nested
`while` loops amortize to a linear pass. When the stack empties entirely —
everything ahead is faster, or everything ahead gets consumed first — the
car keeps the default `-1.0`. The pops leave the stack holding cars whose
speeds strictly increase toward the top, the exact "slower and further right"
ordering the algorithm maintains.

**Complexity:** `O(n)` time, `O(n)` space.
