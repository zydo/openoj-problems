# Steps to a Higher Reading

## Description

An integer sequence `readings` records measurements in chronological order.
For each position, determine how many steps forward the first strictly higher
reading occurs. Use `0` when no later reading is higher.

Return all waiting distances in an array of the same length.

### Example 1

```text
Input: readings = [64,62,63,61,66,65]
Output: [4,1,2,1,0,0]
Explanation: The reading 64 first sees a larger value four steps later. The
reading 66 has no larger value to its right.
```

### Example 2

```text
Input: readings = [55,55,56,54]
Output: [2,1,0,0]
Explanation: Equal readings do not qualify; the first 55 waits two steps for
56, while the second waits one.
```

### Example 3

```text
Input: readings = [88,77,66]
Output: [0,0,0]
```

### Constraints

- `1 <= readings.length <= 10^5`
- `30 <= readings[i] <= 100`

## Hints

### Hint 1

Keep unresolved positions whose next higher reading has not appeared yet.

### Hint 2

A new reading resolves positions from the end of that collection while their
values are strictly smaller.

### Hint 3

The unresolved values form a non-increasing stack, and each index enters and
leaves it at most once.
