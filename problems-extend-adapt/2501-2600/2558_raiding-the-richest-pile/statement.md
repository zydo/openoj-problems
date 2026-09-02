# Raiding the Richest Pile

## Description

An array `gifts` counts the gifts sitting in each of several piles. Once
per second, exactly one thing happens: you pick whichever pile currently
holds the most gifts — ties may be broken any way you like — and raid
it, leaving behind only the floor of the square root of its count and
taking the rest for yourself.

After `k` seconds have passed, return how many gifts remain in the
piles altogether.

### Example 1

```text
Input: gifts = [16,9,4], k = 3
Output: 9
Explanation: The richest pile is raided each second: 16 drops to 4, then
9 drops to 3, and finally the pile of 4 drops to 2. The piles hold
[2, 3, 4] at the end, totalling 9 gifts.
```

### Example 2

```text
Input: gifts = [2,3], k = 5
Output: 2
Explanation: The pile of 3 shrinks to 1 and the pile of 2 to 1; the
three raids after that each land on a pile of 1, whose square root is
still 1, so nothing further changes.
```

### Example 3

```text
Input: gifts = [1000000], k = 2
Output: 31
Explanation: The lone pile falls from 1000000 to 1000 in the first
second, then from 1000 to 31.
```

### Constraints

- `1 <= gifts.length <= 10³`
- `1 <= gifts[i] <= 10⁹`
- `1 <= k <= 10³`

## Hints

### Hint 1

Every second you only ever need the current largest pile, so think about
keeping the maximum within quick reach.

### Hint 2

A max-heap (priority queue) hands you the richest pile in logarithmic
time and lets you put its shrunk form back.

### Hint 3

The shrunk size is just the integer square root of the pile's count.

### Hint 4

Replay exactly `k` rounds and then total the piles — the sum can exceed
32-bit range, so accumulate in a wide integer.
