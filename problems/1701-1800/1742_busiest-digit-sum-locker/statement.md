# Busiest Digit-Sum Locker

## Description

A wall of numbered lockers files numbered tokens: locker `k` is reserved
for tokens whose digits add up to exactly `k`. Token `321` goes to locker
3 + 2 + 1 = 6, and token `10` goes to locker 1 + 0 = 1.

Every integer from `low` through `high` inclusive gets filed this way,
one after another. Return how many tokens end up in the locker that ends
up with the most.

### Example 1

```text
Input: low = 1, high = 20
Output: 3
Explanation: Token 2 lands in locker 2, token 11 in locker 1 + 1 = 2,
and token 20 in locker 2 + 0 = 2. No other locker collects three
tokens, so the busiest one holds 3.
```

### Example 2

```text
Input: low = 8, high = 16
Output: 1
Explanation: The digit sums of 8 through 16 are 8, 9, 1, 2, 3, 4, 5,
6, 7 — nine distinct lockers, one token each.
```

### Example 3

```text
Input: low = 1, high = 100000
Output: 6000
Explanation: Over the entire range, lockers 22 and 23 each collect
6000 tokens — the largest haul any locker achieves.
```

### Constraints

- `1 <= low <= high <= 10^5`

## Hints

### Hint 1

The range contains at most 10^5 tokens, so filing them one at a time is
well within reach.

### Hint 2

Here a token's digit sum never exceeds 45 (99999 is the worst case), so a
small fixed array of counters indexed by digit sum tracks every locker
the range can touch — the answer is the largest counter.
