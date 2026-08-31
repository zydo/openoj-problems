# Alternating Number Elimination

## Description

Begin with the ordered sequence of all integers from `1` through `n`.
Repeatedly remove alternating entries until exactly one value remains:

- First sweep from left to right, removing the first entry you encounter and
  then every other entry.
- Next sweep from right to left with the same removal rule.
- Keep alternating the sweep direction after every pass.

Return the final surviving value.

### Example 1

```text
Input: n = 10
Output: 8
Explanation: After the first sweep the sequence is [2, 4, 6, 8, 10]. Sweeping
from the right leaves [4, 8], and the final left-to-right sweep leaves 8.
```

### Example 2

```text
Input: n = 24
Output: 14
```

### Example 3

```text
Input: n = 1
Output: 1
```

### Constraints

- `1 <= n <= 10⁹`
