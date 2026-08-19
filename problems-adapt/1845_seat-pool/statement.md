# Seat Pool

## Description

Maintain a pool of `n` seats numbered `1` through `n`. When the pool opens,
every seat is free.

Implement the `SeatPool` class:

- `SeatPool(int n)` — opens a pool over seats `1` to `n`, all of them free.
- `int reserve()` — takes the free seat with the smallest number and returns
  that number.
- `void release(int seat)` — returns a taken seat to the pool, marking it
  free again.

### Example 1

```text
Input:
["SeatPool", "reserve", "reserve", "reserve", "release", "reserve", "release", "reserve", "reserve"]
[[4], [], [], [], [1], [], [3], [], []]
Output: [null, 1, 2, 3, null, 1, null, 3, 4]
Explanation:
SeatPool pool = new SeatPool(4); // 4 seats, all free.
pool.reserve(); // all seats are free, take the smallest: 1.
pool.reserve(); // free seats are {2, 3, 4}, take 2.
pool.reserve(); // free seats are {3, 4}, take 3.
pool.release(1); // seat 1 is free again; free seats are {1, 4}.
pool.reserve(); // 1 is the smallest free seat, take it.
pool.release(3); // free seats are {3, 4}.
pool.reserve(); // take 3.
pool.reserve(); // take 4.
```

### Example 2

```text
Input:
["SeatPool", "reserve", "reserve", "reserve", "release", "release", "reserve", "reserve"]
[[6], [], [], [], [3], [1], [], []]
Output: [null, 1, 2, 3, null, null, 1, 3]
Explanation: Two seats sit in the pool at once, and the next reserve picks
the smaller of them (1 before 3), even though 3 was released first.
```

### Constraints

- `1 <= n <= 10⁵`
- `1 <= seat <= n`
- Every call to `reserve` has at least one free seat to take.
- Every call to `release` names a seat that is currently taken.
- At most `10⁵` calls to `reserve` and `release` in total.

### Follow-up

Seats that were taken and never released need never be stored at all. Can
you make `reserve` and `release` work without keeping them anywhere?

## Hints

### Hint 1

What `reserve` needs is the _minimum_ of the free set — a set that grows on
every `release` and loses exactly its minimum on every `reserve`. A min-heap
answers both halves, but loading all `n` seats into it up front spends `O(n)`
memory on seats that may never be touched.

### Hint 2

As long as nothing is released, seats leave the pool in the order 1, 2, 3,
…. So one counter — the largest number ever handed out — already describes
every untouched seat.

### Hint 3

Only `release` puts seats into the heap, and everything it puts there is
smaller than the counter. So `reserve` takes the heap's top when the heap is
non-empty and bumps the counter otherwise; the two sources of free seats
never overlap.
