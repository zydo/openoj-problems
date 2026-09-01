# Zero-Free Addend Pair

## Description

Call a positive integer zero-free when its decimal digits contain no `0`
anywhere.

Given an integer `n`, produce two zero-free integers `a` and `b` whose sum
is exactly `n`, returned as the pair `[a, b]`. If several pairs work, any
one of them is acceptable; the inputs guarantee at least one exists.

### Example 1

```text
Input: n = 5
Output: [1,4]
Explanation: 1 and 4 are both zero-free, and 1 + 4 = 5. The pair [2,3]
would be equally valid.
```

### Example 2

```text
Input: n = 101
Output: [2,99]
Explanation: Neither 2 nor 99 contains the digit 0, and their sum is 101.
```

### Example 3

```text
Input: n = 1000
Output: [1,999]
Explanation: 1 avoids zero trivially and 999 avoids it as well; adding
them gives exactly 1000.
```

### Constraints

- `2 <= n <= 10⁴`

## Hints

### Hint 1

Try every split point: for each candidate `a` from 1 upward, its partner
is forced to be `n - a`.

### Hint 2

Accept the first pair where neither `a` nor `n - a` has a zero digit;
checking for a zero digit takes only repeated division by 10.
