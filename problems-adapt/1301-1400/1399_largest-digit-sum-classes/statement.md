# Largest Digit-Sum Classes

## Description

You are given an integer `n`. Sort the integers `1` through `n` into
classes, where two integers land in the same class exactly when their
decimal digit sums are equal — `24` and `42` share a class (both sum to
6), while `30` and `31` do not (3 versus 4).

Return how many classes reach the largest size among them.

### Example 1

```text
Input: n = 5
Output: 5
Explanation: Every one of 1, 2, 3, 4, 5 forms its own class of size 1,
so all five classes tie for the largest size.
```

### Example 2

```text
Input: n = 24
Output: 5
Explanation: The digit sums 2, 3, 4, 5, and 6 each hold three numbers —
for instance sum 5 collects 5, 14, and 23 — and no other class is that
large, so the answer is 5.
```

### Example 3

```text
Input: n = 46
Output: 6
```

### Constraints

- `1 <= n <= 10⁴`

## Hints

### Hint 1

Tally how many integers in the range share each digit sum, then look for
the biggest tally.

### Hint 2

The digit sum of a value can be built by repeatedly taking the remainder
on division by ten; a value up to 10⁴ can never sum past 36.
