# Hitting the Point Total

## Description

An exam is assembled from `n` kinds of questions, described by a
0-indexed 2D array `types`: the entry `types[i] = [counti, marksi]`
says kind `i` supplies `counti` questions, each worth `marksi` points.
Given an integer `target`, count how many distinct ways there are to
walk away with exactly `target` points. The count can be enormous, so
report it modulo 10⁹ + 7.

Questions of the same kind are interchangeable, so a way is fully
determined by how many questions of each kind it takes — if a kind has
3 questions, answering the first two of them and answering the last two
count as one way, not two.

### Example 1

```text
Input: target = 4, types = [[2,1],[2,2]]
Output: 2
Explanation: The two ways to reach 4 points:
- Take one 2-point question and both 1-point questions: 2 + 1 + 1 = 4
- Take both 2-point questions: 2 + 2 = 4
```

### Example 2

```text
Input: target = 6, types = [[3,2],[4,1]]
Output: 3
Explanation: The three ways to reach 6 points:
- Take all three 2-point questions: 2 + 2 + 2 = 6
- Take two 2-point questions and two 1-point questions: 2 + 2 + 1 + 1 = 6
- Take one 2-point question and all four 1-point questions: 2 + 1 + 1 + 1 + 1 = 6
```

### Example 3

```text
Input: target = 10, types = [[1,5],[1,3],[1,2]]
Output: 1
Explanation: Each kind holds a single question, and 5 + 3 + 2 = 10, so
answering every question is the only way.
```

### Constraints

- `1 <= target <= 1000`
- `n == types.length`
- `1 <= n <= 50`
- `types[i].length == 2`
- `1 <= counti, marksi <= 50`

## Hints

### Hint 1

Treat this as a counting knapsack: the point total is the capacity and
each question kind is a group of at most `counti` identical items.

### Hint 2

Let `dp[i][p]` be the number of ways to score exactly `p` points using
only the first `i` kinds.

### Hint 3

Moving to kind `i`, add every legal take: `dp[i][p]` sums
`dp[i - 1][p - taken * marksi]` over `0 <= taken <= counti` whenever
the subtrahend stays nonnegative.
