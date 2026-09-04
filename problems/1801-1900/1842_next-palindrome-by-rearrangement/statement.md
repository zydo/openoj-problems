# Next Palindrome By Rearrangement

## Description

You are given a string `num` of digits, guaranteed to be a palindrome.
Rearrange its digits however you like and produce the _smallest_
palindrome that is strictly larger than `num` as a number. When no
rearrangement of the digits forms a larger palindrome, return the empty
string `""`.

A palindrome reads identically forward and backward.

### Example 1

```text
Input: num = "213312"
Output: "231132"
Explanation: Rearranging the same digits, "231132" is the smallest
palindrome beyond "213312".
```

### Example 2

```text
Input: num = "1234321"
Output: "1324231"
Explanation: The digits may be reshuffled into "1324231", and no smaller
palindromic rearrangement exceeds "1234321".
```

### Example 3

```text
Input: num = "11211"
Output: ""
Explanation: Every rearrangement of these digits that is a palindrome is
at most "11211" itself, so the answer is empty.
```

### Constraints

- `1 <= num.length <= 10⁵`
- `num` is a palindrome.

## Hints

### Hint 1

A palindrome is pinned down by its first half alone — could changing one
digit of that half already force the next palindrome?

### Hint 2

Treat the first `floor(n/2)` digits as their own sequence and find its
next permutation; the middle digit (odd lengths) never moves.
