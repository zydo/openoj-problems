# Fewest Fibonacci Summands

## Description

You are given a positive integer `k`. Write it as a sum of Fibonacci numbers
using as few terms as possible, and return that term count. The same Fibonacci
number may appear several times in the sum, although it will turn out you never
need to repeat one.

The Fibonacci sequence used here starts

```text
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
```

that is, `F1 = 1`, `F2 = 1`, and each later term is the sum of the two before
it. A representation always exists, since the sequence contains 1.

### Example 1

```text
Input: k = 89
Output: 1
Explanation: 89 is itself a Fibonacci number, so one term suffices.
```

### Example 2

```text
Input: k = 14
Output: 2
Explanation: 14 = 13 + 1.
```

### Example 3

```text
Input: k = 33
Output: 4
Explanation: 33 = 21 + 8 + 3 + 1, and no three Fibonacci numbers reach 33.
```

### Constraints

- `1 <= k <= 10^9`

## Hints

### Hint 1

There are only about forty-five Fibonacci numbers up to a billion — list them
first.

### Hint 2

Consider always taking the largest Fibonacci number that still fits into what
remains. Argue that this can never cost you extra terms later.

### Hint 3

Suppose the greedy just took `F`. Show the remainder is smaller than the
Fibonacci number just below `F` — otherwise a single larger term would have fit
— so the greedy never needs two consecutive terms.
