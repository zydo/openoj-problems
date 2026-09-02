# Numbers With No Repeated Digits II

## Description

Given two positive integers `a` and `b`, count the integers in the
inclusive range `[a, b]` whose decimal representation uses no digit more
than once.

### Example 1

```text
Input: a = 5, b = 15
Output: 10
Explanation: Every value from 5 through 15 qualifies except 11, which
writes the digit 1 twice. That leaves 11 - 1 = 10 qualifying numbers.
```

### Example 2

```text
Input: a = 100, b = 150
Output: 33
Explanation: A number in this stretch reads "1", then a tens digit from
{0,2,3,4,5}, then a units digit differing from both. Counting those
combinations up to 150 gives 33 numbers with all-distinct digits.
```

### Example 3

```text
Input: a = 20, b = 100
Output: 72
Explanation: Every two-digit value from 20 through 99 has a distinct
tens digit and units digit exactly when its two digits differ, which
happens for 9 of the 10 possible units digits under each of the 8 tens
digits: 8 * 9 = 72. The value 100 repeats its zeros, so it adds nothing.
```

### Constraints

- `1 <= a <= b <= 1000`

## Hints

### Hint 1

The range is tiny, so testing every number one by one is perfectly
affordable.

### Hint 2

To test a single value, peel its digits off and record each one in a
small set or bitmask; a repeat disqualifies the number immediately.
