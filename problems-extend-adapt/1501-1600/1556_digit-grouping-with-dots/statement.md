# Digit Grouping with Dots

## Description

Take an integer `n` and write it out with a dot (`.`) inserted between
every group of three digits counted from the right, then return that text.

### Example 1

```text
Input: n = 5678
Output: "5.678"
```

### Example 2

```text
Input: n = 909090
Output: "909.090"
```

### Example 3

```text
Input: n = 8
Output: "8"
Explanation: Fewer than four digits means no dot is ever inserted.
```

### Constraints

- `0 <= n <= 2³¹ - 1`

## Hints

### Hint 1

Read the digits from the right and rejoin blocks of three with dots —
every block except the final (leftmost) one is exactly three digits wide.
