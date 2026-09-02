# Solutions — Yielding Around A Circular Array

The whole problem is the two-sided resume protocol plus one arithmetic
decision. The generator holds nothing but its current position; every
yield suspends it with the caller's next jump in hand, so the case's
steps sequence drives the walk from outside and the generator itself
never decides when to stop.

## Ring-Index Stepper With Double Modulo

The first resume is parameterless — `yield arr[startIndex]` runs before
any jump exists — and its `yield` expression evaluates to the value the
caller sends with the _next_ `next(jump)`, which is exactly the jump the
walk needs. Each subsequent turn moves the position by that jump and
wraps it with `((index + jump) % n + n) % n`: JavaScript's `%` keeps the
sign of the dividend, so a single modulo would leave a negative
position, and the outer correction folds it back into `[0, n)`. That one
expression covers every case in the statement — the last slot stepping
forward to the first, the first slot stepping backward to the last,
jumps equal to or larger than the array, and zero jumps that hold
position.

The loop is deliberately unbounded: the walk never terminates, so
termination is the carrier's concern. A jump of ±10⁴ against an array
of 10⁴ slots stays exact in Number arithmetic, and each resume costs
one modulo pair and one array read.

**Complexity:** `O(1)` per `next()` resume, `O(1)` auxiliary space
beyond the caller's array.
