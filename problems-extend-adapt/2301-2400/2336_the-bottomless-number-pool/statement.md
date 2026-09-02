# The Bottomless Number Pool

## Description

Imagine a pool that contains every positive integer — `1`, `2`, `3`,
and so on, without end. You can draw from it, and you can return
numbers to it:

- Drawing always takes the smallest number the pool currently holds,
  and that number leaves the pool.
- Returning hands a number back only if it is missing from the pool;
  returning a number the pool already holds changes nothing.

Implement the `NumberPool` class:

- `NumberPool()` initializes the pool holding every positive integer.
- `int popSmallest()` removes and returns the smallest number in the
  pool.
- `void addBack(int num)` puts `num` back into the pool if it is not
  already there.

### Example 1

```text
Input:
["NumberPool", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest", "popSmallest", "addBack", "addBack", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest"]
[[], [], [7], [], [], [], [], [1], [4], [], [], [3], [], []]
Output: [null, 1, null, 2, 3, 4, 5, null, null, 1, 4, null, 3, 6]
Explanation:
NumberPool pool = new NumberPool(); // the pool holds 1, 2, 3, ...
pool.popSmallest(); // return 1, the smallest number in the pool.
pool.addBack(7);    // 7 was never drawn, so the pool is unchanged.
pool.popSmallest(); // return 2.
pool.popSmallest(); // return 3.
pool.popSmallest(); // return 4.
pool.popSmallest(); // return 5; the pool now holds 6, 7, 8, ...
pool.addBack(1);    // 1 re-enters the pool.
pool.addBack(4);    // 4 re-enters the pool.
pool.popSmallest(); // return 1, again the smallest.
pool.popSmallest(); // return 4.
pool.addBack(3);    // 3 re-enters the pool.
pool.popSmallest(); // return 3.
pool.popSmallest(); // return 6, the smallest remaining number.
```

### Constraints

- `1 <= num <= 1000`
- At most `1000` calls in total are made to `popSmallest` and
  `addBack`.

## Hints

### Hint 1

The pool is infinite, but only numbers that were drawn and returned
ever need explicit storage — the untouched tail is always a known
arithmetic run.

### Hint 2

Keep the smallest number never yet drawn as a watermark, plus a set of
returned numbers smaller than it. Draw from the set when it holds
something smaller than the watermark; otherwise issue the watermark and
advance it.
