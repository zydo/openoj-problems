# Faulty Doubling Keypad

## Description

A keypad device shows one integer, and it starts showing `startValue`.
Only two keys still work:

- double whatever is on the display, or
- knock `1` off it.

Given `startValue` and `target`, find the fewest key presses that can
bring the display to `target`.

### Example 1

```text
Input: startValue = 6, target = 19
Output: 4
Explanation: 6 -> 5 -> 10 -> 20 -> 19. Dropping to 5 first lets two
doublings land just above the target, and one final subtraction closes
the gap.
```

### Example 2

```text
Input: startValue = 4, target = 41
Output: 8
```

### Example 3

```text
Input: startValue = 12, target = 5
Output: 7
Explanation: The display already sits above `target`, and only
subtraction lowers it, so all seven presses are subtractions:
12 -> 11 -> 10 -> 9 -> 8 -> 7 -> 6 -> 5.
```

### Constraints

- `1 <= startValue, target <= 10⁹`
