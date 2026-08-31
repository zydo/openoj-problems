# Single Set Bit

## Description

Given an integer `n`, determine whether it is an exact power of two,
returning `true` if so and `false` otherwise.

`n` is a power of two exactly when some integer `x` satisfies
`n == 2ˣ` — equivalently, when its binary representation has exactly
one bit set.

### Example 1

```text
Input: n = 64
Output: true
Explanation: 2⁶ = 64
```

### Example 2

```text
Input: n = 1024
Output: true
Explanation: 2¹⁰ = 1024
```

### Example 3

```text
Input: n = 18
Output: false
```

### Constraints

- `-2³¹ <= n <= 2³¹ - 1`

### Follow-up

Could you solve it without loops/recursion?
