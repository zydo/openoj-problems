# Smallest Worst-Case Refuel Wait

## Description

You are given an integer array `demand`, where `demand[i]` is the amount of
fuel the `i`th car needs, and an integer array `fuel` of length 2 giving the
starting fuel level of each of two dispensers.

Cars line up to refuel in index order: car 0 may begin the moment dispenser
assignment starts, and car `i` (for `i > 0`) becomes eligible the instant
car `i - 1` begins refueling — not when it finishes.

Refueling follows these rules:

- Each dispenser handles one car at a time.
- The moment a car becomes eligible, you commit it to some dispenser that
  still holds at least `demand[i]` fuel. If both qualify, either may be
  chosen, regardless of how soon each becomes free.
- The car then waits for its chosen dispenser to become free and starts
  refueling the instant it does — it cannot switch dispensers or delay on
  purpose once its dispenser is free.
- Starting a fill drops that dispenser's remaining fuel by `demand[i]` and
  occupies it for `demand[i]` seconds, uninterrupted.
- If neither dispenser holds enough fuel for a car the moment it becomes
  eligible, no more cars are served from that point on.

A car's waiting time is the gap between becoming eligible and actually
starting to refuel.

Among every assignment that serves the largest possible number of cars,
return the smallest achievable value for the largest waiting time any
served car experiences. If not even the first car can be served, return
`-1`.

### Example 1

```text
Input: demand = [5,7,3,5,4], fuel = [14,11]
Output: 5
Explanation: One assignment serving all five cars:

Car | Becomes eligible at | Starts refueling at | Dispenser used | Remaining fuel before start (dispenser 0, dispenser 1) | Waiting time
0   | 0                   | 0                   | 0               | (14, 11)                                               | 0
1   | 0                   | 0                   | 1               | (9, 11)                                                | 0
2   | 0                   | 5                   | 0               | (9, 4)                                                 | 5
3   | 5                   | 8                   | 0               | (6, 4)                                                 | 3
4   | 8                   | 8                   | 1               | (1, 4)                                                 | 0

Every car is served here, with a largest waiting time of 5. This is
unavoidable: serving all five forces dispenser 0 to handle the demands 5,
3, and 5 while dispenser 1 handles 7 and 4, so car 2 has no choice but to
wait until time 5 for dispenser 0 to free up — no full-service plan does
better than 5.
```

### Example 2

```text
Input: demand = [8,12], fuel = [10,15]
Output: 0
Explanation: Car 0 becomes eligible at time 0 and starts immediately on
dispenser 0; car 1 becomes eligible the same instant (when car 0 starts)
and starts immediately on dispenser 1. Neither car waits at all.
```

### Example 3

```text
Input: demand = [9,4], fuel = [7,7]
Output: -1
Explanation: The moment car 0 becomes eligible, neither dispenser holds
enough fuel for it, so no car is ever served.
```

### Constraints

- `1 <= demand.length <= 50`
- `1 <= demand[i] <= 20`
- `fuel.length == 2`
- `1 <= fuel[i] <= 50`

## Hints

### Hint 1

Process cars in order with dynamic programming. For each dispenser, track
its remaining fuel and how much longer it stays busy, measured from the
moment the current car becomes eligible.

### Hint 2

Assigning the current car to a dispenser whose busy time is `wait` gives it
a waiting time of exactly `wait`. That dispenser's fuel drops accordingly,
and its new busy time becomes the current car's demand.

### Hint 3

Since the next car becomes eligible exactly when this one starts, subtract
`wait` from the other dispenser's remaining busy time as well, floored at 0.

### Hint 4

Across every state, first maximize how many cars get served; only among
assignments reaching that maximum should the largest waiting time be
minimized.
