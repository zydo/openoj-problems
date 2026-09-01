# Interleaved Number Stream

## Description

Three workers together produce one ordered stream of numbers: a zero must
land in front of every value, and the values themselves must climb in
order, even though the workers run on independent threads with no
predictable timing.

The same `NumberStream` instance is handed to three different threads:

- Thread A calls `zero()`, which may only emit `0`s.
- Thread B calls `even()`, which may only emit even numbers.
- Thread C calls `odd()`, which may only emit odd numbers.

Add whatever synchronization is needed so the emitted stream is
`0`, `1`, `0`, `2`, `0`, `3`, … — a `0` in front of every integer from `1`
to `n`, with the integers themselves increasing — for a total stream length
of `2n`.

Implement the `NumberStream` class:

- `NumberStream(int n)` initializes the object with the count `n` of
  non-zero numbers the stream must contain.
- `void zero(Runnable emitNumber)` calls `emitNumber` to output one zero.
- `void even(Runnable emitNumber)` calls `emitNumber` to output one even
  number.
- `void odd(Runnable emitNumber)` calls `emitNumber` to output one odd
  number.

### Concurrent judging

The judge starts one real thread per entry of the schedule — one calling
`zero`, one calling `even`, one calling `odd` — all sharing one
`NumberStream` object, started in the schedule's order, which tells your
solution nothing about when each thread actually runs. Each `emitNumber`
call appends the value it is handed to a shared log, so the log is the
series your synchronization actually produced. Exactly one series is
correct: `0`, `1`, `0`, `2`, …, `0`, `n`. A solution that deadlocks never
returns and is judged as a timeout.

### Example 1

```text
Input: n = 2
Output: [0,1,0,2]
Explanation: The three threads run concurrently, but the stream must read
0, then 1, then 0, then 2 — no other interleaving is accepted.
```

### Example 2

```text
Input: n = 5
Output: [0,1,0,2,0,3,0,4,0,5]
```

### Constraints

- `1 <= n <= 1000`
