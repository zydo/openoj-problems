# The Running Totals Ladder

## Description

You are given two integers `n` and `k`.

Begin with an array `a` of `n` integers, every one of them `1`. Each second,
every element is replaced — all at once — by the total of itself and every
element before it. One second turns `a[1]` into `a[0] + a[1]`, `a[2]` into
`a[0] + a[1] + a[2]`, and so on, while `a[0]` is unchanged.

Report `a[n - 1]` after `k` seconds have passed. The answer can be huge, so
give it modulo `10⁹ + 7`.

### Example 1

```text
Input: n = 3, k = 4
Output: 15
Explanation: Each row is the array after that many seconds.
Second | State After
   0   | [1,1,1]
   1   | [1,2,3]
   2   | [1,3,6]
   3   | [1,4,10]
   4   | [1,5,15]
```

### Example 2

```text
Input: n = 6, k = 2
Output: 21
Explanation: The array goes [1,1,1,1,1,1] -> [1,2,3,4,5,6] ->
[1,3,6,10,15,21], whose final entry is 21.
```

### Example 3

```text
Input: n = 1, k = 7
Output: 1
Explanation: With a single element there is nothing before it to add, so
the array stays [1] no matter how many seconds pass.
```

### Constraints

- `1 <= n, k <= 1000`

## Hints

### Hint 1

One second is nothing more than replacing the array with its own prefix
sums, so k seconds is that same sweep performed k times.
