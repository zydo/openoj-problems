# Candy Variety

## Description

Alice has `n` candies (with `n` even) and may eat at most `n / 2` of them.
Each candy belongs to a type given in `candyType`. Return the largest number
of different types she can taste while staying within the limit.

### Example 1

```text
Input: candyType = [1,1,2,2,3,3]
Output: 3
Explanation: With 3 candies to eat and 3 types available, she can sample one
of each.
```

### Example 2

```text
Input: candyType = [1,1,2,3]
Output: 2
Explanation: Only 2 candies may be eaten, so at most 2 types are possible.
```

### Example 3

```text
Input: candyType = [6,6,6,6]
Output: 1
```

### Constraints

- `n == candyType.length`
- `2 <= n <= 10⁴`, with `n` even.
- `-10⁵ <= candyType[i] <= 10⁵`
