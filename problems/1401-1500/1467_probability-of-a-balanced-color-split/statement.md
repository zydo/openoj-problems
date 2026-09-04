# Probability Of A Balanced Color Split

## Description

There are `2n` balls painted in `k` colors, described by an integer
array `balls` of length `k`: `balls[i]` is how many balls wear color
`i`.

All `2n` balls are shuffled into one uniformly random order, and then
the first `n` balls of that order are dealt into the first box while
the remaining `n` are dealt into the second. The two boxes are
distinguishable: dealing a given pair of color multisets the other way
around is a different outcome.

Return the probability that both boxes finish with the same number of
distinct colors. Answers within `10⁻⁵` of the true value are accepted.

### Example 1

```text
Input: balls = [4,2]
Output: 0.60000
Explanation: Six balls — four of color 0, two of color 1 — are split
three and three, so box 1 is decided by how many color-0 balls it
receives. Only taking two of them plus one color-1 ball balances the
boxes, leaving both with two distinct colors. C(4,2)*C(2,1) = 12 of
the C(6,3) = 20 equally likely draws do that, so the probability is
12/20 = 0.6.
```

### Example 2

```text
Input: balls = [1,1,1,1]
Output: 1.00000
Explanation: Four singleton colors split two and two: whatever the
shuffle, each box receives two balls of two different colors. Both
boxes always end with two distinct colors, so the probability is 1.
```

### Example 3

```text
Input: balls = [3,2,1]
Output: 0.30000
Explanation: Box 1 takes three of the six balls. Of the splits counted
by (color-0, color-1, color-2) takings, only (2,0,1) and (1,2,0)
leave both boxes with two distinct colors, and each is realized by 3
of the C(6,3) = 20 equally likely draws. The probability is 6/20 =
0.3.
```

### Constraints

- `1 <= balls.length <= 8`
- `1 <= balls[i] <= 6`
- `sum(balls)` is even.

## Hints

### Hint 1

A deal is fully described by how many balls of each color land in the
first box; the number of shuffles realizing one deal is the product of
per-color binomials `C(balls[i], x)`, out of `C(2n, n)` total.

### Hint 2

Walk the colors once, carrying how many balls the first box still
needs and both distinct-color counts; a deal counts toward the
numerator exactly when those two counts agree at the last color.

### Hint 3

The domain is tiny — at most eight colors of six balls — so plain
enumeration over the split vectors, or a small state machine over
(color, balls still owed, count difference), both fit comfortably.
