# Settling Peaks and Valleys

## Description

Start from an array `arr` and replay the same daily step until the array
stops changing. Each day is built from the previous day in one pass:

- An interior element strictly smaller than both of its neighbors (in the
  previous day's array) goes up by one.
- An interior element strictly larger than both of its neighbors goes down
  by one.
- Everything else, including the first and last elements, stays as it was.

The process always reaches a day whose array equals the previous one.
Return that settled array.

### Example 1

```text
Input: arr = [4,1,7,1,4]
Output: [4,4,4,4,4]
Explanation: Day by day the array runs [4,1,7,1,4] -> [4,2,6,2,4] ->
[4,3,5,3,4] -> [4,4,4,4,4], and nothing moves after that.
```

### Example 2

```text
Input: arr = [9,3,9]
Output: [9,9,9]
Explanation: The lone 3 sits strictly below both neighbors, so it climbs
one step per day until it reaches the height of the plateau.
```

### Example 3

```text
Input: arr = [2,2,4,4,2]
Output: [2,2,4,4,2]
Explanation: No interior element is strictly below or strictly above both
of its neighbors, so the array is settled from the start.
```

### Constraints

- `3 <= arr.length <= 100`
- `1 <= arr[i] <= 100`

## Hints

### Hint 1

A direct simulation is enough — no clever insight is required.

### Hint 2

Build each new array from a saved copy of the old one; comparing an
element against already-updated neighbors would change the answer.
