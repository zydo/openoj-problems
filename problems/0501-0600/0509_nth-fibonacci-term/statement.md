# Nth Fibonacci Term

## Description

The Fibonacci sequence starts from two fixed seeds and builds every later
term as the sum of the two terms right before it:

```text
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
```

Given an index `n`, compute `F(n)`.

### Example 1

```text
Input: n = 0
Output: 0
```

### Example 2

```text
Input: n = 5
Output: 5
Explanation: F(2)=1, F(3)=2, F(4)=3, F(5)=F(4)+F(3)=3+2=5.
```

### Example 3

```text
Input: n = 10
Output: 55
```

### Constraints

- `n` satisfies `0 <= n <= 30`.
