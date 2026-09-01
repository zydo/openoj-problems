# Odd Streak of Three

## Description

You are given an integer array `arr`. Decide whether the array contains
three odd values in adjacent positions — that is, whether some index `i`
has `arr[i]`, `arr[i + 1]`, and `arr[i + 2]` all odd. Return `true` when
such a run exists, and `false` otherwise.

### Example 1

```text
Input: arr = [8,12,5,9,21,6]
Output: true
Explanation: The values 5, 9, and 21 sit next to each other and are all odd.
```

### Example 2

```text
Input: arr = [5,1,8,7,3,10,9]
Output: false
Explanation: Every odd run is cut off by an even value before it reaches
three.
```

### Example 3

```text
Input: arr = [4,6,2,11,13,15]
Output: true
Explanation: The array ends with the odd run 11, 13, 15.
```

### Constraints

- `1 <= arr.length <= 1000`
- `1 <= arr[i] <= 1000`

## Hints

### Hint 1

Sweep left to right while counting how many odd values have appeared in a
row; an even value drops the count back to zero. The answer settles the
moment that count reaches three.
