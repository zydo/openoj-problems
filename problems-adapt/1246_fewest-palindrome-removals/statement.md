# Fewest Palindrome Removals

## Description

You are given an integer array `arr`.

Each move takes one contiguous piece of the current array that reads the
same forwards and backwards, and deletes it. Whatever sat to the left and
right of the deleted piece closes up and becomes adjacent.

Return the fewest moves needed to empty the array. A single element counts
as a palindrome of length one.

### Example 1

```text
Input: arr = [7,4,7]
Output: 1
Explanation: The whole array reads the same in both directions, so one move
takes it all.
```

### Example 2

```text
Input: arr = [4,8,4,9]
Output: 2
Explanation: First remove [4,8,4], which is a palindrome; the remaining [9]
leaves itself as the second move.
```

### Example 3

```text
Input: arr = [6,1,2,1,7]
Output: 3
Explanation: The middle [1,2,1] goes in one move, and the 6 and the 7 match
nothing, so each needs its own move — three in all.
```

### Constraints

- `1 <= arr.length <= 100`
- `1 <= arr[i] <= 20`

## Hints

### Hint 1

Deleting a piece splices its neighbours together, so the cost of clearing a
stretch of the array depends only on what that stretch contains — not on
the rest of the array.

### Hint 2

Let `dp[i][j]` be the fewest moves to clear `arr[i..j]`. Lengths 1 and 2
are immediate; fill longer intervals by increasing length.

### Hint 3

Three transitions cover everything: spend one move on the first element
(`1 + dp[i+1][j]`), split at any boundary (`dp[i][k] + dp[k+1][j]`), and,
when the two ends are equal, clear the inside first and delete the pair
with the last move (`dp[i+1][j-1]`).

### Hint 4

The equal-ends transition is safe to assume: any schedule that removes
`arr[i]` can be rearranged so the same move also removes `arr[j]`, because
peeling a matched pair from both sides of a palindrome keeps it a
palindrome.
