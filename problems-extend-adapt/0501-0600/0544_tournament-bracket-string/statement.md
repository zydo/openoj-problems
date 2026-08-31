# Tournament Bracket String

## Description

A tournament pairs the strongest remaining team with the weakest remaining
team each round, so the rank `1` team meets the rank `n` team, the rank `2`
team meets the rank `n-1` team, and so on. `n` is a power of two and teams are
labeled `1` through `n` in descending strength.

Build the full bracket as a string: parentheses pair two teams, commas
separate pairings, and each new round wraps the previous round's pairings in
another pair of parentheses until a single winner remains.

### Example 1

```text
Input: n = 4
Output: "((1,4),(2,3))"
Explanation: Round one pairs (1,4) and (2,3); the final round wraps them,
so the answer is ((1,4),(2,3)).
```

### Example 2

```text
Input: n = 8
Output: "(((1,8),(4,5)),((2,7),(3,6)))"
Explanation: Round one gives (1,8),(2,7),(3,6),(4,5); round two wraps the
neighbor pairings and round three wraps them once more.
```

### Constraints

- `n == 2^x` for an integer `x` in `[1, 12]`.
