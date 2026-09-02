# Tallest Two-Tone Ball Triangle

## Description

You hold `red` red balls and `blue` blue balls and want to stack them into
a triangle: the first row holds 1 ball, the second row 2 balls, the third
row 3 balls, and so on. Every row must be one single color, and rows that
touch must not share that color. Rows fill in order from the top, and the
triangle stops as soon as the next row cannot be completed.

Return the greatest height any such triangle can reach.

### Example 1

![diagram](figures/3200-1.svg)

```text
Input: red = 2, blue = 4
Output: 3
Explanation: Put blue on top. Rows 1 and 3 swallow all four blue balls and
row 2 takes the two red ones; a fourth row would ask for 4 red balls, and
none remain.
```

### Example 2

![diagram](figures/3200-2.svg)

```text
Input: red = 2, blue = 1
Output: 2
Explanation: The single blue ball must sit at the apex, and the two red
balls exactly complete the second row.
```

### Example 3

```text
Input: red = 4, blue = 7
Output: 4
Explanation: Start with red: rows 1 and 3 use 1 + 3 = 4 red balls and rows
2 and 4 use 2 + 4 = 6 blue balls. The fifth row needs 5 red balls, but the
red supply is spent, so the triangle stands 4 rows tall.
```

### Example 4

![diagram](figures/3200-3.svg)

```text
Input: red = 10, blue = 1
Output: 2
Explanation: The lone blue ball forms the apex and the red pile easily
covers row 2, but row 3 would demand 3 blue balls.
```

### Constraints

- `1 <= red, blue <= 100`

## Hints

### Hint 1

The two colors are symmetric apart from who goes first — measure the height
once with red at the apex and once with blue there, and keep the better one.

### Hint 2

For one fixed apex color, walk downward level by level and subtract each
level's size from the pile that level is drawn from until a pile runs dry.
