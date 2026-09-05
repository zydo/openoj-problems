# Tribonacci Term

## Description

The tribonacci numbers are built like the Fibonacci numbers, but each term
adds the three before it instead of two:

```text
T0 = 0,  T1 = 1,  T2 = 1,  Tn = Tn-1 + Tn-2 + Tn-3  for n >= 3
```

Given `n`, return `Tn`.

### Example 1

```text
Input: n = 5
Output: 7
Explanation: The sequence opens `0, 1, 1, 2, 4, 7`; the term at index 5 is
`2 + 4 + 1 = 7`.
```

### Example 2

```text
Input: n = 30
Output: 29249425
```

### Example 3

```text
Input: n = 1
Output: 1
```

### Constraints

- `0 <= n <= 37`
- The answer is guaranteed to fit within a 32-bit integer, ie.
  `answer <= 2³¹ - 1`.

## Hints

### Hint 1

Only the three most recent terms ever matter, so a full memo table is
optional: three variables seeded with `T0 = 0, T1 = 1, T2 = 1` are enough.

### Hint 2

Step the window forward `n - 2` times, each time computing the next term as
the sum of the three held values and shifting the oldest one out.
