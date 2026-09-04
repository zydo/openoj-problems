# Solutions — Minimum Stack

## Value and Running Minimum, Paired

Three of the four operations are free on any array-backed stack; the fourth
is the whole problem. Holding one cached smallest value breaks the first time
a `pop` removes it, and rescanning the stack is linear. What survives every
sequence of operations is a _history_ of minima — each one valid for the
stack exactly as it stood at one moment.

So each entry stores two numbers: the value pushed, and the smallest value in
the stack at that moment — `value` itself when the stack was empty, otherwise
the lesser of `value` and the minimum recorded by the previous top. Pushing 3,
8, then 1 onto an empty stack lays down the pairs `(3,3)`, `(8,3)`, `(1,1)`;
the top pair alone answers both queries, one field each.

Why deletion needs no repair: a `pop` rewinds the stack to a state it already
occupied, and the pair now on top was written when that state was current —
its minimum field is the answer for precisely that state. In the trace above,
popping the `(1,1)` pair exposes `(8,3)`, and the smallest value is 3 again
without any recomputation. Equal values interleave cleanly as well: two
pushes of 6 write `(6,6)` and `(6,6)`, so removing one copy still leaves a
pair whose minimum field reads 6.

The Python port keeps the pairs as tuples in one list; the Java port uses two
parallel `int` arrays doubled geometrically, so the full `-2³¹..2³¹-1` domain
stays exact with no boxing.

**Complexity:** every operation runs in `O(1)`; the stack of `n` entries
occupies `O(n)` space.
