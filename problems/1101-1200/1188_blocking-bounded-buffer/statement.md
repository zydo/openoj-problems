# Blocking Bounded Buffer

## Description

Build a FIFO buffer that many threads share safely and that refuses to
overfill or underflow: it holds at most `capacity` values, a writer that
arrives at a full buffer waits, and a reader that arrives at an empty one
waits.

Implement the `BoundedBuffer` class:

- `BoundedBuffer(int capacity)` prepares a buffer able to hold at most
  `capacity` values.
- `void put(int element)` appends `element` at the back. When the buffer
  already holds `capacity` values, the calling thread **blocks** until a
  slot opens.
- `int take()` removes the value at the front and returns it. When the
  buffer is empty, the calling thread **blocks** until a value arrives.
- `int size()` reports how many values the buffer currently holds.

Threads come in exactly two kinds — writers that only ever call `put` and
readers that only ever call `take` — and they all hold the same object.
Blocking must be real waiting, never a spin loop, and the buffer must
neither drop a value nor hand one value to two readers.

Do not reach for a ready-made bounded blocking queue from the standard
library: constructing the waiting and the waking yourself is the task.

### Concurrent judging

Every scheduled call becomes one real thread, and the whole crowd shares
a single buffer: each value to insert spawns a writer thread, each
`take` a reader thread, and the judge starts them in a shuffled order —
early readers find an empty buffer as often as late writers find a full
one. Writer and reader counts always match, so a sound buffer drains to
the last value.

The verdict rests on two checks. The values the readers hand back must,
as a **multiset**, be exactly the values the writers inserted: which
reader receives which value is the scheduler's choice, so order counts
for nothing — but nothing may vanish and nothing may be handed out
twice. And the schedule must terminate within the time limit, because a
deadlocked buffer never returns and the judge sees only the timeout. Be
aware of what this style of checking cannot see: a buffer that skips the
waiting entirely would also sail through these schedules, exactly as on
LeetCode — honouring `capacity` is on you.

`size()` runs only against an idle buffer, where its answer is fixed;
racing it against simultaneous writers and readers would prove nothing,
so the judge never schedules it there.

### Example 1

```text
Input:
capacity = 2
inserted = [4, 6, 2, 9, 1]
readers = 5
Output: [1, 2, 4, 6, 9]
Explanation: Five writer threads and five reader threads share a buffer
holding two values. Writers wait whenever both slots are taken and
readers wait whenever the buffer is empty, yet every value surfaces
exactly once. Any arrangement of the five values is accepted — for
example [2, 9, 1, 4, 6].
```

### Example 2

```text
Input:
capacity = 3
inserted = [7, 3, 8, 5]
readers = 4
Output: [3, 5, 7, 8]
Explanation: Four writers and four readers share a buffer of capacity
three. With several threads on each side, the scheduler decides who wins
each slot, so [8, 7, 3, 5], [5, 3, 8, 7] and every other arrangement of
these values passes equally.
```

### Constraints

- `1 <= capacity <= 10`
- `0 <= n <= 30`, where `n` is both the number of writer threads and the
  number of reader threads.
- `0 <= element <= 20`
- Every writer thread performs exactly one `put` and every reader thread
  exactly one `take`.

## Hints

### Hint 1

What needs protecting is small — the stored values and their count — so
one mutual-exclusion lock held across each whole operation is enough for
safety. What a plain lock cannot express is the _waiting_: a reader
holding the lock on an empty buffer must hand the lock back while it
sleeps, or no writer could ever get in to fill the buffer.

### Hint 2

A condition variable supplies exactly that gesture: a thread that waits
on one puts the lock down and parks in a single motion, and a later
wake-up hands the lock back before the wait ends. A writer waits while
the count equals `capacity`; a reader waits while the count is zero. And
after changing the buffer, signal the condition the _other_ side sleeps
on — an insertion is what makes the buffer non-empty, a removal is what
makes it non-full.

### Hint 3

Re-test the condition in a `while`, never once with an `if`: a woken
thread must re-acquire the lock, and a rival of the same kind may have
consumed the change in between — with several readers, one insertion can
wake two and only one of them can win the value. Two separate condition
variables, one meaning "room available" and one meaning "value
available", let each signal reach exactly a thread that can profit from
it.
