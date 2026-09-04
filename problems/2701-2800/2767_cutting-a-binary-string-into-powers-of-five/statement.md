# Cutting A Binary String Into Powers Of Five

## Description

You are given a binary string `s`. Cut it into one or more contiguous
pieces such that every piece is tidy. A piece is tidy when:

- it contains no leading zero, and
- its bit pattern is the binary representation of a power of `5`.

Return the fewest cuts — equivalently, the smallest number of pieces —
in any such partition. If `s` cannot be split into tidy pieces, return
`-1`.

A substring is a contiguous sequence of characters in a string.

### Example 1

```text
Input: s = "11001"
Output: 1
Explanation: The whole string is already tidy: "11001" is 5² = 25
written in binary, with no leading zero. One piece suffices.
```

### Example 2

```text
Input: s = "110011"
Output: 2
Explanation: Cut it into ["11001", "1"].
- "11001" has no leading zero and reads 5² = 25 in binary.
- "1" has no leading zero and reads 5⁰ = 1 in binary.
No single piece covers the whole string, so 2 is the minimum.
```

### Example 3

```text
Input: s = "100"
Output: -1
Explanation: "100" itself reads 4, not a power of 5; cutting off the
leading "1" leaves "00", which starts with a zero; "10" reads 2. No
partition into tidy pieces exists.
```

### Constraints

- `1 <= s.length <= 15`
- `s[i]` is either `'0'` or `'1'`.

## Hints

### Hint 1

To test whether a value is a power of `5`, keep dividing by `5` while
the value is greater than `1` and divisible by `5`; you land on `1`
exactly when the value was a power of `5`.

### Hint 2

The string is at most `15` characters, so trying every way to place the
next cut — recursion or a small table over suffixes — is cheap.
