# Raising The Machine Floors

## Description

You are given a 2D integer array `units` with `m` rows of exactly `n`
capacities each; `units[i][j]` is the capacity of one part of machine `i`.

A machine's floor is the smallest capacity among the parts it currently
holds.

Repeatedly — as many times as you like, including not at all — you may do
this:

- Pick a machine `i` that has not served as a donor before.
- Detach exactly one of its parts and attach that part to any other machine.
- Machine `i` is now marked as a used donor and can never be picked again.

Return the greatest possible total of all machine floors after any sequence
of such moves.

Note:

- A machine may receive parts from many donors, even if it is itself a used
  donor.
- A machine left with no parts has a floor of `0`.

### Example 1

```text
Input: units = [[2,6],[3,8]]
Output: 10
Explanation: Let machine 1 act as donor and hand part 3 to machine 0.
Machine 0 is left holding [2, 6, 3] with floor 2, and machine 1 holds [8]
with floor 8, for a total of 2 + 8 = 10.
```

### Example 2

```text
Input: units = [[4,7,9],[2,5,8]]
Output: 9
Explanation: Let machine 0 act as donor and hand part 4 to machine 1.
Machine 0 keeps [7, 9] with floor 7, while machine 1 holds [2, 5, 8, 4]
with floor 2, and the total is 7 + 2 = 9.
```

### Example 3

```text
Input: units = [[6,6,6],[9,9,9]]
Output: 15
Explanation: Every machine's second-smallest capacity is no larger than
what a transfer would leave behind, so the best total is the untouched
6 + 9 = 15.
```

### Example 4

```text
Input: units = [[3],[5],[7]]
Output: 15
Explanation: Each machine holds a single part, so any donor would drop to a
floor of 0. The best total is 3 + 5 + 7 = 15.
```

### Constraints

- `1 <= m == units.length <= 10⁵`
- `1 <= n == units[i].length <= 10⁵`
- `m * n <= 2 * 10⁵`
- `1 <= units[i][j] <= 10⁵`

## Hints

### Hint 1

For any machine, just the two smallest capacities it holds can influence the
outcome.

### Hint 2

Handing away its smallest part lifts a donor's floor to its second-smallest
capacity, so donate from every machine and drop all those parts onto a
single receiving machine.

### Hint 3

The receiver inevitably ends up holding the globally smallest capacity, so
receive on the machine whose own second-smallest capacity is the lowest —
that sacrifices as little as possible.
