# Streaming Price Span

## Description

Build a tracker that receives one price at a time. For every new price,
return the length of the longest suffix of observations ending at that price
whose values are all at most the new value.

Implement the `PriceSpanTracker` class:

- `PriceSpanTracker()` creates an empty tracker.
- `int record(int price)` adds `price` and returns its suffix length.

### Example 1

```text
Input:
["PriceSpanTracker", "record"]
[[], [42]]
Output: [null, 1]
Explanation:
The first observation always forms a suffix of length 1.
```

### Example 2

```text
Input:
["PriceSpanTracker", "record", "record", "record", "record", "record", "record"]
[[], [31], [27], [29], [29], [24], [35]]
Output: [null, 1, 1, 2, 3, 1, 6]
Explanation:
The second 29 covers the suffix [27, 29, 29]. The final 35 is at least every
earlier value, so its suffix includes all six observations.
```

### Constraints

- Every recorded price is between `1` and `10^5`, inclusive.
- The tracker receives no more than `10^4` calls to `record`.

## Hints

### Hint 1

Walking backward for every call can inspect the same small values repeatedly.
Store enough information to skip a whole suffix that was already measured.

### Hint 2

Maintain decreasing `(price, length)` pairs. A new price can absorb every pair
whose price is no greater, adding each stored length to its own.

### Hint 3

Each observation enters the stack once and leaves it at most once, which makes
the total work linear in the number of calls.
