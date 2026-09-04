# The First Digit-Product Match II

## Description

This is the larger-scale companion to "The First Digit-Product Match", with
two twists: the number arrives as a string long enough to dwarf any
machine integer, and the answer is forbidden from containing the digit `0`
— a zero digit would multiply the whole product down to `0`, which would
make divisibility trivial.

Call a number **zero-free** when none of its digits is `0`. You are given a
string `num` holding the decimal digits of a positive integer (no leading
zeros), and an integer `t`. Return the smallest zero-free number that is
at least `num` and whose digit product — the product of its digits — is
divisible by `t`, as a string. If no such number exists, return `"-1"`.

### Example 1

```text
Input: num = "48", t = 10
Output: "52"
Explanation: 4*8 = 32 and 4*9 = 36 both lack a factor of 5; 50 is not
zero-free; 5*1 = 5 still lacks a factor of 2. Then 5*2 = 10 is divisible
by 10, so the answer is "52".
```

### Example 2

```text
Input: num = "777", t = 22
Output: "-1"
Explanation: t = 22 = 2 * 11. A digit product can only ever carry the
primes 2, 3, 5 and 7 — the factor 11 can never appear, so no candidate
qualifies.
```

### Example 3

```text
Input: num = "9999999999", t = 1024
Output: "11111112888"
Explanation: Climbing past the ten 9s crosses into eleven digits, and the
first zero-free eleven-digit number whose digit product carries 2^10 is
11111112888, whose product is 2 * 8 * 8 * 8 = 1024.
```

### Constraints

- `2 <= num.length <= 2 * 10^5`
- `num` consists only of digits in the range `['0', '9']`.
- `num` does not contain leading zeros.
- `1 <= t <= 10^14`

### Hints

- A digit product only ever carries the primes 2, 3, 5 and 7 — if `t` has
  any other prime factor, the request is impossible.
- Decide how far from the end the answer first departs from `num`, then
  think about what the shortest remaining suffix must supply.
- Build the replacement suffix greedily: the smallest digit that still
  leaves the uncovered part of `t` reachable.
