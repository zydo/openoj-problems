# Suffix Maximum Overwrite

## Description

Rewrite the array `arr` slot by slot: every position becomes the
largest value found strictly to its right, and the final slot — with
nothing to its right — becomes `-1`.

Return the array once the rewrite is done.

### Example 1

```text
Input: arr = [9,1,7,3,5]
Output: [7,7,5,5,-1]
Explanation: The largest value after index 0 is 7, and after index 1
it is 7 again; after indexes 2 and 3 it is 5; the last slot gets -1.
```

### Example 2

```text
Input: arr = [2,8]
Output: [8,-1]
```

### Example 3

```text
Input: arr = [6,6,6]
Output: [6,6,-1]
Explanation: Ties change nothing — any right-hand element qualifies.
```

### Constraints

- `1 <= arr.length <= 10^4`
- `1 <= arr[i] <= 10^5`

## Hints

### Hint 1

Work from the last index toward the first.

### Hint 2

Carry one running maximum: write it into the current slot, then fold
the slot's old value into it before stepping left.
