# Tick-Tock Alternation

## Description

Two workers must alternate in strict pairs: one tick, then one tock, over
and over, even though neither worker knows when the other will be
scheduled. The starting point looks like this:

```text
class TickTockPair {
  public void tick() {
    for (int i = 0; i < n; i++) {
      emit("tick");
    }
  }

  public void tock() {
    for (int i = 0; i < n; i++) {
      emit("tock");
    }
  }
}
```

The same `TickTockPair` instance is handed to two different threads: one
calls `tick()`, the other calls `tock()`. Add whatever synchronization is
needed so the emitted stream is `"ticktock"` repeated `n` times.

Implement the `TickTockPair` class:

- `TickTockPair(int n)` initializes the object with the number of
  repetitions `n`.
- `void tick(Runnable emitTick)` calls `emitTick.run()` exactly `n` times.
- `void tock(Runnable emitTock)` calls `emitTock.run()` exactly `n` times.

### Concurrent judging

The judge starts one real thread calling `tick` and one calling `tock`,
both sharing one `TickTockPair` object; the start order tells your solution
nothing about when each thread actually runs. Each callback appends its
token to a shared log, so the log is the interleaving your synchronization
actually produced. Exactly one log is correct: `"tick"`, `"tock"`,
`"tick"`, `"tock"`, … — `n` repetitions of the pair. A solution that
deadlocks never returns and is judged as a timeout.

### Example 1

```text
Input: n = 1
Output: "ticktock"
Explanation: One thread calls tick() and the other calls tock(). The only
correct output is one tick followed by one tock.
```

### Example 2

```text
Input: n = 2
Output: "ticktockticktock"
Explanation: The pair tick-then-tock is emitted twice, in order.
```

### Constraints

- `1 <= n <= 1000`
