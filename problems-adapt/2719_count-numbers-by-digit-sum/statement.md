# Count Numbers by Digit Sum

## Description

You are given two numeric strings `num1` and `num2` with `num1 <= num2`, and
two integers `min_sum` and `max_sum`.

An integer `x` is pleasant when it lies in the range `num1` to `num2`
(inclusive) and the sum of its decimal digits falls between `min_sum` and
`max_sum`.

Return how many pleasant integers the range holds, modulo `10⁹ + 7`.

### Example 1

```text
Input: num1 = "4", num2 = "40", min_sum = 3, max_sum = 6
Output: 16
Explanation: The pleasant integers are 4, 5, 6, 12, 13, 14, 15, 21, 22, 23,
24, 30, 31, 32, 33 and 40 — each has a digit sum from 3 to 6.
```

### Example 2

```text
Input: num1 = "222", num2 = "222", min_sum = 6, max_sum = 6
Output: 1
Explanation: The range holds the single integer 222, whose digits sum to 6.
```

### Example 3

```text
Input: num1 = "1", num2 = "200", min_sum = 1, max_sum = 2
Output: 9
Explanation: The pleasant integers are 1, 2, 10, 11, 20, 100, 101, 110 and
200.
```

### Constraints

- `1 <= num1 <= num2 <= 10^22`
- `1 <= min_sum <= max_sum <= 400`

## Hints

### Hint 1

Counting inside `[a, b]` splits into two easier counts at an endpoint: how
many pleasant integers sit at or below `b`, minus how many sit below `a`.

### Hint 2

For "at or below a bound", walk the bound's digits left to right carrying
two things: whether the prefix built so far still hugs the bound exactly,
and the running digit sum. What happens to a branch whose sum has already
passed `max_sum`?

### Hint 3

Two states per position (hugging / free) times the digit sum fits in a
small table; rolling it one position at a time keeps memory tiny.
