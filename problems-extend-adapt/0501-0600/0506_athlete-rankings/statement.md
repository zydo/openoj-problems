# Athlete Rankings

## Description

An integer array `score` holds the final scores from a competition, where
`score[i]` belongs to the athlete in lane `i`. No two athletes tie — every
value in `score` is distinct.

Sort the field by score, highest first, to get everyone's placement. The
top three placements carry medal names instead of numbers:

- Whoever placed first earns `"Gold Medal"`.
- Whoever placed second earns `"Silver Medal"`.
- Whoever placed third earns `"Bronze Medal"`.
- Everyone from fourth place onward is labeled with their placement number
  as a string (the athlete who came in `x`th gets `"x"`).

Build and return an array `answer` the same length as `score`, where
`answer[i]` is lane `i`'s athlete's label.

### Example 1

```text
Input: score = [9,2,7,15,4]
Output: ["Silver Medal","5","Bronze Medal","Gold Medal","4"]
Explanation: Sorted descending the scores are [15,9,7,4,2], so lane 3
(score 15) takes gold, lane 0 (score 9) takes silver, lane 2 (score 7)
takes bronze, lane 4 (score 4) is fourth, and lane 1 (score 2) is fifth.
```

### Example 2

```text
Input: score = [30,50,10,20,40]
Output: ["Bronze Medal","Gold Medal","5","4","Silver Medal"]
```

### Example 3

```text
Input: score = [42]
Output: ["Gold Medal"]
```

### Constraints

- `score` has length `n` with `1 <= n <= 10⁴`.
- Every score satisfies `0 <= score[i] <= 10⁶`.
- No two scores are equal.
