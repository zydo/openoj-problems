# Summing Digit Bends In A Range I

## Description

Two integers `num1` and `num2` mark off the inclusive range
`[num1, num2]`.

Give each number in the range a **bend count**: read its decimal digits
and count every interior digit that is either strictly greater than both
of its immediate neighbors or strictly less than both. A digit never
counts when a neighbor equals it, and the first and last digits — each
having only one neighbor — are never eligible. Numbers with fewer than
three digits have no interior digits, so their bend count is 0. For
instance, 4959 bends twice (the 9 rises above both 4s beside it, and the
5 sinks below both 9s), while 2468 never bends because its digits only
ever rise.

Return the sum of the bend counts of all numbers in `[num1, num2]`.

### Example 1

```text
Input: num1 = 97, num2 = 101
Output: 1
Explanation: Scanning 97, 98, 99, 100, 101, the only qualifying digit is
the middle 0 of 101, which sits strictly below the 1 on either side.
Everything else is flat or one-directional, so the total is 1.
```

### Example 2

```text
Input: num1 = 38, num2 = 42
Output: 0
Explanation: Every number in this range has just two digits, and a
two-digit number has no digit with neighbors on both sides — so no digit
can qualify anywhere in the range.
```

### Example 3

```text
Input: num1 = 1500, num2 = 1502
Output: 5
Explanation: In 1501 the 5 stands strictly above the 1 and 0 beside it
and the 0 sits strictly below the 5 and 1 — two bends. In 1500 the 5
counts but the 0 does not, since its right neighbor is another 0. In
1502 both the 5 and the 0 count. That is 1 + 2 + 2 = 5.
```

### Constraints

- `1 <= num1 <= num2 <= 10⁵`

## Hints

### Hint 1

The range holds at most 10⁵ numbers, so scoring each number one by one
and adding is well within reach — the whole task reduces to getting a
single number's bend count right.

### Hint 2

Peel the digits off arithmetically with `% 10` and division, and judge
each digit against the digit extracted just before it and the one
extracted just after; count it only when it is strictly above both or
strictly below both.
