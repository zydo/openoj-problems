# Operators Between Digits

## Description

You are given a string of digits `num` and an integer `target`.

Between each pair of adjacent digits you either place nothing — the digits
then merge into one multi-digit operand — or place exactly one of the
operators `'+'`, `'-'`, `'*'`. Making a choice at every gap turns `num`
into an arithmetic expression. Return every expression built this way
whose value is `target`, in any order.

Expressions evaluate with the usual rules: `'*'` binds tighter than `'+'`
and `'-'`, and operators of equal strength associate left to right.

An operand may not carry a leading zero — the standalone `0` is a legal
operand, while `05` is not.

### Example 1

```text
Input: num = "345", target = 23
Output: ["3+4*5"]
Explanation: The multiplication is applied to 4 and 5 before the addition,
so the expression is worth 3 + 20. Merging digits (34 - 5, 3 + 45, ...)
never reaches 23.
```

### Example 2

```text
Input: num = "204", target = 6
Output: ["2-0+4","2+0+4"]
Explanation: The middle digit may stand alone as the operand 0, and both
joining operators happen to leave the value unchanged.
```

### Example 3

```text
Input: num = "77777", target = 1
Output: []
Explanation: No placement of operators over these digits produces 1.
```

### Constraints

- `1 <= num.length <= 10`
- `num` consists of digits only
- `-2^31 <= target <= 2^31 - 1`

## Hints

### Hint 1

Each gap has a small menu: keep extending the current operand by one more
digit, or close it and continue with one of the three operators. Enumerate
the whole menu recursively and you enumerate every expression.

### Hint 2

Building all the strings first and evaluating each at the end repeats work.
What numbers could travel down the recursion so that a leaf is settled by
one comparison?

### Hint 3

Multiplication does not combine with the running total — it rewrites only
the operand immediately before it. Carrying that trailing operand's value
separately from the accumulated total is what makes `'*'` correct.

### Hint 4

Once an operand starts with `'0'`, only the single-digit `0` can follow:
every longer split has a leading zero and can be pruned on the spot.
