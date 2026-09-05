# Ticket Queue Countdown

## Description

A booth sells exactly one ticket per second to whoever stands at the front of
the line. A customer who still wants more tickets after being served
instantly re-joins at the back of the line; a customer who has collected
every ticket they wanted leaves the line for good.

You are given a 0-indexed array `tickets` of length `n`, where `tickets[i]`
is the total number of tickets the customer starting at position `i` wants.
Determine how many seconds pass until the customer who starts at position
`k` walks away with all of their tickets.

### Example 1

```text
Input: tickets = [4,1,2], k = 2
Output: 5
Explanation:
The first customer buys and re-joins (the line becomes [1,2,3]), the second
buys their only ticket and leaves ([2,3]), the target buys and re-joins
([3,1]), the first customer buys again ([1,2]), and finally the target
collects their second ticket — 5 seconds in all.
```

### Example 2

```text
Input: tickets = [2,6,3,4], k = 1
Output: 15
Explanation:
The customer at position 1 wants 6 tickets, so all four customers get a
turn in each of six rounds except the two behind position 1, who miss the
final round: 2 + 6 + 3 + 4 = 15 seconds.
```

### Example 3

```text
Input: tickets = [7,2,9,1], k = 3
Output: 4
Explanation:
The customer at position 3 wants a single ticket and stands last, so each
of the three customers ahead buys once and then the target is served:
1 + 1 + 1 + 1 = 4 seconds.
```

### Constraints

- `1 <= n == tickets.length <= 100`
- `1 <= tickets[i] <= 100`
- `0 <= k < n`

## Hints

### Hint 1

Treat the process as rounds in which the target customer buys one ticket
each. Within a round, every customer at or before position `k` reaches the
window before the target does.

### Hint 2

The process ends the instant the target buys their final ticket, so in that
last round nobody behind position `k` is served — cap each such customer's
contribution one below the target's count.
