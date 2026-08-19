# Probability of Exactly K Heads

## Description

You toss a set of biased coins once each. Coin `i` comes up heads with
probability `prob[i]`, independently of the others.

Given the array `prob` and an integer `target`, return the probability that
exactly `target` of the coins show heads after the tosses.

### Example 1

```text
Input: prob = [0.25], target = 1
Output: 0.25000
Explanation: The single coin must land heads, which it does a quarter of the
time.
```

### Example 2

```text
Input: prob = [0.2, 0.6, 0.9], target = 2
Output: 0.51600
Explanation: Exactly one coin must show tails. The three ways are worth
0.2 * 0.6 * 0.1 = 0.012 (third coin tails), 0.2 * 0.4 * 0.9 = 0.072 (second
coin tails), and 0.8 * 0.6 * 0.9 = 0.432 (first coin tails), summing to
0.516.
```

### Example 3

```text
Input: prob = [0.5,0.5,0.5,0.5,0.5,0.5], target = 2
Output: 0.23438
Explanation: With identical fair coins the distribution is binomial:
C(6,2) / 2^6 = 15 / 64 = 0.234375.
```

### Constraints

- `1 <= prob.length <= 1000`
- `0 <= prob[i] <= 1`
- `0 <= target <= prob.length`
- Answers within `10^-5` of the exact value are accepted.

## Hints

### Hint 1

Toss the coins in order and watch how the running head count behaves: each
coin either raises the count by one or leaves it alone.

### Hint 2

Let `dp[c]` be the probability that the coins processed so far show exactly
`c` heads. Before the first coin, `dp[0] = 1` and everything else is 0.

### Hint 3

A coin with heads probability `p` moves probability between neighboring
counts: `dp[c]` becomes `dp[c] · (1 - p) + dp[c - 1] · p`. Sweep `c` downward
so `dp[c - 1]` is still the previous coin's value when read.

### Hint 4

Counts larger than `target` can never come back down, so the array stops at
`target`; after the last coin, `dp[target]` is the answer.
