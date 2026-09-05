# Power Steps Down To Zero

## Description

You are given two integers `num1` and `num2`.

One step works like this: pick an integer `i` in the range `[0, 60]` and
subtract `2^i + num2` from `num1`.

Return the fewest steps needed to bring `num1` down to exactly `0`, or
`-1` if no sequence of steps can get there.

### Example 1

```text
Input: num1 = 10, num2 = 2
Output: 1
Explanation: Pick i = 3: 10 - (2³ + 2) = 10 - 10 = 0. A single step
finishes the job, and a positive num1 can never reach 0 in fewer than one
step.
```

### Example 2

```text
Input: num1 = 27, num2 = 6
Output: 3
Explanation: Three steps do it:
- Pick i = 0: 27 - (2⁰ + 6) = 20.
- Pick i = 2: 20 - (2² + 6) = 10.
- Pick i = 2: 10 - (2² + 6) = 0.
It can be shown that no one or two steps can bring 27 to 0, so 3 is the
minimum.
```

### Example 3

```text
Input: num1 = 2, num2 = 4
Output: -1
Explanation: Every step subtracts at least 2⁰ + 4 = 5, and num1 starts at
2 — so a single step lands at 3 or more below zero, and every further step
pushes the value down by another 5 or more. Zero is never hit, so the goal
is unreachable.
```

### Constraints

- `1 <= num1 <= 10⁹`
- `-10⁹ <= num2 <= 10⁹`

## Hints

### Hint 1

After `k` steps that picked exponents `i1 … ik`, the value has become
`num1 - k*num2 - (2^i1 + … + 2^ik)` — so success means `m = num1 - k*num2`
can be written as a sum of exactly `k` powers of two.

### Hint 2

Such a sum needs `m >= k` (each term is at least 1) and
`popcount(m) <= k` (merging equal terms shows the fewest possible terms is
the number of set bits), and both bounds together are achievable by
splitting terms.

### Hint 3

The viable step counts live below 61, so try `k = 1, 2, 3, …` in order and
stop at the first `k` that passes both checks.
