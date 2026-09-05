# Palindromic In Every Base

## Description

Call an integer `n` base-agnostic if, for every base `b` from `2`
through `n - 2`, the digits of `n` written in base `b` read the same
forwards and backwards. Given `n`, report whether it earns that label.

A string of digits is a palindrome when reversing it leaves it
unchanged.

Return `true` if `n` is palindromic in every such base, and `false`
otherwise.

### Example 1

Input: n = 6
Output: false
Explanation: The bases to satisfy run from 2 to 4. Base 4 already
fails: the value 6 is written `12` there, which does not read the same
backward.

### Example 2

Input: n = 11
Output: false
Explanation: The bases run from 2 to 9, and base 9 writes 11 as `12`.

### Example 3

Input: n = 100000
Output: false
Explanation: In base 99998 the value is, once more, the two digits
`12`.

### Constraints

- `4 <= n <= 10⁵`

## Hints

### Hint 1

Examine the very top of the base range, `b = n - 2`.

### Hint 2

Because `n = (n - 2) + 2`, the base-`(n - 2)` digits of `n` are
exactly `12` — never a palindrome — so no input can answer true.
