# Best Score From a K-Chip Draw

## Description

A bag holds chips, and every chip is stamped with one of three numbers:
1, 0, or -1.

You know exactly what the bag starts with: `numOnes` chips stamped 1,
`numZeros` chips stamped 0, and `numNegOnes` chips stamped -1.

You reach in and take out exactly `k` chips, choosing which ones come
out. Return the largest total the stamped numbers can add up to.

### Example 1

```text
Input: numOnes = 4, numZeros = 1, numNegOnes = 2, k = 3
Output: 3
Explanation: The bag holds {1, 1, 1, 1, 0, -1, -1}. Taking three chips
stamped 1 totals 3, and no three chips in the bag can do better.
```

### Example 2

```text
Input: numOnes = 2, numZeros = 3, numNegOnes = 4, k = 5
Output: 2
Explanation: The bag holds {1, 1, 0, 0, 0, -1, -1, -1, -1}. Both 1s
come out first, and the three remaining draws can all be 0s, so the
total stays at 2.
```

### Example 3

```text
Input: numOnes = 1, numZeros = 1, numNegOnes = 3, k = 4
Output: -1
Explanation: The bag holds {1, 0, -1, -1, -1}. Only the 1 and the 0 are
harmless to take, so the last two draws are forced onto -1s, leaving
1 + 0 - 1 - 1 = -1.
```

### Constraints

- `0 <= numOnes, numZeros, numNegOnes <= 50`
- `0 <= k <= numOnes + numZeros + numNegOnes`

## Hints

### Hint 1

While any chip stamped 1 is still in the bag, taking one of those is
never worse than anything else you could draw.

### Hint 2

Once the 1s are gone, chips stamped 0 keep the draw going without
moving the total, so spend them before touching a -1.

### Hint 3

If `k` reaches past both the 1s and the 0s, the final
`k - numOnes - numZeros` draws must each give up one point.
