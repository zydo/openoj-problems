# Latest Boarding Minute

## Description

A stop runs `n` shuttle buses, where `buses[i]` is the minute bus `i`
departs, and `m` riders are heading there on their own, where
`passengers[j]` is the minute rider `j` arrives. Neither array comes
sorted. All departure minutes are distinct from one another, and so are
all arrival minutes. Each bus can carry at most `capacity` riders.

Riders board in order of arrival: when a bus departs at minute `x`, the
waiting riders with the earliest arrival times take its seats. If at most
`capacity` riders are waiting, they all board; otherwise only the
`capacity` earliest do, and everyone else stays behind for a later bus.

You pick a minute to arrive and join the queue like anyone else — you
board a bus departing at minute `x` if you are there by then and a seat
is still left once every earlier arrival ahead of you is on. Return the
latest minute you can arrive and still end up on some bus. Arriving at
the same minute as another rider is not allowed.

### Example 1

```text
Input: buses = [3,7], passengers = [2,6,8], capacity = 2
Output: 7
Explanation: The minute-3 bus leaves with the rider who arrived at 2. The
minute-7 bus finds only the minute-6 rider waiting, so a seat is still
open: arriving at minute 7 itself puts you on that bus.
```

### Example 2

```text
Input: buses = [4,9], passengers = [1,3,5,8], capacity = 1
Output: 2
Explanation: Each single-seat bus takes its earliest waiting rider:
minute 1 rides the first bus, minute 3 rides the second. Arriving at
minute 2 puts you ahead of the minute-3 rider, and no later minute does.
```

### Example 3

```text
Input: buses = [10], passengers = [9,8,7], capacity = 2
Output: 6
Explanation: The bus carries the two earliest riders, minutes 7 and 8.
Minutes 7 and 8 are taken and at minute 9 you would be third in line, so
the latest workable minute is 6 — second in line, with a seat.
```

### Constraints

- `n == buses.length` and `m == passengers.length`.
- `1 <= n, m, capacity <= 10^5`
- `2 <= buses[i], passengers[i] <= 10^9`
- All values in `buses` are distinct, and all values in `passengers` are
  distinct.

## Hints

### Hint 1

Order drives everything here: sort the departure minutes and the arrival
minutes before reasoning about who boards what.

### Hint 2

Sweep the buses in departure order, advancing a pointer through the
sorted arrivals to fill each bus up to its capacity. Only the last bus
decides your answer, and a chosen minute that a rider already owns simply
slips one minute earlier.
