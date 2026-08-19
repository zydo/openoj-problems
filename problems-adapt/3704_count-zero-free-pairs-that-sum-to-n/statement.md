# Count Zero-Free Pairs That Sum to N

## Description

A positive integer is *zero-free* when the digit `0` appears nowhere in its
decimal representation: `7`, `24`, and `915` are zero-free, while `30`, `406`,
and `1002` are not.

Given an integer `n`, count the ordered pairs `(a, b)` in which both members
are zero-free and `a + b = n`. The two orders count separately — `(2, 11)` and
`(11, 2)` are different pairs.

Return the count, taken modulo `10^9 + 7` since it grows quickly with `n`.

### Example 1

```text
Input: n = 6
Output: 5
Explanation: The pairs are (1, 5), (2, 4), (3, 3), (4, 2), and (5, 1). Equal
members are allowed, and so is either order.
```

### Example 2

```text
Input: n = 13
Output: 10
Explanation: The splits {4, 9}, {5, 8}, and {6, 7} contribute two pairs each,
and {1, 12} and {2, 11} add four more. The split {3, 10} contributes nothing
because 10 contains the digit 0.
```

### Example 3

```text
Input: n = 21
Output: 16
Explanation: The splits (2, 19), (3, 18), (4, 17), (5, 16), (6, 15), (7, 14),
(8, 13), and (9, 12) all work, as do their reverses — sixteen pairs. Splits
such as (1, 20) and (10, 11) fail because 20 and 10 contain the digit 0.
```

### Constraints

- `2 <= n <= 10^15`

## Hints

### Hint 1

Write the addition in columns. Once the digits of `a` and `b` are fixed for a
column, the digit of `n` there determines what the carry must produce, and the
overflow becomes the carry for the next column up.

### Hint 2

Walk the columns from the most significant end, keeping a state of (incoming
carry, whether `a` has started, whether `b` has started). A number still on its
leading zeros must emit 0; once it has started it may never emit 0 again, and
at the units column a 0 digit is refused outright for both numbers.

### Hint 3

One extra leading column beyond the top digit of `n` lets you require that the
final carry dies there. Accumulate the pair counts column by column, modulo
`10^9 + 7`.
