# Two Numbers, Smallest Sum

## Description

Take a positive integer `num` and deal its digits out into two fresh
non-negative integers `a` and `b`. Every digit of `num` must land in
exactly one of the two parts — together they hold the same digit
multiset as `num` — but inside each part the digits may be arranged
in any order, and a part is allowed to carry leading zeros.

Pick the deal and both orderings so that `a + b` is as small as it
can be, and return that smallest sum.

### Example 1

```text
Input: num = 2931
Output: 42
Explanation: Deal a = 13 and b = 29, using digits 1, 3 and 2, 9.
The parts sum to 42, and no way of splitting beats that.
```

### Example 2

```text
Input: num = 5000
Output: 5
Explanation: The three zeros pile into a = 0 while b carries the 5,
for a sum of 5. Leading zeros are what make a = 0 legal.
```

### Example 3

```text
Input: num = 73691
Output: 206
Explanation: Dealing the sorted digits 1, 3, 6, 7, 9 alternately
builds a = 169 and b = 37, which add up to 206.
```

### Constraints

- `10 <= num <= 10⁹`
- The decimal representation of `num` has no leading zeros.

## Hints

### Hint 1

Since each part's digits can be reordered freely, only which digits
end up together matters — start by lining all digits of `num` up in
ascending order.

### Hint 2

Hand the sorted digits to the two parts in turn: first, third,
fifth to one part; second, fourth to the other. Swapping any two
digits between the parts can never lower the sum, so this deal is
optimal.
