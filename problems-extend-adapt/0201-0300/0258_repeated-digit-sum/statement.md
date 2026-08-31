# Repeated Digit Sum

## Description

You are given a non-negative integer `num`. Replace it with the sum of
its digits, and keep repeating that replacement on the result for as
long as it still has more than one digit. Return the single digit you
end up with.

### Example 1

```text
Input: num = 9875
Output: 2
Explanation: The process is
9875 --> 9 + 8 + 7 + 5 --> 29
29 --> 2 + 9 --> 11
11 --> 1 + 1 --> 2
2 has only one digit, so it is the answer.
```

### Example 2

```text
Input: num = 7
Output: 7
```

### Constraints

- `0 <= num <= 2³¹ - 1`

### Follow-up

Could you do it without any loop/recursion in `O(1)` runtime?

## Hints

### Hint 1

Simulating the process digit-round by digit-round works, but it is worth
asking whether the final single digit can be predicted directly.

### Hint 2

List out the single-digit result for a run of consecutive inputs — how
many distinct values ever show up?

### Hint 3

Look at how the result changes as `num` increases by one at a time —
does a pattern repeat, and with what period?

### Hint 4

This quantity has a name in number theory; searching for it may point
you straight to the closed-form answer.
