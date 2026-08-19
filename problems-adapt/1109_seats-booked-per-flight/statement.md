# Seats Booked per Flight

## Description

An airline runs `n` flights in a series, numbered `1` through `n`. You are
given `bookings`, where each element `bookings[i] = [first, last, seats]`
reserves `seats` seats on every flight from `first` through `last`,
inclusive.

Return an array of length `n` whose `i`-th entry is the total number of
seats reserved on flight `i + 1`.

### Example 1

```text
Input: bookings = [[1,3,5],[2,4,10],[3,5,7]], n = 5
Output: [5,15,22,17,7]
Explanation:
Flight numbers:       1   2   3   4   5
Booking [1,3,5]:      5   5   5
Booking [2,4,10]:        10  10  10
Booking [3,5,7]:             7   7   7
Totals:               5  15  22  17   7
```

### Example 2

```text
Input: bookings = [[2,2,4],[1,4,3]], n = 4
Output: [3,7,3,3]
Explanation: One booking covers a single flight; the other covers them all.
```

### Example 3

```text
Input: bookings = [[3,3,8]], n = 3
Output: [0,0,8]
Explanation: Flights outside every range keep zero reservations.
```

### Constraints

- `1 <= n <= 2 * 10⁴`
- `1 <= bookings.length <= 2 * 10⁴`
- `bookings[i].length == 3`
- `1 <= first <= last <= n`
- `1 <= seats <= 10⁴`

## Hints

### Hint 1

Touching every flight of a range is the expensive habit to break. What is
the smallest pair of writes that encodes "add `seats` here through `last`"?

### Hint 2

Write `+seats` at the range's front edge and `-seats` one past its back
edge; no booking then costs more than two writes.

### Hint 3

One left-to-right running total over those stamps produces every flight's
occupancy, because each pair cancels exactly beyond its range.
