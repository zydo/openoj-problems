# Halving Countdown

## Description

Take an integer `num` and count it down to zero. Each step of the
countdown applies exactly one rule: an even value is halved, an odd
value has `1` subtracted from it.

Return how many steps the countdown needs to reach zero.

### Example 1

```text
Input: num = 27
Output: 8
Explanation:
Step 1) 27 is odd; subtract 1 to get 26.
Step 2) 26 is even; halve it to 13.
Step 3) 13 is odd; subtract 1 to get 12.
Step 4) 12 is even; halve it to 6.
Step 5) 6 is even; halve it to 3.
Step 6) 3 is odd; subtract 1 to get 2.
Step 7) 2 is even; halve it to 1.
Step 8) 1 is odd; subtract 1 to get 0.
```

### Example 2

```text
Input: num = 64
Output: 7
Explanation: A power of two halves its way straight down — 64, 32, 16,
8, 4, 2, 1 — and one last subtraction lands on 0.
```

### Example 3

```text
Input: num = 123456
Output: 22
```

### Constraints

- `0 <= num <= 10⁶`

## Hints

### Hint 1

Nothing beats playing the rules out: apply them one step at a time and
tally as you go. Every step strictly shrinks the value — halving a
positive even number, or peeling off `1` — so the countdown is
guaranteed to end.
