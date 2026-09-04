# The Traveling Pillow

## Description

`n` people stand in a line, numbered `1` through `n`, and person `1`
starts out holding a pillow. Each second, whoever has the pillow
hands it to the adjacent person in the direction the pillow is
currently traveling. When the pillow reaches person `n` it reverses
course and travels back toward person `1`, reversing again — if it
gets there — and so on, bouncing between the two ends of the line.

For example, from person `n` the pillow next visits person `n - 1`,
then `n - 2`, continuing down the line.

Given positive integers `n` and `time`, return the number of the
person holding the pillow after exactly `time` seconds.

### Example 1

```text
Input: n = 5, time = 12
Output: 5
Explanation: Each crossing of the line takes 4 seconds, so the
pillow completes crossings at times 4, 8, and 12 — and at second 12
it has just arrived at person 5 again.
```

### Example 2

```text
Input: n = 6, time = 8
Output: 3
Explanation: The pillow reaches person 6 at second 5 and heads
back; three more seconds bring it to person 3.
```

### Example 3

```text
Input: n = 7, time = 25
Output: 2
Explanation: Four full crossings of length 6 take 24 seconds and
leave the pillow at person 1 heading forward; one more second puts
it in the hands of person 2.
```

### Constraints

- `2 <= n <= 1000`
- `1 <= time <= 1000`

## Hints

### Hint 1

Track just two values while simulating: the position of the pillow
and the direction it is moving.

### Hint 2

Advance the position by the direction each second, and flip the
direction whenever the pillow lands on either end of the line.
