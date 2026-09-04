# Solutions — Best Average Success Rate

## Greedy Max-Heap on Marginal Lift

The mean divides by the batch count, which no allocation can change, so the
goal is simply the largest possible sum of rates — and the batches contribute
to that sum independently. Sending one trial to a batch `(p, t)` lifts its rate
by exactly `lift(p, t) = (p + 1)/(t + 1) - p/t`, a positive amount that
strictly fades with every trial the batch absorbs (the rate is concave in
additions). Sharing identical units among resources with shrinking returns is
the classic setting where taking the best immediate return at every step is
provably optimal.

The implementation is a max-heap keyed on negated lift, heapified once over
the batches. Each of the `extraTrials` trials pops the leading batch, adds one
to both of its counts, and pushes it back with a freshly computed lift. The
re-push is not optional: absorbing a trial dims a batch's appeal, and some
other batch may now offer more per trial.

Optimality is the usual exchange argument for decreasing marginal returns:
suppose an optimal allocation ever spends a trial on a batch whose lift at
that moment fell short of another's — moving that trial to the stronger batch
changes the total by the non-negative difference between the lifts, so the
greedy pick is never behind. Once the trials run out, the answer is the mean
of the final rates, read directly off what remains in the heap.

**Complexity:** `O(B + T log B)` time, `O(B)` space.
