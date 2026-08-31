# Distinct Window-Flip Outcomes

## Description

You are given a binary string `s` and a positive integer `k`.

In one move you may choose any contiguous block of exactly `k` characters
of `s` and flip every bit in it — changing each `0` to `1` and each `1` to
`0`. You may perform the move any number of times, including zero.

Return the number of distinct strings that can be produced this way. Since
the answer may be very large, return it modulo `10⁹ + 7`.

A binary string is one made only of the characters `0` and `1`.

### Example 1

```text
Input: s = "0110", k = 3
Output: 4
Explanation: There are 4 - 3 + 1 = 2 possible windows, starting at
positions 0 and 1, and each may be flipped independently:
- Flip nothing: 0110.
- Flip positions 0-2: 1000.
- Flip positions 1-3: 0001.
- Flip both windows: 1111.
No other string is reachable, so the answer is 4.
```

### Example 2

```text
Input: s = "0101", k = 4
Output: 2
Explanation: The only size-4 window is the whole string, so the only
choices are to leave it as 0101 or flip every bit to 1010. The answer is 2.
```

### Example 3

```text
Input: s = "000", k = 1
Output: 8
Explanation: Each of the three single-character windows is flipped or not,
independently, giving 2³ = 8 distinct strings — every length-3 binary
string is reachable.
```

### Constraints

- `1 <= k <= s.length <= 10⁵`
- `s[i]` is either `0` or `1`.

## Hints

### Hint 1

The answer depends only on the length of `s`, not on which bits it holds,
because the reachable set is the same for every string of a given length.

### Hint 2

There are `n - k + 1` possible windows, and flipping each one is an
independent yes/no choice.

### Hint 3

Different choices of which windows to flip always lead to different
strings, so the count is exactly `2^(n - k + 1)`, computed modulo
`10⁹ + 7`.
