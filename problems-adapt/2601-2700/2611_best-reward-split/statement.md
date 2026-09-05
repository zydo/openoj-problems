# Best Reward Split

## Description

Two mice share `n` pieces of cheese, and every piece ends up eaten by
exactly one of them. Piece `i` (0-indexed) is worth

- `reward1[i]` points if the first mouse eats it;
- `reward2[i]` points if the second mouse eats it.

You are given two positive integer arrays `reward1` and `reward2`, both of
length `n`, together with a non-negative integer `k`.

Return the largest total number of points the two mice can collect between
them when the first mouse ends up eating exactly `k` pieces.

### Example 1

```text
Input: reward1 = [2,6,4], reward2 = [5,1,3], k = 1
Output: 14
Explanation: Let the second mouse take everything, worth 5 + 1 + 3 = 9
points. Handing piece 1 to the first mouse instead trades 1 point for 6,
a net gain of 5, and no other single swap beats that. The total reaches
9 + 5 = 14, and exactly one piece went to the first mouse.
```

### Example 2

```text
Input: reward1 = [9,1,5,2], reward2 = [3,7,5,8], k = 2
Output: 29
Explanation: Starting from 3 + 7 + 5 + 8 = 23 points, the two most
profitable swaps to the first mouse are piece 0 (worth 6 more) and piece 2
(worth nothing either way). The score becomes 23 + 6 + 0 = 29.
```

### Example 3

```text
Input: reward1 = [4,4], reward2 = [2,6], k = 2
Output: 8
Explanation: Both pieces must go to the first mouse, so the total is
4 + 4 = 8 even though the second swap on piece 1 loses 2 points.
```

### Constraints

- `1 <= n == reward1.length == reward2.length <= 10⁵`
- `1 <= reward1[i], reward2[i] <= 1000`
- `0 <= k <= n`

## Hints

### Hint 1

A greedy angle works: which single piece should change hands next, given
the ones already decided, never depends on the rest.

### Hint 2

Pretend the second mouse eats everything first. Moving piece `i` to the
first mouse then adjusts the total by exactly `reward1[i] - reward2[i]`, so
the answer just adds the `k` largest values of that difference array.
