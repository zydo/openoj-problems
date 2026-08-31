# Divisible Placements

## Description

You have the integers `1` through `n`, and `n` numbered slots to put them in.
Line the integers up into the slots, one integer per slot, so that every
integer is used exactly once — this is an arrangement of `1..n`.

Call an arrangement **divisible** when, for every slot `i` (1-indexed), the
integer sitting in slot `i` is a multiple of `i`, or `i` is a multiple of the
integer sitting in slot `i` (at least one of the two must hold; both may).

Given `n`, return how many divisible arrangements exist.

### Example 1

```text
Input: n = 3
Output: 3
Explanation:
The divisible arrangements are [1,2,3], [2,1,3], and [3,2,1]:
    - [1,2,3]: slot 1 holds 1 (a multiple of everything), slot 2 holds 2
      (2 is a multiple of 2), slot 3 holds 3 (3 is a multiple of 3).
    - [2,1,3]: slot 1 holds 2 (any integer is a multiple of 1), slot 2
      holds 1 (2 is a multiple of 1), slot 3 holds 3 (3 is a multiple of 3).
    - [3,2,1]: slot 1 holds 3, slot 2 holds 2, slot 3 holds 1 (3 is a
      multiple of 1).
    [1,3,2] and [2,3,1] both put 3 in slot 2, and neither 3 nor 2 divides
    the other, so they fail. [3,1,2] puts 2 in slot 3, which fails the same
    way.
```

### Example 2

```text
Input: n = 1
Output: 1
Explanation: The single arrangement [1] trivially satisfies the rule: 1 is
a multiple of 1.
```

### Example 3

```text
Input: n = 6
Output: 36
Explanation: Thirty-six of the 720 orderings of 1 through 6 satisfy the
divisibility rule at every slot.
```

### Constraints

- `1 <= n <= 15`
