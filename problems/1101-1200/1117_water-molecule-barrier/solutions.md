# Solutions — Water Molecule Barrier

## Two Counting Semaphores plus a Three-Way Barrier

The requirement is two requirements wearing one coat, and each wants its own
primitive. First a **capacity** requirement: while a molecule is open, at most
two hydrogen threads and at most one oxygen thread may belong to it. Counting
semaphores state that outright — initialize one to 2 for hydrogen and one to 1
for oxygen. A thread acquires its permit before emitting, so no matter how
many threads the judge has running, the atoms emitted while a molecule is open
are already two `"H"` and one `"O"`.

Second a **completion** requirement: molecule `k + 1` may not open until
molecule `k` has closed. Permits alone cannot promise this. Suppose a
hydrogen thread emitted and returned its permit immediately — a hydrogen
thread of the _next_ molecule could take that permit and emit before this
molecule's oxygen ever did, and one group would straddle the boundary the
judge cuts on. So the three threads part together: a barrier that trips on
three arrivals holds each of them until all three atoms are in the log, and
only then does each thread hand back its permit. The barrier is cyclic — it
resets when it trips — so one object serves every molecule.

Both methods therefore run the same four steps — acquire, emit, wait at the
barrier, release — and the step order _is_ the correctness argument. Since a
permit is released strictly after the barrier trips, no thread of the next
molecule can emit before all three atoms of the current one have, which is
precisely "every consecutive group of three holds two `H` and one `O`".
Nothing depends on the order the judge started the threads in, so the
solution is correct under every schedule, not a lucky one.

Python uses `threading.Semaphore` and `threading.Barrier`; Java uses
`java.util.concurrent.Semaphore` and `CyclicBarrier`, translating the
barrier's `BrokenBarrierException` into an `InterruptedException` — a broken
barrier can only mean the schedule was torn down. A `Phaser` with three
registered parties does the same job in Java if you prefer it.

**Complexity:** `O(1)` time and space per thread, `O(1)` shared state — each
thread performs one acquire, one emit, one barrier wait and one release, and
the object holds two semaphores and one barrier no matter how large `n` is.
