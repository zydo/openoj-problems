# The Number That Counts Itself

## Description

Call a value self-counting when the number of times it appears in `arr` is
exactly the value itself — a `3` that shows up three times, a `7` that shows
up seven times.

Scan `arr` for self-counting values and return the largest one. When no
value matches its own tally, return `-1`.

### Example 1

```text
Input: arr = [7,7,7,7,7,7,7]
Output: 7
Explanation: The value 7 occurs exactly seven times, so it counts itself.
```

### Example 2

```text
Input: arr = [5,5,5,5,2,2]
Output: 2
Explanation: Five appears four times — one short — while two appears
exactly twice and is the only self-counting value.
```

### Example 3

```text
Input: arr = [1,1,2]
Output: -1
Explanation: One appears twice and two appears once, so nothing matches
its own tally.
```

### Constraints

- `1 <= arr.length <= 500`
- `1 <= arr[i] <= 500`

## Hints

### Hint 1

Tally how often each distinct value occurs before comparing anything.

### Hint 2

A value qualifies when its tally equals the value; among the qualifiers,
hand back the biggest.
