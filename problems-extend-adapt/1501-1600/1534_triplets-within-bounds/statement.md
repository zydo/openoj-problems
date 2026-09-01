# Triplets Within Bounds

## Description

You are given an integer array `arr` and three non-negative integers
`a`, `b`, and `c`.

Call a triplet of positions `(i, j, k)` well-behaved when `i < j < k`
and each of the three value gaps stays inside its allotted cap:

- the first two picked values differ by at most `a`;
- the last two picked values differ by at most `b`;
- the outer two picked values differ by at most `c`.

Return how many well-behaved position triplets `arr` contains.

### Example 1

```text
Input: arr = [4,9,2,7,5], a = 3, b = 4, c = 6
Output: 3
Explanation: The well-behaved triplets are (4,2,5), (4,7,5), and
(9,7,5); every other index combination breaks at least one cap.
```

### Example 2

```text
Input: arr = [8,1,6,3], a = 0, b = 0, c = 100
Output: 0
Explanation: With `a = 0` and `b = 0` all three picked values would
have to be equal, and this array never repeats a value.
```

### Constraints

- `3 <= arr.length <= 100`
- `0 <= arr[i] <= 1000`
- `0 <= a, b, c <= 1000`

## Hints

### Hint 1

The array length tops out at one hundred, so exhaustively trying every
combination of three positions is well within budget.

### Hint 2

Fix the first two positions before the third. If the first cap already
fails you can move on immediately; otherwise sweep the remaining
positions and test the two remaining caps there.
