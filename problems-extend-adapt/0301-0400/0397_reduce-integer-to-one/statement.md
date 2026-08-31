# Reduce Integer to One

## Description

Starting from a positive integer `n`, repeatedly apply one legal move:

- If the current value is even, replace it with half its value.
- If the current value is odd, replace it with either one less or one more.

Return the fewest moves needed to reach `1`.

### Example 1

```text
Input: n = 15
Output: 5
Explanation: One optimal sequence is 15 -> 16 -> 8 -> 4 -> 2 -> 1.
```

### Example 2

```text
Input: n = 3
Output: 2
Explanation: Decrementing first gives 3 -> 2 -> 1.
```

### Example 3

```text
Input: n = 26
Output: 6
```

### Constraints

- `1 <= n <= 2³¹ - 1`
