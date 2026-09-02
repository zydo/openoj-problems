# Counting Divisor Windows

## Description

Read an integer `num` as its decimal string and slide a window of exactly
`k` characters across it. Every window spells out another integer — leading
zeros are permitted, so `"04"` simply means `4` — and a window counts as
good when the integer it spells divides `num` evenly. The value `0` never
divides anything.

Given `num` and `k`, return how many length-`k` windows are good.

### Example 1

```text
Input: num = 10200, k = 2
Output: 3
Explanation: The length-2 windows of "10200" are "10", "02", "20", and
"00". They read as 10, 2, 20, and 0; the first three divide 10200 evenly
while 0 divides nothing, so the answer is 3.
```

### Example 2

```text
Input: num = 100, k = 2
Output: 1
Explanation: The windows are "10" and "00". The value 10 divides 100, but
the window "00" has value 0, which is never a divisor. The answer is 1.
```

### Example 3

```text
Input: num = 555555, k = 3
Output: 4
Explanation: All four length-3 windows read as 555, and 555 divides 555555
exactly (555555 = 555 * 1001), so the answer is 4.
```

### Constraints

- `1 <= num <= 10⁹`
- `1 <= k <= len(str(num))`

## Hints

### Hint 1

Every length-`k` window has to be tested, and there are only a handful of
them since `num` has at most ten digits.

### Hint 2

Convert the number to a string, slice out each window, parse it back to an
integer, and check the division — no arithmetic tricks are required.
