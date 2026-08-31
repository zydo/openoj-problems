# Balanced Dimensions

## Description

You are asked to lay out a rectangle whose area is exactly a given integer
`area`. Let `L` and `W` stand for the rectangle's length and width, and
return the pair `[L, W]` that satisfies all of the following:

1. `L * W == area`.
2. `L >= W` — the longer side is reported first.
3. The difference `L - W` is as small as possible.

### Example 1

```text
Input: area = 2
Output: [2,1]
Explanation: The only factor pair with `L >= W` is `[2,1]`.
```

### Example 2

```text
Input: area = 48
Output: [8,6]
Explanation: The valid factor pairs are `[48,1]`, `[24,2]`, `[16,3]`,
`[12,4]`, and `[8,6]`. The last has gap `2`, the smallest of the five.
```

### Example 3

```text
Input: area = 16
Output: [4,4]
Explanation: A perfect square admits `[4,4]`, where the gap is zero.
```

### Constraints

- `1 <= area <= 10⁷`

## Hints

### Hint 1

In the best pair, `W` is the largest divisor of `area` that does not exceed
`sqrt(area)`.

### Hint 2

Start at `floor(sqrt(area))` and walk downward until you meet a divisor of
`area`; that divisor is `W`.
