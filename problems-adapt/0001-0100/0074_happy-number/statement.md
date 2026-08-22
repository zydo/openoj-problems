# Happy Number

## Description

Call a positive integer **happy** when this process, started at it, ends at
`1`:

1. Square each of its digits and take the sum of those squares. That sum is
   the next number.
2. Apply the same step to the next number, and keep going.

The iteration always settles somewhere: either it reaches `1` — and `1`
maps to itself, so it stays there — or it enters a loop of values that
never contains `1`.

Given `n`, report whether the process started at `n` reaches `1`.

### Example 1

```text
Input: n = 13
Output: true
Explanation: 1² + 3² = 10, then 1² + 0² = 1. The process reached 1, so 13
is happy.
```

### Example 2

```text
Input: n = 5
Output: false
Explanation: The iteration runs 5 → 25 → 29 → 85 → 89 → 145 → 42 → 20 → 4
→ 16 → 37 → 58 → 89 → …, revisiting values forever without ever producing 1.
```

### Constraints

- `1 <= n <= 2³¹ - 1`

## Hints

### Hint 1

The step is a fixed function of the current value, so the sequence from `n`
is completely determined. It can only end at `1` or start repeating.

### Hint 2

Recording each value as it appears answers the question the moment a value
shows up twice — a repeat means the tail is a loop, and `1` is not on it.

### Hint 3

Treating the step as a linked list, the repeat is a cycle, and tortoise-and-
hare finds it in constant extra space.
