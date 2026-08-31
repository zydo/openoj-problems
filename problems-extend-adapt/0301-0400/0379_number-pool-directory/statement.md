# Number Pool Directory

## Description

Manage the integer identifiers from `0` through `maxNumbers - 1`. An identifier
is either available or assigned. Clients may request the smallest available
identifier, ask whether a particular identifier is free, or return an assigned
identifier to the pool. Returning an already-available identifier is harmless.

Implement the `NumberPool` class:

- `NumberPool(int maxNumbers)` creates a pool in which every identifier is
  available.
- `int acquire()` assigns and returns the smallest available identifier, or
  `-1` when the pool is exhausted.
- `boolean isAvailable(int number)` reports whether `number` is free.
- `void returnNumber(int number)` makes an assigned identifier available again.

### Example 1

```text
Input:
["NumberPool", "acquire", "acquire", "isAvailable", "returnNumber", "acquire", "isAvailable", "acquire", "acquire", "acquire"]
[[4], [], [], [3], [0], [], [0], [], [], []]
Output: [null, 0, 1, true, null, 0, false, 2, 3, -1]
Explanation: Returning 0 makes it the smallest free identifier, so the next
acquisition reuses it before allocating 2 or 3.
```

### Constraints

- `1 <= maxNumbers <= 10⁴`
- `0 <= number < maxNumbers`
- At most `2 × 10⁴` calls are made after construction.
