# Endpoint Pile Duel

## Description

Two optimal players, Alice and Bob, face an even-length row `piles` of
positive stone counts. Alice moves first. On each turn, the active player
removes the complete pile at either end of the remaining row and adds those
stones to their score.

All piles are eventually removed. The sum of their values is odd, so the final
scores cannot tie. Return `true` if Alice finishes ahead and `false` if Bob
does, assuming both choose moves that maximize their own result.

### Example 1

```text
Input: piles = [9,1,2,7]
Output: true
```

### Example 2

```text
Input: piles = [4,8,1,6]
Output: true
```

### Example 3

```text
Input: piles = [6,2,9,4]
Output: true
```

### Constraints

- `2 <= piles.length <= 500`
- `piles.length` is even.
- `1 <= piles[i] <= 500`
- The sum of all values in `piles` is odd.
