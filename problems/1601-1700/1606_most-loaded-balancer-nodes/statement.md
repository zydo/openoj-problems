# Most-Loaded Balancer Nodes

## Description

A load balancer spreads an incoming stream of requests over `k` machines
numbered `0` to `k - 1`. Each machine executes one request at a time, but
works arbitrarily fast otherwise.

Requests arrive one by one, in order, and a fixed rule picks each one's
machine. For the `i`-th request, counting from `0`:

- If all `k` machines are busy at that instant, the request is
  **dropped** — no machine ever runs it.
- Otherwise the router starts at machine `i % k`. If that machine is
  free, the request lands there.
- If machine `i % k` is busy, the router moves on to `(i % k) + 1`,
  then `(i % k) + 2`, and so on, wrapping from machine `k - 1` back to
  machine `0`, until a free machine is found — one is guaranteed to
  exist unless every machine is busy.

The input is `arrival`, a strictly increasing array of positive
integers with `arrival[i]` the moment the `i`-th request appears, and
`load`, where `load[i]` is how long the request occupies whichever
machine takes it: a machine that begins request `i` at `arrival[i]`
stays busy through `arrival[i] + load[i]` and is free again from that
instant onward.

Determine which machine or machines run the most requests. Return their
ids as a list, in any order; when several machines tie for the top
count, return all of them.

### Example 1

![diagram](figures/1606-1.svg)

```text
Input: k = 3, arrival = [1,2,3,4,5], load = [5,2,3,3,3]
Output: [1]
Explanation:
Every machine starts free, so requests 0, 1, and 2 land on machines 0,
1, and 2 in turn.
Request 3 shows up at time 4. Machine 0 is still occupied until time 6,
so the scan moves forward and lands on machine 1.
Request 4 shows up at time 5, when all three machines are occupied
(machine 0 until 6, machine 1 until 7, machine 2 until 6), so it is
dropped.
Machines 0 and 2 ran one request apiece; machine 1 ran two and tops the
count.
```

### Example 2

```text
Input: k = 2, arrival = [1,2,3,4], load = [3,3,3,3]
Output: [0]
Explanation:
Requests 0 and 1 take machines 0 and 1. Request 2 arrives at time 3
with both machines busy — machine 0 until 4, machine 1 until 5 — so it
is dropped. Request 3 arrives at time 4: machine 0 has just finished,
so the wrap-around scan from machine 1 comes back to machine 0, which
runs it. Machine 0 handled two requests against machine 1's one.
```

### Example 3

```text
Input: k = 4, arrival = [1,2,3,4], load = [10,10,10,10]
Output: [0,1,2,3]
Explanation: No request finishes before the next one arrives, and each
of the four lands on its own machine, so every machine runs exactly one
request and all four share the top spot.
```

### Constraints

- `1 <= k <= 10⁵`
- `1 <= arrival.length, load.length <= 10⁵`
- `arrival.length == load.length`
- `1 <= arrival[i], load[i] <= 10⁹`
- `arrival` is strictly increasing.

## Hints

### Hint 1

Store the ids of the machines that are currently free in a structure
able to answer "smallest free id at least `x`" quickly, so the
wrap-around scan never walks machines one at a time.

### Hint 2

Hold the busy machines in a min-heap keyed by finish time; before
routing each request, pop every entry whose finish time has arrived and
release those machines back to the free set.
