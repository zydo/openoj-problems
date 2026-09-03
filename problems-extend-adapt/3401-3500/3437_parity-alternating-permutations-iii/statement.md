# Parity-Alternating Permutations III

## Description

Given an integer `n`, consider permutations of the first `n` positive
integers in which neighbors always disagree in parity — no two adjacent
entries are both odd or both even.

List every such permutation, sorted lexicographically.

### Example 1

```text
Input: n = 1
Output: [[1]]
Explanation: A single element is trivially alternating; the list holds
just [1].
```

### Example 2

```text
Input: n = 5
Output: [[1,2,3,4,5],[1,2,5,4,3],[1,4,3,2,5],[1,4,5,2,3],[3,2,1,4,5],[3,2,5,4,1],[3,4,1,2,5],[3,4,5,2,1],[5,2,1,4,3],[5,2,3,4,1],[5,4,1,2,3],[5,4,3,2,1]]
Explanation: The odd values 1, 3, 5 must occupy the odd positions — with
five values the sequence starts and ends on an odd number, so the even
values 2 and 4 fill the two slots in between. Twelve arrangements exist,
shown here in lexicographic order.
```

### Example 3

```text
Input: n = 6
Output: [[1,2,3,4,5,6],[1,2,3,6,5,4],[1,2,5,4,3,6],[1,2,5,6,3,4],[1,4,3,2,5,6],[1,4,3,6,5,2]
[1,4,5,2,3,6],[1,4,5,6,3,2],[1,6,3,2,5,4],[1,6,3,4,5,2],[1,6,5,2,3,4],[1,6,5,4,3,2]
[2,1,4,3,6,5],[2,1,4,5,6,3],[2,1,6,3,4,5],[2,1,6,5,4,3],[2,3,4,1,6,5],[2,3,4,5,6,1]
[2,3,6,1,4,5],[2,3,6,5,4,1],[2,5,4,1,6,3],[2,5,4,3,6,1],[2,5,6,1,4,3],[2,5,6,3,4,1]
[3,2,1,4,5,6],[3,2,1,6,5,4],[3,2,5,4,1,6],[3,2,5,6,1,4],[3,4,1,2,5,6],[3,4,1,6,5,2]
[3,4,5,2,1,6],[3,4,5,6,1,2],[3,6,1,2,5,4],[3,6,1,4,5,2],[3,6,5,2,1,4],[3,6,5,4,1,2]
[4,1,2,3,6,5],[4,1,2,5,6,3],[4,1,6,3,2,5],[4,1,6,5,2,3],[4,3,2,1,6,5],[4,3,2,5,6,1]
[4,3,6,1,2,5],[4,3,6,5,2,1],[4,5,2,1,6,3],[4,5,2,3,6,1],[4,5,6,1,2,3],[4,5,6,3,2,1]
[5,2,1,4,3,6],[5,2,1,6,3,4],[5,2,3,4,1,6],[5,2,3,6,1,4],[5,4,1,2,3,6],[5,4,1,6,3,2]
[5,4,3,2,1,6],[5,4,3,6,1,2],[5,6,1,2,3,4],[5,6,1,4,3,2],[5,6,3,2,1,4],[5,6,3,4,1,2]
[6,1,2,3,4,5],[6,1,2,5,4,3],[6,1,4,3,2,5],[6,1,4,5,2,3],[6,3,2,1,4,5],[6,3,2,5,4,1]
[6,3,4,1,2,5],[6,3,4,5,2,1],[6,5,2,1,4,3],[6,5,2,3,4,1],[6,5,4,1,2,3],[6,5,4,3,2,1]]
Explanation: With six values, three odd and three even, either parity may
open the sequence: 3! orderings of the odds times 3! orderings of the
evens, times two possible starting parities, gives 72 arrangements.
```

### Constraints

- `1 <= n <= 10`

## Hints

### Hint 1

Build each permutation one position at a time, trying candidate values in
increasing order and rejecting any candidate whose parity matches the
value just placed.

### Hint 2

Trying candidates in increasing order makes the finished lists emerge
already sorted, so no final ordering pass is needed.
