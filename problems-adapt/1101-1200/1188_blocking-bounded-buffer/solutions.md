# Solutions — Blocking Bounded Buffer

## One Lock and Two Condition Variables

The buffer's whole state is the values plus a count, so safety costs one
mutual-exclusion lock: hold it for the entirety of `put`, `take` and
`size`, and no thread can ever observe a half-updated deque. The hard
half of the problem is waiting. A reader that arrives at an empty buffer
must sleep until a writer comes — and it cannot sleep holding the lock,
because the writer it is waiting for needs that same lock to get in.

A condition variable is built for exactly this. Waiting on one atomically
drops the lock and parks the thread; a signal re-acquires the lock before
the wait returns. So `put` waits while the count sits at `capacity`,
`take` waits while it sits at zero, and each operation — after changing
the deque — signals the condition the opposite side is parked on: an
insertion is what turns the buffer non-empty, a removal is what turns it
non-full.

Two details separate a correct buffer from a nearly correct one. First,
the wait belongs in a `while` loop, never under a bare `if`: the woken
thread must re-acquire the lock, and a same-kind rival may have slipped
in and taken the goods, so the condition needs re-testing after every
wake-up — which also covers the spurious wake-ups the primitives are
allowed to deliver. Second, use two condition variables, `roomAvailable`
and `valueAvailable`, not one. With a single condition, a signal can land
on the wrong kind of sleeper — a parked writer woken by another writer's
departure — and you are forced into a broadcast to stay safe. Separate
conditions mean one `signal` always reaches a thread that can act, so
each operation wakes exactly one sleeper.

Python spells this as two `threading.Condition` objects sharing one
`threading.Lock`, with `wait()` and `notify()`; Java as a `ReentrantLock`
carrying two `newCondition()` wait-sets, `await()` and `signal()`, with
the unlock in a `finally` so even an interruption cannot leak the lock. A
deque (`collections.deque` / `ArrayDeque`) gives both FIFO ends in `O(1)`;
a fixed ring of `capacity` slots with head and tail indices would do just
as well and allocates once. `synchronized` with `wait`/`notifyAll` is the
same design collapsed to one implicit condition — correct, but every
change wakes every sleeper.

On Example 1, five writers and five readers contend for two slots: the
first two `put` calls land, the third writer parks on `roomAvailable`,
and each early reader that finds nothing parks on `valueAvailable` until
a `put` signals it. Whichever interleaving the scheduler picks, the five
values `4, 6, 2, 9, 1` each cross the buffer exactly once, which is all
the judge's multiset check demands.

**Complexity:** `O(1)` work per operation apart from the wait, which by
definition lasts until the buffer can serve the call; `O(capacity)`
space.
