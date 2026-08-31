# Base-Four Power Test

## Description

Given a signed 32-bit integer `n`, decide whether it can be written as a
nonnegative integer power of four. In other words, return `true` exactly
when there is an integer `x >= 0` for which `n = 4ˣ`; otherwise return
`false`.

### Example 1

```text
Input: n = 64
Output: true
Explanation: 64 = 4³.
```

### Example 2

```text
Input: n = 12
Output: false
Explanation: No nonnegative power of four equals 12.
```

### Example 3

```text
Input: n = 1
Output: true
Explanation: 1 = 4⁰.
```

### Constraints

- `-2³¹ <= n <= 2³¹ - 1`

### Follow-up

Can you make the decision without using a loop or recursion?
