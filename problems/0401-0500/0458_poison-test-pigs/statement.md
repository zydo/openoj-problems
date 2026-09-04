# Poison-Testing Pigs

## Description

One of `buckets` containers holds poison and the rest are safe; exactly one
bucket is poisoned. Pigs drink from chosen buckets and die within
`minutesToDie` minutes if they consumed the poison, but testing must finish
within `minutesToTest` minutes. Return the fewest pigs needed to identify the
poisoned bucket.

You may run several feeding rounds, one per `minutesToDie` block:

1. Choose live pigs and give each a subset of the buckets to drink from
   simultaneously.
2. Wait `minutesToDie`; every pig that drank the poison dies, the rest
   survive.
3. Repeat until the time budget runs out. A pig that survives every round
   is itself an outcome.

### Example 1

```text
Input: buckets = 8, minutesToDie = 15, minutesToTest = 15
Output: 3
Explanation: One round allows two outcomes per pig (dies or survives), so
three pigs distinguish 2³ = 8 buckets.
```

### Example 2

```text
Input: buckets = 1000, minutesToDie = 15, minutesToTest = 60
Output: 5
Explanation: Four rounds yield five states per pig, and 5⁴ = 625 buckets fall
short while 5⁵ = 3125 covers them all.
```

### Example 3

```text
Input: buckets = 5, minutesToDie = 10, minutesToTest = 20
Output: 2
```

### Constraints

- `1 <= buckets <= 1000`
- `1 <= minutesToDie <= minutesToTest <= 100`
