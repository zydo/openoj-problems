# Run Stages in Order

## Description

Three stages of a job must always execute in the same order, but the
scheduler gives you no control over when each one actually runs. Consider
this starting point:

```text
public class StageSequence {
  public void first() { emit("first"); }
  public void second() { emit("second"); }
  public void third() { emit("third"); }
}
```

The same `StageSequence` instance is handed to three different threads:
thread A calls `first()`, thread B calls `second()`, and thread C calls
`third()`. Add whatever synchronization is needed so that `second()` only
runs after `first()` has finished, and `third()` only runs after
`second()` has finished — no matter how the threads are scheduled. The
order in the input schedule is only which thread is started first; it says
nothing about when each thread will actually get CPU time.

Implement the `StageSequence` class:

- `StageSequence()` initializes the object.
- `void first(Runnable emitFirst)` calls `emitFirst.run()` to output
  `"first"`.
- `void second(Runnable emitSecond)` calls `emitSecond.run()` to output
  `"second"`.
- `void third(Runnable emitThird)` calls `emitThird.run()` to output
  `"third"`.

### Concurrent judging

The judge starts one real thread per entry of the schedule — one calling
`first`, one calling `second`, one calling `third` — all sharing one
`StageSequence` object. Each callback appends its token to a shared log, so
the log is the interleaving your synchronization actually produced. Exactly
one log is correct: `"first"`, then `"second"`, then `"third"`. A solution
that deadlocks never returns and is judged as a timeout.

### Example 1

```text
Input: schedule = [1,2,3]
Output: "firstsecondthird"
Explanation: Thread A calls first(), thread B calls second(), and thread C
calls third(). However the threads interleave, only the sequence
"firstsecondthird" is a correct output.
```

### Example 2

```text
Input: schedule = [1,3,2]
Output: "firstsecondthird"
Explanation: The schedule starts thread A, then thread C, then thread B —
but `second()` still must finish before `third()` begins, so the output is
"firstsecondthird" all the same.
```

### Constraints

- `schedule` is a permutation of `[1, 2, 3]`.
