# Solutions — Ascent Then Partial Retreat

## Monotonic stack, sweeping from the right

The wanted triple obeys `nums[i] < nums[k] < nums[j]` with `i < j < k`.
Reading from the right turns detection into a running question: at each
position, could it serve as the leading `i` — that is, does a certified
`(j, k)` pair already sit entirely to its right? Such a pair exists once
some value has a larger value before it; among all candidates for the
middle role, the largest is the best, since it is the one most likely to
stay above the current value. The code keeps that best candidate in
`third`, starting at negative infinity ("no pair formed yet").

A stack that decreases from bottom to top produces `third` for free. As the
scan proceeds leftward, a value that tops the stack pops everything smaller;
every popped value is smaller than the incoming value and lies to its right,
so each one is thereby certified — it has something bigger before it — and
the last popped, being the largest of them, becomes the new `third`. Pushing
the incoming value afterwards preserves the decreasing order.

Before the stack is touched, the incoming value is compared with `third`.
If it is smaller, it plays `i` against the pair that produced `third`, and
the answer is immediate — for `[4,1,6,3]`, by the time the scan reaches 1,
`third` is 3 (popped under the 6), and 1 < 3 finishes the triple. Because
`third` only ever rises, the comparison only gets easier as the scan
continues, so nothing is missed.

Inputs shorter than three are rejected up front. Runs of equal values never
set the pattern off, since popping requires the strict `stack[-1] < value`,
and equal values merely pile onto the stack; each element is pushed and
popped at most once, which keeps the sweep linear.

**Complexity:** `O(n)` time, `O(n)` space for the stack.
