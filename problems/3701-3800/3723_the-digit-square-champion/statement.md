# The Digit-Square Champion

## Description

You are handed two positive integers: `num`, a digit count, and `sum`, a
target total.

Call a positive integer eligible when it has exactly `num` digits and those
digits add up to exactly `sum`. Every eligible integer is scored by adding
up the squares of its digits.

Return, as a string, the eligible integer that achieves the largest score.
When several eligible integers share the top score, return the largest of
them. If no `num`-digit integer can have a digit total of `sum`, return an
empty string.

### Example 1

```text
Input: num = 3, sum = 7
Output: "700"
Explanation: Eligible integers include 124, 610, and 700, scoring
1² + 2² + 4² = 21, 6² + 1² = 37, and 7² = 49. No way of spreading 7 over
three digits beats a single 7, and among integers carrying that score of
49 the largest is 700, so the answer is "700".
```

### Example 2

```text
Input: num = 4, sum = 30
Output: "9993"
Explanation: The best split of 30 across four digits is 9, 9, 9, 3, scoring
9² + 9² + 9² + 3² = 252, and the largest integer built from that multiset
is 9993, so the answer is "9993".
```

### Example 3

```text
Input: num = 2, sum = 25
Output: ""
Explanation: Two digits can total at most 18, so no eligible integer
exists and the answer is an empty string.
```

### Constraints

- `1 <= num <= 2 * 10⁵`
- `1 <= sum <= 2 * 10⁶`

## Hints

### Hint 1

Squares reward concentration: 9² = 81 already exceeds 5² + 4² = 41, so
merging two digits whose total fits in one digit always raises the score.

### Hint 2

Feasibility is a capacity check, and the winning multiset is then forced:
floor(sum / 9) nines plus at most one leftover digit, laid out descending
from the left — which also makes it the largest integer, settling the
tie-break for free.
