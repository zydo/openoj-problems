# Fizz Buzz Across Threads

## Description

The classic substitution game, now split across four concurrent workers:
counting from `1` to `n`, multiples of three become `"fizz"`, multiples of
five become `"buzz"`, multiples of both become `"fizzbuzz"`, and every
other count stays a number. The catch is that each worker may only produce
its own kind of token, and the scheduler gives you no control over when
any of them runs.

The same `ThreadedFizzBuzz` instance is handed to four different threads:

- Thread A calls `fizz()`, which may only emit the word `"fizz"`.
- Thread B calls `buzz()`, which may only emit the word `"buzz"`.
- Thread C calls `fizzbuzz()`, which may only emit the word `"fizzbuzz"`.
- Thread D calls `number()`, which may only emit integers.

Add whatever synchronization is needed so the emitted stream lists, for
every `i` from `1` to `n` in order, the token the game defines for `i`:

- `"fizzbuzz"` if `i` is divisible by 3 and by 5,
- `"fizz"` if `i` is divisible by 3 and not by 5,
- `"buzz"` if `i` is divisible by 5 and not by 3, or
- `i` itself if `i` is divisible by neither.

Implement the `ThreadedFizzBuzz` class:

- `ThreadedFizzBuzz(int n)` initializes the object with the length `n` of
  the sequence to produce.
- `void fizz(Runnable emitFizz)` calls `emitFizz` to output `"fizz"`.
- `void buzz(Runnable emitBuzz)` calls `emitBuzz` to output `"buzz"`.
- `void fizzbuzz(Runnable emitFizzBuzz)` calls `emitFizzBuzz` to output
  `"fizzbuzz"`.
- `void number(Runnable emitNumber)` calls `emitNumber` to output the
  numbers.

### Concurrent judging

The judge starts one real thread per entry of the schedule — one each
calling `fizz`, `buzz`, `fizzbuzz`, and `number` — all sharing one
`ThreadedFizzBuzz` object, started in the schedule's order, which tells
your solution nothing about when each thread actually runs. The three word
callbacks append their token to a shared log, and each `emitNumber(value)`
call appends the value it is handed, so the log is the series your
synchronization actually produced. Exactly one series is correct: for every
`i` from `1` to `n` in order, the token defined above. A solution that
deadlocks never returns and is judged as a timeout.

### Example 1

```text
Input: n = 15
Output: [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,"fizz",13,14,"fizzbuzz"]
```

### Example 2

```text
Input: n = 5
Output: [1,2,"fizz",4,"buzz"]
```

### Constraints

- `1 <= n <= 50`
