# The Rarest Digit

## Description

You are given a positive integer `n`. Look at its decimal representation
and report, as an integer, the digit that shows up least often.

Only digits that actually appear in `n` are candidates — an absent digit
cannot win with a count of zero. If several present digits are tied for
the lowest count, report the smallest digit among them.

### Example 1

```text
Input: n = 40415
Output: 0
Explanation: The digit 4 appears twice, while 0, 1, and 5 appear once
each. Three digits tie for rarest, and the smallest of them is 0.
```

### Example 2

```text
Input: n = 455441
Output: 1
Explanation: The counts are 4 → 3, 5 → 2, and 1 → 1, so the lone 1 is
the rarest digit.
```

### Example 3

```text
Input: n = 7
Output: 7
Explanation: A single-digit number has exactly one candidate, and that
digit wins by default.
```

### Constraints

- `1 <= n <= 2³¹ - 1`

## Hints

### Hint 1

Strip digits off the number one at a time with division and remainder,
tallying each into a bucket indexed by the digit itself.

### Hint 2

Walk the ten buckets from 0 upward and keep the first non-empty one whose
count is strictly smaller than every qualifying count seen so far — the
ascending walk settles the tie-break automatically.
