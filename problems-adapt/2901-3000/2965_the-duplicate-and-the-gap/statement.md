# The Duplicate And The Gap

## Description

An `n × n` matrix `grid` is filled with the integers `1` through `n²`.
Every value in that range shows up exactly once — except one value that
appears twice and one value that never appears at all.

Return an array of two numbers: the duplicated value first, the missing
value second.

### Example 1

```text
Input: grid = [[1,2],[3,3]]
Output: [3,4]
Explanation: The value 3 is written twice, and no cell holds a 4, so
the answer is [3,4].
```

### Example 2

```text
Input: grid = [[6,7,2],[5,1,4],[3,8,8]]
Output: [8,9]
Explanation: Scanning 1..9 against the nine cells, 8 occurs twice and
9 occurs nowhere, so the answer is [8,9].
```

### Example 3

```text
Input: grid = [[4,2],[1,1]]
Output: [1,3]
Explanation: The value 1 appears twice while 3 is absent, giving
[1,3].
```

### Constraints

- `2 <= n == grid.length == grid[i].length <= 50`
- `1 <= grid[i][j] <= n * n`
- Exactly one value in `[1, n²]` is absent from `grid`.
- Exactly one value in `[1, n²]` occurs twice; every other value in the
  range occurs exactly once.
