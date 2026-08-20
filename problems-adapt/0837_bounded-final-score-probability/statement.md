# Bounded Final Score Probability

## Description

Begin with a score of zero. While the current score is less than `stopScore`,
independently choose a uniformly random integer from `1` through `drawMaximum`
and add it to the score. Stop as soon as the score reaches or exceeds
`stopScore`.

Return the probability that the final score is at most `scoreLimit`. Answers
within `10^-5` of the exact probability are accepted.

### Example 1

```text
Input: scoreLimit = 5, stopScore = 4, drawMaximum = 3
Output: 0.8024691358
```

### Example 2

```text
Input: scoreLimit = 7, stopScore = 4, drawMaximum = 3
Output: 1.0000000000
Explanation: The greatest possible final score is 6.
```

### Example 3

```text
Input: scoreLimit = 3, stopScore = 2, drawMaximum = 4
Output: 0.6250000000
```

### Constraints

- `0 <= stopScore <= scoreLimit <= 10^4`
- `1 <= drawMaximum <= 10^4`

## Hints

### Hint 1

Let `probability[s]` be the probability of ever reaching score `s`. It depends
on the preceding `drawMaximum` nonterminal scores.

### Hint 2

Scores at or above `stopScore` are terminal and must not contribute to later
states.

### Hint 3

Maintain a sliding sum of the active probabilities so each new state takes
constant time.

### Hint 4

If `stopScore` is zero, or if `scoreLimit` covers the largest possible final
score, the result is exactly one.
